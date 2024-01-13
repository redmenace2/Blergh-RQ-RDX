import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';

export default function NestedLayout2({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<MaxWidthWrapper className='flex flex-col gap-12 p-10 items-center'>
			<h1 className='text-slate-400 text-4xl'>
				{'<'} TEST PAGES {'>'}
			</h1>
			<div>{children} </div>
		</MaxWidthWrapper>
	);
}
