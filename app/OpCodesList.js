/// halts execution
export const STOP = 0x00;
/// addition operation
export const ADD = 0x01;
/// mulitplication operation
export const MUL = 0x02;
/// subtraction operation
export const SUB = 0x03;
/// integer division operation
export const DIV = 0x04;
/// signed integer division operation
export const SDIV = 0x05;
/// modulo remainder operation
export const MOD = 0x06;
/// signed modulo remainder operation
export const SMOD = 0x07;
/// unsigned modular addition
export const ADDMOD = 0x08;
/// unsigned modular multiplication
export const MULMOD = 0x09;
/// exponential operation
export const EXP = 0x0a;
/// extend length of signed integer
export const SIGNEXTEND = 0x0b;

/// less-than comparision
export const LT = 0x10;		
/// greater-than comparision
export const GT = 0x11;
/// signed less-than comparision
export const SLT = 0x12;
/// signed greater-than comparision
export const SGT = 0x13;
/// equality comparision
export const EQ = 0x14;
/// simple not operator
export const ISZERO = 0x15;
/// bitwise AND operation
export const AND = 0x16;
/// bitwise OR operation
export const OR = 0x17;
/// bitwise XOR operation
export const XOR = 0x18;
/// bitwise NOT opertation
export const NOT = 0x19;
/// retrieve single byte from word
export const BYTE = 0x1a;

/// compute SHA3-256 hash
export const SHA3 = 0x20;	

/// get address of currently executing account
export const ADDRESS = 0x30;	
/// get balance of the given account
export const BALANCE = 0x31;
/// get execution origination address
export const ORIGIN = 0x32;
/// get caller address
export const CALLER = 0x33;
/// get deposited value by the instruction/transaction responsible for this execution
export const CALLVALUE = 0x34;
/// get input data of current environment
export const CALLDATALOAD = 0x35;
/// get size of input data in current environment
export const CALLDATASIZE = 0x36;
/// copy input data in current environment to memory
export const CALLDATACOPY = 0x37;
/// get size of code running in current environment
export const CODESIZE = 0x38;
/// copy code running in current environment to memory
export const CODECOPY = 0x39;
/// get price of gas in current environment
export const GASPRICE = 0x3a;
/// get external code size (from another contract)
export const EXTCODESIZE = 0x3b;
/// copy external code (from another contract)
export const EXTCODECOPY = 0x3c;

/// get hash of most recent complete block
export const BLOCKHASH = 0x40;
/// get the block's coinbase address
export const COINBASE = 0x41;
/// get the block's timestamp
export const TIMESTAMP = 0x42;
/// get the block's number
export const NUMBER = 0x43;
/// get the block's difficulty
export const DIFFICULTY = 0x44;
/// get the block's gas limit
export const GASLIMIT = 0x45;

/// remove item from stack
export const POP = 0x50;		
/// load word from memory
export const MLOAD = 0x51;
/// save word to memory
export const MSTORE = 0x52;
/// save byte to memory
export const MSTORE8 = 0x53;
/// load word from storage
export const SLOAD = 0x54;
/// save word to storage
export const SSTORE = 0x55;
/// alter the program counter
export const JUMP = 0x56;
/// conditionally alter the program counter
export const JUMPI = 0x57;
/// get the program counter
export const PC = 0x58;
/// get the size of active memory
export const MSIZE = 0x59;
/// get the amount of available gas
export const GAS = 0x5a;
/// set a potential jump destination
export const JUMPDEST = 0x5b;

/// place 1 byte item on stack
export const PUSH1 = 0x60;	
/// place 2 byte item on stack
export const PUSH2 = 0x61;
/// place 3 byte item on stack
export const PUSH3 = 0x62;
/// place 4 byte item on stack
export const PUSH4 = 0x63;
/// place 5 byte item on stack
export const PUSH5 = 0x64;
/// place 6 byte item on stack
export const PUSH6 = 0x65;
/// place 7 byte item on stack
export const PUSH7 = 0x66;
/// place 8 byte item on stack
export const PUSH8 = 0x67;
/// place 9 byte item on stack
export const PUSH9 = 0x68;
/// place 10 byte item on stack
export const PUSH10 = 0x69;
/// place 11 byte item on stack
export const PUSH11 = 0x6a;
/// place 12 byte item on stack
export const PUSH12 = 0x6b;
/// place 13 byte item on stack
export const PUSH13 = 0x6c;
/// place 14 byte item on stack
export const PUSH14 = 0x6d;
/// place 15 byte item on stack
export const PUSH15 = 0x6e;
/// place 16 byte item on stack
export const PUSH16 = 0x6f;
/// place 17 byte item on stack
export const PUSH17 = 0x70;
/// place 18 byte item on stack
export const PUSH18 = 0x71;
/// place 19 byte item on stack
export const PUSH19 = 0x72;
/// place 20 byte item on stack
export const PUSH20 = 0x73;
/// place 21 byte item on stack
export const PUSH21 = 0x74;
/// place 22 byte item on stack
export const PUSH22 = 0x75;
/// place 23 byte item on stack
export const PUSH23 = 0x76;
/// place 24 byte item on stack
export const PUSH24 = 0x77;
/// place 25 byte item on stack
export const PUSH25 = 0x78;
/// place 26 byte item on stack
export const PUSH26 = 0x79;
/// place 27 byte item on stack
export const PUSH27 = 0x7a;
/// place 28 byte item on stack
export const PUSH28 = 0x7b;
/// place 29 byte item on stack
export const PUSH29 = 0x7c;
/// place 30 byte item on stack
export const PUSH30 = 0x7d;
/// place 31 byte item on stack
export const PUSH31 = 0x7e;
/// place 32 byte item on stack
export const PUSH32 = 0x7f;

