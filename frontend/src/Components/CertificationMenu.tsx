
import certifications from '../interfaces/MajorCertifications';

function CertificationMenu() {

  return (
    <>
      {certifications[0].subCertifications.map((subCertification, cIndex) => (
        <div className="certification-description" key={cIndex}>
          <h2>{subCertification.name}</h2>
          <h3>{subCertification.range}</h3>
          <p>{subCertification.description}</p>
        </div>
      ))}
    </>
  );
}

export default CertificationMenu;
