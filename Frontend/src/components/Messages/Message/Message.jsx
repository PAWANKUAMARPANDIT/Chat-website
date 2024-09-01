import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="flex justify-end p-0 mt-1 mx-[5%]">
          <p className="flex items-center text-gray-500 font-sans pr-2.5">{trimmedName}</p>
          <div className="inline-block bg-blue-500 text-white rounded-xl p-1.5 px-5 max-w-[80%]">
            <p className="w-full text-base break-words">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="flex justify-start p-0 mt-1 mx-[5%]">
            <div className="inline-block bg-gray-200 text-gray-800 rounded-xl p-1.5 px-5 max-w-[80%]">
              <p className="w-full text-base break-words">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="flex items-center text-gray-500 font-sans pl-2.5">{user}</p>
          </div>
        )
  );
}

export default Message;
