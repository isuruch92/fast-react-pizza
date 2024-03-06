import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="bg-size mt-[-64px] h-dvh bg-[url('/bg-landing.webp')] bg-cover bg-center bg-no-repeat px-4 text-center opacity-90">
      <div className="pt-28">
        <div className="mx-auto w-fit rounded-xl bg-slate-900 px-8 py-6">
          <h1 className="mb-8 text-4xl font-semibold text-sky-200 md:text-3xl">
            The best pizza.
            <br />
            <span className="text-2xl text-sky-500">
              Straight out of the oven, straight to you.
            </span>
          </h1>

          {username === '' ? (
            <CreateUser />
          ) : (
            <Button to="/menu" type="primary">
              Continue ordering for, {username}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
