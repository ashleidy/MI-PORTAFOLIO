import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container text-center">
        <div className="mb-4">
          <span className="fw-bold">
            <span className="text-primary">Dev</span>Portfolio
          </span>
        </div>
        <p className="text-white">
          Desarrolladora de Software • Ingeniera Física • Especialista en Datos
        </p>
        <div className="border-top border-secondary pt-3">
          <p className="text-white small">
            © 2024 DevPortfolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
