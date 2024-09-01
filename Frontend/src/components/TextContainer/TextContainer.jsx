import React from 'react';
import onlineIcon from '../../Icon/onlineIcon.png';

const TextContainer = ({ users }) => (
  <div className="flex flex-col ml-24 text-white h-3/5 justify-between hidden md:flex">
    <div>
      <h1 className="mb-0">Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="flex items-center mb-20">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="flex items-center">
                    {name}
                    <img className="pl-2" alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
