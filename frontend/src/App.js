import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import CategoryScreen from './screens/CategoryScreen'
import StichedCategoryScreen from './screens/StichedCategoryScreen'

function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            {/* <HomeScreen /> */}
            <Routes>
            <Route path='/' Component={HomeScreen} exact />
            <Route path='/product/:id' Component={ProductScreen}  />
            <Route path='/cart/:id' Component={CartScreen}  />
            <Route path='/cart/:id?' Component={CartScreen}  />
            <Route path='/category/unstiched' Component={CategoryScreen}  />
            <Route path='/category/stiched' Component={StichedCategoryScreen}  />
            </Routes>
          </Container>
          
        </main>
      <Footer />
    </Router>
  );
}

export default App;
