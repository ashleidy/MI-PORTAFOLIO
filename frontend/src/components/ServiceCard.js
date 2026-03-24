import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <div className="d-inline-flex p-3 bg-light rounded-circle mb-3">
            {service.icon}
          </div>
          <h3 className="h5 fw-bold">{service.title}</h3>
          <p className="text-muted">{service.description}</p>
          <h4 className="fw-semibold">Tecnologías:</h4>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {service.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="badge bg-primary">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;