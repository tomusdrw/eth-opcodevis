import React from 'react';
import {render} from 'react-dom';

import * as inst from './OpCodes';

export class Compile extends React.Component {

	constructor (...args) {
		super(...args);
		this.state = {
			code: window.localStorage['lastCode'] || '',
			result: '',
			error: false
		};
	}

	generateByteCode (op, params) {
		const p = parseInt(params.replace(/^0x/, ''), 16).toString(16);
		const l = p.length / 2;
		const ll = Math.ceil(l);

		if (op === 'PUSH') {
			op = op + ll;
		}
		if (op === 'JUMP' || op === 'JUMPI' || op === 'JUMPDEST') {
			// TODO handle labels	
		}
		let i = inst.getCode(op);
		if (!i) {
			throw new Error(`Unknown instruction ${op}. Maybe it does not need params?`)
		}
		if (isNaN(p) && params) {
			throw new Error(`Unable to parse params: ${params}`);
		}
		if (isNaN(p)) {
			return i;
		}
		return i + ((l !== ll) ? `0${p}` : p);
	}

	onCodeChange (ev) {
		const code = ev.target.value;
		window.localStorage['lastCode'] = code;
		try {
			const result = this.result(code);
			this.setState({
				code: code,
				result: result,
				error: false
			});
		} catch (e) {
			this.setState({
				code: code,
				result: '',
				error: e.toString()
			});
		}
	}

	result (code) {
		return '0x' + code
			.split('\n')
			// Remove comments
			.map((line) => line.replace(/#.+/, ''))
			// Remove whitespace
			.map((line) => line.replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/, ' '))
			.filter((line) => line)
			.map((line) => {
				const params = line.split(' ');
				const op = params.shift().toUpperCase();
				return this.generateByteCode(op, params.join(''));
			}).join('');
	}

	renderError () {
		if (!this.state.error) {
			return;
		}
		return (
			<div className={'form-group'}>
				<div className={'alert alert-danger'}>{this.state.error}</div>
			</div>
		);
	}

	render () {
		return (
			<div>
				<div className={'form-group'}>
					<textarea
						rows={20}
						placeholder={'Write Code Here'}
						className={'form-control'}
						value={this.state.code}
						onChange={this.onCodeChange.bind(this)}
						/>
				</div>
				{this.renderError()}
				<div className={'form-group'}>
					<input
						readOnly={true}
						type={'text'}
						value={this.state.result}
						/>
				</div>
			</div>
		);
	}
}
