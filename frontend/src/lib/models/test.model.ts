/**
 * Medical test recommended by the system
 */
export interface MedicalTest {
	id: string;
	name: string;
	required: boolean;
	description?: string;
}
