import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';

export default function Loading() {
	return (
		<MaxWidthWrapper className='flex flex-col item-center'>
			<p className='text-slate-400 text-5xl my-12'> LOADING ... </p>
		</MaxWidthWrapper>
	);
}
