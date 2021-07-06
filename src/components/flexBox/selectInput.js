import { React } from 'react';
import context from '../../core/context';

const Option = (color) => <option key={ color }>{color}</option>;

const FlexSelect = () =>
	<label>Box Color: {}
		<select
			value={ context.state.FlexSelect }
			onChange={ (evt) => context.actions.setFlexColor(evt.target.value) }
		>
			{context.config.flexColor.map(Option)}
		</select>
	</label>;

export default FlexSelect;
