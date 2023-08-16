import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	console.log('Protected Cookies', cookies.get('session'));
	if (!cookies.get('session')) {
		console.log('Redirecting to signin');
		throw redirect(303, '/signin');
	}
	return {};
}) satisfies PageServerLoad;
