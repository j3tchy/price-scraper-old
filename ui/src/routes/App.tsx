import React from "react";
import Header from "../components/Header/Header";
import AddScaperForm from "../components/AddScraperForm/AddScraperForm";

const App = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="container mx-auto py-6" style={{ maxWidth: "600px" }}>
        <AddScaperForm />
      </div>
    </div>
  )
}

export default App
