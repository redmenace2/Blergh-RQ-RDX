'use client';

import axios, { AxiosRequestConfig } from 'axios';
import { createArticleType } from '../../../prisma/appTypes';

export const RQFN_createNewArticle = async (
	createArticleProps: createArticleType
) => {
	try {
		const response = await axios.post('/api/createArticle', createArticleProps);
		const res = JSON.stringify(response.data);
		if (res) {
			console.log(res);
		}
	} catch (err) {
		console.log(err);
	}
};
