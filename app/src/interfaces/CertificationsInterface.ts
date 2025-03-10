export interface CertificationWrapper {
  name: string;
  certifications: Certification[];
}

export interface Certification {
  name: string;
  range: string;
  description: string;
  wordsPerMinute: number[];
}
