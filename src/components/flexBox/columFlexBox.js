import { React } from 'react';
import context from '../../core/context';

const BlueStyle = () => ({
	flexBasis: context.state.flexColor === 'blue' ? '350px' : 0,
});

const GreenStyle = () => ({
	flexBasis: context.state.flexColor === 'green' ? '350px' : 0,
});
const RedStyle = () => ({
	flexBasis: context.state.flexColor === 'red' ? '350px' : 0,
});

const ColumFlexBox = () =>
	<div className="colum-container">
		<div className="color red" style={ RedStyle() }/>
		<div className="color green"style={ GreenStyle() }/>
		<div className="color blue"style={ BlueStyle() }/>
	</div>;

export default ColumFlexBox;
