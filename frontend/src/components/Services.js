import React from 'react';
import ServiceCard from './ServiceCard';
import services from '../servicesData';

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">SERVICIOS</h2>
          <div className="mx-auto bg-primary" style={{ width: '100px', height: '4px' }}></div>
          <p className="lead text-muted">Soluciones tecnológicas integrales para tu negocio</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;