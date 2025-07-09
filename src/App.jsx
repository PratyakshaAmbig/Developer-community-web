import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          {/* Inside the Routes it will wrap all the route of the application */}
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
