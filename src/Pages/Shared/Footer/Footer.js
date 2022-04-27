import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-success p-5'>
            <p><small>copyright Wild Photographer @ {year} </small></p>
        </footer>
    );
};

export default Footer;