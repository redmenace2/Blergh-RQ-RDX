'use client';

import {useState} from 'react';
import signIn from '../firebase/signIn';
import {useRouter} from 'next/navigation';
import React from 'react';

import {MaxWidthWrapper} from '@/style_components/maxWidthWrapper';

export default function Sign_In() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [err, setErr] = useState(true);

	const handleSignInForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const {result, error} = await signIn(email, password);

		if (!error) {
			console.log('sign  in error');
			console.log(result, 'SignIn Successful');
			router.push(`/user/${email}`);
		} else {
			setErr(false);
			alert('Incorrect Credential');
			return router.push('/');
		}

		router.push(`/user/${email}`);
	};
	return (
		<MaxWidthWrapper>
			<div className='relative isolate px-6 pt-14 lg:px-8'>
				<div className='wrapper'>
					<div className='form-wrapper'>
						<h1 className='mt-60 mb-30'>Sign up</h1>
						<div style={{color: 'white'}}>
							<p> USER Cred</p>
						</div>
						<form
							onSubmit={handleSignInForm}
							className='form'>
							<label htmlFor='email'>
								<p>Email</p>
								<input
									style={{color: 'black'}}
									onChange={(e) => setEmail(e.target.value)}
									required
									type='email'
									name='email'
									value={email}
									id='email'
									placeholder='example@mail.com'
								/>
							</label>
							<div> {email} </div>
							<label htmlFor='password'>
								<p>Password</p>
								<input
									style={{color: 'black'}}
									onChange={(e) => setPassword(e.target.value)}
									required
									type='password'
									name='password'
									id='password'
									placeholder='password'
								/>
							</label>

							<button
								type='submit'
								style={{
									width: '100px',
									height: '50x',
									borderStyle: 'solid',
									borderWidth: '3px',
									borderColor: 'white',
								}}
								className='text-yellow-200'>
								Sign IN
							</button>
						</form>

						{!err ? <div className='text-gray-100'> ERROR </div> : null}
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
}
