import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';

export default function page({ params }: { params: { id: string } }) {
	return (
		<MaxWidthWrapper>
			<div className='text-white text-5xl'>{params.id}</div>
		</MaxWidthWrapper>
	);
}
