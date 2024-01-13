/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// 'use client';

// import React, { Children } from 'react';
import { MaxWidthWrapper } from '@/style_components/maxWidthWrapper';
import parse, {
	HTMLReactParserOptions,
	Element,
	attributesToProps,
	domToReact,
} from 'html-react-parser';

import React from 'react';
const Ssrc =
	'https://www.rspca.org.au/sites/default/files/blog-image/shutterstock_685368169.jpg';

export default function YourComponent() {
	// The string containing HTML with img tags
	const htmlString = `<div>
						<p>Some Other Text</p>
                        <img src='https://www.rspca.org.au/sites/default/files/blog-image/shutterstock_685368169.jpg'/>
						<img style="text-align: center" src="https://media.australian.museum/media/dd/images/Delicate_Owl_mobil.width-1600.format-jpeg.jpegquality-60.00832d3.jpg">
                    	 <p>More text</p>
                     	</div>`;

	const imgRegex: RegExp = /src=["'](.*?)["'].*?>/g;
	const imgTags = htmlString.match(imgRegex);

	const jsxElements = imgTags?.map((tag, index) => {
		const srcMatch = tag.match(/["'](.*?)["']/)![0].replace(/['"]/g, '');

		return (
			<div
				key={index}
				className='text-white text-2xk'>
				<img
					src={srcMatch as unknown as string}
					style={{ width: '200px', height: 'auto' }}
				/>
				srcMatch <div className='text-blue-400 text-sm'>{srcMatch}</div>
				<br />
			</div>
		);
	});

	return (
		<MaxWidthWrapper className='flex flex-col gap-12 item-center'>
			<div>{jsxElements}</div>
		</MaxWidthWrapper>
	);
}
