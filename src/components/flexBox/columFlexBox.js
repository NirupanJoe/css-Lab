import { React } from 'react';
import context from '../../core/context';

const BlueStyle = () => ({
	flexGrow: context.state.flexColor === 'blue' ? 1 : 0,
});

const GreenStyle = () => ({
	flexGrow: context.state.flexColor === 'green' ? 1 : 0,
});
const RedStyle = () => ({
	flexGrow: context.state.flexColor === 'red' ? 1 : 0,
});

const ColumFlexBox = () =>
	<div className="colum-container">
		<div className="color red" style={ RedStyle() }/>
		<div className="color green"style={ GreenStyle() }/>
		<div className="color blue"style={ BlueStyle() }/>
	</div>;

export default ColumFlexBox;
