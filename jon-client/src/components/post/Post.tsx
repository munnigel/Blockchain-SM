import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { formatTimestamp } from "../../utils/dateUtils";

import "./post.scss";
import Comments from "../comments/Comments";
import LikePostButton from "./LikePostButton";
import CachedProfilesAndPostsContext from "../../contexts/CachedProfilesAndPostsContext/CachedProfilesAndPostsContext";
import EthersContext from "../../contexts/EthersContext/EthersContext";

// Contract
import { SocialNetwork } from "../../utils/social-network";

interface Props {
  post: any;
}

const Post: React.FC<Props> = ({ post }) => {
  const { provider, universalProfile } = useContext(EthersContext);
  const [commentOpen, setCommentOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(post);
  const [hasLiked, setHasLiked] = useState<null | boolean>(null);

  const authenticated =
    provider &&
    universalProfile?.socialNetworkProfileDataContract &&
    universalProfile?.socialNetworkProfileDataERC725Contract &&
    universalProfile?.socialProfileStats &&
    // true;
    post.userId.toLowerCase() !== universalProfile?.address.toLowerCase();

  const fetchLikeStatus = async () => {
    if (!authenticated) return;
    try {
      setHasLiked(
        await universalProfile?.socialNetworkProfileDataContract?.hasLiked(
          post.address
        )
      );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchLikeStatus();
  }, [universalProfile]);

  const { getPost } = useContext(CachedProfilesAndPostsContext);

  // NOTE: Users can't like their own post.
  const handleLike = async () => {
    // console.log(universalProfile)
    // console.log(provider)
    // console.log(post)
    // console.log(authenticated);
    if (!authenticated) return;
    if (
      await universalProfile?.socialNetworkProfileDataContract?.hasLiked(
        post.address
      )
    ) {
      setHasLiked(true);
      return;
    }

    const tx = await SocialNetwork.connect(provider.getSigner()).likePost(
      post.address
    );
    await tx.wait();
    setHasLiked(true);
    // await onChange();
  };

  const handleDislike = async () => {
    if (!authenticated) return;
    if (
      !(await universalProfile?.socialNetworkProfileDataContract?.hasLiked(
        post.address
      ))
    ) {
      setHasLiked(false);
      return;
    }

    const tx = await SocialNetwork.connect(provider.getSigner()).unlikePost(
      post.address
    );
    await tx.wait();
    setHasLiked(false);
    // await onChange();
  };

  const refetchPost = async () =>
    currentPost.address
      ? setCurrentPost(await getPost(currentPost.address, true))
      : null;

  return (
    <div className="post">
      <div className="post__container">
        <div className="post__container__user">
          <div className="post__container__user__userInfo">
            <img
              className="post__container__user__userInfo__profilePic"
              src={post.profilePic}
              alt=""
            />
            <div className="post__container__user__userInfo__details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="post__container__user__userInfo__details__name">
                  {post.name}
                </span>
              </Link>
              <span className="post__container__user__userInfo__details__date">
                {formatTimestamp(post.timestamp)}
              </span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="post__container__content">
          <p className="post__container__content__p">{post.description}</p>
          <img
            className="post__container__content__image"
            src={post.image}
            alt=""
          />
        </div>
        <div className="post__container__info">
          <div className="post__container__info__item">
            {hasLiked ? (
              <ThumbDownOutlinedIcon onClick={handleDislike} />
            ) : (
              <ThumbUpAltOutlinedIcon onClick={handleLike} />
            )}
            {/* <LikePostButton post={post} onChange={refetchPost}/> */}
            {post.likes} Likes
          </div>
          <div
            className="post__container__info__item"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <TextsmsOutlinedIcon />
            {post.comments} Comments
          </div>
        </div>
        {commentOpen && <Comments post={post}/>}
      </div>
    </div>
  );
};

export default Post;
