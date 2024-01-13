export async function POST(req: Request, res: Response) {
	try {
		const internalVal = await res.json();
		const received = internalVal.data;
		console.log('Received: ', received);

		return new Response('RECEIVED');
	} catch (err) {
		console.log(err);
	}
}
