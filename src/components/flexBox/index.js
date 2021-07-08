import { React } from 'react';
import './index.css'
import RowFlexBox from './rowFlexBox';
import FlexSelect from './selectInput';

const Flex = () =>
	<div>
		{FlexSelect()}
		{RowFlexBox()}
	</div>;

export default Flex;
