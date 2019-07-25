import React, {Component} from 'react';
import Slider from "./Slider";
import items from './items';

class SliderContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex:0
        }
    }

    onExiting = ()=> {
        this.animating = true;
    };

    onExited = ()=> {
        this.animating = false;
    };

    next= ()=> {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    };

    previous = ()=> {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    };

    goToIndex= newIndex => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    };
    render() {
        return (
            <div>
                <Slider
                    activeIndex={this.state.activeIndex}
                    items={items}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    next={this.next}
                    previous={this.previous}
                    goToIndex={this.goToIndex}
                />
            </div>
        );
    }
}

export default SliderContainer;