import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {AuthContextProvider} from './auth/firebase/firebaseContext';
import './globals.css';
import {cn} from '@/lib/utils';
import Link from 'next/link';

// import { Provider } from '@/_RQuery/provider'
import {MaxWidthWrapper} from '@/style_components/maxWidthWrapper';
import {auth} from './auth/firebase/firebaseContext';
import {Provider} from '@/_RQuery/provider';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html
			lang='en'
			className='h-full'>
			<body
				className={cn(
					'relative h-full font-sans antialiased text-base bg-slate-600'
				)}>
				<header className='w-full h-10 bg-blue-500 my-1'>
					<span className='text-2xl text-blue-200 mx-10 align-text-bottom'>
						<Link href='/'> HOME </Link>{' '}
						<Link href='/components'> CONTENTS </Link>
					</span>
				</header>
				<MaxWidthWrapper>
					<main className='relative flex flex-col min-h-screen'>
						<div className='flex-grow flex-1'>
							<Provider>
								<AuthContextProvider>{children}</AuthContextProvider>
							</Provider>
						</div>
					</main>
				</MaxWidthWrapper>
				<footer> FOOTER </footer>
			</body>
		</html>
	);
}
