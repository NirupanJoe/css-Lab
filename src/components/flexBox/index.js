import { React } from 'react';
import ColumFlexBox from './columFlexBox';
import './index.css'
import RowFlexBox from './rowFlexBox';
import FlexSelect from './selectInput';

const Flex = () =>
	<div>
		{FlexSelect()}
		{RowFlexBox()}
		{ColumFlexBox()}
	</div>;

export default Flex;
