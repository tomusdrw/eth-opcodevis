import 'bootstrap/dist/css/bootstrap.min.css';
import './compile.html';
import React from 'react';
import {render} from 'react-dom';

import {Compile} from './app/Compile';

export class CompileApp extends React.Component {
	render() {
		return (
			<div className={'container'}>
				<br/>
				<div className={'row'}>
					<div className={'col-md-8 col-md-offset-2'}>
						<Compile />
					</div>
				</div>
			</div>
		);
	}
}

render(<CompileApp/>, document.querySelector("#compile"));
