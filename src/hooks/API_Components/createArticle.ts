'use client';

import axios, { AxiosRequestConfig } from 'axios';
import { createArticleType } from '../../../prisma/appTypes';

export const RQFN_createNewArticle = async (
	createArticleProps: createArticleType
) => {
	try {
		const response = await axios.post('/api/createArticle', createArticleProps);
		const res = JSON.stringify(response.data);
	} catch (err) {
		console.log(err);
	}
};

// export const createNewArticle = async (
// 	createArticleProps: createArticleType
// ) => {
// 	try {
// 		const response = await axios.post('/api/createArticle', createArticleProps);

// 		const res = JSON.stringify(response.data);

// 		console.log(res);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
