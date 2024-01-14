/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import { RQFN_getUserArticle } from './API_Components/getSelectedArticle';
import { ContentWithAuthor } from '../../prisma/appTypes';

export const useGetSelectedArticle = (id: string) => {
	return useQuery<ContentWithAuthor | null>({
		queryKey: ['getArticle'],

		queryFn: () => {
			return RQFN_getUserArticle(id);
		},
	});
};
