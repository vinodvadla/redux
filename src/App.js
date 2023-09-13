import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { incrementone, decrementone, incrementTwo, DecrementTwo } from './Reducers/Actions';

function App({ playertwo, playerone, incrementone, decrementone,incrementTwo,DecrementTwo }) {
  return (
    <div className="App">
      <h1>plyerone Score</h1>
      <h1>{playerone.name}</h1>{" "}<h1>{playerone.score}</h1>
      <button onClick={incrementone}>Increment</button>
      <button onClick={decrementone}>Decrement</button>
      <hr />
      <h1>playertwo score</h1>
      <h1>{playertwo.name}</h1>{""}<h1>{playertwo.score}</h1>
      <button onClick={incrementTwo}>Increment</button>
      <button onClick={DecrementTwo}>Decrement</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  playerone: state.first,
  playertwo: state.second
})

export default connect(mapStateToProps, { incrementone, decrementone, incrementTwo, DecrementTwo })(App);
