/* eslint-disable react-hooks/rules-of-hooks */
import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import { Button, buttonVariants } from '@/style_components/ui/button';
import { Bold, Italic, List, ListOrdered } from 'lucide-react';
import { Editor } from '@tiptap/react';

export const MenuBar = ({ editor }: { editor: Editor }) => {
	// const { editor } = useCurrentEditor();

	if (!editor) {
		console.log('No Editor');
		return null;
	}

	const setLink = () => {
		const previousUrl = editor.getAttributes('link').href;
		const url = window.prompt('URL', previousUrl);

		// cancelled
		if (url === null) {
			return;
		}

		// empty
		if (url === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run();

			return;
		}

		// update link
		editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
	};

	if (!editor) {
		return null;
	}

	const addImage = () => {
		const url = window.prompt('URL');
		console.log('IMAGE');
		if (url) {
			editor.chain().focus().setImage({ src: url }).run();
		}
	};

	if (!editor) {
		return null;
	}

	return (
		<MaxWidthWrapper className=' flex flex-row gap-2 w-full h-12 flex-wrap text-gray-800 text-sm md:w-auto'>
			<div style={{ width: '710px' }}>
				<Button
					variant='default'
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={editor.isActive('italic') ? 'is-active' : ''}>
					<Bold
						size={10}
						color='#e5f7ff'
						strokeWidth={1.5}
						absoluteStrokeWidth
					/>
				</Button>

				<Button
					onClick={() => editor.chain().focus().toggleItalic().run()}
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					className={editor.isActive('italic') ? 'is-active' : ''}>
					<Italic
						size={10}
						color='#e5f7ff'
						strokeWidth={1.5}
						absoluteStrokeWidth
					/>
				</Button>
				<Button
					onClick={() => editor.chain().focus().toggleStrike().run()}
					disabled={!editor.can().chain().focus().toggleStrike().run()}
					className={editor.isActive('strike') ? 'is-active' : ''}>
					strike
				</Button>
				{/* <Button
					onClick={() => editor.chain().focus().toggleCode().run()}
					disabled={!editor.can().chain().focus().toggleCode().run()}
					className={editor.isActive('code') ? 'is-active' : ''}>
					code
				</Button> */}
				{/* <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
					clear marks
				</Button> */}
				{/* <Button onClick={() => editor.chain().focus().clearNodes().run()}>
					clear nodes
				</Button> */}
				<Button
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={editor.isActive('paragraph') ? 'is-active' : ''}>
					paragraph
				</Button>
				<Button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					className={
						editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
					}>
					h1
				</Button>
				<Button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					className={
						editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
					}>
					h2
				</Button>
				<Button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
					}
					className={
						editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
					}>
					H3
				</Button>
				<Button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 4 }).run()
					}
					className={
						editor.isActive('Heading', { level: 4 }) ? 'is-active' : ''
					}>
					h4
				</Button>

				<Button
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={editor.isActive('bulletList') ? 'is-active' : ''}>
					<List
						size={10}
						color='#e5f7ff'
						strokeWidth={1.75}
						absoluteStrokeWidth
					/>
				</Button>
				<Button
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={editor.isActive('orderedList') ? 'is-active' : ''}>
					<ListOrdered
						size={10}
						color='#e5f7ff'
						strokeWidth={1.75}
						absoluteStrokeWidth
					/>
				</Button>

				<Button
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
					className={editor.isActive('blockquote') ? 'is-active' : ''}>
					blockquote
				</Button>
				<Button
					onClick={() => editor.chain().focus().setHorizontalRule().run()}>
					horizontal rule
				</Button>
				<Button onClick={() => editor.chain().focus().setHardBreak().run()}>
					hard break
				</Button>
				<Button
					onClick={setLink}
					className={editor.isActive('link') ? 'is-active' : ''}>
					setLink
				</Button>
				<Button
					onClick={() => editor.chain().focus().unsetLink().run()}
					disabled={!editor.isActive('link')}>
					unsetLink
				</Button>
				<Button
					onClick={addImage}
					className={editor.isActive('image') ? 'is-active' : ''}>
					Pic
				</Button>

				<Button
					onClick={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().chain().focus().undo().run()}>
					undo
				</Button>
				<Button onClick={() => editor.chain().focus().redo().run()}>
					redo
				</Button>
				<Button
					onClick={() => editor.chain().focus().setColor('#958DF1').run()}
					className={editor.isActive('italic') ? 'is-active' : ''}>
					purple
				</Button>
				{/* <Button
					onClick={() => editor.chain().focus().setFontFamily('Inter').run()}
					className={
						editor.isActive('textStyle', { fontFamily: 'Inter' })
							? 'is-active'
							: ''
					}>
					Inter
				</Button>
				<Button
					onClick={() =>
						editor
							.chain()
							.focus()
							.setFontFamily('Comic Sans MS, Comic Sans')
							.run()
					}
					className={
						editor.isActive('textStyle', {
							fontFamily: 'Comic Sans MS, Comic Sans',
						})
							? 'is-active'
							: ''
					}>
					Comic Sans
				</Button>
				<Button
					onClick={() => editor.chain().focus().setFontFamily('serif').run()}
					className={
						editor.isActive('textStyle', { fontFamily: 'serif' })
							? 'is-active'
							: ''
					}>
					serif
				</Button>
				<Button
					onClick={() =>
						editor.chain().focus().setFontFamily('monospace').run()
					}
					className={
						editor.isActive('textStyle', { fontFamily: 'monospace' })
							? 'is-active'
							: ''
					}>
					monospace
				</Button>
				<Button
					onClick={() => editor.chain().focus().setFontFamily('cursive').run()}
					className={
						editor.isActive('textStyle', { fontFamily: 'cursive' })
							? 'is-active'
							: ''
					}>
					cursive
				</Button>
				<Button onClick={() => editor.chain().focus().unsetFontFamily().run()}>
					unsetFontFamily
				</Button> */}
			</div>
		</MaxWidthWrapper>
	);
};
