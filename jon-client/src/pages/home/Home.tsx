import Posts from "../../components/posts/Posts"
import CreatePost from "../../components/createPost/CreatePost"
import ConnectUniversalProfileButton from "../../components/ConnectUniversalProfileButton"

import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <ConnectUniversalProfileButton/>
      <CreatePost/>
      <Posts/>
    </div>
  )
}

export default Home