'use client';

import { useEditor, EditorContent, NodeView } from '@tiptap/react';

import { StarterKit } from './RTE_Components/imports';

import { MenuBar } from './RTE_Components/Toolbar';
import './RTE_Components/editorStyle/editor.css';
import './RTE_Components/editorStyle/style.scss';

import React, { useEffect, useState } from 'react';

import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import { Input } from '@/style_components/ui/input';
import { Button } from '@/style_components/ui/button';

import Draggable from 'react-draggable';

import { useGetSelectedArticle } from '@/hooks/useGetSelectedArticle';
import { useCreateArticle } from '@/hooks/useCreateUserArticle';
import { useUpdateArticle } from '@/hooks/useUpdateUserArticle';

export default function Comment({ params }: { params: { id: string[] } }) {
	const queryString = decodeURIComponent(params.id[0]).split(',');
	const { data: articleData } = useGetSelectedArticle(queryString[0]);

	const [html, setHTML] = useState('');
	const [bodyText, setBodyText] = useState('');

	const editor = useEditor({
		extensions: [StarterKit],
		content: html,
		onUpdate: ({ editor }) => {
			setHTML(editor.getHTML());
			setBodyText(editor.getText());
		},
	});

	const [commentText, setCommentText] = useState('');

	return <React.Fragment></React.Fragment>;
}
