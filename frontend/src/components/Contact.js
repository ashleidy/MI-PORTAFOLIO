import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validación
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">CONTACTAR</h2>
          <div className="mx-auto bg-primary" style={{ width: '100px', height: '4px' }}></div>
          <p className="lead text-muted">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="h4 fw-bold">Información de Contacto</h3>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="fw-semibold">Email</h4>
                  <p className="text-muted">ashyarchbold@gmail.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="fw-semibold">Teléfono</h4>
                  <p className="text-muted">+57 317 683 2352</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="fw-semibold">Disponibilidad</h4>
                  <p className="text-muted">Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
            <div className="alert d-flex align-items-center mb-4 text-white bg-primary">
                <CheckCircle className="me-2" size={20} />
                <div>
                <strong>¡Mensaje enviado!</strong> Te responderé pronto.
                </div>
            </div>
            )}

            
            {submitStatus === 'error' && (
              <div className="alert alert-danger d-flex align-items-center mb-4">
                <AlertCircle className="me-2" size={20} />
                <div>
                  <strong>Error al enviar:</strong> Por favor, intenta de nuevo.
                </div>
              </div>
            )}

            <div>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Tu nombre completo"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo Electrónico *</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="tu@ejemplo.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="+57 300 123 4567"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={6}
                  className="form-control"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                onClick={handleSubmit}
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Enviando...</span>
                    </div>
                    ENVIANDO...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    ENVIAR MENSAJE
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;