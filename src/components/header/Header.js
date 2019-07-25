import React, {Component} from 'react';
import Navbar from './navbar';
import Slider from './slider';
class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Slider/>
            </React.Fragment>
        );
    }
}

export default Header;