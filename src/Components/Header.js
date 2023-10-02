import React from 'react';
import './Components.css';
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
  return (
    <div className='header'>
      <div className='header_icons'>
        <div className='header_icon header_icon--active'>
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className='header_icon'>
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className='header_icon'>
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className='header_icon'>
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className='header_icon'>
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className='header_icon'>
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>

      <img
        src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'
        alt=''
      />
    </div>
  );
}

export default Header;
