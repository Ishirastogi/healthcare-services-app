import React from "react";

const ServiceList = ({ services, setCurrentService, deleteService }) => {
  return (
    <div className="service-list">
      {services.length > 0 ? (
        services.map((service) => (
          <div key={service.id} className="card my-2">
            <div className="card-body">
              <h5>{service.name}</h5>
              <p>{service.description}</p>
              <p>Price: ${service.price}</p>
              <button
                className="btn btn-warning"
                onClick={() => setCurrentService(service)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger ml-2"
                onClick={() => deleteService(service.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No services available.</p>
      )}
    </div>
  );
};

export default ServiceList;
