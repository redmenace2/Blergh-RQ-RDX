'use client';

import { useState } from 'react';
import signUp from '../firebase/signUp';
import { useRouter } from 'next/navigation';
import React from 'react';
import { userType } from '../../../../prisma/appTypes';
import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import { Button } from '@/style_components/ui/button';
import { Input } from '@/style_components/ui/input';
import { createUser } from '../createUser/createUser';

export default function UserSignUp() {
	const router = useRouter();
	const [newUser, setNewUSer] = useState<userType>({
		name: '',
		userName: '',
		user_id: 0,
		email: '',
		password: '',
		id: '',
	});

	const handleForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (newUser?.email && newUser?.password) {
			const { result, error } = await signUp(newUser.email, newUser.password);
			if (error) {
				return <> Error Signing Up </>;
			}
			if (result) {
				console.log('Result', result);
				createUser(newUser);

				return router.push(`/user/${newUser.email}`);
			}
		} else {
			console.log('No input');
		}
	};

	const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewUSer((prev) => ({ ...prev!, [name]: value }));
	};

	return (
		<MaxWidthWrapper>
			<div className='relative isolate px-6 pt-14 lg:px-8'>
				<div className='wrapper'>
					<div className='form-wrapper'>
						<h1 className='mt-60 mb-30'>Sign up</h1>

						<form
							onSubmit={handleForm}
							className='form'>
							<label htmlFor='User Name'>
								<p>Name</p>
								<Input
									key={'name'}
									className='text-green-900 w-50'
									style={{ color: 'black' }}
									onChange={handleUserInput}
									name='name'
									value={newUser?.name}
									id='name'
									placeholder='Your Name'
								/>
							</label>

							<label htmlFor='User Name'>
								<p>User Name</p>
								<Input
									key={'user name'}
									className='text-green-900 w-50'
									style={{ color: 'black' }}
									onChange={handleUserInput}
									name='userName'
									value={newUser?.userName}
									id='user name'
									placeholder='Your Handle'
								/>
							</label>

							<label htmlFor='email'>
								<p>Email</p>
								<Input
									key={'email'}
									className='text-green-900 w-50'
									style={{ color: 'black' }}
									onChange={handleUserInput}
									required
									type='email'
									name='email'
									value={newUser?.email}
									id='email'
									placeholder='example@mail.com'
								/>
							</label>

							<label htmlFor='password'>
								<p>Password</p>
								<Input
									key={'password'}
									className='text-red-800 w-50'
									onChange={handleUserInput}
									required
									type='password'
									name='password'
									id='password'
									placeholder='password'
								/>
							</label>

							<div>
								<Button
									variant='ghost'
									className=' bg-green-200 w-20 my-10'>
									Sign up
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
}
