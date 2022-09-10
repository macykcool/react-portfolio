import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { currentTab, setCurrentTab } = props

    return (
        <header>
            <div>
                <h1>Macy's React Portfolio</h1>
            </div>
            <div>
                <Nav currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </div>
        </header>
    );
}

export default Header;