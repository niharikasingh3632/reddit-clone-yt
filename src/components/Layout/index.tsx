import React from "react";
import { ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar";
import AuthModal from "../Modal/Auth";

interface Layout {
  children?: ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;

