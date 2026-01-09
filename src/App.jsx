import Star from './components/starProject/Star.jsx';
const App = () => {
  return (
    <div>
      <Star
        heading='How do you feel about our app?'
        feedbackMessages={[
          'I hate it!',
          'I Dislike it',
          "It's somehow for me",
          'I love it',
          'Its perfect for me',
        ]}
      />
    </div>
  );
};

export default App;
