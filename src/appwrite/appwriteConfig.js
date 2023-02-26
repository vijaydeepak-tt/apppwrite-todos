import { Client, Account, Databases } from 'appwrite';

const CLIENT_ID = '63f9d459c2002713df7f';
const CLIENT_URL = 'http://localhost/v1';
export const DATABASE_ID = '63f9d4861ffd54ad4a29';
export const COLLECTION_ID = '63f9d4935f6658cedb28';

const client = new Client();
client.setEndpoint(CLIENT_URL).setProject(CLIENT_ID);

// Account
export const account = new Account(client);

// Database
export const databases = new Databases(client);
