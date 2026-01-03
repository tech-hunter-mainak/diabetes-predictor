import type { Handle, RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

/**
 * Public routes that do NOT require authentication
 * Add onboarding / landing pages here if needed
 */
const PUBLIC_ROUTES = ['/auth', '/auth/login', '/auth/signup'];

/**
 * Attach user session to event.locals
 * This is the single source of truth for auth state
 */
async function getUserFromSession(event: RequestEvent) {
    const sessionToken = event.cookies.get('session');

    if (!sessionToken) {
        return null;
    }

    try {
        /**
         * NOTE:
         * Replace this with a real call to your backend later.
         * For now, assume sessionToken is a JWT or opaque token.
         */
        const res = await fetch('http://localhost:8000/auth/validate', {
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        });

        if (!res.ok) return null;

        const user = await res.json();
        return user;
    } catch {
        return null;
    }
}

export const handle: Handle = async ({ event, resolve }) => {
    /**
     * Load user into locals
     * Accessible in all +page.server.ts files
     */
    event.locals.user = await getUserFromSession(event);

    const pathname = event.url.pathname;

    const isPublicRoute = PUBLIC_ROUTES.some((route) =>
        pathname.startsWith(route)
    );

    /**
     * Redirect unauthenticated users
     */
    if (!event.locals.user && !isPublicRoute) {
        throw redirect(303, '/auth/login');
    }

    /**
     * Security headers (important for medical apps)
     */
    const response = await resolve(event, {
        filterSerializedResponseHeaders: (name) =>
            name === 'content-type'
    });

    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return response;
};
