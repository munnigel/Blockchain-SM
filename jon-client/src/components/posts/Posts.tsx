import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { RootState } from '../../store';
import Post from "../post/Post";
import "./posts.scss";

import CachedProfilesAndPostsContext from "../../contexts/CachedProfilesAndPostsContext/CachedProfilesAndPostsContext";
import EthersContext from "../../contexts/EthersContext/EthersContext";
import { SocialNetwork } from "../../utils/social-network";

import { Page } from "../PagedList/PagedList.d";
import type { SocialNetworkPost } from "../../types/SocialNetworkPost";

// Helper
import _ from "lodash";

const Posts: React.FC = () => {
  // const posts = useSelector((state: RootState) => state.posts); // redux
  const [posts, setPosts] = useState<(SocialNetworkPost | null)[]>([]);
  const { getPost } = useContext(CachedProfilesAndPostsContext);

  const getBlockBuzzPosts = async () => {
    // get all posts in the blockbuzz dapp
  };


  const fetchPostAddresses = async (): Promise<null | Page<string>> => {
    const page: Page<string> = {
      totalItemCount: 0,
      itemCount: 0,
      items: {},
    };
    try {
      const eventFilter = SocialNetwork.filters.UserCreatedPost();
      const events = await SocialNetwork.queryFilter(eventFilter);
      page.items = _.reverse(
        events.map((event) => event?.args?.newPost).filter((address) => address)
      ).reduce(
        (items, item, index) => ({
          ...items,
          [(index + 1).toString()]: item, // increment by 1 since 0 is sentinel value
        }),
        {}
      );
      page.itemCount = page.totalItemCount = Object.keys(page.items).length;
    } catch (e) {
      console.error(e);
    }

    return page;
  };

  // run get postsData from addresses
  const getPosts = async () => {
    const page = await fetchPostAddresses()
    if (page?.items) {
        const addresses = Object.values(page.items);
        const postsData = await Promise.all(addresses.map(address => getPost(address)));
        setPosts(postsData)
      }
  }

  useEffect(() => {
    // getPosts()
    // console.log(posts) // TODO: fix these throwing errors when getting posts to show up on users main feed
  }, []);

  // // Sort posts in descending order based on timestamp
  // const sortedPosts = [...posts].sort((a, b) => {
  //   return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  // });

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post?.address} />
      ))}
    </div>
  );
};

export default Posts;
