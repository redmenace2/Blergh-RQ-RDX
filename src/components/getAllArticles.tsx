'use client';

import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';

import { Button } from '@/style_components/ui/button';
import Link from 'next/link';
import { useGetAllArticle } from '@/hooks/useGetAllArticles';
import { Accordion } from '@radix-ui/react-accordion';
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/style_components/ui/accordion';
import { useState } from 'react';
import axios from 'axios';

export default function GetAllArticles() {
	const { data: ArticlesAuthors } = useGetAllArticle();

	return (
		<MaxWidthWrapper>
			<div className='flex flex-col gap-4  justify-start'>
				{' '}
				<div className='text-white text-4xl'> ARTICLES </div>
				{ArticlesAuthors?.map((data, key) => (
					<div key={key}>
						<p className='text-slate-100 text-2xl'>
							<Link href={`/publicPage/selectedPage/${data.id}`}>
								{' '}
								TITLE : {data.articleTitle}{' '}
							</Link>
						</p>
						<p className='text-slate-200 text-xl'>
							{' '}
							AUTHOR : {data.author.name as string}{' '}
						</p>
						<p className='text-slate-300 text-xk'>
							{' '}
							Time : {data.createdAt.toString()}
						</p>
						<p className='text-slate-500 text-sm'> ID : {data.id} </p>
					</div>
				))}
			</div>
		</MaxWidthWrapper>
	);
}
