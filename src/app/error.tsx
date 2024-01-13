'use client';

import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';

export default function error() {
	return (
		<MaxWidthWrapper>
			<span className='text-red-600 text-6xl'>Error !!!</span>
		</MaxWidthWrapper>
	);
}
