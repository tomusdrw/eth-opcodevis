import _ from 'lodash';
import * as opcodes from './OpCodesList';

const instructionToName = (() => {
	return _.zipObject(_.values(opcodes), _.keys(opcodes));
})();

export function getName (i) {
	return instructionToName[i];
}

export function getCode (name) {
	return opcodes[name];
}

export function isPush (i) {
	return i <= opcodes.PUSH32 && i >= opcodes.PUSH1;
}

export function getPushBytes (i) {
	return i - opcodes.PUSH1 + 1;
}
