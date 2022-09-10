
import React from 'react';


function Header(props) {
    const { currentTab, setCurrentTab } = props

    return (
        <header>
            <div>
                <h1>Macy Mannix React Portfolio</h1>
            </div>
            <div>
                <Nav/>
            </div>
        </header>
    );
}

export default Header;