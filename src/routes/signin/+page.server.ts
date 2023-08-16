import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	console.log('Signin Cookies', cookies.get('session'));
	if (cookies.get('session')) {
		console.log('Redirecting to protected');
		throw redirect(303, '/');
	}
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: ({ cookies }) => {
		cookies.set('session', 'true', { path: '/' });
		throw redirect(303, '/');
	}
};
