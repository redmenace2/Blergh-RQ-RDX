'use client';

import { useMutation } from '@tanstack/react-query';
import { RQFN_createNewArticle } from './API_Components/createArticle';
import { createArticleType } from '../../prisma/appTypes';

export const useCreateArticle = (props: createArticleType) => {
	console.log(JSON.stringify(props));
	return useMutation({
		mutationKey: ['createArticle'],
		mutationFn: () => RQFN_createNewArticle(props),
	});
};
