import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { collection } from '$lib/server/colors';

export const load = (async ({ params }) => {
	const fetchColors = async () => {
		return collection.findOne({});
	};

	return {
		colors: fetchColors(),
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		console.log(data.get('green'));
	},
} satisfies Actions;
