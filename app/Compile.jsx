import React from 'react';
import {render} from 'react-dom';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/lib/codemirror.css';
import './styles.css';

import * as inst from './OpCodes';

function asHex(v) {
	let value = v.toString(16);
	if (value.length % 2) {
		return `0${value}`;
	}
	return value;
}

export class Compile extends React.Component {

	constructor (...args) {
		super(...args);
		this.state = {
			code: window.localStorage['lastCode'] || '',
			result: '',
			error: false
		};
	}

	generateByteCode (op, params, pc, labels, warnMissingLabel) {

		if (op === 'JUMPDEST') {
			labels[params] = pc.toString(16);
			params = '';
		}

		if (op === 'JUMP' || op === 'JUMPI') {
			if (warnMissingLabel && !labels[params]) {
				throw new Error(`Cannot find destinaton for label ${params}`);
			}
			let dest = labels[params] || '0x00';
			let push = this.generateByteCode('PUSH', dest, 0, {});
			let i = asHex(inst.getCode(op));

			return push + i;
		}

		const p = parseInt(params.replace(/^0x/, ''), 16).toString(16);
		const l = p.length / 2;
		const ll = Math.ceil(l);

		if (op === 'PUSH') {
			op = op + ll;
		}

		let i = inst.getCode(op);

		if (!i) {
			throw new Error(`Unknown instruction ${op}. Maybe it does not need params?`)
		}
		if (isNaN(parseInt(p, 16)) && params) {
			throw new Error(`Unable to parse params: ${params}`);
		}
		if (isNaN(parseInt(p, 16))) {
			return asHex(i);
		}
		return asHex(i) + ((l !== ll) ? `0${p}` : p);
	}

	onCodeChange (code) {
		// const code = ev.target.value;
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
		let opcodes = code
			.split('\n')
			// Remove comments
			.map((line) => line.replace(/#.+/, ''))
			// Remove whitespace
			.map((line) => line.replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/, ' '))
			.filter((line) => line)
			.map((line) => {
				let params = line.split(' ');
				const op = params.shift().toUpperCase();
				params = params.join('');
				return {
					op, params
				};
			});

		let labels = {};
		// Fill the labels		
		opcodes.reduce((code, opc) => {
			const pc = code.length / 2;
			return code + this.generateByteCode(opc.op, opc.params, pc, labels, false);
		}, '');
		// Second time - labels filled properly
		return '0x' + opcodes.reduce((code, opc) => {
			const pc = code.length / 2;
			return code + this.generateByteCode(opc.op, opc.params, pc, labels, true);
		}, '');
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
					<Codemirror
						value={this.state.code}
						onChange={this.onCodeChange.bind(this)}
						options={{lineNumbers: true, mode: 'yaml'}}
						/>
				</div>
				{this.renderError()}
				<div className={'form-group'}>
					<input
						className={'form-control'}
						readOnly={true}
						type={'text'}
						value={this.state.result}
						/>
				</div>
			</div>
		);
	}
}
