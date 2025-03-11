import { pgTable, varchar, timestamp, integer } from 'drizzle-orm/pg-core';

export const service = pgTable('service', {
  id: integer().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
