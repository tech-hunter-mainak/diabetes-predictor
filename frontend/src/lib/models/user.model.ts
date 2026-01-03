export interface UserProfile {
	id: string;
	email: string;
	role: 'patient' | 'doctor' | 'admin';
	createdAt?: string;
}
