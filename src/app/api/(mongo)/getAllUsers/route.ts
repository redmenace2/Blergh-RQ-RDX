import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
//
export const GET = async (req: Request, res: Response) => {
	try {
		const response = await prisma.user.findMany({
			include: {
				content: {
					select: {
						articleTitle: true,
						articleSubtitle: true,
						createdAt: true,
						id: true,
					},
				},
				comments: {
					select: {
						commentText: true,
						createdAt: true,
						id: true,
					},
				},
			},
		});

		delay(200);
		const userArray = response;
		console.log(userArray.map((data, key) => data.name));
		return new Response(JSON.stringify(response));
	} catch (err) {
		console.log('Server Error', err);
	}
};
