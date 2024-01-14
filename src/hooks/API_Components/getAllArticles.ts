import axios, { AxiosRequestConfig } from 'axios';
import {
	ContentWithAuthor,
	userWithContentAndComments,
} from '../../../prisma/appTypes';

const delay = async (sec: number) => {
	await new Promise((resolve) => setTimeout(resolve, sec));
};

export const RQFN_getAllArticles = async (): Promise<
	ContentWithAuthor[] | null
> => {
	try {
		const response = await axios.get(
			'http://localhost:3000/api/getAllArticles'
		);
		const result = response.data;
		return result;
	} catch (err) {
		console.log(err);
	}

	return null;
};
