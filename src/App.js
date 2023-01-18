import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Photos from './pages/photos';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/kittens-website' element={<Home />} />
		<Route path='/kittens-website/about' element={<About/>} />
		<Route path='/kittens-website/contact' element={<Contact/>} />
		<Route path='/kittens-website/blogs' element={<Blogs/>} />
		<Route path='/kittens-website/sign-up' element={<SignUp/>} />
    <Route path='/kittens-website/photos' element={<Photos/>} />
	</Routes>
	</Router>
);
}

export default App;
