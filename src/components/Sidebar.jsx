import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup, HiOutlinePlusSm, HiOutlineLogin, HiOutlineLogout } from 'react-icons/hi';
import { RiCloseLine, RiRocket2Line } from 'react-icons/ri';
import { logo } from '../assets';

const links = [
  { name: 'Home', to: '/', icon: RiRocket2Line },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Add Song', to: '/add-song', icon: HiOutlinePlusSm },
  // { name: 'Login', to: '', icon: HiOutlineLogin },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-3">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-3 p-4 rounded-r text-sm font-medium text-gray-300 transition-all duration-300 ease-out hover:text-gray-900 hover:bg-[#93c654]" // flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400
        
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = ({ wallet }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 bg-[#454451]">{/* md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624] */}
        <img src={logo} alt="logo" className="w-full h-20 object-contain drop-shadow-lg" />
        <h1 className="text-2xl text-white text-left mx-4 mt-8">{wallet && wallet.isSignedIn()? wallet.getAccountId(): 'No wallet'}</h1>
        <NavLinks />
        <hr  className="m-2 bg-black"/>
        {wallet && wallet.isSignedIn() ? (
          <div
            onClick={() => {
              wallet && wallet.signOut()
              location.reload()
            }}
            className="flex flex-row justify-start items-center my-8 mx-2 text-sm font-medium text-gray-300 cursor-pointer hover:text-cyan-400"
          >
            <HiOutlineLogout className="w-6 h-6 mr-2" />
            Sign Out
          </div>
        ) : (
          <div
            onClick={() => {
              wallet && wallet.requestSignIn({})
            }}
            className="flex flex-row justify-start items-center my-8 mx-2 text-sm font-medium text-gray-300 cursor-pointer hover:text-cyan-400"
          >
            <HiOutlineLogin className="w-6 h-6 mr-2" />
            Sign In
          </div>
        )}
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3 z-50">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 py-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <h1 className="text-2xl mx-4 text-white text-left mt-8">{wallet && wallet.isSignedIn()? wallet.getAccountId(): 'No wallet'}</h1>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        <hr className=''/>
        {wallet && wallet.isSignedIn() ? (
          <div
            onClick={() => {
              wallet && wallet.signOut()
              location.reload()
            }}
            className="flex flex-row justify-start items-center my-8 mx-2 text-sm font-medium text-gray-300 cursor-pointer hover:text-cyan-400"
          >
            <HiOutlineLogout className="w-6 h-6 mr-2" />
            Sign Out
          </div>
        ) : (
          <div
            onClick={() => {
              wallet && wallet.requestSignIn({})
            }}
            className="flex flex-row justify-start items-center my-8 mx-2 text-sm font-medium text-gray-300 cursor-pointer hover:text-cyan-400"
          >
            <HiOutlineLogin className="w-6 h-6 mr-2" />
            Sign In
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
