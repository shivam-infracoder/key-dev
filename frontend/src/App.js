import { Container } from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <div>
      <Header />
        <main className='py-3'>
          <Container>
            <HomeScreen />
          </Container>
          
        </main>
      <Footer />
    </div>
  );
}

export default App;
