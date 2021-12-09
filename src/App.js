import './App.css';

function SecretComponent() {
  return <h1>Super secret information only you can see!</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

function App(props) {
    return (
      <>
        {props.authorised ? <SecretComponent /> : <RegularComponent />}
      </>
    )
  }

export default App;
