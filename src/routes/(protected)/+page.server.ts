import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const actions = {
	default: ({ cookies }) => {
		cookies.delete('session', { path: '/' });
		throw redirect(303, '/signin');
	}
};
