import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Wallets.css";
import OneWallet from "./OneWallet";
import { AllUserWallets, getProfile } from "../../actions/UserActions";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Wallets({ AllUserWallets, getProfile, usuarioConectado, wallets }) {
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (usuarioConectado.id) {
      AllUserWallets(usuarioConectado.id);
    }
  }, [usuarioConectado]);

  const volver = function (e) {
    window.location.replace("http://localhost:3000/cliente");
  };

  return (
    <Container id="walletcont">
      <Image
        id="headerwallet"
        src="https://fotos.subefotos.com/f78db8cb014fb4404b3378076937f80eo.png"
      ></Image>
      <div className="onewalletdiv">
        {wallets &&
          wallets.map((e) => (
            <OneWallet
              key={e.id}
              type={e.type}
              currency={e.currency}
              balance={e.balance}
              created={e.created}
            />
          ))}
      </div>

      <Button onClick={volver} className="goback">
        {" "}
        Volver
      </Button>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    wallets: state.usuario.wallets,
    usuarioConectado: state.usuario.usuarioConectado,
  };
}

export default connect(mapStateToProps, { getProfile, AllUserWallets })(
  Wallets
);
