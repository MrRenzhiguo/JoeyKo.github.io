/**
 * 下拉组件
 * Created by John on 2016/11/26.
 */

import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
        this.handleDropDownClick = this.handleDropDownClick.bind(this);
    }

    handleDropDownClick() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        const displayValue = this.state.visible ? 'block' : 'none';
        const links = [
            { name: 'Firefox', url: 'http://www.firefox.com.cn/download/'},
            { name: 'Chrome', url: 'http://www.google.cn/chrome/browser/desktop/'},
            { name: 'Safari', url: 'https://www.apple.com/safari/'},
            { name: 'Opera', url: 'http://www.opera.com/'},
            { name: 'Internet Explorer', url: 'https://www.microsoft.com/zh-cn/download/'},
        ];

        return (
            <div className="dropdown">
                <button className="btn btn-dropdown" onClick={this.handleDropDownClick}>
                    Browsers
                </button>
                <ul style={{display: displayValue}}>
                    {links.map(l=>(
                        <li key={l.name}><a href={l.url}>{l.name}</a></li>
                    ))}
                </ul>
            </div>
        )
    }


}

export default DropDown;