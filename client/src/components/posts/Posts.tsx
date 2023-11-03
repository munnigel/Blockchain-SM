import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store'; // Assuming your store is in the same directory
import Post from '../post/Post';
import './posts.scss';

const Posts: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts);

  // Sort posts in descending order based on timestamp
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
});


  return (
    <div className="posts">
        {
            sortedPosts.map(post => (
                <Post post={post} key={post.id} />
            ))
        }
    </div>
  );
}

export default Posts;
