import axios, { AxiosRequestConfig } from 'axios';
import { userWithContentAndComments } from '../../../prisma/appTypes';

const delay = async (sec: number) => {
	await new Promise((resolve) => setTimeout(resolve, sec));
};

export const RQFN_getAllUsers = async (): Promise<
	userWithContentAndComments[] | null
> => {
	try {
		const response = await axios.get('http://localhost:3000/api/getAllUsers');
		const result = response.data;
		return result;
	} catch (err) {
		console.log(err);
	}

	return null;
};
