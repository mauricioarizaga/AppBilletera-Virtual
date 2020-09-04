import React from "react";
import "./onewallet.css";
import { Row, Col, Container } from "react-bootstrap";

export default function OneWallet(wallet) {
  // a modo de ejemplo :)
  const moneda = {
    Pesos: "$",
    Dolares: "$",
    Euros: "€",
    Libras: "£",
  };

  return (
    <Container id="onewalletcont">
      <div id="onewalletrow">
        <div className="walletcol">
          <h5>{wallet.type}</h5>
        </div>
        <div className="walletcol">
          <h5>{wallet.currency}</h5>
        </div>
        <div className="walletcol">
          <h5>
            {moneda[wallet.currency]}
            {wallet.balance}
          </h5>
        </div>
        <div className="walletcol">
          <h5>{wallet.created}</h5>
        </div>
      </div>
    </Container>
  );
}
