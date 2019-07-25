import React, {Component} from 'react';
import DefaultFooter from "./DefaultFooter";
import items from './items'

class DefaultFooterContainer extends Component {
    render() {
        return (
            <DefaultFooter instagramImages={items}/>
        );
    }
}

export default DefaultFooterContainer;