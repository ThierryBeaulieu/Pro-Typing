export default class TypingKeysHandler {
  handle = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.key === 'Backspace' && event.altKey) {
      console.log('Backspace pressed - remove a key');
    } else if (event.key === 'Backspace') {
      console.log('Backspace + Alt pressed - custom behavior');
    } else if (event.key === 'r' && event.metaKey) {
      console.log('Cmd + R or Ctrl + R pressed');
    }
  };
}
