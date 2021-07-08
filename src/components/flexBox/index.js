import { React } from 'react';
import './index.css'
import FlexBox from './flexBox';
import FlexSelect from './selectInput';

const Flex = () =>
	<div>
		{FlexBox()}
		{FlexSelect()}
	</div>;

export default Flex;
