import { React } from 'react';
import './App.css';
import TreasuryBox from './treasuryBox';

const App = () =>
	<div className="App">
		<div>{TreasuryBox()}</div>
	</div>;

export default App;
