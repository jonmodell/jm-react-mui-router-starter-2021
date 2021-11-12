import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Theme,
} from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  theme: Theme;
}

const StyledToolbar = styled(Toolbar)`
  .navlinks {
    margin-left: ${(props: IProps)  => props?.theme?.spacing(10)}px;
    display: flex;
  }
  .link {
    margin-left: ${(props: IProps)  => props?.theme?.spacing(10)}px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    &:hover {
      color: yellow;
      border-bottom: 1px solid white;
    }
  }
  .logo {
    flex-grow: 1;
    cursor: "pointer";
  }
`;

function NavBar() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <StyledToolbar>
        <Typography variant="h4" className="logo">
          Navbar
        </Typography>
        <div className="navlinks">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
        </div>
      </StyledToolbar>
    </AppBar>
  );
}
export { NavBar };
