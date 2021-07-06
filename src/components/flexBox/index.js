import { React } from 'react';
import context from '../../core/context';
import './index.css'

const BlueStyle = () => ({
	flexGrow: context.state.flexColor === 'blue' ? 1 : 0 ,
});

const GreenStyle = () => ({
	flexGrow: context.state.flexColor === 'green' ? 1 : 0 ,
});
const RedStyle = () => ({
	flexGrow: context.state.flexColor === 'red' ? 1 : 0 ,
});

const Flex = () =>
	<div className="container">
		<div className="color red" style={ RedStyle() } ></div>
		<div className="color green" style={ GreenStyle() }></div>
		<div className="color blue" style={ BlueStyle() }></div>
		</div>;

export default Flex;
