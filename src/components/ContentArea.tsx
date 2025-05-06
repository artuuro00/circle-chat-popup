
import { Link2 } from "lucide-react";

const ContentArea = () => {
  return (
    <div className="content-area">
      <div className="content-card">
        <div className="flex justify-between items-center">
          <h2 className="content-title">DPO ADE INF</h2>
          <div className="pill-button">
            <Link2 size={14} />
            <span>Enlace</span>
          </div>
        </div>

        <h3 className="font-semibold mb-4">AGENDA DPO ADE INF</h3>

        <div className="text-blue-400 mb-2">Novena semana (14 y 15 abril 2025)</div>
        <p className="mb-1"><strong>Día 15.</strong> Se explica el concepto y cálculo del Disponible a Prometer dentro del <span className="font-semibold">tema 8 Plan Maestro de Producción</span>. Se resuelve el problema <span className="font-semibold">CORCHOLIS II</span>. Enlace a <a href="#" className="link-text">Videoapuntes</a></p>
        
        <p className="mb-4"><strong>Día 14.</strong> Seguimos en el <span className="font-semibold">tema 8 Plan Maestro de Producción</span> (vemos has PMP propuesto, excepto Disponible a Prometer). Enlace a <a href="#" className="link-text">Videoapuntes</a></p>

        <div className="text-blue-400 mb-2">Octava semana (7 y 8 abril 2025)</div>
        <p className="mb-4">
          <strong>Día 8.</strong> Se resuelven el apartado c) del problema <span className="font-semibold">PISAFUERTE</span>. Se resuelve el problema <span className="font-semibold">SAC'S</span>. Se introduce el <span className="font-semibold">tema 8 Plan Maestro de Producción</span>. Enlace a <a href="#" className="link-text">Videoapuntes</a>
        </p>
      </div>

      <div className="flex flex-col gap-4 md:w-1/3">
        <div className="content-card">
          <div className="flex justify-between items-center">
            <h2 className="content-title">Anuncios recientes</h2>
            <div className="pill-button">
              <Link2 size={14} />
              <span>Enlace</span>
            </div>
          </div>

          <div className="bg-gray-800 inline-block px-2 py-1 rounded mb-2">
            Opciones
          </div>

          <h3 className="text-lg font-medium mb-1">Anuncios</h3>
          <p className="text-sm text-gray-400 mb-4">(mostrando anuncios de los últimos 10 días)</p>

          <p className="mb-1 font-medium">Informe del Director/a</p>
          <p className="text-sm text-gray-400">(Jose Miguel Albarracín Guillem - 5 may. 2025 18:57)</p>
        </div>

        <div className="content-card">
          <div className="flex justify-between items-center">
            <h2 className="content-title">Mensajes de chat recientes</h2>
            <div className="pill-button">
              <Link2 size={14} />
              <span>Enlace</span>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="flex justify-between items-center">
            <h2 className="content-title">Calendario</h2>
            <div className="pill-button">
              <Link2 size={14} />
              <span>Enlace</span>
            </div>
          </div>
          
          <div className="mt-4 text-right text-gray-400">
            <p>Activar Windows</p>
            <p className="text-sm">Ve a Configuración para activar Windows.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
