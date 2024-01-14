import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
//
export const POST = async (req: Request, res: Response) => {
	try {
		const inputData = decodeURIComponent(await req.json());
		console.log('User entry ref:', inputData);
		const response = await prisma.user.findFirst({
			where: { email: inputData },
			include: {
				content: {
					select: {
						articleTitle: true,
						articleSubtitle: true,
						createdAt: true,
						id: true,
					},
				},
			},
		});
		await delay(200);
		console.log(response?.content);
		return new Response(JSON.stringify(response));
	} catch (err) {
		console.log('Server Error', err);
	}
};
