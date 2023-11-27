import React, { useCallback } from "react";
import { toast } from "react-toastify";
import "./profile.scss";
import { useContext, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
// import { RootState } from '../../store'; // Path to your Redux store
import Post from "../../components/post/Post";
import { useParams } from "react-router-dom";
import CachedProfilesAndPostsContext from "../../contexts/CachedProfilesAndPostsContext/CachedProfilesAndPostsContext";
import EthersContext from "../../contexts/EthersContext/EthersContext";
import { SocialNetworkProfile } from "../../types/SocialNetworkProfile";
import { fetchPostsOfProfile } from "../../utils/social-network-profile-data";
import { SocialNetworkPost } from "../../types/SocialNetworkPost";
import { SocialNetwork } from "../../utils/social-network";

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
  const [postsData, setPostsData] = useState<(SocialNetworkPost | null)[]>([]);

  const { provider, universalProfile } = useContext(EthersContext);
  const [isSubscribed, setIsSubscribed] = useState<null | boolean>(null);

  const validate =
    provider &&
    universalProfile?.socialNetworkProfileDataContract &&
    universalProfile?.socialNetworkProfileDataERC725Contract &&
    profile?.socialProfileStats &&
    profile.address !== universalProfile.address;

  const { getProfile, getPost } = useContext(CachedProfilesAndPostsContext);

  const refetch = useCallback(() => initProfile(address ?? ""), [address]);

  const fetchSubscriptionStatus = async () => {
    if (!validate) return;
    try {
      const b = await universalProfile?.socialNetworkProfileDataContract?.isSubscriberOf(profile.address)
      setIsSubscribed(b)
      console.log(b, "BBBBBB")
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchSubscriptionStatus();
  }, [universalProfile, isSubscribed]);

  const subscribe = async () => {
    if (!validate) return;
    if (
      await universalProfile?.socialNetworkProfileDataContract?.isSubscriberOf(
        profile.address
      )
    ) {
      setIsSubscribed(true);
      return;
    }

    const tx = await SocialNetwork.connect(provider.getSigner()).subscribeUser(
      profile.address
    );
    const promise = tx.wait()
    toast.promise(promise, {
      pending: `Following User...`,
      success: `Successfully Followed...`,
      error: `Following user failed. (Probably no LYXe available.)`,
    });
    await fetchSubscriptionStatus();
    setIsSubscribed(true);
    await refetch()
  };

  const unsubscribe = async () => {
    if (!validate) return;
    if (
      !(await universalProfile?.socialNetworkProfileDataContract?.isSubscriberOf(
        profile.address
      ))
    ) {
      await fetchSubscriptionStatus();
      setIsSubscribed(false);
      return;
    }

    const tx = await SocialNetwork.connect(
      provider.getSigner()
    ).unsubscribeUser(profile.address);
    const promise = tx.wait()
    toast.promise(promise, {
      pending: `Unfollowing User...`,
      success: `Successfully unfollowed...`,
      error: `Unfollowing user failed. (Probably no LYXe available.)`,
    });
    setIsSubscribed(false);
    await refetch();
  };

  // profile may timeout periodically
  const initProfile = async (address: string) => {
    const profile = await getProfile(address, true);
    console.log(profile);
    if (profile) {
      setProfile(profile);
    }
  };

  const getAllUsersPosts = async (address: string) => {
    // TODO: add ability to fetch next 10
    // Get first 10 post contract addresses from the profile contract, this is stored as a list
    const postsAddresses = await fetchPostsOfProfile(address, 0, 10);

    // Get post data and set to a list
    for (let key in postsAddresses?.items) {
      let postData = await getPost(postsAddresses.items[key]);
      console.log(postData);
      setPostsData((prev) => [...prev, postData]);
    }
  };

  useEffect(() => {
    if (!address) return;
    if (!isMounted.current) isMounted.current = true;
    else return;

    initProfile(address);
    getAllUsersPosts(address);
  }, [address]);

  return (
    <div className="profile-page-container">
      <header className="profile-header">
        <div
          className="cover-photo"
          style={{
            backgroundImage: `url(${profile?.backgroundImage?.[0]?.url})` ?? "",
          }}
        ></div>
        <div className="profile-info">
          <img
            src={
              profile?.profileImage?.[0]?.url ??
              "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
            alt={`${profile?.name}`}
            className="profile-picture"
          />
          <div className="profile-details">
            <h1 className="profile-name">{profile?.name}</h1>
            <div className="profile-stats">
              {/* TODO: Subscribe button */}
              <span>
                {profile?.socialProfileStats?.subscribers} Followers
              </span>{" "}
              -{" "}
              <span>
                {profile?.socialProfileStats?.subscriptions} Following
              </span>
            </div>
            {/* {!isCurrentUser && (
              <button className="friend-button">Friend</button>
            )} */}

            {!isSubscribed ? (
              <button className="friend-button" onClick={subscribe}>
                Follow
              </button>
            ) : (
              <button className="friend-button" onClick={unsubscribe}>
                Unfollow
              </button>
            )}
          </div>
        </div>
      </header>
      <div className="profile-content">
        {postsData.map((post) => (
          <Post
            key={post?.address}
            post={{
              address: post?.address,
              profilePic:
                post?.profileImage?.[0]?.url ??
                "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
              userId: post?.author,
              content: post?.content,
              profileName: post?.profileName,
              likes: post?.likes,
              comments: post?.comments,
              timestamp: post?.timestamp,
              image: post?.image,
            }}
          /> // TODO: implement image and timestamp key props
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
