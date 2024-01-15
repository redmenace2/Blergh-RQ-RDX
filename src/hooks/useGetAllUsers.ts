import { useQuery } from '@tanstack/react-query';
import { userWithContentAndComments } from '../../prisma/appTypes';
import { RQFN_getAllUsers } from './adminApi_Components/getallUsers';

export const useGetAllUSers = () => {
	return useQuery<userWithContentAndComments[] | null>({
		queryKey: ['getAllUsers'],
		queryFn: () => {
			return RQFN_getAllUsers();
		},
	});
};
