import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';

export const LayoutDisplay = () => {
	return (
		<MaxWidthWrapper>
			<div className='text-white text-4xl'>
				Nested Layout Pg
				<div className='text-red-500 text-2xl'>{SetMe('VALUE')} </div>
			</div>
		</MaxWidthWrapper>
	);
};

export const SetMe = async (Val: string) => {
	return Val;
};
