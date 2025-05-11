import { CertificationsRequest } from '../interfaces/CertificationsInterface';
import { HTTPInterface } from '../interfaces/HTTPInterface';

class CertificationService {
  certificationsBaseURL = 'certifications';

  async fetchAllCertifications(): Promise<CertificationsRequest[]> {
    const certificationsRequest = new Promise((resolve, reject) => {
      try {
        const product = HTTPInterface.GET(`${this.certificationsBaseURL}`);
        resolve(product);
      } catch (err) {
        reject('Échec lors de la requête GET /certifications');
      }
    });
    const certifications = Promise.resolve(certificationsRequest);
    return certifications;
  }
}

export default CertificationService;
