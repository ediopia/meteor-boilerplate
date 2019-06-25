import * as React from "react";

interface MenuBarProps {
	toggleMenuOpen: () => void;
}

const MobileMenuBarButton: React.FC<MenuBarProps> = ({ toggleMenuOpen }) => {
  return (
    <div
      onClick={toggleMenuOpen}
      role="button"
      className="navbar-burger burger"
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default MobileMenuBarButton;
