import { React } from 'react';
import config from '../core/config';
import './index.css';

const hexColor = () => Math.random().toString(16).slice(2, 10);

const background = () => ({
	background: `#${ hexColor()}`,
});

const Box = (number) => number > 1
		? <div
				style={ background() }
				className="text"
			>
			{Box(number-1)}
			</div>
		: <div id="number">{config.number}</div>

const TreasuryBox = () =>
	<div>
		<div className="box">
		{Box(config.number)}
		</div>
	</div>

export default TreasuryBox;
