import {
  FavoriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

import Page from "./Page";

export default function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavoriteProvider>
            <Page />
          </FavoriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}
