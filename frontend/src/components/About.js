import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">ACERCA DE MÍ</h2>
          <div className="mx-auto bg-primary" style={{ width: '100px', height: '4px' }}></div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="d-flex justify-content-center align-items-center h-100 rounded-3">
              <div className="text-center text-dark p-4">
                <div className="rounded-circle bg-white p-3 d-inline-flex mb-3">
                  <img
                    src="/assets/images/foto-Ash.jpg"
                    alt="Foto de perfil"
                    className="rounded-circle"
                    style={{ 
                      width: '200px', 
                      height: '200px', 
                      objectFit: 'cover' 
                    }}
                  />
                </div>
                <p>Ingeniera Física</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="h4 fw-bold">Ingeniera & Desarrolladora</h3>
            <p className="text-muted">
              Soy una desarrolladora de software e ingeniera física con una sólida formación en ciencias exactas 
              y una amplia experiencia en el desarrollo de aplicaciones.
            </p>
            <p className="text-muted">
              Especializada en múltiples tecnologías de desarrollo, desde aplicaciones web modernas hasta 
              dashboards interactivos y sistemas de bases de datos.
            </p>
            <div className="row">
              <div className="col-6">
                <div className="p-3 bg-primary bg-opacity-10 rounded">
                  <h4 className="fw-semibold">Educación</h4>
                  <p className="small">Ingeniería Física</p>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 bg-primary bg-opacity-10 rounded">
                  <h4 className="fw-semibold">Experiencia</h4>
                  <p className="small">Desarrollo Full Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;