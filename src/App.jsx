import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Importing Coffee ChatBot
// import ChatWindow from './components/chatbot/ChatWindow'; // Import from Chat folder
import ChatInput from './components/chatbot/ChatInput';
import ChatSidebar from './components/chatbot/ChatSidebar';
import ChatButton from './components/chatbot/ChatButton';
import ChatSystem from './components/chatbot/ChatSystem';

//Importing Components
import Home from './components/home/Homepage';
import Navigation from './components/navigation/Navbar';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import Menu from './components/menu/JavaMenu';
import Blog from './components/blog/Blog';
import OurMenu from './components/ourmenu/OurMenu';

function App() {
  //UseStates
  const [showChatSystem, setShowChatSystem] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleChatButtonClick = () => {
    setShowChatSystem(true);
  };

  const handleCloseChat = () => {
    setShowChatSystem(false);
  };

  const handleSendMessage = (text) => {
    setMessages([...messages, { sender: 'Me', text }]);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/ourmenu' element={<OurMenu />} />
          <Route path='/JavaMenu' element={<Menu />} />
        </Routes>
      </Router>

      <div className='app'>
        {!showChatSystem && <ChatButton onClick={handleChatButtonClick} />}
        {showChatSystem && <ChatSystem messages={messages} onSendMessage={handleSendMessage} onClose={handleCloseChat} />}
      </div>
    </>
  );
}

export default App;
