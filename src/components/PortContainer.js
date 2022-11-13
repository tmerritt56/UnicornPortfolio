import React, {useState} from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Portfolio';

export default function PortContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
const renderPage = () => {
    if(currentPage === 'Home') {
        return <Home/>;
    }
    if(currentPage === 'About') {
        return <About/>;
    }
    if(currentPage === 'Project') {
        return <Project/>;
    }
    return <Contact/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navbar currentPage={currentPage} handlePageChange= {handlePageChange}/>
            {renderPage()}
        </div>
    );
}
