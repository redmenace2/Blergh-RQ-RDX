import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import GetAllArticles from '@/components/publicPageComponents/getAllArticles';

export default async function PublicPage() {
	return (
		<MaxWidthWrapper>
			<GetAllArticles />
		</MaxWidthWrapper>
	);
}
