import { db } from '$lib/server/db';

export type ColorData = {
	red: boolean;
	green: boolean;
	blue: boolean;
};

export const collection = db.collection<ColorData>('colors');
