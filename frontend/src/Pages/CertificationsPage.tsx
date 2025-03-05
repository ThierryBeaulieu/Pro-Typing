import CertificationsMenu from '../Components/CertificationsMenu';
import NavigationBar from '../Components/NavigationBar';

function CertificationsPage() {
  return (
    <>
      <NavigationBar name={'Certifications'} />
      <div className="progression-wrapper">
        <CertificationsMenu />
      </div>
    </>
  );
}

export default CertificationsPage;
