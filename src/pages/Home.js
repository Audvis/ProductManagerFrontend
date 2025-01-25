import React from 'react';
import { useNavigate } from 'react-router-dom';
import portadaImage from '../assets/imagenPortada.webp'; // Importa la imagen desde la ruta correcta

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Imagen de portada */}
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={portadaImage}
          alt="Homepage Banner"
          style={{
            width: '100%',
            height: '50vh', // Ocupa la mitad de la altura de la pantalla en desktop
            objectFit: 'cover', // Asegura que la imagen se ajuste correctamente
            borderRadius: '10px',
          }}
        />
      </div>

      {/* Textos existentes */}
      <h1>Welcome to Our Platform</h1>
      <p>
        Explore our extensive collection of products and categories. Manage your
        inventory with ease!
      </p>

      {/* Botones de navegación */}
      <div>
        <button
          className="btn btn-primary mx-2"
          style={{ padding: '10px 20px', fontSize: '16px' }}
          onClick={() => navigate('/products')}
        >
          Go to Products
        </button>
        <button
          className="btn btn-secondary mx-2"
          style={{ padding: '10px 20px', fontSize: '16px' }}
          onClick={() => navigate('/categories')}
        >
          Go to Categories
        </button>
      </div>
    </div>
  );
};

export default Home;
