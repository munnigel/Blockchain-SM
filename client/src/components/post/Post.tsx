import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./post.scss"
import { Link } from "react-router-dom";

interface Props{
    post: any
}

const Post: React.FC<Props> = ({post}) => {

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
                        <span className="post__container__user__userInfo__details__date">1 min ago</span>
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
                    <ThumbUpAltOutlinedIcon/>
                </div>
                <div className="post__container__info__item">
                    <TextsmsOutlinedIcon/>
                </div>
                <div className="post__container__info__item">
                    <ShareOutlinedIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
