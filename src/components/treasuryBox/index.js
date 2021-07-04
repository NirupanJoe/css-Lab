import { React } from 'react';
import config from '../core/config';
import Box from './box';
import './index.css';
import ColorSelect from './selectInput';

const TreasuryBox = () =>
	<div>
		<div>{ColorSelect()}</div>
		<div className="box">
		{Box(config.number)}
		</div>
	</div>

export default TreasuryBox;
