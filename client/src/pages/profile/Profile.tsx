import React from 'react';
import './profile.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store'; // Path to your Redux store
import Post from '../../components/post/Post';
import { useParams } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const posts = useSelector((state: RootState) => state.posts);

  // We select the profile from the Redux store. This assumes you have the current
  // user's profile at state.account and other profiles possibly stored elsewhere.
  const currentUserProfile = useSelector((state: RootState) => state.account);
  const isCurrentUser = name === currentUserProfile.name;

  // Now select the profile based on the "name" parameter. Adjust this as necessary
  // to suit your actual state structure, especially if you store other users' profiles
  // in a different part of the state.
  const profile = isCurrentUser
    ? currentUserProfile
    : useSelector((state: RootState) => state.profiles.find((profile) => profile.name === name));

  // Guard against the profile not being found.
  if (!profile) {
    return <p>Profile not found.</p>;
  }

  const personalPosts = posts.filter((post) => post.userId === profile.id);

  return (
    <div className="profile-page-container">
      <header className="profile-header">
        <div className="cover-photo" style={{ backgroundImage: `"https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"` }}>
        </div>
        <div className="profile-info">
          <img src={profile.profilePic} alt={`${profile.name}`} className="profile-picture" />
          <div className="profile-details">
            <h1 className="profile-name">{profile.name}</h1>
            <div className="profile-stats">
              <span>Followers</span> - <span>Following</span>
            </div>
            {!isCurrentUser && (
              <button className="friend-button">Friend</button>
            )}
          </div>
        </div>
      </header>
      <main className="profile-content">
        {personalPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

export default ProfilePage;
