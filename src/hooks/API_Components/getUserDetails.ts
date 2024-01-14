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
