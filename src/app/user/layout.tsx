import {MaxWidthWrapper} from '@/style_components/maxWidthWrapper';
import {useAuthContext} from '../auth/firebase/firebaseContext';
import {redirect} from 'next/navigation';
import {auth} from '../auth/firebase/firebaseContext';
import Link from 'next/link';
import {Button} from '@/style_components/ui/button';

export default async function NestedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<MaxWidthWrapper>
			<span className='text-orange-500 text-2xl'>B</span>
			<span className='text-red-200 text-2xl'>le</span>
			<span className='text-yellow-200'>r</span>
			<span className='text-cyan-200'>r</span>
			<span className='text-green-400 text-3xl'>gh</span>

			{''}
			<div className='my-10'>{children} </div>

			<Link href='/auth/signOut'>
				{' '}
				<Button className='text-white text-2xl'> Sign Out </Button>
			</Link>
		</MaxWidthWrapper>
	);
}
