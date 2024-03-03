import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  //with this hook, we can use the provided (at App component) loader data to the router
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-slate-200 px-4">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  return await getMenu();
}

export default Menu;
