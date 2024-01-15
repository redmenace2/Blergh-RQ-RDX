import { PrismaClient } from '@prisma/client';
import {
	createArticleType,
	createCommentType,
} from '../../../../../prisma/appTypes';
const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
	try {
		const newCommentProps: createCommentType = await req.json();

		console.log(
			'Commebnt Data',
			'Subject Article Title',
			newCommentProps.subjectArticleTitle,
			'\n',
			'Subject Article Id:',
			newCommentProps.subjectArticleId,
			'\n',
			'Comment Author',
			'\n',
			newCommentProps.newCommentAuthor
		);

		const response = await prisma.comment.create({
			data: {
				commentText: newCommentProps.newCommentText,
				createdAt: newCommentProps.timestamp,
				subjectArticle: {
					connect: {
						id: newCommentProps.subjectArticleId,
					},
				},

				commentAuthor: {
					connect: {
						id: newCommentProps.newCommentAuthorId,
					},
				},
				parentComment: {
					connect: {
						id: newCommentProps.parentCommentId,
					},
				},
				childComment: {
					connect: {
						id: newCommentProps.childCommentId,
					},
				},
			},
		});

		return new Response(JSON.stringify(newCommentProps));
	} catch (err) {
		console.log('Server error', err);
	}
}
