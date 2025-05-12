import {
  Certification,
  CertificationRequest,
} from '../interfaces/CertificationsInterface';
import { HTTPInterface } from '../interfaces/HTTPInterface';

class CertificationService {
  certificationsBaseURL = 'certifications';
  certificationBaseURL = 'certification';
  thumbnailBaseURL = 'asset';

  async fetchThumbnail(imgID: string): Promise<string> {
    try {
      const thumbnail = await HTTPInterface.GET(
        `${this.thumbnailBaseURL}/${imgID}`,
      );
      return thumbnail.base64;
    } catch (err) {
      console.error('Failure during request GET /certifications', err);
      return '';
    }
  }

  async fetchAllCertifications(): Promise<Certification[]> {
    try {
      const certificationsRequest: CertificationRequest[] =
        await HTTPInterface.GET(`${this.certificationsBaseURL}`);

      const certifications: Certification[] = await Promise.all(
        certificationsRequest.map(async (data) => {
          const thumbnailData = await this.fetchThumbnail(data.imgID);
          return {
            id: data.id,
            name: data.name,
            range: data.range,
            description: data.description,
            image: `data:image/png;base64,${thumbnailData}`,
          };
        }),
      );

      return certifications;
    } catch (err) {
      console.error('Failure during request GET /certifications', err);
      return [];
    }
  }

  async fetchCertification(
    certificationID: string,
  ): Promise<Certification | null> {
    try {
      const request: CertificationRequest = await HTTPInterface.GET(
        `${this.certificationBaseURL}/${certificationID}`,
      );

      const thumbnailData = await this.fetchThumbnail(request.imgID);

      const certification: Certification = {
        id: request.id,
        name: request.name,
        range: request.range,
        description: request.description,
        image: `data:image/png;base64,${thumbnailData}`,
      };

      return certification;
    } catch (err) {
      console.error('Failure during request GET /certifications', err);
      return null;
    }
  }
}

const certificationService = new CertificationService();

export default certificationService;
