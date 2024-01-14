import { auth } from '@/app/auth/firebase/firebaseContext';

export type userType = {
	user_id: number;
	name: string;
	email: string;
	userName: string;
	password: string;
	id: string;
};

export type articleType = {
	articleTitle: string;
	articleSubtitle: string;
	articleText: string;
	id: string;
	createdAt: Date;
};

export type comment = {
	commentText: string;
	id: string;
	createdAt: Date;
};

export type createArticleType = {
	authorId: string;
	newArticleTitle: string;
	newArticleSubtitle: string;
	newArticleText: string;
	timestamp: Date;
};

export type updateArticleType = {
	articleId: string;
	articleTitle: string;
	articleSubtitle: string;
	articleText: string;
	timestamp: Date;
};

export type createCommentType = {
	subjectArticleId: string;
	subjectCommentId: string;
	newCommentText: string;
	timestamp: string;
};

export interface userWithContent extends userType {
	content: articleType[];
}

export interface userWithContentAndComments extends userType {
	content: articleType[];
	comments: comment[];
}

export interface ContentWithAuthor extends articleType {
	author: userType;
}
