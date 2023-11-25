import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { formatTimestamp } from '../../utils/dateUtils';

import "./post.scss"
import Comments from '../comments/Comments';

interface Props{
    post: any
}

const Post: React.FC<Props> = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false)

    //TEMPORARY
    const liked = false

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
                            <span className="post__container__user__userInfo__details__name">{post.name}</span>
                        </Link>
                        <span className="post__container__user__userInfo__details__date">{formatTimestamp(post.timestamp)}</span>
                    </div>
                </div>
                <MoreHorizIcon/>
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
                    {
                        liked ? <ThumbDownOutlinedIcon/> : <ThumbUpAltOutlinedIcon/>
                    }
                    {post.likes} Likes
                </div>
                <div className="post__container__info__item" onClick={() => setCommentOpen(!commentOpen)}>
                    <TextsmsOutlinedIcon/>
                    {post.comments} Comments
                </div>
                <div className="post__container__info__item">
                    <ShareOutlinedIcon/>
                    Share
                </div>
            </div>
            {
                commentOpen && <Comments/>
            }
        </div>
    </div>
  )
}

export default Post
