/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEditor, EditorContent, NodeView } from '@tiptap/react';

import {
	StarterKit,
	Placeholder,
	Highlight,
	Document,
	Paragraph,
	Text,
	Dropcursor,
	typography,
	Code,
	Color,
	TextStyle,
	Image,
	FontFamily,
	Link,
	Heading,
} from './RTE_Components/imports';

import { MenuBar } from './RTE_Components/Toolbar';
import './RTE_Components/editorStyle/editor.css';
import './RTE_Components/editorStyle/style.scss';

import React, { useEffect, useState } from 'react';

import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import { Input } from '@/style_components/ui/input';
import { Button } from '@/style_components/ui/button';

import Draggable from 'react-draggable';

import { useGetArticle } from '@/hooks/useGetSelectedArticle';
import { useCreateArticle } from '@/hooks/useCreateUserArticle';
import { useUpdateArticle } from '@/hooks/useUpdateUserArticle';

export default function Make_Break_Blergh({
	params,
}: {
	params: { id: string[] };
}) {
	const queryString = decodeURIComponent(params.id[0]).split(',');
	const { data: articleData } = useGetArticle(queryString[0]);

	const [html, setHTML] = useState('');
	const [bodyText, setBodyText] = useState('');
	const [initialText, setInitialText] = useState('');
	const [isExistingArticleSet, setIsExistingArticleSet] = useState(false);
	// Set Contents

	const [title, setTitle] = useState<string>(() => {
		if (queryString[1] && queryString[1] !== 'null') {
			return queryString[1];
		} else return '';
	});
	const [subtitle, setSubtitle] = useState<string>(() => {
		if (queryString[2] && queryString[1] !== 'null') {
			return queryString[2];
		} else return '';
	});

	// Tiptap Rich Text Editor

	const editor = useEditor({
		editable: true,
		content: NodeView,
		extensions: [
			StarterKit,
			Color.configure({ types: [TextStyle.name] }),
			TextStyle,
			FontFamily,
			Placeholder,
			Dropcursor,
			Highlight,
			Document,
			Paragraph,
			Text,
			Code,
			typography,
			Color,
			Heading.configure({
				HTMLAttributes: { class: ['tiptap'] },
				levels: [1, 2, 3, 4],
			}),
			Image.configure({
				allowBase64: false,
				inline: true,

				HTMLAttributes: {
					class: 'tiptap',
				},
			}),

			Link.configure({
				openOnClick: false,
			}),
		],

		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			setBodyText(html);
		},

		onFocus: () => {
			if (isExistingArticleSet === false) {
				editor?.commands.insertContent(articleData as string);
				setHTML(articleData as string);
			}
			setIsExistingArticleSet(true);
		},
	});

	useEffect(() => {
		editor?.commands.focus();
		console.log('LOADED');
	}, [articleData]);

	const currentDateTime = new Date();

	const create = useCreateArticle({
		authorId: queryString[2],
		newArticleTitle: title,
		newArticleSubtitle: subtitle,
		newArticleText: bodyText,
		timestamp: currentDateTime,
	});

	const update = useUpdateArticle({
		articleId: queryString[0],
		articleTitle: title,
		articleSubtitle: subtitle,
		articleText: bodyText.toString(),
		timestamp: currentDateTime,
	});

	return (
		<MaxWidthWrapper className='flex flex-col item-center'>
			<div className='flex flex-row  rounded-2x md:h-auto items-center'>
				<div className='text-white  text-sm'>id</div>
				<div className='flex flex-col'>
					<div
						className='flex flex-col gap-6 bg-slate-800 text-slate-800 md:w-auto md:h-auto p-4 rounded-3xl sp-2 my-2
									 border-gray-300 border-double border-2'>
						<div className='flex flex-row  text-gray-600 '>
							<span className='text-5xl text-white drop-shadow-3xl'>
								{' '}
								Blergh{' '}
							</span>
							<span className='text-6xl text-yellow-400 '> Editor </span>{' '}
						</div>
						{create.isPending ? (
							<div className='text-blue-400 text-2xl'> ...Loading </div>
						) : null}
						{create.isSuccess ? (
							<div className='text-orange-400 text-2xl'> Posted! </div>
						) : null}
						{create.isIdle ? (
							<div className='text-white text-sm'> Ready </div>
						) : null}
						{create.error ? (
							<div className='text-red-600 text-sm'> Error </div>
						) : null}
						{}
						<div className='text-white text-sm'>
							{' '}
							Update Props
							<br />
							AuthorID : {queryString[3]}
							<br />
							article ID :{queryString[0]}
						</div>
						<div
							className='flex flex-col p-3
							rounded-xl gap-4 '
							style={{ width: '1050px' }}>
							<Input
								className='w-60 h-12 text-black'
								type='text'
								name='Title'
								defaultValue={title}
								placeholder='Title'
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>
							<Input
								type='text'
								name='Title'
								className='w-60 h-12 text-black'
								defaultValue={subtitle}
								placeholder='Sub-Title'
								onChange={(e) => {
									setSubtitle(e.target.value);
								}}
							/>
						</div>{' '}
						<div className='flex flex-col gap-20'>
							<Draggable>
								<div
									id='toolbar-panel'
									className='bg-black/30 ring-5 drop-shadow-lg ring-gray-950 shadow-lg'>
									<div
										style={{
											zIndex: '10',
											position: 'fixed',
										}}>
										{editor && <MenuBar editor={editor} />}{' '}
									</div>
								</div>
							</Draggable>

							<div
								className='bg-slate-600 p-2 w-auto border-slate-300 border border-b-4
				rounded-2xl md:h-auto '>
								{' '}
								{editor && (
									<EditorContent
										editor={editor}
										className='flex md:w-auto md:h-auto text-black'
										style={{ fontSize: '18px', lineHeight: '1.5' }}
									/>
								)}
							</div>
						</div>
						{/* <div className='text-white text-sm'> ID {articleId} </div> */}
						<div className='text-white text-sm'>
							{' '}
							Is Set {isExistingArticleSet.toString()}{' '}
						</div>
						<Button
							variant='outline'
							type='submit'
							className='bg-sky-700 w-48 '
							style={{ position: 'relative', top: '-20px' }}
							onClick={
								queryString[0] === 'null'
									? () => {
											create.mutate();
									  }
									: () => {
											update.mutate();
									  }
							}>
							Post Article
						</Button>
					</div>
				</div>
			</div>

			{/* <div className='text-white text-sm'>{bodyText}</div> */}
		</MaxWidthWrapper>
	);
}
