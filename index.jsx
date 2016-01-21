import 'bootstrap/dist/css/bootstrap.min.css';
import './index.html';
import React from 'react';
import {render} from 'react-dom';

import {Vis} from './app/Vis';

export class App extends React.Component {
	render() {
		return (
			<Vis />
		);
	}
}

render(<App/>, document.querySelector("#app"));
