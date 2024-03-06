import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

// to enable data-fetching or data-loading with react router, this imperative way
// of defining routes outside is necessary (since ReactRouter v6.4+)
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      //this is "render-as-you-fetch strategy, react router will start fetching (menu) the data as it renders the component, happens parallelly"
      //this in contrast to useEffect where we render first and then fetch (fetch-on-render strategy)
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
