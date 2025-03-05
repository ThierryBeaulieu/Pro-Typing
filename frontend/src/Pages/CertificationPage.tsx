import Progression from '../Components/Certifications';
import NavigationBar from './NavigationBar';

function CertificationPage() {
  return (
    <>
      <NavigationBar name={'Certifications'} />
      <div className="progression-wrapper">
        <Progression />
      </div>
    </>
  );
}

export default CertificationPage;
