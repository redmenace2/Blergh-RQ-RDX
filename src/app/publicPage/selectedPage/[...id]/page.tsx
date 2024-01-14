'use client';

import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import SelectedArticle from '@/components/getSelectedArticle';

export default function Article({ params }: { params: { id: string } }) {
	return (
		<MaxWidthWrapper className='flex flex-col gap-4'>
			<SelectedArticle params={params} />
		</MaxWidthWrapper>
	);
}
