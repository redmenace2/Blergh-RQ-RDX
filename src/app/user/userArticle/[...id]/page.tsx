import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import parse from 'html-react-parser';

import { RQFN_getUserArticle } from '@/hooks/API_Components/getArticle';
import {
	QueryClient,
	dehydrate,
	HydrationBoundary,
} from '@tanstack/react-query';
import { PrismaClient } from '@prisma/client';

export default async function Article({ params }: { params: { id: string } }) {
	const articleText = await RQFN_getUserArticle(decodeURIComponent(params.id));
	const articleTextParsed = parse(articleText);

	return (
		<MaxWidthWrapper className='flex flex-col gap-4'>
			<div>ID: {params.id} </div>

			<section
				className='flex flex-col gap-2 text-white'
				style={{ fontSize: '18px', lineHeight: '1.5', lineBreak: 'auto' }}>
				{articleTextParsed}
			</section>
		</MaxWidthWrapper>
	);
}
