import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	colorSelect: config.colorSelect[0],
	flexColor: config.flexColor[0],
};

export default seed;
