import image from "../assets/ekb.jpg";

type Props = {
  numberPlace: number;
};
export const OnePlaceComponent = ({ numberPlace }: Props) => {
  return (
    <>
      <div className="onePlaceInRoutsDiv">
        <div className="numberPlaceDiv">
          <div className="circleNumberDiv">
            <p>{numberPlace}</p>
          </div>
        </div>
        <div className="infoPlaceDiv">
          <div className="headerInfoPlaceDiv">
            <p className="headerInfoPlaceText">Header</p>
          </div>
          <div className="imageInfoPlaceDiv">
            <img src={image} className="imageStyle" alt="фото" />
          </div>
        </div>
      </div>
    </>
  );
};
