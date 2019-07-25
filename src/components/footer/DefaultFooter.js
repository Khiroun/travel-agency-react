import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png'
class DefaultFooter extends Component {
    render() {
        const instagramImages = this.props.instagramImages;
        return (
            <Container className="footer">
                <Row>
                    <Col md="3">
                        <img src={logo} alt="logo" />
                        <p>Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae</p>
                        <a href="/">
                            <FontAwesomeIcon icon={faEnvelope} /> khiroun@esi.dz
                        </a>
                        <span>
                            <FontAwesomeIcon icon={faPhone} /> 9809 4562 8765
                        </span>
                    </Col>
                    <Col md="3">

                    </Col>
                    <Col md="3">

                    </Col>
                    <Col md="3" className="my-auto">
                        <h3>Notre Instagram</h3>
                        <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
                        <div>
                            {instagramImages.map(image => {
                                return(
                                    <a
                                        href={image.href}
                                        key={image.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="insta mx-2"
                                    >
                                        <img src={image.thumbnail} alt={image.alt} className="thumbnail"/>
                                    </a>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className="mx-auto">Powered by <span>@Khiroun 2019</span></p>
                </Row>
                </Container>
        );
    }
}
DefaultFooter.propTypes = {
    instagramImages: PropTypes.array.isRequired
};
export default DefaultFooter;