'use client';

import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseContext';
import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
export default function SignOut() {
	delay(5000);

	console.log(auth.name, 'Signing Out');
	signOut(auth).then(() => {
		console.log(auth.currentUser?.email, 'Sign Out Successful');
	});

	return (
		<MaxWidthWrapper>
			<div className='text-white text-5xl'>Signed Out</div>
		</MaxWidthWrapper>
	);
}
