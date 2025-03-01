import Progression from '../Prototype-progression/Progression';
import NavigationBar from './NavigationBar';

function ProgressionPage() {
  return (
    <>
      <NavigationBar name={'Progression'} />
      <div className="progression">
        <Progression />
      </div>
    </>
  );
}

export default ProgressionPage;
