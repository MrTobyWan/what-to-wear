import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

import { collection } from '$lib/server/colors';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	const fetchColors = async () => {
		return collection.findOne({ _id: new ObjectId('64a679e69d75fa88bc668d7d') });
	};

	const colors = await fetchColors();

	if (!colors) {
		throw error(404, 'not found');
	}

	return {
		red: colors.red,
		green: colors.green,
		blue: colors.blue,
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		await collection.updateOne({ _id: new ObjectId('64a679e69d75fa88bc668d7d') }, { $set: { red: data.has('red'), green: data.has('green'), blue: data.has('blue') } });

		return { success: true };
	},
} satisfies Actions;
