import React, { useEffect } from "react";
import Service from "../components/molecules/ServiceDetail";
import Footer from "../components/organims/Footer/Footer.js";
const ServiceDetail = () => {
  useEffect(() => {
    document.title = "1Tostão | Serviço";
  });

  return (
    <>
      <Service />
      <Footer needMargin/>
    </>
  );
};

export default ServiceDetail;
