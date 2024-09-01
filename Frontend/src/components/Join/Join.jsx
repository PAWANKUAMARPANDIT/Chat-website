import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-1/3 max-w-xs text-center">
        <h1 className="text-white text-2xl border-b-2 border-white mb-4">Join</h1>
        <div>
          <input 
            placeholder="Name" 
            className="w-full p-2 text-sm mb-4 border border-gray-300 rounded" 
            type="text" 
            onChange={(event) => setName(event.target.value)} 
          />
        </div>
        <div>
          <input 
            placeholder="Room" 
            className="w-full p-2 text-sm mb-4 border border-gray-300 rounded" 
            type="text" 
            onChange={(event) => setRoom(event.target.value)} 
          />
        </div>
        <Link 
          onClick={e => (!name || !room) ? e.preventDefault() : null} 
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

