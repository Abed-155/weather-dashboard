import { useState } from "react";
import Favorite from "./Favorite";
import FavoriteListModal from "./FavoriteListModal";
import Logo from "./Logo";
import Search from "./Search";

function Header() {
  const [showFavModal, setShowFavModal] = useState(false);

  return (
    <header className="w-full z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex flex-col md:flex-row items-center justify-between py-6">
        <Logo />
        <div className="flex items-center mt-4 gap-4 relative justify-between">
          <Search />
          <Favorite onShow={() => setShowFavModal(!showFavModal)} />
          {showFavModal && <FavoriteListModal />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
