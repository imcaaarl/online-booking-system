import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import dotenv from 'dotenv';

dotenv.config();

if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL environment variable is not set');
}

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL!,
});

export const db = drizzle({ client: pool });
