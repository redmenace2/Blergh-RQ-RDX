// import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
// import parse from 'html-react-parser';

import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';

// import { RQFN_getUserArticle } from '@/hooks/API_Components/getSelectedArticle';
// import {
// 	QueryClient,
// 	dehydrate,
// 	HydrationBoundary,
// } from '@tanstack/react-query';
// import { PrismaClient } from '@prisma/client';
// import { ContentWithAuthor } from '../../../../../prisma/appTypes';

// export default async function Article({ params }: { params: { id: string } }) {
// 	const articleText = await RQFN_getUserArticle(decodeURIComponent(params.id));
// 	const articleTextParsed = parse(articleText as ContentWithAuthor);

// 	return (
// 		<MaxWidthWrapper className='flex flex-col gap-4'>
// 			<div>ID: {params.id} </div>

// 			<section
// 				className='flex flex-col gap-2 text-white'
// 				style={{ fontSize: '18px', lineHeight: '1.5', lineBreak: 'auto' }}>
// 				{articleTextParsed}
// 			</section>
// 		</MaxWidthWrapper>
// 	);
// }

export default function page() {
	return (
		<MaxWidthWrapper>
			<div> Module </div>
		</MaxWidthWrapper>
	);
}
