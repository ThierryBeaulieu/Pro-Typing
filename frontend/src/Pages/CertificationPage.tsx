import CertificationMenu from '../Components/CertificationMenu';
import NavigationBar from '../Components/NavigationBar';
import { useParams } from 'react-router-dom';

function CertificationPage() {
  const { wpm } = useParams();

  return (
    <>
      <NavigationBar name={`Certification ${wpm}`} />
      <div className="progression-wrapper">
        <CertificationMenu />
      </div>
    </>
  );
}

export default CertificationPage;
