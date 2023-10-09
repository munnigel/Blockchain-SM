import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBar__container">
        <div className="rightBar__container__item">
          <span className="rightBar__container__item__title">Suggestions For You</span>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img 
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="" 
              />
              <span className="rightBar__container__item__user__userInfo__username">Loren Doe</span>
            </div>
            <div className="rightBar__container__item__user__buttons">
              <button className="rightBar__container__item__user__buttons__followBtn">follow</button>
              <button className="rightBar__container__item__user__buttons__dismissBtn">dismiss</button>
            </div>
          </div>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img 
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="" 
              />
              <span className="rightBar__container__item__user__userInfo__username">Loren Doe</span>
            </div>
            <div className="rightBar__container__item__user__buttons">
              <button className="rightBar__container__item__user__buttons__followBtn">follow</button>
              <button className="rightBar__container__item__user__buttons__dismissBtn">dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar