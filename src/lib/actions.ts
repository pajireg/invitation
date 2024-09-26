"use server";

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function createComment(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    password: formData.get('password'),
    message: formData.get('message'),
  };
  const name = (rawFormData.name as string) ?? '';
  const password = (rawFormData.password as string) ?? '';
  const message = (rawFormData.message as string) ?? '';

  const date = new Date().toISOString();

  try {
    await sql`
      INSERT INTO comments (name, password, message, date) VALUES
      (${name}, ${password}, ${message}, ${date});
    `;
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: 메시지 전송 실패',
    };
  }
  revalidatePath('/');
}

export async function deleteComment(id: string) {
  try {
    await sql`
      DELETE FROM comments WHERE id = ${id};
    `;
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: 메시지 삭제 실패',
    };
  }
  revalidatePath('/');
}
