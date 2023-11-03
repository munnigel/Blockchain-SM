import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useSelector } from "react-redux";

import "./leftBar.scss"

const LeftBar = () => {
  const name = useSelector((state: any) => state.account.name)
  return (
    <div className="leftBar">
      <div className="leftBar__container">
        <div className="leftBar__container__menu">
          <div className="leftBar__container__menu__user">
            <img 
              className="leftBar__container__menu__user__userimage" 
              src="https://images.pexels.com/photos/4974360/pexels-photo-4974360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
            />
            <span className="leftBar__container__menu__user__username">{name}</span>
          </div>
          <div className="leftBar__container__menu__item">
            <img 
              className="leftBar__container__menu__item__imageItem" 
              src={Friends} 
              alt="" 
            />
            <span className="leftBar__container__menu__item__nameItem">Friends</span>
          </div>
          <div className="leftBar__container__menu__item">
            <img 
              className="leftBar__container__menu__item__imageItem" 
              src={Groups} 
              alt="" 
            />
            <span className="leftBar__container__menu__item__nameItem">Groups</span>
          </div>
          <div className="leftBar__container__menu__item">
            <img 
              className="leftBar__container__menu__item__imageItem" 
              src={Market} 
              alt="" 
            />
            <span className="leftBar__container__menu__item__nameItem">Market</span>
          </div>
          <div className="leftBar__container__menu__item">
            <img 
              className="leftBar__container__menu__item__imageItem" 
              src={Watch} 
              alt="" 
            />
            <span className="leftBar__container__menu__item__nameItem">Watch</span>
          </div>
          <div className="leftBar__container__menu__item">
            <img 
              className="leftBar__container__menu__item__imageItem" 
              src={Memories} 
              alt="" 
            />
            <span className="leftBar__container__menu__item__nameItem">Memories</span>
          </div>
          <hr />
          <div className="leftBar__container__menu">
            <span className="leftBar__container__menu__title">Your shortcuts</span>
            <div className="leftBar__container__menu__item">
              <img 
                className="leftBar__container__menu__item__imageItem" 
                src={Events} 
                alt="" 
              />
              <span className="leftBar__container__menu__item__nameItem">Events</span>
            </div>
            <div className="leftBar__container__menu__item">
              <img 
                className="leftBar__container__menu__item__imageItem" 
                src={Gaming} 
                alt="" 
              />
              <span className="leftBar__container__menu__item__nameItem">Gaming</span>
            </div>
            <div className="leftBar__container__menu__item">
              <img 
                className="leftBar__container__menu__item__imageItem" 
                src={Gallery} 
                alt="" 
              />
              <span className="leftBar__container__menu__item__nameItem">Gallery</span>
            </div>
            <div className="leftBar__container__menu__item">
              <img 
                className="leftBar__container__menu__item__imageItem" 
                src={Videos} 
                alt="" 
              />
              <span className="leftBar__container__menu__item__nameItem">Videos</span>
            </div>
            <div className="leftBar__container__menu__item">
              <img 
                className="leftBar__container__menu__item__imageItem" 
                src={Messages} 
                alt="" 
              />
              <span className="leftBar__container__menu__item__nameItem">Messages</span>
            </div>
          </div>
          <hr />
          <div className="leftBar__container__menu">
            <span className="leftBar__container__menu__title">Others</span>
            <div className="leftBar__container__menu__item">
              <img 
                className="leftBar__container__menu__item__imageItem" 
                src={Fund} 
                alt="" 
              />
              <span className="leftBar__container__menu__item__nameItem">Fund</span>
            </div>
            <div className="leftBar__container__menu__item">
              <img 
                className="leftBar__container__menu__item__imageItem" 
                src={Tutorials} 
                alt="" 
              />
              <span className="leftBar__container__menu__item__nameItem">Tutorials</span>
            </div>
            <div className="leftBar__container__menu__item">
              <img 
                className="leftBar__container__menu__item__imageItem" 
                src={Courses} 
                alt="" 
              />
              <span className="leftBar__container__menu__item__nameItem">Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar