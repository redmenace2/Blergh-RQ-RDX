import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

export const MaxWidthWrapper = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				'mx-auto w-full max-w-screen-xl px-2.5 md:min-w-auto',
				className
			)}>
			{children}
		</div>
	);
};
