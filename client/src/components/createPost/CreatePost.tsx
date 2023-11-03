import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../store/postSlice';  // Adjust the import path to your postsSlice
import './CreatePost.scss';

interface RootState {
  posts: {
    id: number;
    name: string;
    userId: number;
    profilePic: string;
    description: string;
    image: string;
  }[];
}

const CreatePost: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.posts);

    const [postContent, setPostContent] = useState<string>('');

    const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(event.target.value);
    }

    const handleShare = () => {
        // Create a new post object
        const newPost = {
            id: posts.length + 1, // This is a simple way to generate a new ID. In a real-world scenario, you might want a more robust method.
            name: "Anastasia Sh.",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: postContent,
            image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        };

        // Dispatch the addPost action with the new post
        dispatch(addPost(newPost));

        // Clear the post content after sharing
        setPostContent('');
    }

    return (
        <div className="create-post-container">
            <textarea
                placeholder="What are you thinking?"
                value={postContent}
                onChange={handlePostChange}
            />
            <button onClick={handleShare}>Share</button>
        </div>
    );
}

export default CreatePost;
