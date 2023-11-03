import Posts from "../../components/posts/Posts"
import CreatePost from "../../components/createPost/CreatePost"

import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <CreatePost/>
      <Posts/>
    </div>
  )
}

export default Home