import { db } from '$lib/server/db';
import type colorDataJson from './../../colors.json';

// Generate a type for the JSON data keys
type ColorDataKeys = keyof typeof colorDataJson;

// Create a mapped type to generate the ColorData type dynamically
type ColorData = {
	[K in ColorDataKeys]: boolean;
};

const collectionName = 'colors';
export const collection = db.collection<ColorData>(collectionName);
