import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../store/postSlice';  // Adjust the import path to your postsSlice
import './CreatePost.scss';
import CreatePostButton from './CreatePostButton';
import { UploadOutlined } from '@ant-design/icons';

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
    const [postImage, setPostImage] = useState<string>('');
    const [postFile, setPostFile] = useState<File>()

    const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(event.target.value);
    };

    // TODO: Post image is going to be work in progress on the smart contract
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            // You can perform image validation here if needed
            const imageFile = event.target.files[0];
            const imageUrl = URL.createObjectURL(imageFile);
            setPostImage(imageUrl);
            setPostFile(imageFile)
        }
    };

    // const handleShare = () => {
    //     // In a real-world app, you'd also want to upload the image to a server
    //     // and get back a URL for the image, instead of directly using a local URL.


    //     // TODO: Modify all of these
    //     const newPost = {
    //         id: posts.length + 1,
    //         name: "Anastasia Sh.",
    //         userId: 1,
    //         profilePic: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         description: postContent,
    //         image: "",
    //         // image: postImage,  // Here you set the image URL
    //         // FIXME: Might want to change the initial addPost
    //         timestamp: Date.now().toString(), // Fix: Convert timestamp to string
    //     };

    //     dispatch(addPost(newPost));

    //     setPostContent('');
    //     // setPostImage('');
    // };

    return (
        <div className="create-post-container">
            <textarea
                placeholder="What are you thinking?"
                value={postContent}
                onChange={handlePostChange}
            />
            {/* TODO: Post image is going to be work in progress on the smart contract */}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}  // Hide the default file input
                id="fileInput"
            />
            {postImage && (
                <div className="image-preview">
                    <img src={postImage} alt="Preview" />
                </div>
            )}
            <label htmlFor="fileInput" className="upload-image-button">
                <UploadOutlined />
            </label>

            {/* <button onClick={handleShare}>Share</button> */}
            <CreatePostButton
                postFile={postFile}
                postContent={postContent}
            />
        </div>
    );
}

export default CreatePost;
