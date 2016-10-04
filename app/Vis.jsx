import React from 'react';
import {render} from 'react-dom';

import * as inst from './OpCodes';

function asHexWithoutPrefix(i) {
	let x = i.toString(16);
	if (x.length < 2) {
    return `0${x}`;
  }
  return `${x}`;
}
function asHex(i) {
	return `0x${asHexWithoutPrefix(i)}`;
}

function padName(n) {
	return _.padEnd(n, 7, '\u00a0');
}

export class Vis extends React.Component {

	constructor (...args) {
		super(...args);
		this.state = {
			code: '0x6001600054016000556000600060006000600073bbbf5374fce5edbc8e2a8697c15331677e6ebf0b610401600054046001036127105a0302f16001556103e860005402600101600255'
		};
	}

	onCodeChange (ev) {
		this.setState({
			code: ev.target.value
		});
	}

	renderError (e, bytes) {
		const pos = e.pos;
		const h = _.repeat('\u00a0', pos*2);
		return [
			(
				<tr key="e1">
					<td><span className={'label label-danger'}>{e.toString()}</span></td>
				</tr>
			),
			(
				<tr key="e2"><td>{bytes.join('')}</td></tr>
			),
			(
				<tr key="e3"><td>{h}^ Here</td></tr>
			)
		];
	}

	renderResult () {
		const code = this.state.code.replace(/^0x/, '').replace(/\s/g, '');
		// Try to parse code
		const bytes = _.chunk(code, 2).map((x) => x.join(''));

		try {
			const parsed = this.parseCode(bytes);

			return parsed.map((i, idx) => (
				<tr key={idx}>
					<td>
						<span>{asHex(i.pc)} </span>
						<span className={this.label(i.opcode)}>
							{padName(i.name)} ({asHex(i.opcode)})
						</span>
					</td>
					<td>{i.param}</td>
				</tr>
			));
		} catch (e) {
			return this.renderError(e, bytes);
		}
	}
	
	label (i) {
		const labels = ['primary', 'success', 'info', 'warning', 'danger'];
		if (inst.isPush(i)) {
			return `label label-default`;
		}
		const l = labels[i % labels.length];
		return `label label-${l}`;
	}

	parseCode (bytes) {
		let pc = 0;
		let result = [];
		while (pc < bytes.length) {
			let i = parseInt(bytes[pc], 16);
			let name = inst.getName(i);
			if (!name) {
				let e = new Error(`Unknown instruction: ${bytes[pc]} at ${pc}.`);
				e.pos = pc;
				throw e;
			}
			let instruction = {
				pc: pc,
				name: inst.getName(i),
				opcode: i,
				param: ''
			};
			if (inst.isPush(i)) {
				let b = inst.getPushBytes(i);
        let word = bytes.slice(pc + 1, pc + b + 1).map(x => asHexWithoutPrefix(parseInt(x, 16))).join('');
				instruction.param = `0x${word}`;
				pc += b;
			}
			result.push(instruction);
			pc += 1;
		}
		return result;
	}

	render () {
		return (
			<div>
				<div className={'form-group'}>
					<input
						placeholder={'Paste code here'}
						className={'form-control'}
						type={'text'}
						value={this.state.code}
						onChange={this.onCodeChange.bind(this)}
						/>
				</div>
				<div className={'form-group'} style={{overflow: 'auto'}}>
					<table className={'table'} style={{fontFamily: 'monospace'}}>
						<tbody>
							{this.renderResult()}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
