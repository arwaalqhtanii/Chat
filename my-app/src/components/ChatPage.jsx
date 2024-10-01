


import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatWindow from './ChatWindow';

const ChatPage = () => {
  const location = useLocation();
  const { user1, user2 } = location.state;
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (sender, text) => {
    const newMessage = { sender, text, timestamp: new Date().toLocaleTimeString() };
    setMessages([...messages, newMessage]); 
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
   
        <ChatWindow
          user={user1}
          messages={messages}
          onSendMessage={handleSendMessage}
          currentUser={user1} 
          otherUser={user2} 
          bubbleColor="bg-[#128C7E]" 
          borderColor="border-green-500"
        />
     
        <ChatWindow
          user={user2}
          messages={messages}
          onSendMessage={handleSendMessage}
          currentUser={user2} 
          otherUser={user1} 
          bubbleColor="bg-[#2A2F32]" 
          borderColor="border-gray-500"
        />
      </div>
    </div>
  );
};

export default ChatPage;



