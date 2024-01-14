import { useQuery } from '@tanstack/react-query';
import { RQFN_getAllArticles } from './API_Components/getAllArticles';
import {
	ContentWithAuthor,
	userWithContentAndComments,
} from '../../prisma/appTypes';

export const useGetAllArticle = () => {
	return useQuery<ContentWithAuthor[] | null>({
		queryKey: ['getAllArticles'],

		queryFn: () => {
			return RQFN_getAllArticles();
		},
	});
};
