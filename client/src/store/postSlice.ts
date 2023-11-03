import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Post type
export interface Post {
  id: number;
  name: string;
  userId: number;
  profilePic: string;
  description: string;
  image: string;
  timestamp: string;
}

// Define the initial state with the posts you provided
const initialState: Post[] = [
  {
    id: 1,
    name: "Anastasia Sh.",
    userId: 1,
    profilePic: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    timestamp: "2021-08-31T16:30:00.000Z"
  },
  {
    id: 2,
    name: "Anastasia Sh.",
    userId: 1,
    profilePic: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    timestamp: "2021-08-31T16:30:00.000Z"
  },
  {
    id: 3,
    name: "Anastasia Sh.",
    userId: 1,
    profilePic: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    timestamp: "2021-08-31T16:30:00.000Z"
  },
  {
    id: 4,
    name: "Anastasia Sh.",
    userId: 1,
    profilePic: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    timestamp: "2021-08-31T16:30:00.000Z"
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      return action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      // Add a timestamp to the new post
      const newPost = {
        ...action.payload,
        timestamp: new Date().toISOString()
      };
      state.push(newPost);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      return state.filter(post => post.id !== action.payload);
    },
  },
});

export const { setPosts, addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
