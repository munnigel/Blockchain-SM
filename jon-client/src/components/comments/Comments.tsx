import { toast } from "react-toastify";
import "./comments.scss";
import { useState, useContext, useEffect } from "react";

import { commentPost } from "../../utils/social-network-post";
import EthersContext from "../../contexts/EthersContext/EthersContext";
import CachedProfilesAndPostsContext from "../../contexts/CachedProfilesAndPostsContext/CachedProfilesAndPostsContext";

import { fetchCommentsOfPost } from "../../utils/social-network-post";

import { SocialNetworkPost } from "../../types/SocialNetworkPost";

interface Props {
  post: any;
}

const Comments: React.FC<Props> = ({ post }) => {
    const [content, setContent] = useState("");
    const [comments, setComments] = useState<(SocialNetworkPost | null)[]>([])
    // const [comments, setComments] = useState([]);
    const { provider, universalProfile } = useContext(EthersContext);
    const { getPost } = useContext(
        CachedProfilesAndPostsContext
      );
  //Temporary
//   const comments = [
//     {
//       id: 1,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
//       name: "Anastasia Sh.",
//       userId: 1,
//       profilePicture:
//         "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//     {
//       id: 2,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
//       name: "Guilherme Al.",
//       userId: 2,
//       profilePicture:
//         "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//   ];

  const authenticated =
      provider &&
      universalProfile?.socialNetworkProfileDataContract &&
      universalProfile?.socialNetworkProfileDataERC725Contract &&
      universalProfile?.socialProfileStats;

  const sendComment = async () => {
    if (!authenticated) return;
    if (content.length === 0) return;

    const promise = commentPost(provider, content, post.address);
    toast.promise(promise, {
      pending: `Commenting post...`,
      success: `Successfully commented post...`,
      error: `Commenting post failed. (Probably no LYXe available.)`,
    });
    try {
        await promise;
        setContent("");
    } catch (e) {
      console.error(e);
    }
  };

  const getComments = async () => {
    const page = await fetchCommentsOfPost(post.address, 0, 10)
    console.log(page?.items) // returns me a dict {1: "0xisjiesfo"}
    if (page?.items) {
        const addresses = Object.values(page.items);
        const posts = await Promise.all(addresses.map(address => getPost(address)));
        setComments(posts)
      }
  }

    useEffect(() => {
        getComments();

    }, []);


  return (
    <div className="comments">
      <div className="comments__write">
        <img className="comments__write__profilePic" src={universalProfile?.profileImage?.[0].url ?? "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} />
        <input
          className="comments__write__input"
          type="text"
          placeholder="Write a comment..."
        onChange={(e) => setContent(e.target.value)}
        />
        <button className="comments__write__btn" onClick={sendComment}>
          Send
        </button>
      </div>
      {comments.map((comment) => (
        <div className="comments__comment">
          <img
            className="comments__comment__profilePic"
            src={comment?.profileImage?.[0].url}
            alt=""
          />
          <div className="comments__comment__info">
            <span className="comments__comment__info__name">
              {comment?.profileName}
            </span>
            <p className="comments__comment__info__p">{comment?.content}</p>
          </div>
          {/* <span className="comments__comment__date">1 hour ago</span> */}
        </div>
      ))}
    </div>
  );
};

export default Comments;
