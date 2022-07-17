import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/LoginPage';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  console.log(code)
  return (
    <>
      {code ? <Dashboard code = {code}/> : <Login/>}
    </>
  );
}

export default App;
