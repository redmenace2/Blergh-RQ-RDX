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
import { useGetAllUSers } from '@/hooks/useGetAllUsers';

export default function GetAllUSers() {
	const { data: allUsers } = useGetAllUSers();

	return (
		<MaxWidthWrapper>
			<div className='flex flex-col gap-4  justify-start'>
				{' '}
				<div className='text-white text-4xl'> USERS </div>
				{allUsers?.map((data, key) => (
					<div key={key}>
						<div className='text-white text-pretty text-xs'> {key} </div>
						<li className='text-blue-100 text-2xl'> USER NAME: {data.name} </li>
						<li className='text-blue-200 text-sml'>
							{' '}
							USER EMAIL: {data.email}{' '}
						</li>
						<li className='text-blue-300 text-sm'>
							{' '}
							USER HANDLE {data.userName}{' '}
						</li>
						<li className='text-red-400 text-sm'> USER ID {data.id} </li>
						<li />
					</div>
				))}
			</div>
		</MaxWidthWrapper>
	);
}
