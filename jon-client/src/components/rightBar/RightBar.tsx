import "./rightBar.scss";
import CachedProfilesAndPostsContext from "../../contexts/CachedProfilesAndPostsContext/CachedProfilesAndPostsContext";
import { useContext, useEffect, useState } from "react";
import { AddressToSocialNetworkProfileMapping } from "../../types/AddressToSocialNetworkProfileMapping";

const RightBar = () => {
  const { getAllProfilesFromCache, refetchAll } = useContext(CachedProfilesAndPostsContext)
  const [profiles, setProfiles] = useState<AddressToSocialNetworkProfileMapping>()

  const fetchAllProfiles = async () => {
    await refetchAll()
    const profilesFetched = await getAllProfilesFromCache()
    if (profilesFetched !== null) {
      setProfiles(profilesFetched);
    } else {
      setProfiles(undefined);
    }
    console.log(profiles)
  }



  useEffect(() => {
    fetchAllProfiles().then(() => console.log(profiles))
  }, )
  return (
    <div className="rightBar">
      <div className="rightBar__container">
        <div className="rightBar__container__item">
          <span className="rightBar__container__item__title">
            Suggestions For You
          </span>
          {/* {profiles? &&
            Object.keys(profiles).forEach(address => (

            ))
          } */}
            <div className="rightBar__container__item__user">
              <div className="rightBar__container__item__user__userInfo">
                <img
                  className="rightBar__container__item__user__userInfo__userimage"
                  src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span className="rightBar__container__item__user__userInfo__username">
                  Loren Nahshon
                </span>
              </div>
              <div className="rightBar__container__item__user__buttons">
                <button className="rightBar__container__item__user__buttons__followBtn">
                  follow
                </button>
              </div>
            </div>

        </div>
        {/* <div className="rightBar__container__item">
          <span className="rightBar__container__item__title">
            Latest Activities
          </span>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p className="rightBar__container__item__user__userInfo__p">
                <span className="rightBar__container__item__user__userInfo__username">
                  Loren Nahshon
                </span>{" "}
                changed their cover picture
              </p>
            </div>
            <span className="rightBar__container__item__user__timeActivity">
              1 min ago
            </span>
          </div>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p className="rightBar__container__item__user__userInfo__p">
                <span className="rightBar__container__item__user__userInfo__username">
                  Loren Nahshon
                </span>{" "}
                changed their cover picture
              </p>
            </div>
            <span className="rightBar__container__item__user__timeActivity">
              1 min ago
            </span>
          </div>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p className="rightBar__container__item__user__userInfo__p">
                <span className="rightBar__container__item__user__userInfo__username">
                  Loren Nahshon
                </span>{" "}
                changed their cover picture
              </p>
            </div>
            <span className="rightBar__container__item__user__timeActivity">
              1 min ago
            </span>
          </div>
        </div>
        <div className="rightBar__container__item">
          <span className="rightBar__container__item__title">
            Online Friends
          </span>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="rightBar__container__item__user__userInfo__online" />
              <span className="rightBar__container__item__user__userInfo__username">
                Loren Nahshon
              </span>
            </div>
          </div>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="rightBar__container__item__user__userInfo__online" />
              <span className="rightBar__container__item__user__userInfo__username">
                Loren Nahshon
              </span>
            </div>
          </div>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="rightBar__container__item__user__userInfo__online" />
              <span className="rightBar__container__item__user__userInfo__username">
                Loren Nahshon
              </span>
            </div>
          </div>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="rightBar__container__item__user__userInfo__online" />
              <span className="rightBar__container__item__user__userInfo__username">
                Loren Nahshon
              </span>
            </div>
          </div>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="rightBar__container__item__user__userInfo__online" />
              <span className="rightBar__container__item__user__userInfo__username">
                Loren Nahshon
              </span>
            </div>
          </div>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="rightBar__container__item__user__userInfo__online" />
              <span className="rightBar__container__item__user__userInfo__username">
                Loren Nahshon
              </span>
            </div>
          </div>
          <div className="rightBar__container__item__user">
            <div className="rightBar__container__item__user__userInfo">
              <img
                className="rightBar__container__item__user__userInfo__userimage"
                src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="rightBar__container__item__user__userInfo__online" />
              <span className="rightBar__container__item__user__userInfo__username">
                Loren Nahshon
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RightBar;
