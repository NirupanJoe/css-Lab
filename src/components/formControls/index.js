import { React } from 'react';
import './index.css'

const FormControls = () =>
	<div>
		<div><label>name <input type="text"/></label></div>
		<div><label>name <input type="file"/></label></div>
		<div><label>name <input type="date" /></label></div>
		<div><input type="submit"/></div>

	</div>;

export default FormControls;
