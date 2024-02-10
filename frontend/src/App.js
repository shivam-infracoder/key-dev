import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import CategoryScreen from './screens/CategoryScreen'
import StichedCategoryScreen from './screens/StichedCategoryScreen'
import ShippingScreen from './screens/ShippingScreen'
import SlotBookScreen from './screens/SlotBookScreen'
import PlaceSandook from './screens/PlaceSandook'
import SandookScreen from './screens/SandookScreen';
import SandookPayment from './screens/SandookPayment';

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
            
            
            <Route path='/mysandook' Component={SandookScreen}  />
            <Route path='/shipping' Component={ShippingScreen}  />
            <Route path='/sandookPayment' Component={SandookPayment}  />

            <Route path='/slotbooking' Component={SlotBookScreen}  />
            <Route path='/placesandook' Component={PlaceSandook}  />

            </Routes>
          </Container>
          
        </main>
      <Footer />
    </Router>
  );
}

export default App;
