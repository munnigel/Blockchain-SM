import "./stories.scss"

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Anastasia Sh.",
      image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    {
      id: 2,
      name: "Guilherme Al.",
      image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    {
      id: 3,
      name: "Eric Jo.",
      image: "https://images.pexels.com/photos/6652959/pexels-photo-6652959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    {
      id: 4,
      name: "Anna Sh.",
      image: "https://images.pexels.com/photos/3851914/pexels-photo-3851914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
  ]
  return (
    <div className="stories">
      {
        stories.map(story => (
          <div className="stories__story" key={story.id}>
            <img
              className="stories__story__image"
              src={story.image} 
              alt="" 
            />
            <span className="stories__story__username">{story.name}</span>
            <button className="stories__story__btn">+</button>
          </div>
        ))
      }
    </div>
  )
}

export default Stories