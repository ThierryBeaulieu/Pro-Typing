import {
  Certification,
  CertificationsRequest,
} from '../interfaces/CertificationsInterface';
import { HTTPInterface } from '../interfaces/HTTPInterface';

class CertificationService {
  certificationsBaseURL = 'certifications';
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
      const certificationsRequest: CertificationsRequest[] =
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
}

const certificationService = new CertificationService();

export default certificationService;
