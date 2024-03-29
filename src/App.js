import './App.css';
import { Container, Grid } from '@material-ui/core'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Certifications from './pages/Certifications/Certifications';

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main_content container_shadow'>
              <Routes>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/' element={<Resume />} />
                <Route path='/certifications' element={<Certifications />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
