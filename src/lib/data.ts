import { sql } from '@vercel/postgres';
import { Comment } from './definitions';

export async function fetchComments() {
  try {
    const data = await sql<Comment>`SELECT * FROM comments`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comments.');
  }
}
