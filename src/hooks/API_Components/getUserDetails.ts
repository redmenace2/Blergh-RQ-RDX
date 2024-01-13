import axios from 'axios';
import { userWithContent } from '../../../prisma/appTypes';

export const RQFN_getUserData = async ({
	email,
}: {
	email: string;
}): Promise<userWithContent> => {
	const res = await axios.post(
		'http://localhost:3000/api/getUser',
		JSON.stringify(email)
	);
	const userData = res.data;
	return userData;
};

// export const getUserData = async (
// 	userEmail: string
// ): Promise<userWithContent | null> => {
// 	const response = await axios.post(
// 		'http://localhost:3000/api/getUser',
// 		userEmail
// 	);
// 	if (response.status === 200) {
// 		const received = await response.data;
// 		return await received;
// 	} else {
// 		return null;
// 	}
// };
// export const getUserDataFn = async (userEmail: string) => {
// 	const response = await axios.post(
// 		'http://localhost:3000/api/getUser',
// 		userEmail
// 	);

// 	if (response.status === 200) {
// 		const received = await response.data;
// 		return await received;
// 	} else {
// 		return null;
// 	}
// };
