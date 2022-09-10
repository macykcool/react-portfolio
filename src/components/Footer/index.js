import React from 'react';

function Footer() {
    return (
        <footer className="center">
            <div>
                <a href='https://github.com/macykcool' target='_blank'>
                <img src={require('../../assets/images/github.png')} alt='Github' style={{ height: 50, width: 50}}></img>
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/macy-mannix-281827101/' target='_blank'>
                <img src={require('../../assets/images/linkedIn.jpg')} alt='LinkedIn' style={{ height: 50, width: 50}}></img>
                </a>
            </div>
 
        </footer>
    );
}

export default Footer;