import React, {Component} from 'react';
import DefaultNavbar from "./DefaultNavbar";
import routes from '../../../routes';
class DefaultNavbarContainer extends Component {

    render() {
        return (
            <DefaultNavbar links={routes}/>
        );
    }
}

export default DefaultNavbarContainer;