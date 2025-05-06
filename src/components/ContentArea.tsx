
import { Link2, Maximize, Calendar, MessageCircle, Info } from "lucide-react";

const ContentArea = () => {
  return (
    <div className="content-area">
      <div className="content-card bg-[#333333] mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-white border-b-0 flex items-center gap-2">
            <Info size={18} className="text-red-500" />
            Econometría
          </h2>
          <div className="flex space-x-2">
            <button className="bg-[#444444] text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
              <Link2 size={14} />
              <span>Enlace</span>
            </button>
            <button className="bg-[#444444] text-white px-2 py-1 rounded-md flex items-center">
              <Maximize size={14} />
            </button>
          </div>
        </div>

        <h3 className="text-red-600 font-bold mb-4">Econometría de ADE, ADE-TELECOMUNICACIONES, ADE-CIENCIA Y TECNOLOGÍA DE ALIMENTOS, ADE-INFORMÁTICA Y ADE-MATEMÁTICAS</h3>

        <p className="mb-4 text-gray-200">
          Aquí podéis encontrar todo el material de la asignatura, apuntes, colección de problemas resueltos, guías y ficheros para las prácticas, formulario y tablas, y las resoluciones de evaluaciones y exámenes. También está disponible la planificación detallada de la asignatura.
        </p>

        <p className="mb-4 text-gray-200">
          Cuando el material sea específico para ADE, ADE-ARA, ADE-Telecomunicaciones, ADE-Informática, ADE-Ciencia y Tecnología de los Alimentos, y ADE-MATEMÁTICAS, éste aparecerá en su correspondiente carpeta.
        </p>

        <p className="mb-4 text-gray-200">
          Para aquellos que no puedan asistir a clase, por ser <span className="text-blue-400">ERASMUS</span>, o por tener <span className="text-blue-400">exención de asistencia</span>, en el apartado de <span className="text-orange-400">Contenidos</span> hay comentarios sobre la planificación de la asignatura, y enlaces al material disponible, incluidos videos sobre ciertos conceptos fundamentales y problemas resueltos. En el apartado <span className="text-orange-400">Videos</span> tenéis la colección de videos ordenada por unidades didácticas.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:w-1/3">
        <div className="content-card bg-[#333333]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-white border-b-0 flex items-center gap-2">
              <MessageCircle size={18} className="text-red-500" />
              Anuncios recientes
            </h2>
            <div className="bg-[#444444] text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
              <Link2 size={14} />
              <span>Enlace</span>
            </div>
          </div>

          <div className="bg-[#444444] inline-block px-2 py-1 rounded mb-2 text-sm">
            Opciones
          </div>

          <h3 className="text-xl font-medium mb-1 text-white">Anuncios</h3>
          <p className="text-sm text-gray-300 mb-4">(mostrando anuncios de los últimos 10 días)</p>

          <p className="text-gray-200 mb-1">Actualmente, no hay anuncios en esta ubicación.</p>
        </div>

        <div className="content-card bg-[#333333]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-white border-b-0 flex items-center gap-2">
              <MessageCircle size={18} className="text-red-500" />
              Mensajes de chat recientes
            </h2>
            <div className="bg-[#444444] text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
              <Link2 size={14} />
              <span>Enlace</span>
            </div>
          </div>
        </div>

        <div className="content-card bg-[#333333]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-white border-b-0 flex items-center gap-2">
              <Calendar size={18} className="text-red-500" />
              Calendario
            </h2>
            <div className="bg-[#444444] text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
              <Link2 size={14} />
              <span>Enlace</span>
            </div>
          </div>
          
          <div className="flex space-x-2 mb-4">
            <div className="bg-[#444444] inline-block px-2 py-1 rounded text-sm">
              Opciones
            </div>
            <div className="bg-[#444444] inline-block px-2 py-1 rounded text-sm">
              Publicar (privado)
            </div>
          </div>

          <h3 className="text-xl font-medium mb-1 text-white">mayo 2025</h3>
          
          <div className="mt-4 text-right text-gray-300">
            <p className="text-lg">Activar Windows</p>
            <p className="text-sm">Ve a Configuración para activar Windows.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
