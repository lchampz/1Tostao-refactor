import React, { useEffect } from "react";
import Administracao from "../components/organims/Admin";
import Footer from "../components/organims/Footer/Footer";
const Admin = () => {
  useEffect(() => {
    document.title = "1Tostão | Admin";
  });

  return (
    <>
      <Administracao />
      <Footer />
    </>
  );
};

export default Admin;
