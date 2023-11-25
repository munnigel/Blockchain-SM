import "./comments.scss"

const Comments = () => {
    //Temporary
    const comments = [
        {
        id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
        name: "Anastasia Sh.",
        userId: 1,
        profilePicture:
            "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
        name: "Guilherme Al.",
        userId: 2,
        profilePicture:
            "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];
    return (
        <div className="comments">
            <div className="comments__write">
                <img 
                    className="comments__write__profilePic"
                    src=""
                    alt="" 
                />
                <input 
                    className="comments__write__input"
                    type="text" 
                    placeholder="write a comment" 
                />
                <button className="comments__write__btn">Send</button>
            </div>
            {
                comments.map(comment => (
                    <div className="comments__comment">
                        <img 
                            className="comments__comment__profilePic"
                            src={comment.profilePicture} 
                            alt="" 
                        />
                        <div className="comments__comment__info">
                            <span className="comments__comment__info__name">{comment.name}</span>
                            <p className="comments__comment__info__p">{comment.desc}</p>
                        </div>
                        <span className="comments__comment__date">1 hour ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments