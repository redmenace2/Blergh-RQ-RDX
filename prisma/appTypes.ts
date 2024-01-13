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
};

export type createArticleType = {
	authorId: string;
	newArticleTitle: string;
	newArticleSubtitle: string;
	newArticleText: string;
};

export type updateArticleType = {
	articleId: string;
	articleTitle: string;
	articleSubtitle: string;
	articleText: string;
};

export interface userWithContent extends userType {
	content: articleType[];
}
