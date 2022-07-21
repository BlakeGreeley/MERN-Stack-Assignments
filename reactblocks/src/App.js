import './App.css';
import Header from './components/Header.js';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className='Container'>
      <Header/>
      <div className='body'>
        <Navigation/>
        <Main>
          <div>
            <SubContents/>
            <SubContents/>
            <SubContents/>
            <Advertisement/>
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
