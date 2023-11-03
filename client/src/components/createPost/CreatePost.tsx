import React, { useState } from 'react';
import './CreatePost.scss';

const CreatePost: React.FC = () => {
    const [postContent, setPostContent] = useState<string>('');

    const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(event.target.value);
    }

    const handleShare = () => {
        // Logic to share the post goes here
        console.log(postContent);
        setPostContent(''); // Clear the post content after sharing
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
