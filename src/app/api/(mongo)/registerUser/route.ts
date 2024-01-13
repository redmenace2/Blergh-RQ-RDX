import { PrismaClient } from '@prisma/client';

import { userType } from '../../../../../prisma/appTypes';

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
	try {
		const InputData: userType = await req.json();
		const data = await prisma.user.create({
			data: {
				name: InputData.name,
				userName: InputData.userName,
				email: InputData.email,
				password: InputData.password,
				user_id: InputData.user_id,
			},
		});

		console.log(data, 'Created');
	} catch (err) {
		console.log('Error', err);
	}

	return new Response('USER CREATINO SUCCESFUL');
}
