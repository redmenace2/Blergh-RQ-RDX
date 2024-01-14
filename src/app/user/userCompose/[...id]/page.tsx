import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import Make_Break_Blergh from '@/components/composeArticle';

import {
	QueryClient,
	dehydrate,
	HydrationBoundary,
} from '@tanstack/react-query';
import { PrismaClient } from '@prisma/client';
import React from 'react';
import { articleType } from '../../../../../prisma/appTypes';
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
