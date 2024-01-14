import axios from 'axios';
import { updateArticleType } from '../../../prisma/appTypes';

export const RQFN_updateArticle = async (updateProps: updateArticleType) => {
	try {
		const response = await axios.post(
			'http://localhost:3000/api/updateArticle',
			updateProps
		);

		const res = JSON.stringify(response.data);
	} catch (err) {
		console.log(err);
	}
};
