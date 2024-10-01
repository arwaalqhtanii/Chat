

import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const ChatWindow = ({ user, messages, onSendMessage, bubbleColor, currentUser }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);


  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      onSendMessage(currentUser, message, timestamp);
      setMessage(''); 
      scrollToBottom();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 bg-white shadow-md rounded-lg">
            <div className="flex flex-col w-full h-[700px] border border-gray-300 rounded-xl shadow-lg bg-white">

            
              <div className="bg-[#128C7E] text-white p-4 rounded-t-xl flex items-center space-x-4 sticky top-0 z-10">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <h2 className="text-lg font-bold">{user}</h2>
                  <p className="text-sm">last seen at 6:57 am</p>
                </div>
              </div>

      
              <div
                className="flex-1 bg-white p-4 overflow-y-auto"
                style={{
                  maxHeight: 'calc(100vh - 160px)',
                  backgroundImage: `url('https://i.pinimg.com/474x/94/79/d9/9479d90956cf2b6fe389d4d3da24ee04.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex mb-3 ${msg.sender === currentUser ? 'justify-end' : 'justify-start'}`}
                  >
           
                    {msg.sender !== currentUser ? (
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                        <div
                          className="bg-gray-200 text-gray-900 p-3 rounded-xl shadow-md max-w-xs break-words"
                          style={{ maxWidth: '70%' }}
                        >
                          <div>{msg.text}</div>
                          <div className="text-xs text-gray-500 text-left">{msg.timestamp}</div>
                        </div>
                      </div>
                    ) : (
                  
                      <div className="flex items-end space-x-2 justify-end">
                        <div
                          className={`${bubbleColor} text-white p-3 rounded-xl shadow-md max-w-xs break-words`}
                          style={{ maxWidth: '70%' }}
                        >
                          <div>{msg.text}</div>
                          <div className="text-xs text-white text-right">{msg.timestamp}</div>
                        </div>
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                      </div>
                      
                    )}
                    
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

           
              <div className="bg-gray-50 p-3 flex items-center space-x-2 border-t border-gray-300 sticky bottom-0">
                <input
                  type="text"
                  className="flex-1 p-2 bg-white text-gray-900 rounded-full border border-gray-300 focus:outline-none"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="bg-[#128C7E] p-3 rounded-full text-white"
                  onClick={handleSendMessage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10l9 9m0 0l9-9m-9 9V3"
                    />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChatWindow.propTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired,
  bubbleColor: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export default ChatWindow;
