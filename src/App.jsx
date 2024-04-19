import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";
import AddSong from "./pages/AddSong";
import Login from "./pages/Login";

import * as nearAPI from "near-api-js";
import { HiOutlineLogin } from "react-icons/hi";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  const { connect, keyStores, WalletConnection } = nearAPI;

  // creates keyStore using private key in local storage
  const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();

  // Connecting to NEAR
  // Testnet
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

  // Creating a near connection
  const [nearConnection, setNearConnection] = useState();
  useEffect(() => {
    connect(connectionConfig).then((result) => {
      // console.log(result);
      setWallet(new WalletConnection(result, "testnet"));
      setNearConnection(result);
    });
  }, []);

  return (
    <div className="relative flex h-screen">
      <Sidebar wallet={wallet} />
      <div className="flex-1 flex flex-col pt-6 bg-gray-800">
        {/* <Searchbar /> */}

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            {wallet && wallet.isSignedIn() ? (
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
                <Route path="/add-song" element={<AddSong />} />
              </Routes>
            ) : (
              <>
                <h1 className="text-2xl text-white text-left mt-8">
                  Please connect your NEAR Wallet to get access to this page
                </h1>
                <div
                  onClick={() => {
                    wallet && wallet.requestSignIn({});
                  }}
                  className="bg-gray-200 py-3 px-4 rounded flex flex-row justify-center items-center my-8 text-sm font-medium text-gray-400 cursor-pointer hover:text-cyan-400"
                >
                  <HiOutlineLogin className="w-6 h-6 mr-2" />
                  Sign In
                </div>
              </>
            )}
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup  bg-[#93c654] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
