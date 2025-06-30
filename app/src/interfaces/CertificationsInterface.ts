export interface CertificationWrapper {
  name: string;
  certifications: Certification[];
}

export interface Certification {
  id: string;
  name: string;
  range: string;
  description: string;
  wordsPerMinute: number[];
}
