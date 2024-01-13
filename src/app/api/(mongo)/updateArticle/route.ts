import { PrismaClient } from '@prisma/client';
import { updateArticleType } from '../../../../../prisma/appTypes';
const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
	try {
		const articleProps: updateArticleType = await req.json();

		console.log(
			'update input',
			'id:',
			articleProps.articleId,
			'Title:',
			articleProps.articleTitle,
			'Sub-Title:',
			articleProps.articleSubtitle
		);

		const response = await prisma.articles.update({
			where: { id: articleProps.articleId },
			data: {
				articleTitle: articleProps.articleTitle,
				articleSubtitle: articleProps.articleSubtitle,
				articleText: articleProps.articleText,
			},
		});
		console.log(response.articleText, 'updated');
		return new Response('Article Updated');
	} catch (err) {
		console.log('Server error', err);
	}
}
