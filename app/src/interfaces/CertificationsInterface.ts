export interface CertificationsRequest {
  id: string;
  name: string;
  description: string;
  range: string;
  imgID: string;
}

export interface Certification {
  name: string;
  range: string;
  description: string;
  wordsPerMinute: number[];
}
