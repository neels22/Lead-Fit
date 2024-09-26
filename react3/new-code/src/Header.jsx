import React from "react";

const Header = React.memo(function Header(props) {
  return (
    <div>
      Hi there, {props.title}
    </div>
  );
});

export default Header;
