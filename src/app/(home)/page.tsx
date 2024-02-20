'use client';

import Link from 'next/link';
import {MaxWidthWrapper} from '@/style_components/maxWidthWrapper';
import {Button} from '@/style_components/ui/button';
import {auth} from '../auth/firebase/firebaseContext';
import {useState} from 'react';
import '@/style_components/animate.css';

export default function Home() {
	// const [authed, setAuthed] = useState<boolean | null>(null);
	// const Authed = (isAuthed: typeof auth) => {
	// 	if (isAuthed.currentUser === null) console.log(isAuthed.currentUser);
	// 	setAuthed(false);
	// 	console.log(authed as boolean);
	// };

	return (
		<MaxWidthWrapper>
			<div className='py-20 mx-auto text-center flex flex-col gap-8 max-w-3xl item-center'>
				<div
					className='isolate aspect-video w-120 h-48 rounded-xl bg-blue-600/40 justify-center shadow-lg ring-5
					 ring-blue-900/30 animate-pulse z-10'>
					<h1 className='text-8xl font-bold tracking-tight text-grey-900 sm:text-8xl text-blue-500, p-8'>
						<span>B</span>
						<span
							className=' text-red-200 text-12xl '
							id='colChange-1'>
							le
						</span>
						<span className='text-yellow-200 text-7xl'>r</span>
						<span className='text-cyan-200 text-7xl'>r</span>
						<span className='text-green-400 text-10xl animate-rollc'>gh.</span>
					</h1>
				</div>

				{/* <AnimationApp /> */}
				<div className='flex flex-row my-12 gap-8 justify-between pl-48 pr-48'>
					<div>
						<Link href='/auth/userSignUp'>
							<p
								className=' text-white text-2xl 
							isolate aspect-video rounded-xl bg-slate-400/30 
							 shadow-lg ring-6 ring-black/5 h-12 w-44 pt-2 pl-6 pr-6 hover:bg-white/50'>
								{' '}
								SIGN-UP
							</p>
						</Link>
					</div>

					<div>
						<Link href='/auth/userSignIn'>
							<p
								className='text-orange-400 text-2xl 
							isolate aspect-video  rounded-xl bg-cyan-600/30  
							shadow-lg ring-6 ring-black/5 h-12 w-44 pt-2 pl-6 pr-6 hover:bg-white/50 active:bg-white active:text-3xl'>
								{' '}
								SIGN-IN
							</p>
						</Link>
					</div>
				</div>

				<div>
					<Button
						variant='ghost'
						className=' bg-red-700 w-100 transition-opacity'>
						<p className='text-red-300 text-3xl'>
							{' '}
							<Link href='/publicPage'> PUBLIC PAGE</Link>
						</p>
					</Button>
				</div>
				<div>
					<Button
						variant='ghost'
						className=' bg-red-700 w-100 transition-opacity'>
						<Link href='/test/test1/TEST'>TEST PAGE </Link>
					</Button>
				</div>
				<div>
					<Button
						variant='ghost'
						className=' bg-red-700 w-100'>
						<Link href='/test/testAPI/API_TEXT'>TEST ROUTE</Link>
					</Button>
				</div>

				<div>
					<Button
						variant='ghost'
						className=' bg-sky-700 w-100'>
						<Link href={`/components/Tiptap/100`}> Tiptap </Link>
					</Button>
				</div>

				<div>
					<Button
						variant='ghost'
						className=' bg-sky-700 w-100'>
						<Link href={`/test`}> Playground </Link>
					</Button>
				</div>
				<div>
					<Button
						variant='ghost'
						className=' bg-green-400 w-48 transition-opacity'>
						<p className='text-red-300 text-3xl'>
							{' '}
							<Link href='/admin'> Admin PAGE</Link>
						</p>
					</Button>
				</div>
				{auth === null ? (
					<div className='text-gray-100'> wait </div>
				) : (
					<div className='text-gray-100'> Auhtorisation Needed </div>
				)}
			</div>
		</MaxWidthWrapper>
	);
}
