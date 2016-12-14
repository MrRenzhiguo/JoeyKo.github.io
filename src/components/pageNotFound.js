import React from 'react';
import { Link } from 'react-router';

export default class PageNoteFound extends React.Component {

	render() {
		return(
			<div className="pageNotFound">
				<h1>Page Not Found</h1>
				<p>Go to <Link to="/">Home Page</Link></p>
			</div>
		)
	}
}