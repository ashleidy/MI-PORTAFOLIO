const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Configuración de la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'MI_INFO',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Función para verificar la conexión a la base de datos
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión a la base de datos exitosa');
    connection.release();
  } catch (error) {
    console.error('❌ Error de conexión a la base de datos:', error.message);
  }
}

// Verificar conexión al iniciar el servidor
testConnection();

// Endpoint para manejar contactos
app.post('/api/contact', async (req, res) => {
  const { nombre, correo, telefono, mensaje } = req.body;
  
  console.log('📧 Datos recibidos:', { nombre, correo, telefono, mensaje });

  // Validación de campos requeridos
  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ 
      error: 'Nombre, correo y mensaje son requeridos',
      received: { nombre, correo, mensaje }
    });
  }

  try {
    // Verificar si la tabla existe
    const [tables] = await pool.query("SHOW TABLES LIKE 'contactos'");
    if (tables.length === 0) {
      console.error('❌ La tabla "contactos" no existe');
      return res.status(500).json({ 
        error: 'Error de configuración: tabla no encontrada',
        details: 'La tabla "contactos" no existe en la base de datos'
      });
    }

    // Insertar el contacto
    const [result] = await pool.query(
      'INSERT INTO contactos (nombre, correo, telefono, mensaje) VALUES (?, ?, ?, ?)',
      [nombre, correo, telefono || null, mensaje]
    );

    console.log('✅ Mensaje guardado correctamente, ID:', result.insertId);
    res.status(201).json({ 
      message: 'Mensaje guardado correctamente', 
      id: result.insertId 
    });

  } catch (error) {
    console.error('❌ Error al guardar en la base de datos:', error);
    
    // Diferentes tipos de errores
    if (error.code === 'ER_NO_SUCH_TABLE') {
      return res.status(500).json({ 
        error: 'La tabla contactos no existe',
        details: 'Ejecuta el script SQL para crear la tabla'
      });
    }
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      return res.status(500).json({ 
        error: 'Error de acceso a la base de datos',
        details: 'Verifica las credenciales de la base de datos'
      });
    }

    res.status(500).json({ 
      error: 'Error en el servidor',
      details: error.message
    });
  }
});

// Endpoint para probar el servidor
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
