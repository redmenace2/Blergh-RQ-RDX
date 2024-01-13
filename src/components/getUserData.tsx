'use client';

import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';

import { Button } from '@/style_components/ui/button';
import Link from 'next/link';
import { useGetUserData } from '@/hooks/useGetUserData';
import { Accordion } from '@radix-ui/react-accordion';
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/style_components/ui/accordion';

export const GetUserData = ({ params }: { params: string }) => {
	const {
		data: user,
		status,
		isFetched,
		isFetching,
		error,
	} = useGetUserData({ emailID: params });

	// const userData = await getUserData(params.id);

	const rbg1: number = Math.floor(Math.random() * 96) + 120;
	const rbg2: number = Math.floor(Math.random() * 100) + 180;
	const rbg3: number = Math.floor(Math.random() * 220) + 220;

	const RGB = (RGB_no: number) => {
		return Math.floor(Math.random() * RGB_no - 40) + RGB_no + 100;
	};

	return (
		<MaxWidthWrapper className='flex flex-col gap-4'>
			<div className='text-white text-1xl flex flex-col gap-2'>
				{' '}
				<div> {status} </div>
				<div> {isFetching ? <div> Loading ... </div> : null} </div>
				<div
					className='text-sm'
					style={{
						color: `rgb(${RGB(100)} ${RGB(80)} ${RGB(200)})`,
					}}>
					{' '}
					NAME : {user?.name}{' '}
				</div>
				<div
					className='text-sml'
					style={{
						color: `rgb(${RGB(50)} ${RGB(20)} ${RGB(150)})`,
					}}>
					{' '}
					EMAIL : {user?.email} `${user?.id}`
				</div>
				<div
					className='text-1xl'
					style={{
						color: `rgb(${RGB(120)} ${RGB(100)} ${RGB(220)})`,
					}}>
					{' '}
					HANDLE : {user?.userName}
				</div>
				<h1 className='text-orange-400 text-sm'>
					{' '}
					<span className='text-6xl text-cyan-500'>
						{user?.name}&apos;s
					</span>{' '}
					Blerghs{' '}
				</h1>
				<Link href={`/user/userCompose/${['null', 'null', user?.id, params]}`}>
					{' '}
					<p className='text-white text-2xl'>
						<Button className='w-52'> COMPOSE </Button>
					</p>{' '}
				</Link>
				<Link href={`/user/userCompose/${['null', 'null', user?.id, params]}`}>
					{' '}
					<p className='text-white text-2xl'>
						<Button className='w-52'> Test </Button>
					</p>{' '}
				</Link>
				<div className='text-sm'> USER ID: {user?.id} </div>
				<section className='flex flex-col relative left-2'>
					{user?.content?.map((val, key) => (
						<div key={key}>
							<div className='flex flex-col'>
								<div className='flex flex-col'>
									<Accordion
										type='single'
										collapsible>
										<AccordionItem
											value='item-1'
											className='flex flex-col'>
											<AccordionTrigger>
												<div className='w-72 grid  justify-items-start'>
													<div className='text-orange-200 text-3xl'>
														{' '}
														<Link
															href={`/user/userCompose/${[
																val?.id,
																val?.articleTitle,
																val?.articleSubtitle,
																params,
															]}`}>
															{' '}
															{val.articleTitle}
														</Link>
														<div className='text-orange-400 text-sm text-left'>
															{' '}
															{val.articleSubtitle} <br />
															<p className='text-orange-300 text-sm'>
																{' '}
																{val.id}{' '}
															</p>
														</div>
													</div>{' '}
												</div>
											</AccordionTrigger>
											<div className='text-red-300 text-3xl'>
												{' '}
												<Link
													href={`/user/userArticle/${[
														val?.id,
														// val?.articleTitle,
														// val?.articleSubtitle,
														// params.id,
													]}`}>
													{' '}
													Preview
												</Link>
											</div>

											<AccordionContent className='mx-20'>
												<div>
													{/* <ArticleText
														articleId={{ ref: val.id }}
														fetch={{ get: true }}
													/> */}
												</div>
												<div>
													<Button>
														{' '}
														<Link
															href={`/user/userCompose/${[
																val?.id,
																val?.articleTitle,
																val?.articleSubtitle,
																params,
															]}`}>
															{' '}
															EDIT
														</Link>
													</Button>
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</div>
							</div>
						</div>
					))}
				</section>
			</div>
		</MaxWidthWrapper>
	);
};
