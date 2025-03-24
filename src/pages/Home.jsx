import { useAuth } from '../context/AuthContext.jsx';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <NewsFeed /> : <WelcomePage />;
};

const WelcomePage = () => (
  <div>
    <h1>
      Here is Welcome msg and buttons for registration and login and bla bla bla
    </h1>
  </div>
);
const NewsFeed = () => (
  <div>
    <h1>
      Here is main part of my project - users post about their holidays and
      travelings
    </h1>
  </div>
);

export default Home;
