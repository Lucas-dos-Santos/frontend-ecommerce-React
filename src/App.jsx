import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import { ContainerGlobal, GlobalStyle } from './global.styles';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import { selectCurrentUser } from './redux/user/user.selectors';
import WhatsApp from './components/WhatsApp';
import WishListPage from './pages/WishListPage';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const SignInAndSignUpPage = lazy(() => import('./pages/SignInAndSignUpPage'));

function App() {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div className="App">
      <ToastContainer autoClose={3000} className="toast-container" />
      <WhatsApp />
      <GlobalStyle />
      <ContainerGlobal>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route exact path="/wishlist" component={WishListPage} />
              <Route
                path="/signin"
                render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </ContainerGlobal>
      <Footer />
    </div>
  );
}

export default App;
