import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import HigerOderExample from "./components/HigerOderExample";
import ContextExample from "./components/practice/ContextExample";
import { createContext, useState } from "react";

export const AppContext = createContext(); 

const App = () => {
  const [userName, setUserName] = useState("Pratyaksha")
  return (
    <>
    <AppContext.Provider value={{userName,setUserName}}>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          {/* Inside the Routes it will wrap all the route of the application */}
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/higerorder" element={<HigerOderExample />} />
              <Route path="/context" element={<ContextExample />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </AppContext.Provider>
    </>
  );
};

export default App;
