'use client';
import {useRouter} from 'next/navigation';
import {onAuthStateChanged, getAuth, User} from 'firebase/auth';
import firebase_app from './config';
import React, {useEffect, useState, createContext, useContext} from 'react';

export const auth = getAuth(firebase_app);

export const authContext = createContext({});

export const useAuthContext = () => useContext(authContext);

export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log(user);
			if (user) {
				setUser(user);
			} else {
				console.log('Not Authed');
				router.push('/');
				setUser(null);
			}
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	if (!user) {
		return (
			<authContext.Provider value={{user, useAuthContext}}>
				{children}
			</authContext.Provider>
		);
	}

	if (loading) {
		return <div className='text-gray-100 text-4xl'> ...Loadng </div>;
	}

	if (!user) {
		return <div className='text-gray-100 text-4xl'> Unauthorised </div>;
	}

	return (
		<authContext.Provider value={{user, useAuthContext}}>
			{children}
		</authContext.Provider>
	);
};
