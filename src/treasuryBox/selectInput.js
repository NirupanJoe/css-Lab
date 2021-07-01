import { React } from 'react';
import context from '../core/context';

const Option = (colorSelect) => <option>{colorSelect}</option>;

const ColorSelect = () =>
	<label>
		Color: {}
		<select
			value={ context.state.colorSelect }
			onChange={ (evt) => context.action.colorSelect(evt.target.value) }
		>
			{context.config.colorSelect.map(Option)}
		</select>
	</label>;

export default ColorSelect;
