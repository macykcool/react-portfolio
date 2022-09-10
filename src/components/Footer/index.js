import React from 'react';

function Footer() {
    return (
        <footer className="center">
            <div>
                <a href='https://github.com/macykcool' target='_blank'>
                <img src={require('')} alt='Github' style={{ height: 50, width: 50}}></img>
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com' target='_blank'>
                <img src={require('')} alt='LinkedIn' style={{ height: 50, width: 50}}></img>
                </a>
            </div>
            <div>
                <a href='' target='_blank'>
                <img src={require('')} alt='' style={{ height: 50, width: 50}}></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;