import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

class Slider extends Component {
    render() {
        const {items, onExiting, onExited, activeIndex, next, previous, goToIndex} = this.props;
        const slides = items.map(item => {
            return(
                <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} width="100%" height="400px" />
                    <CarouselCaption
                        captionText={item.altText}
                        captionHeader={item.caption}
                    />
                </CarouselItem>
            )
        });
        return (
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        );
    }
}

Slider.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onExiting: PropTypes.func.isRequired,
  onExited: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};
export default Slider;