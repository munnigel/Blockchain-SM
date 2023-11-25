import React from 'react';
import './profile.scss';
import { useContext, useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
// import { RootState } from '../../store'; // Path to your Redux store
import Post from '../../components/post/Post';
import { useParams } from 'react-router-dom';
import CachedProfilesAndPostsContext from '../../contexts/CachedProfilesAndPostsContext/CachedProfilesAndPostsContext'
// import EthersContext from '../../contexts/EthersContext/EthersContext'
import { SocialNetworkProfile } from '../../types/SocialNetworkProfile'
import { fetchPostsOfProfile } from '../../utils/social-network-profile-data';
import { SocialNetworkPost } from '../../types/SocialNetworkPost';

const ProfilePage: React.FC = () => {
  const { address } = useParams();

  // const posts = useSelector((state: RootState) => state.posts);

  // // We select the profile from the Redux store. This assumes you have the current
  // // user's profile at state.account and other profiles possibly stored elsewhere.
  // const currentUserProfile = useSelector((state: RootState) => state.account);
  // const isCurrentUser = name === currentUserProfile.name;

  // // Now select the profile based on the "name" parameter. Adjust this as necessary
  // // to suit your actual state structure, especially if you store other users' profiles
  // // in a different part of the state.
  // const profile = isCurrentUser
  //   ? currentUserProfile
  //   : useSelector((state: RootState) => state.profiles.find((profile) => profile.name === name));

  // Guard against the profile not being found.
  const isMounted = useRef(false);
  const [profile, setProfile] = useState<null | SocialNetworkProfile>(null);
  const [postsData, setPostsData] = useState<(SocialNetworkPost | null)[]>([])
  const { getProfile, getProfileFromCache, refetchAll, getPost } = useContext(
    CachedProfilesAndPostsContext
  );

  // profile may timeout periodically
  const initProfile = async (address: string) => {
    const profile = await getProfile(address, true);
    console.log(profile);
    if (profile) {
      setProfile(profile)
    }
  };

  const getAllUsersPosts = async (address: string) => {
    // TODO: add ability to fetch next 10
    // Get first 10 post contract addresses from the profile contract, this is stored as a list
    const postsAddresses = await fetchPostsOfProfile(address, 0, 10)

    // Get post data and set to a list
    for (let key in postsAddresses?.items) {
      let postData = await getPost(postsAddresses.items[key])
      console.log(postData)
      setPostsData((prev) => [...prev, postData]);
    }
  }

  useEffect( () => {
    if (!address) return;
    if (!isMounted.current) isMounted.current = true;
    else return;

    initProfile(address);
    getAllUsersPosts(address)
  }, [address]);

  return (
    <div className="profile-page-container">
      <header className="profile-header">
        <div className="cover-photo" style={{ backgroundImage: `url(${profile?.backgroundImage[0].url})` }}>
        </div>
        <div className="profile-info">
          <img src={profile?.profileImage[0].url} alt={`${profile?.name}`} className="profile-picture" />
          <div className="profile-details">
            <h1 className="profile-name">{profile?.name}</h1>
            <div className="profile-stats">
              <span>{profile?.socialProfileStats?.subscribers} Followers</span> - <span>{profile?.socialProfileStats?.subscriptions} Following</span>
            </div>
            {/* {!isCurrentUser && (
              <button className="friend-button">Friend</button>
            )} */}
          </div>
        </div>
      </header>
      <div className="profile-content">
        {postsData.map((post) => (
          <Post key={post?.address} post={{
            address: post?.address,
            profilePic: profile?.profileImage[0].url,
            userId: post?.author,
            description: post?.content,
            name: profile?.name,
            likes: post?.likes,
            comments: post?.comments,
            timestamp: post?.timestamp,
            image: post?.image
          }}/> // TODO: implement image and timestamp key props
        ))}
      </div>
    </div>

  );
};

export default ProfilePage;