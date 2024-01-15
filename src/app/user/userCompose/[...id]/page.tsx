import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import Make_Break_Blergh from '@/components/userPageComponents/composeArticle';

import React from 'react';

export default async function Article({
	params,
}: {
	params: { id: string[] };
}) {
	return (
		<MaxWidthWrapper>
			<div>
				<Make_Break_Blergh params={params} />
			</div>
		</MaxWidthWrapper>
	);
}
