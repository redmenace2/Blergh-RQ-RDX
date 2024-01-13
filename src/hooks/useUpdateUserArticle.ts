'use client';
import { RQFN_updateArticle } from './API_Components/updateArticle';

import { useMutation } from '@tanstack/react-query';

import { updateArticleType } from '../../prisma/appTypes';

export const useUpdateArticle = (props: updateArticleType) => {
	console.log(JSON.stringify(props));
	return useMutation({
		mutationKey: ['updateArticle'],
		mutationFn: () => RQFN_updateArticle(props),
	});
};
