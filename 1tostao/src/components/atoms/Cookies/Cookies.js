import React from "react";

import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const Cookies = () => {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Aceitar"
        cookieName="Cookies1Tostão"
        declineButtonText="Recusar"
        declineButtonStyle={{
          border: "3px solid #24D39A",
          backgroundColor: "#fff",
          color: "#24D39A",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
        onAccept={getCookieConsentValue}
        style={{
          background: "#fff",
          height: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
          fontSize: "1.1rem",
        }}
        buttonStyle={{
          color: "#fff",
          border: "3px solid #24D39A",
          backgroundColor: "#24D39A",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
        enableDeclineButton
        expires={150}
      >
        Nós armazenamos dados temporariamente para melhorar a sua experiência de
        navegação e recomendar conteúdo de seu interesse. Ao utilizar nossos
        serviços, você concorda com tal monitoramento.{" "}
      </CookieConsent>
    </>
  );
};

export default Cookies;
