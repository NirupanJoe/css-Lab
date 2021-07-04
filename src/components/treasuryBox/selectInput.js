import { React } from 'react';
import context from '../core/context';

const Option = (colorSelect) =>
	<option key={ colorSelect }>{colorSelect}</option>;

const ColorSelect = () =>
	<select
		value={ context.state.colorSelect }
		onChange={ (evt) => context.actions.colorSelect(evt.target.value) }
	>
		{context.config.colorSelect.map(Option)}
	</select>;

export default ColorSelect;
