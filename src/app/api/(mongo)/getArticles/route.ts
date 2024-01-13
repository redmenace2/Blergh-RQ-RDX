import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const POST = async (req: Request, res: Response) => {
	try {
		const inputData = await req.json();
		console.log('getArticle input :', inputData.articleID);

		const article = await prisma.articles.findUnique({
			where: { id: inputData.articleID },
			include: { author: true },
		});

		return new Response(JSON.stringify(article?.articleText));
	} catch (err) {
		console.log('Server error');
	}
};
//
