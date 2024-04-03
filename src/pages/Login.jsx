import React, { useEffect, useState } from "react";
// https://docs.near.org/tools/near-api-js/quick-reference
import * as nearAPI from "near-api-js";

function Login() {
  const { connect, keyStores, WalletConnection } = nearAPI;

  // creates keyStore using private key in local storage
  const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();

  // Connecting to NEAR
  const connectionConfig = {
    networkId: "testnet",
    keyStore: myKeyStore, // first create a key store
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://testnet.mynearwallet.com/",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://testnet.nearblocks.io",
  };

  // Creating a new wallet instance
  const [wallet, setWallet] = useState();

  // // connect to NEAR
  // // const nearConnection = connect(connectionConfig);
  // Creating a near connection
  const [nearConnection, setNearConnection] = useState();
  useEffect(()=>{
    connect(connectionConfig).then((result) => {
      console.log(result);
      setWallet(new WalletConnection(result, 'testnet'))
      setNearConnection(result);
    }).then(()=>{console.log(nearConnection);});
  }, [])




  function log() {
    // setWallet(new WalletConnection(nearConnection, "testnet"));
    // const wallet = new WalletConnection(nearConnection, "testnet");
    wallet.requestSignIn({});
  }

  function logout() {
    // setWallet(new WalletConnection(nearConnection, "testnet"));
    wallet.signOut();
    console.log(wallet.isSignedIn());
  }

  return (
    <div>
      <h1 className="font-bold text-3xl text-white text-left">Login</h1>
        <p onClick={() => console.log(wallet.account())} className="font-bold text-3xl text-white text-left">{wallet && wallet.isSignedIn()? wallet.getAccountId(): 'No wallet'}</p>
      <button
        onClick={logout}
        className="align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        LogOut
      </button>
      <button
        onClick={log}
        className="align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Log
      </button>
      {/* {wallet && JSON.stringify(wallet.account())} */}
    </div>
  );
}

export default Login;
