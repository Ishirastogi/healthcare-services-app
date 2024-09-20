import React, { useState, useEffect } from "react";

const ServiceForm = ({ addService, updateService, currentService }) => {
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (currentService) {
      setService(currentService);
    }
  }, [currentService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service.name && service.description && service.price) {
      if (currentService) {
        updateService(service);
      } else {
        addService(service);
      }
      setService({ name: "", description: "", price: "" }); // Clear form after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Service Name"
          className="form-control"
          value={service.name}
          onChange={(e) => setService({ ...service, name: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Service Description"
          className="form-control"
          value={service.description}
          onChange={(e) => setService({ ...service, description: e.target.value })}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="number"
          placeholder="Service Price"
          className="form-control"
          value={service.price}
          onChange={(e) => setService({ ...service, price: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {currentService ? "Update Service" : "Add Service"}
      </button>
    </form>
  );
};

export default ServiceForm;
