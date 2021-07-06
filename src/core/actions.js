const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const colorSelect = ({ data }) => ({
	colorSelect: data,
});
const setFlexColor = ({ data }) => ({
	flexColor: data,
});

const actions = {
	increaseCount,
	colorSelect,
	setFlexColor,
};

export default actions;
