import { React } from 'react';
import ColumFlexBox from './columFlexBox';
import './index.css'
import RowFlexBox from './rowFlexBox';
import FlexSelect from './selectInput';

const Flex = () =>
	<div>
		<div id="flex-select">{FlexSelect()}</div>
		<div className="flex">{RowFlexBox()}{ColumFlexBox()}</div>
	</div>;

export default Flex;
