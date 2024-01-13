import axios, { AxiosRequestConfig } from 'axios';
import { articleType, userType } from '../../../prisma/appTypes';
import { resolve } from 'path';

const delay = async (sec: number) => {
	await new Promise((resolve) => setTimeout(resolve, sec));
};

export const RQFN_getUserArticle = async (
	articleId: string
): Promise<string> => {
	if (articleId !== 'null') {
		console.log('articleID : ', articleId);
		try {
			const response = await axios.post(
				'http://localhost:3000/api/getArticles',
				{
					articleID: decodeURIComponent(articleId),
				}
			);
			const result = response.data;

			return result;
		} catch (err) {
			console.log(err);
		}
	}
	return '';
};
