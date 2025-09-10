  import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Oppenheimer",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      category: "Drama/Histórico"
    },
    {
      id: 2, 
      title: "Five Nights at Freddy's",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t6RSJ1z8bDEYpk4fLwxfkXciUak.jpg",
      category: "Terror/Suspenso"
    },
    {
      id: 3,
      title: "Guardianes de la Galaxia Vol. 3",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6GkKzdNosVAL7UGgwTtCHSxLQ67.jpg",
      category: "Acción/Aventura"
    },
    {
      id: 4,
      title: "Los Asesinos de la Luna",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aZXHjmhSSGUshLEdgsNCTH9z7Ix.jpg",
      category: "Drama/Crimen"
    },
    {
      id: 5,
      title: "Napoleon",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
      category: "Drama/Histórico"
    }
  ])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="nav-left">
            {/* Logo izquierda */}
            <img src="./images/logo.png" alt="Logo" className="logo-main" />
          </div>

          {/* Menú central */}
          <div className={`nav-center ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li>Inicio</li>
              <li>Series</li>
              <li>Películas</li>
              <li>HBO</li>
              <li>Niños y Familia</li>
              <li><img src="./images/tnt-sports.png" alt="TNT Sports" className="tnt-logo"/></li>
            </ul>
          </div>

          {/* Botones derecha */}
          <div className="nav-right">
            <button className="search-btn">
              <svg viewBox="0 0 24 24" className="search-icon">
                <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/>
              </svg>
            </button>
            <button className="watchlist-btn">
              <svg viewBox="0 0 24 24" className="watchlist-icon">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </button>
            <button className="profile-btn">
              <svg viewBox="0 0 24 24" className="profile-icon">
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/>
              </svg>
            </button>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <section className="hero" style={{backgroundImage: "url('./images/hero-bg.jpg')"}}>
        <div className="hero-content">
          <h1 className="hero-title">Las mejores películas y series</h1>
          <p className="hero-description">
            Disfruta del mejor contenido en streaming con PelisChile
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Reproducir</button>
            <button className="btn btn-secondary">Más Información</button>
          </div>
        </div>
      </section>

      <main>
        <section className="movie-grid">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="movie-poster"
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App


