import { React } from 'react';
import config from '../core/config';
import './index.css';
import { rndBetween } from '@laufire/utils/random';

const background = () => `rgb(${rndBetween(0, 255)},${rndBetween(0, 255)}, ${rndBetween(0, 255)})`;

const Box = (number) => number > 1
		? <div
				style={ {background: background() }}
				className="text"
			>
			{Box(number-1)}
			</div>
		: <div>{config.number}</div>

const TreasuryBox = () =>
	<div>
		<div className="box">
		{Box(config.number)}
		</div>
	</div>

export default TreasuryBox;
