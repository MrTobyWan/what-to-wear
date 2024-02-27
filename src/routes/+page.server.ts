import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

import { collection } from '$lib/server/colors';
import { error } from '@sveltejs/kit';

const today = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');

	return year + '-' + month + '-' + day;
};

// Function to fetch colors for the current date
const fetchColors = async () => {
	// Check if a document for the current date exists
	const existingData = await collection.findOne({ date: today() });

	// If a document exists, return it; otherwise, insert a new document with default values
	if (existingData) {
		return existingData;
	} else {
		const defaultData = {
			red: false,
			green: false,
			blue: false,
			date: today(),
		};
		await collection.insertOne(defaultData);
		return defaultData;
	}
};

export const load = (async () => {
	const colors = await fetchColors();

	if (!colors) {
		throw error(500, 'Internal Server Error');
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

		const existingData = await collection.findOne({ date: today() });

		if (!existingData) {
			// Insert a new document with default values if it doesn't exist
			const defaultData = {
				red: false,
				green: false,
				blue: false,
				date: today(),
			};
			await collection.insertOne(defaultData);
		}

		await collection.updateOne(
			{ date: today() },
			{
				$set: {
					red: data.has('red'),
					green: data.has('green'),
					blue: data.has('blue'),
				},
			}
		);

		return { success: true };
	},
} satisfies Actions;
