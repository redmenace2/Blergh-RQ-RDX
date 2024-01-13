import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';

export default function Page({ params }: { params: { id: string[] } }) {
	const queryString = decodeURIComponent(params.id[0]);

	return (
		<MaxWidthWrapper>
			<div className='text-white tex-4xl'>{queryString}</div>
		</MaxWidthWrapper>
	);
}
