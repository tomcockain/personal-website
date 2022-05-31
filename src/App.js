import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div className='App'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Tom Cockain</title>
                <link rel="tomcockain" href="http://tomcockain.github.io" />
        </Helmet>
        <Router>
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
