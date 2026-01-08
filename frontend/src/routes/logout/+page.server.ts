// src/routes/logout/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    // Delete your own app cookies
    cookies.delete('session', { path: '/' });
    cookies.delete('user', { path: '/' });

    // If using Supabase SSR cookies
    cookies.delete('sb-access-token', { path: '/' });
    cookies.delete('sb-refresh-token', { path: '/' });
    cookies.delete('sb-auth-token', { path: '/' });

    // Redirect to login page
    throw redirect(302, '/auth/login');
};
