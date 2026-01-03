// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: User | null;
		}

		interface PageData {
			user?: User | null;
		}

		interface Error {
			message: string;
			code?: string;
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

/**
 * Auth-level user model
 * Used across server boundaries
 */
interface User {
	id: string;
	email: string;
	role: 'patient' | 'doctor' | 'admin';
}

export { };
