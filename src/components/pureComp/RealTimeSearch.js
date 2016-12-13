/**
 * Created by John on 2016/12/3.
 * real-time-search
 */

import React from 'react';

class RealTimeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchStr: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({searchStr: e.target.value});
    }

    render() {
        let libraries = [

            {name: 'Backbone.js', url: 'http://backbonejs.org'},
            {name: 'AngularJS', url: 'https://angularjs.org/'},
            {name: 'jQuery', url: 'http://jquery.com/'},
            {name: 'Prototype', url: 'http://www.prototypejs.org/'},
            {name: 'React', url: 'http://facebook.github.io/react/'},
            {name: 'Ember', url: 'http://emberjs.com/'},
            {name: 'Knockout.js', url: 'http://knockoutjs.com/'},
            {name: 'Dojo', url: 'http://dojotoolkit.org/'},
            {name: 'Mootools', url: 'http://mootools.net/'},
            {name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
            {name: 'Lodash', url: 'http://lodash.com/'},
            {name: 'Moment', url: 'http://momentjs.com/'},
            {name: 'Express', url: 'http://expressjs.com/'},
            {name: 'Koa', url: 'http://koajs.com/'},

        ];

        let searchStr = this.state.searchStr.trim().toLowerCase();

        if (searchStr.length > 0) {
            libraries = libraries.filter(l => (
                l.name.toLowerCase().match(searchStr)
            ));
        }
        return (
            <div className="real-search">
                <input type="text" value={this.state.searchStr} onChange={this.handleChange}
                       placeholder="Search What You Want!"/>
                <ul>
                    {
                        libraries.map(l => (
                            <li key={l.name}>{l.name} <a href={l.url}>{l.url}</a></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default RealTimeSearch;