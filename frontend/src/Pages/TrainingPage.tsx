import NavigationBar from '../Components/NavigationBar';
import { useParams } from 'react-router';

function TrainingPage() {
  const params = useParams();

  return (
    <>
      <NavigationBar name={`Training page ${params.wpm} WPM`} />
      <div className="progression">
        You will type a certain amount of words per minute
      </div>
    </>
  );
}

export default TrainingPage;
