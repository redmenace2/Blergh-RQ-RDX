import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import GetAllUSers from '@/components/adminPageComponents/getAllUSers';
export default function adminPage() {
	return (
		<MaxWidthWrapper>
			<div className='flex flex-col gap-4  justify-start'>
				<h1 className='text-white text-4xl'> ADMIN PAGE </h1>
				<GetAllUSers />
			</div>
		</MaxWidthWrapper>
	);
}
