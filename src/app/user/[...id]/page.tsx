import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import {
	QueryClient,
	dehydrate,
	HydrationBoundary,
} from '@tanstack/react-query';
import { GetUserData } from '@/components/getUserData';

import { PrismaClient } from '@prisma/client';
import { auth } from '../../auth/firebase/firebaseContext';

export default async function Page({ params }: { params: { id: string } }) {
	const prisma = new PrismaClient();
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['getUSerData'],
		queryFn: () => {
			return prisma.user.findFirst({ where: { email: params.id } });
		},
	});

	return (
		<MaxWidthWrapper>
			<div className='text-white text-3xl'>
				{' '}
				{decodeURIComponent(params.id)}{' '}
			</div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<div className='text-white'>
					<GetUserData params={params.id} />
				</div>
			</HydrationBoundary>
		</MaxWidthWrapper>
	);
}
