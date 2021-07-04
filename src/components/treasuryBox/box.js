import { React } from 'react';
import config from '../core/config';
import context from '../core/context';

const two = 2;
const ten = 10;
const sixteen = 16;

const hexColor = () => Math.random().toString(sixteen)
	.slice(two, ten);

const background = () => ({
	background: `#${ hexColor() }`,
});

const Box = (number) => {
	const zebra = number % two === 0 ? 'dark' : 'lite';
	const color = context.state.colorSelect === 'random' ? background() : null;
	const box = number > 1
		? <div style={ color }className={ `text ${ zebra } ` }>{Box(number - 1)}</div>
		: <div id="number">{config.number - 1}</div>;

	return box;
};

export default Box;
