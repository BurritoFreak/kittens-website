import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, Navigate}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Links from './pages/links';
import Contact from './pages/contact';
import Photos from './pages/photos';
import TestPage from './pages/testPage';
import BurgerMenu from './components/BurgerMenu/burger';

function App() {

return (
	<>
	<Router>
	<Navbar />
	<BurgerMenu />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route exact path='/about' element={<About/>} />
		<Route exact path='/contact' element={<Contact/>} />
		<Route exact path='/links' element={<Links/>} />
		<Route exact path='/photos' element={<Photos/>} />
		<Route exact path='/test' element={<TestPage/>} />
		<Route path='*' element={<Navigate to="/" />} />
	</Routes>
	</Router>
	</>
	);
}


export default App;
