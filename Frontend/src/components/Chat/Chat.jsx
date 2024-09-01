import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from "socket.io-client";
import InfoBar from "../InfoBar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";

const ENDPOINT = 'http://localhost:5000/';

const Chat = () => {
  const location = useLocation(); 
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    // Initialize socket
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);

    setRoom(room);
    setName(name);

    // Join the room
    newSocket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    // Clean up on unmount
    return () => {
      newSocket.disconnect();
      newSocket.off();
    };
  }, [location.search]);

  useEffect(() => {
    if (!socket) return;

    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // Listen for room data updates
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    // Clean up on unmount
    return () => {
      socket.off('message');
      socket.off('roomData');
    };
  }, [socket]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message && socket) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex flex-col justify-between bg-white rounded-lg h-3/5 w-1/3 md:w-3/5 lg:w-1/2">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;
