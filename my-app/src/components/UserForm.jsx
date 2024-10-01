
import { useState } from 'react';
import ChatWindow from './ChatWindow';

const UserForm = () => {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleStartChat = () => {
    if (user1 && user2) {
      setChatStarted(true);
    }
  };

  const handleSendMessage = (sender, text) => {
    setMessages([...messages, { sender, text }]);
  };

  return (
    <div className="min-h-screen bg-slate-500 flex items-center justify-center p-4">
      {!chatStarted ? (
        <div className="p-10 bg-gray-100 rounded-xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Start a New Chat</h2>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter first username"
              value={user1}
              onChange={(e) => setUser1(e.target.value)}
              className="p-3 w-full border border-gray-400 rounded-md bg-white text-gray-800 focus:outline-none focus:border-[#128C7E]"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter second username"
              value={user2}
              onChange={(e) => setUser2(e.target.value)}
              className="p-3 w-full border border-gray-400 rounded-md bg-white text-gray-800 focus:outline-none focus:border-[#128C7E]"
            />
          </div>
          <button
            onClick={handleStartChat}
            className="bg-[#128C7E] hover:bg-green-700 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold transition-all duration-300 ease-in-out"
          >
            Start Chatting
          </button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
          <ChatWindow
            user={user1}
            messages={messages}
            onSendMessage={handleSendMessage}
            bubbleColor="bg-[#128C7E]"
          />
          <ChatWindow
            user={user2}
            messages={messages}
            onSendMessage={handleSendMessage}
            bubbleColor="bg-gray-800"
          />
        </div>
      )}
    </div>
  );
};

export default UserForm;

