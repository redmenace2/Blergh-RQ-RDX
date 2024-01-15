'use client';

import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import parse from 'html-react-parser';

import { RQFN_getUserArticle } from '@/hooks/API_Components/getSelectedArticle';
import { useGetSelectedArticle } from '@/hooks/useGetSelectedArticle';
import { ContentWithAuthor } from '../../../prisma/appTypes';
export default function SelectedArticle({
	params,
}: {
	params: { id: string };
}) {
	const { data: article, isLoading } = useGetSelectedArticle(params.id);

	const getArticleText = (): string => {
		if (typeof article?.articleText === 'string') {
			const articleText = parse(article?.articleText as string);

			return articleText as string;
		} else return '';
	};

	return (
		<MaxWidthWrapper className='flex flex-col gap-4'>
			<div className='text-white text-2xl'>ID: {params.id} </div>
			{isLoading ?? <div className='text-green-500 text-3xl'> .. Loading </div>}
			<section
				className='flex flex-col gap-2 text-white'
				style={{ fontSize: '18px', lineHeight: '1.5', lineBreak: 'auto' }}>
				<h2 className='text-blue-300 text-3xl'>
					{' '}
					TITLE: {article?.articleTitle}{' '}
				</h2>
				<h1 className='text-blue-500 text-2xl'>
					{' '}
					AUTHOR : {article?.author.name}{' '}
				</h1>
				{getArticleText()}
			</section>
		</MaxWidthWrapper>
	);
}
