import React from 'react';
import '../styles/NotFound.scss';


const NotFound = () => {
    return (
        <div className="container">
            <div className="wrapper" data-text="Error 404">
                <h1 className='glitch'>Error 404</h1>                
            </div>         
                <p>Sorry we can't find your page</p>
        </div>
          
    );
}

export default NotFound;