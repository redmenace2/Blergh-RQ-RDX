import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const GET = async (req: Request, res: Response) => {
	try {
		console.log('request received');
		const articleDB = await prisma.articles.findMany({
			select: {
				id: true,
				articleTitle: true,
				articleSubtitle: true,
				articleText: true,
				createdAt: true,
				author: {
					select: {
						id: true,
						name: true,
						password: false,
					},
				},
			},
			orderBy: { createdAt: 'desc' },
		});

		console.log(
			articleDB.map((article) =>
				console.log(
					'Article Title: ',
					article.articleTitle,
					' Author: ',
					article.author.name
				)
			)
		);
		return new Response(JSON.stringify(articleDB));
	} catch (err) {
		console.log('Server error');
	}
};
//
