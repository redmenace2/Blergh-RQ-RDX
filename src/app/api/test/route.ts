export async function POST(req: Request, res: Response) {
	if (req.method === 'POST') {
		try {
			const requestData = await req.json();
			console.log('back :', requestData);

			return new Response(JSON.stringify({ requestData }));
		} catch (error) {
			console.error('Error processing request:', error);
		}
	} else {
		throw new Error('Method Not Allowed');
	}
}
