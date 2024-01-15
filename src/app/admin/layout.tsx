import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import { RQFN_getAllArticles } from '@/hooks/API_Components/getAllArticles';
import { PrismaClient } from '@prisma/client';
import GetAllArticles from '@/components/publicPageComponents/getAllArticles';

import {
	QueryClient,
	dehydrate,
	HydrationBoundary,
} from '@tanstack/react-query';
const queryClient = new QueryClient();
const prisma = new PrismaClient();

export default async function NestedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	queryClient.prefetchQuery({
		queryKey: ['getAllUsers'],
		queryFn: () => {
			return prisma.user.findMany({});
		},
	});

	return (
		<MaxWidthWrapper>
			<div className='flex flex-col bg-gray-900 p-5'>
				<span>
					<span className='text-orange-500 text-2xl'>B</span>
					<span className='text-red-200 text-2xl'>le</span>
					<span className='text-cyan-200'>r</span>
					<span className='text-green-400 text-3xl'>gh</span>
				</span>
				{''}
				<div className='my-10'>
					<HydrationBoundary state={dehydrate(queryClient)}>
						{' '}
						{children}
					</HydrationBoundary>{' '}
				</div>
			</div>
		</MaxWidthWrapper>
	);
}
