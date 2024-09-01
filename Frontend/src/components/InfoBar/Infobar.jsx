import React from 'react';

import onlineIcon from '../../Icon/onlineIcon.png';
import closeIcon from '../../Icon/closeIcon.png';

const InfoBar = ({ room }) => (
  <div className="flex items-center justify-between bg-blue-500 rounded-t h-15 w-full">
    <div className="flex items-center flex-1 ml-5 text-white">
      <img className="mr-5" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="flex justify-end flex-1 mr-5">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
