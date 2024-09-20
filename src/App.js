import React, { useState } from "react";

import "./App.css";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";

const App = () => {
  const [services, setServices] = useState([
    { id: 1, name: "General Checkup", description: "Basic health check", price: 50 },
    { id: 2, name: "Dental Cleaning", description: "Professional teeth cleaning", price: 80 },
  ]);

  const [currentService, setCurrentService] = useState(null); // For editing

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setCurrentService(null); // Clear after update
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="App container">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        currentService={currentService}
      />
      <ServiceList
        services={services}
        setCurrentService={setCurrentService}
        deleteService={deleteService}
      />
    </div>
  );
};

export default App;