/// copies the highest item in the stack to the top of the stack
export const DUP1 = 0x80;	
/// copies the second highest item in the stack to the top of the stack
export const DUP2 = 0x81;
/// copies the third highest item in the stack to the top of the stack
export const DUP3 = 0x82;
/// copies the 4th highest item in the stack to the top of the stack
export const DUP4 = 0x83;
/// copies the 5th highest item in the stack to the top of the stack
export const DUP5 = 0x84;
/// copies the 6th highest item in the stack to the top of the stack
export const DUP6 = 0x85;
/// copies the 7th highest item in the stack to the top of the stack
export const DUP7 = 0x86;
/// copies the 8th highest item in the stack to the top of the stack
export const DUP8 = 0x87;
/// copies the 9th highest item in the stack to the top of the stack
export const DUP9 = 0x88;
/// copies the 10th highest item in the stack to the top of the stack
export const DUP10 = 0x89;
/// copies the 11th highest item in the stack to the top of the stack
export const DUP11 = 0x8a;
/// copies the 12th highest item in the stack to the top of the stack
export const DUP12 = 0x8b;
/// copies the 13th highest item in the stack to the top of the stack
export const DUP13 = 0x8c;
/// copies the 14th highest item in the stack to the top of the stack
export const DUP14 = 0x8d;
/// copies the 15th highest item in the stack to the top of the stack
export const DUP15 = 0x8e;
/// copies the 16th highest item in the stack to the top of the stack
export const DUP16 = 0x8f;

/// swaps the highest and second highest value on the stack
export const SWAP1 = 0x90;	
/// swaps the highest and third highest value on the stack
export const SWAP2 = 0x91;
/// swaps the highest and 4th highest value on the stack
export const SWAP3 = 0x92;
/// swaps the highest and 5th highest value on the stack
export const SWAP4 = 0x93;
/// swaps the highest and 6th highest value on the stack
export const SWAP5 = 0x94;
/// swaps the highest and 7th highest value on the stack
export const SWAP6 = 0x95;
/// swaps the highest and 8th highest value on the stack
export const SWAP7 = 0x96;
/// swaps the highest and 9th highest value on the stack
export const SWAP8 = 0x97;
/// swaps the highest and 10th highest value on the stack
export const SWAP9 = 0x98;
/// swaps the highest and 11th highest value on the stack
export const SWAP10 = 0x99;
/// swaps the highest and 12th highest value on the stack
export const SWAP11 = 0x9a;
/// swaps the highest and 13th highest value on the stack
export const SWAP12 = 0x9b;
/// swaps the highest and 14th highest value on the stack
export const SWAP13 = 0x9c;
/// swaps the highest and 15th highest value on the stack
export const SWAP14 = 0x9d;
/// swaps the highest and 16th highest value on the stack
export const SWAP15 = 0x9e;
/// swaps the highest and 17th highest value on the stack
export const SWAP16 = 0x9f;

/// Makes a log entry; no topics.
export const LOG0 = 0xa0;	
/// Makes a log entry; 1 topic.
export const LOG1 = 0xa1;
/// Makes a log entry; 2 topics.
export const LOG2 = 0xa2;
/// Makes a log entry; 3 topics.
export const LOG3 = 0xa3;
/// Makes a log entry; 4 topics.
export const LOG4 = 0xa4;

/// create a new account with associated code
export const CREATE = 0xf0;	
/// message-call into an account
export const CALL = 0xf1;
/// message-call with another account's code only
export const CALLCODE = 0xf2;
/// halt execution returning output data
export const RETURN = 0xf3;
/// like CALLCODE but keeps caller's value and sender
export const DELEGATECALL = 0xf4;
/// halt execution and register account for later deletion
export const SUICIDE = 0xff;	

