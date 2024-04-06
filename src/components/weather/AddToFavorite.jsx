import { useContext, useEffect, useState } from "react";
import redHeartIcon from "../../assets/heart-red.svg";
import heartIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";

function AddToFavorite() {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);

  const { weatherData } = useContext(WeatherContext);

  const [toggleFavorite, setToggleFavorite] = useState(false);

  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setToggleFavorite(found);
  }, []);

  const handleFavorites = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(longitude, latitude, location);
    } else {
      removeFromFavorites(location);
    }

    setToggleFavorite(!toggleFavorite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorites}
        >
          <span>
            {toggleFavorite ? "Remove from Favorite" : "Add to Favourite"}
          </span>
          <img src={toggleFavorite ? redHeartIcon : heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AddToFavorite;
