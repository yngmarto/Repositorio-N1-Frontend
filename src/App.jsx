import './App.css';
import * as React from 'react';
import BotonBasico from './BotonBasico';
import Botoneliminar from './Botoneliminar';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertaEliminar from './AlertaEliminar';
import AlertaAñadir from './AlertaAñadir';

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1 }}></div>
        <h1 style={{ flex: 2, textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '40px', color: '#5dafdfff', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>SteamLite</h1>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
          <AlertaAñadir />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', backgroundColor: '#000000ff' }}>
        {/* Producto 1 */}
        <div
          className='contenedor_producto_1'
          style={{ display: 'flex', border: '2px solid rgba(92, 91, 91, 1)', flex: '1 1 360px' }}
        >
          <div style={{ width: "40%", height: "240px" }}>
            <img
              style={{ width: "100%", height: "121%", objectFit: "cover" }}
              src="https://images.g2a.com/1024x576/1x1x1/god-of-war-pc-epic-games-account-global-i10000152407016/8f8312d691a84ee5a79b2356"
              alt="God of War Ragnarok"
            />
          </div>
          <div style={{ width: "50%", height: "290px" }}>
            {/* Botón que abre la alerta de eliminar */}
            <Botoneliminar />
            <h2>$45.990 CLP</h2>
            <p>God of War Ragnarok - La épica continuación de la saga nórdica con gráficos impresionantes</p>
            <BotonBasico isDisabled={false} display={'flex'} flexDirection={'row'} justifyContent={'center'} />
          </div>
        </div>

        {/* Producto 2 */}
        <div
          className='contenedor_producto_2'
          style={{ display: 'flex', border: '2px solid rgba(92, 91, 91, 1)', flex: '1 1 360px' }}
        >
          <div style={{ width: "50%", height: "290px" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://images.g2a.com/1024x576/1x1x1/ghost-of-tsushima-directors-cut-pc-steam-key-global-i10000195095007/25e69855fea0436eb107ab8b"
              alt="Ghost of Tsushima"
            />
          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <Botoneliminar />
            <h2>$39.990 CLP</h2>
            <p>Ghost of Tsushima - Aventura épica en el Japón feudal con combates de samurái y paisajes impresionantes</p>
            <BotonBasico isDisabled={false} />
          </div>
        </div>

        {/* Producto 3 */}
        <div
          className='contenedor_producto_3'
          style={{ display: 'flex', border: '2px solid rgba(92, 91, 91, 1)', flex: '1 1 360px' }}
        >
          <div style={{ width: "50%", height: "290px" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://images.g2a.com/1024x576/1x1x1/hogwarts-legacy-pc-steam-key-global-i10000218808005/5f6dd91946177c7d9026f422"
              alt="Hogwarts Legacy"
            />
          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <Botoneliminar />
            <h2>$35.990 CLP</h2>
            <p>Hogwarts Legacy - Vive la magia en el mundo de Harry Potter con hechizos, pociones y criaturas fantásticas</p>
            <BotonBasico isDisabled={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
