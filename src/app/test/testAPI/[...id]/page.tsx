import axios from 'axios';
import React from 'react';

export default async function TestAPI({ params }: { params: { id: string } }) {
	const response = await axios.post('http://localhost:3000/api/test', {
		query: 'TESTING ROUTE',
	});
	const data = response.data;
	console.log(data);
	return (
		<React.Fragment>
			<div className='text-white text-5xl'>{params.id}</div>

			<div className='text-red-400 text-4xl'> {data.requestData.query} </div>
		</React.Fragment>
	);
}
