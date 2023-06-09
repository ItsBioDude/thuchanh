import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const session = await getSession();
	const { data: data, error } = await supabase
		.from('main')
		.select('id, created_at, lhs, seven_lines')
		.gt('lhs', 0);
	return {
		dates: data ?? [],
		session:
			session &&
			(session.user.email == 'loctran101106@gmail.com' ||
				session.user.email == 'locphuc016@gmail.com' ||
				session.user.email == 'trungphuc016@gmail.com'),
		// lhsData: dataLHS ?? [],
	};
	// if (session) {
	// 	throw redirect(303, '/account');
	// }

	// return { url: url.origin };
};
