const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const colorSelect = ({ data }) => ({
	colorSelect: data,
});

const actions = {
	increaseCount,
	colorSelect,
};

export default actions;
