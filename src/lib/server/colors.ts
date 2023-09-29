import { db } from '$lib/server/db';

export type ColorData = {
	red: boolean;
	green: boolean;
	blue: boolean;
};

const collectionName = 'colors';
export const collection = db.collection<ColorData>(collectionName);
