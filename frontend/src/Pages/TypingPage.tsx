import PrototypeTyping from '../Prototype-writing/PrototypeUnderlined';
import NavigationBar from './NavigationBar';

function TypingPage() {
  return (
    <>
      <NavigationBar name={'Training'} />
      <div className="progression">
        <PrototypeTyping />
      </div>
    </>
  );
}

export default TypingPage;
