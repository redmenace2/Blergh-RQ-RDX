import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import GetAllArticles from '@/components/getAllArticles';

export default async function PublicPage() {
	return (
		<MaxWidthWrapper>
			<GetAllArticles />
		</MaxWidthWrapper>
	);
}
