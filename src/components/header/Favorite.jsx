/* eslint-disable react/prop-types */
import heartIcon from "../../assets/heart.svg";

function Favorite({ onShow }) {
  return (
    <div
      onClick={onShow}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    >
      <img src={heartIcon} alt="" />
      <span className="text-sm md:text-lg">Favorites Location</span>
    </div>
  );
}

export default Favorite;
