import { RQFN_getUserData } from '@/hooks/API_Components/getUserDetails';
import { useQuery } from '@tanstack/react-query';

import { userWithContent } from '../../prisma/appTypes';

export const useGetUserData = ({ emailID }: { emailID: string }) => {
	return useQuery<userWithContent>({
		queryKey: ['getUserData'],
		queryFn: () => {
			return RQFN_getUserData({ email: emailID });
		},
	});
};
