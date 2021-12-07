import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Wallet from "./Wallet";

require("@solana/wallet-adapter-react-ui/styles.css");

ReactDOM.render(
    <React.StrictMode>
        <Wallet />
    </React.StrictMode>,
    document.getElementById("root")
);
