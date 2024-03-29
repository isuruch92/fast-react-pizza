import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  //this is how we use global navigation state to display a loader in UI
  //note that this loading state is for the entire app, this is common for any route
  //whatever route is loading, this state will be loading
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === 'loading';

  console.log('The current path is', location.pathname);

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-auto">
        <main
          className={`mx-auto ${location.pathname !== '/' ? 'max-w-3xl' : ''}`}
        >
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
