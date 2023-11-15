import PropTypes from "prop-types";
import { Api } from "./Api.jsx";
import { Outlet } from "react-router-dom";
import {Header, Footer} from ".";

export const Layout = ({ baseURL }) => {
  return (
    <Api baseURL={baseURL}>
      <Header />
      <Outlet />
      <Footer />
    </Api>
  );
};

Layout.propTypes = {
  baseURL: PropTypes.string,
};
