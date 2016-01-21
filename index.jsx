import 'bootstrap/dist/css/bootstrap.min.css';
import './index.html';
import React from 'react';
import {render} from 'react-dom';

import {Vis} from './app/Vis';

export class App extends React.Component {
	render() {
		return (
			<div className={'container'}>
				<br/>
				<div className={'row'}>
					<div className={'col-md-8 col-md-offset-2'}>
						<Vis />
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, document.querySelector("#app"));
