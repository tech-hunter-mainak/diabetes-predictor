import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Adjust cookie names based on actual Supabase SSR cookies
    const access = event.cookies.get('sb-access-token');
    const refresh = event.cookies.get('sb-refresh-token');

    const isLoggedIn = Boolean(access && refresh);
    const path = event.url.pathname;

    if (isLoggedIn && path.startsWith('/auth')) {
        throw redirect(303, '/dashboard');
    }

    if (!isLoggedIn && path.startsWith('/dashboard')) {
        throw redirect(303, '/auth/login');
    }

    return await resolve(event);
};
