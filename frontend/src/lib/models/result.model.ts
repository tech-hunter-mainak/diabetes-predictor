/**
 * Final diagnosis result from ML backend
 */
export interface DiagnosisResult {
	isDiabetic: boolean;
	confidence: number; // range: 0–1
	recommendation: string;
}
