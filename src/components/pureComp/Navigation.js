/**
 * Created by John on 2016/12/1.
 */
import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: 0};
    }


    handleMenuClick(index) {
        this.setState({focused:index});

    }

    render() {
        const items =  ['Home', 'Services', 'About', 'Contact us'];
        let self = this;
        return(
            <div className="nav">
                <ul>{ items.map(function(m, index){
                    let style = '';
                    if(self.state.focused === index){
                        style = 'focused';
                    }
                    // Notice the use of the bind() method.
                    // It makes the index available to the clicked function:
                    return <li key={m} className={style} onClick={self.handleMenuClick.bind(self,index)}>{m}</li>;
                }) }

                </ul>
                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );
    }
}

export default Navigation;
