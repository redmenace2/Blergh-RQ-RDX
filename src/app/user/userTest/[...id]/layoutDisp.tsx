import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import { fetchArticle } from '@/app/components/userAPIComponents/getArticle';
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
