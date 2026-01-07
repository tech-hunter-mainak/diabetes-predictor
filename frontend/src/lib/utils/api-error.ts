export function apiError(message: string, status = 400) {
	return new Response(JSON.stringify({ success: false, message }), {
		status,
		headers: { 'Content-Type': 'application/json' }
	});
}

export function apiSuccess(data: unknown, status = 200) {
	return new Response(JSON.stringify({ success: true, data }), {
		status,
		headers: { 'Content-Type': 'application/json' }
	});
}
