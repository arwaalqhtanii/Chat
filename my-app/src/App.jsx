

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import React from 'react';

// import UserForm from './components/UserForm';
// import ChatPage from './components/ChatPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<UserForm />} />
//         <Route path="/chat" element={<ChatPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserForm from './components/UserForm';
import ChatPage from './components/ChatPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserForm />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;

