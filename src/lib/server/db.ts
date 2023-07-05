import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

if (!env.DB_URI) {
	throw new Error('Invalid/Missing environment variable: "DB_URI"');
}

const uri = env.DB_URI;
const options = { tlsAllowInvalidCertificates: true, connectTimeoutMS: 2000 };

const client = new MongoClient(uri, options);

export const clientPromise = client.connect();
export const db = client.db('colorDB');
