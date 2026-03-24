import React from 'react';
import { Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <div className="mb-4">
          <div className="d-flex justify-content-center mb-4">
            <div className="rounded-circle bg-primary bg-gradient p-4">
              <Code className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="display-4 fw-bold">Desarrolladora de Software</h1>
          <p className="lead text-muted">
            Ingeniera Física especializada en desarrollo de aplicaciones y análisis de datos
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#services" className="btn btn-primary btn-lg">Ver Servicios</a>
            <a href="#contact" className="btn btn-outline-primary btn-lg">Contactar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;