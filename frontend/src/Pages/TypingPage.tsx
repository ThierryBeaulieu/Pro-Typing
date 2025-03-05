import TypingContent from '../Components/TypingContent';
import NavigationBar from './NavigationBar';

function TypingPage() {
  return (
    <>
      <NavigationBar name={'Training'} />
      <div className="progression">
        <TypingContent />
      </div>
    </>
  );
}

export default TypingPage;
