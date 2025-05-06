
import { Link2, Maximize } from "lucide-react";

const ContentArea = () => {
  return (
    <div className="main-content">
      <div className="content-card">
        <div className="card-header">
          <h2 className="card-title">Econometría</h2>
          <div className="action-buttons">
            <button className="action-button">
              <Link2 size={14} />
              <span>Enlace</span>
            </button>
            <button className="icon-button">
              <Maximize size={14} />
            </button>
          </div>
        </div>

        <h3 className="content-title">Econometría de ADE, ADE-TELECOMUNICACIONES, ADE-CIENCIA Y TECNOLOGÍA DE ALIMENTOS, ADE-INFORMÁTICA Y ADE-MATEMÁTICAS</h3>

        <p className="content-paragraph">
          Aquí podéis encontrar todo el material de la asignatura, apuntes, colección de problemas resueltos, guías y ficheros para las prácticas, formulario y tablas, y las resoluciones de evaluaciones y exámenes. También está disponible la planificación detallada de la asignatura.
        </p>

        <p className="content-paragraph">
          Cuando el material sea específico para ADE, ADE-ARA, ADE-Telecomunicaciones, ADE-Informática, ADE-Ciencia y Tecnología de los Alimentos, y ADE-MATEMÁTICAS, éste aparecerá en su correspondiente carpeta.
        </p>

        <p className="content-paragraph">
          Para aquellos que no puedan asistir a clase, por ser <span className="text-blue-400">ERASMUS</span>, o por tener <span className="text-blue-400">exención de asistencia</span>, en el apartado de <span className="text-orange-400">Contenidos</span> hay comentarios sobre la planificación de la asignatura, y enlaces al material disponible, incluidos videos sobre ciertos conceptos fundamentales y problemas resueltos. En el apartado <span className="text-orange-400">Videos</span> tenéis la colección de videos ordenada por unidades didácticas.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="content-card">
          <div className="card-header">
            <div>
              <h2 className="card-title">Anuncios recientes</h2>
              <p className="card-subtitle">(mostrando anuncios de los últimos 10 días)</p>
            </div>
            <button className="action-button">
              <Link2 size={14} />
              <span>Enlace</span>
            </button>
          </div>

          <button className="action-button mb-4">
            Opciones
          </button>

          <p className="content-paragraph">Actualmente, no hay anuncios en esta ubicación.</p>
        </div>

        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">Mensajes de chat recientes</h2>
            <button className="action-button">
              <Link2 size={14} />
              <span>Enlace</span>
            </button>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">Calendario</h2>
            <button className="action-button">
              <Link2 size={14} />
              <span>Enlace</span>
            </button>
          </div>
          
          <div className="flex space-x-2 mb-4">
            <button className="action-button">
              Opciones
            </button>
            <button className="action-button">
              Publicar (privado)
            </button>
          </div>

          <h3 className="text-lg font-semibold text-white">mayo 2025</h3>
          
          <div className="mt-8 text-center">
            <button className="px-2 py-1 rounded bg-accent text-white">Hoy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
