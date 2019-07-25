import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Navbar,
    NavItem,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
} from 'reactstrap';
import {Link} from "react-router-dom";
import logo from '../../../assets/images/logo.png'

class DefaultNavbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div className="default-navbar">
                <Navbar light expand="md">
                    <NavbarBrand href="/">
                        <img
                            src={logo}
                            alt="logo"
                            height="100px"
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mx-auto" navbar>
                            {
                                this.props.links.map((link, index) => {
                                    return(
                                        <NavItem key={index}>
                                            <Link className="mx-2" to={link.path}>{link.name}</Link>
                                        </NavItem>
                                    )
                                })
                            }

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

DefaultNavbar.propTypes = {
    links: PropTypes.array.isRequired
};

export default DefaultNavbar;