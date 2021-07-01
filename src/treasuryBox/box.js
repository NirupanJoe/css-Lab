import { React } from 'react';
import config from '../core/config';

const two = 2;
const ten = 10;
const sixteen = 16;

const hexColor = () => Math.random().toString(sixteen)
	.slice(two, ten);

const background = () => ({
	background: `#${ hexColor() }`,
});

const Box = (number) => (number > 1
	? <div style={ background() }className="text">{Box(number - 1)}</div>
	: <div id="number">{config.number}</div>);

export default Box;
