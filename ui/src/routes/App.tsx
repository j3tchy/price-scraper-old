import React from "react";
import {
  Outlet,
  ReactLocation,
  Router
} from "react-location";
import Header from "../components/Header/Header";
import AddScaperForm from "../components/AddScraperForm/AddScraperForm";
import Home from "../routes/Home";

const Index = () => <p>Index</p>;

const location = new ReactLocation();

const getScrapers = async () => {
  const res = await fetch('http://localhost:9000/api/scrapers');
  const data = await res.json();
  return data;
}

const App = () => {
  return (
    <div className="bg-gray-50 h-screen">
        <Router
          location={location}
          routes={[
            {
              path: '/',
              element: <Home />,
              loader: async () => {
                return {
                  scrapers: await getScrapers()
                }
              }
            },
            { path: '/add', element: <AddScaperForm />}
          ]}
        >
        <Header />
        <div className="container mx-auto py-6" style={{ maxWidth: "900px" }}>
          <Outlet />
        </div>
      </Router>
    </div>
  )
}

export default App
