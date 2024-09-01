import React from 'react';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="flex border-t-2 border-gray-300">
    <input
      className="border-none rounded-none p-5 w-4/5 text-lg focus:outline-none"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="text-white uppercase bg-blue-500 p-5 w-1/5 border-none" onClick={e => sendMessage(e)}>Send</button>
  </form>
);

export default Input;
