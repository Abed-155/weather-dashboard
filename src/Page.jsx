import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

import clearSkyImg from "./assets/backgrounds/clear-sky.jpg";
import fewCloudImg from "./assets/backgrounds/few-clouds.jpg";
import mistImg from "./assets/backgrounds/mist.jpeg";
import rainyDayImg from "./assets/backgrounds/rainy-day.jpg";
import scatteredCloudImg from "./assets/backgrounds/scattered-clouds.jpg";
import snowImg from "./assets/backgrounds/snow.jpg";
import thunderStormImg from "./assets/backgrounds/thunderstorm.jpg";
import winterImg from "./assets/backgrounds/winter.jpg";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImg, setClimateImg] = useState("");

  const getBgImg = (climate) => {
    switch (climate) {
      case "Rain":
        return rainyDayImg;
      case "Clouds":
        return scatteredCloudImg;
      case "Clear":
        return clearSkyImg;
      case "Snow":
        return snowImg;
      case "Thunder":
        return thunderStormImg;
      case "Fog":
        return winterImg;
      case "Haze":
        return fewCloudImg;
      case "Mist":
        return mistImg;
      default:
        clearSkyImg;
    }
  };

  useEffect(() => {
    const bgImg = getBgImg(weatherData.climate);
    setClimateImg(bgImg);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="bg-grey-200 w-96 mt-4 m-auto p-4">
          <p className="text-3xl">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImg}')` }}
          className="bg-no-repeat bg-cover h-screen"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
