import React from "react";

import { Connection, programs } from "@metaplex/js";
import { useWallet } from "@solana/wallet-adapter-react";
import {
    WalletDisconnectButton,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import { actions } from "@metaplex/js";

const connection = new Connection("devnet");
const tokenPublicKey = "Gz3vYbpsB2agTsAwedtvtTkQ1CG9vsioqLW3r9ecNpvZ";

export default function App() {
    const wallet = useWallet();

    React.useEffect(() => {
        const getMetadata = async () => {
            const ownedMetadata = await programs.metadata.Metadata.load(
                connection,
                tokenPublicKey
            );
            console.log(ownedMetadata);
        };
        getMetadata();
    }, []);

    const onClick = async (e) => {
        e.preventDefault();
        if (wallet) {
            console.log(wallet.publicKey);
            const response = await actions.mintNFT(
                connection,
                wallet,
                "https://arweave.net/APnrDX2KUusunMAH8dz7Dq5UfbiJKDTrOYT2-PNMuDw",
                1
            );
            console.log(response);
        }
    };

    return (
        <nav>
            <h1>Solana Starter App</h1>
            <div>
                {wallet.connected ? (
                    <WalletDisconnectButton />
                ) : (
                    <WalletMultiButton />
                )}
            </div>
            <button onClick={onClick}>Mint </button>
        </nav>
    );
}
