import { PrismaClient } from '@prisma/client';
import { createArticleType } from '../../../../../prisma/appTypes';
const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
	try {
		const newArticleProps: createArticleType = await req.json();

		console.log(
			'Create Article Data',

			'id:',
			newArticleProps.authorId,
			'\n',
			'Title:',
			newArticleProps.newArticleTitle,
			'\n',
			'Subtitle',
			newArticleProps.newArticleSubtitle
		);

		const response = await prisma.articles.create({
			data: {
				articleTitle: newArticleProps.newArticleTitle,
				articleSubtitle: newArticleProps.newArticleSubtitle,
				articleText: newArticleProps.newArticleText,
				author: { connect: { id: newArticleProps.authorId } },
			},
		});

		return new Response(response.id + ' ' + response.articleTitle + ' Created');
	} catch (err) {
		console.log('Server error', err);
	}
}
