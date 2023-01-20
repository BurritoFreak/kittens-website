import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Links from './pages/links';
import Contact from './pages/contact';
import Photos from './pages/photos';
import NotFoundPage from './pages/notFoundPage';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route exact path='/about' element={<About/>} />
		<Route exact path='/contact' element={<Contact/>} />
		<Route exact path='/links' element={<Links/>} />
		<Route exact path='/photos' element={<Photos/>} />
		<Route path ='*' element={<NotFoundPage/>} />
	</Routes>
	</Router>
);
}

export default App;
