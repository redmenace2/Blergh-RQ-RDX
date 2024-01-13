/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import { RQFN_getUserArticle } from './API_Components/getArticle';

export const useGetArticle = (id: string) => {
	return useQuery({
		queryKey: ['getArticle'],

		queryFn: () => {
			return RQFN_getUserArticle(id);
		},
	});
};
