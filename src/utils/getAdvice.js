import axios from '../apis/advice-api-axios';

const getAdvice = async () => {
	try {
		const res = await axios();
		return res.data.slip;
	} catch (error) {
		alert('There was an error, please try again later');
	}
};

export default getAdvice;
