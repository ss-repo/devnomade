import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.scss';
import Menu from './page/menu/Menu';
import Footer from './page/footer/Footer';
import Routes from './Routes';

function App() {
  return (
    <>
      <div className="panel">
        <Menu />
          <Router>
              <Routes />
          </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
