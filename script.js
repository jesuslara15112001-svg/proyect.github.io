const VALID_USER = "Jesus_Lara";
const VALID_CEDULA = "31079893";

const TIMELINE_DATABASE = [
    { "id": 1, "fecha": "Mayo", "evento": "Siembra Mecanizada", "desc": "Inicio del poblamiento con semilla certificada de maíz amarillo una vez consolidado el ciclo regular de lluvias invernales en el municipio." },
    { "id": 2, "fecha": "Junio", "evento": "Monitoreo Fitosanitario", "desc": "Labores y aplicaciones de campo orientadas al control contra malezas e insectos competidores para proteger las plántulas." },
    { "id": 3, "fecha": "Julio", "evento": "Fertilización de Rebono", "desc": "Incorporación complementaria de nitrógeno (urea) para potenciar la aceleración y el sano desarrollo foliar y radicular." },
    { "id": 4, "fecha": "Agosto", "evento": "Evaluación del Llenado", "desc": "Inspecciones técnicas de las mazorcas para verificar la compactación uniforme y el correcto crecimiento de los granos." },
    { "id": 5, "fecha": "Septiembre", "evento": "Cosecha y Acopio", "desc": "Entrada de cosechadoras combinadas cuando el grano reduce su porcentaje de humedad al nivel óptimo exigido por los silos regionales." }
];

function appRouter() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') || 'inicio';
    const nombre = urlParams.get('nombre');
    const cedula = urlParams.get('cedula');
    
    const viewport = document.getElementById("app-viewport");

    document.querySelectorAll('#main-nav a').forEach(link => link.classList.remove('active'));

    if (nombre !== VALID_USER || cedula !== VALID_CEDULA) {
        viewport.innerHTML = `
            <div class="status-box error">
                <h3>Acceso Denegado: Credenciales Incorrectas</h3>
                <p>El sistema detectó parámetros de autenticación inválidos o ausentes en la URL.</p>
                <small>Por favor, utilice los botones del menú de navegación superior para acceder con las credenciales correctas.</small>
            </div>`;
        return;
    }

    switch(page) {
        case 'inicio':
            document.getElementById('nav-inicio').classList.add('active');
            viewport.innerHTML = `
                <div class="hero-section">
                    <h1>Municipio El Socorro: Corazón del Maíz</h1>
                    <p>Planificación y Monitoreo Técnico Cerealero en el Estado Guárico</p>
                </div>
                
                <div class="content-card">
                    <h2>Importancia Socioeconómica de la Producción</h2>
                    <p>En el ámbito del Municipio El Socorro, la siembra y cosecha de maíz trasciende el marco de una labor agrícola común; representa el motor primordial que dinamiza el flujo financiero, laboral y cultural de toda la región llanera.</p>
                    
                    <div class="grid-features">
                        <div class="feature-item">
                            <h4>Seguridad Alimentaria</h4>
                            <p style="font-size:13.5px; color:#555; margin:5px 0 0 0;">Considerado un pilar del granero del estado, el volumen cosechado abastece directamente el procesamiento de Harina de Maíz Precocida y la industria de Alimentos Balanceados para Animales (ABA).</p>
                        </div>
                        <div class="feature-item">
                            <h4>Sustento Económico Activo</h4>
                            <p style="font-size:13.5px; color:#555; margin:5px 0 0 0;">El desarrollo del ciclo genera empleo masivo, impulsando ramas socioproductivas como el transporte de carga pesada, distribución de insumos técnicos y mantenimiento mecánico de flotas agrícolas.</p>
                        </div>
                    </div>
                </div>
            `;
            break;

        case 'explorar':
            document.getElementById('nav-explorar').classList.add('active');
            
            let htmlTimeline = `
                <div class="content-card" style="background: transparent; box-shadow: none; padding:0; border:none;">
                    <h2 style="text-align:center; margin-bottom:5px;">Línea de Tiempo del Ciclo Tecnológico</h2>
                    <p style="text-align:center; color:#666; margin-bottom:35px; font-size:14px;">Etapas secuenciales de ejecución en el Municipio El Socorro</p>
                    <div class="timeline-wrapper">
            `;

            TIMELINE_DATABASE.forEach((item, index) => {
                const sideClass = (index % 2 === 0) ? 'left-box' : 'right-box';
                htmlTimeline += `
                    <div class="timeline-container ${sideClass}">
                        <div class="timeline-box">
                            <div class="timeline-date">${item.fecha}</div>
                            <h4 class="timeline-title">${item.evento}</h4>
                            <p class="timeline-desc">${item.desc}</p>
                        </div>
                    </div>
                `;
            });

            htmlTimeline += `</div></div>`;
            viewport.innerHTML = htmlTimeline;
            break;

        case 'bitacora':
            document.getElementById('nav-bitacora').classList.add('active');
            viewport.innerHTML = `
                <div class="content-card">
                    <h2>Historial de Rendimiento y Comportamiento Agronómico</h2>
                    <p>Análisis estadístico y evolutivo recopilado del comportamiento del rubro de maíz a nivel municipal en los últimos años:</p>
                    
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Ciclo Anual</th>
                                <th>Variables Climáticas y Manejo de Cultivo</th>
                                <th>Rendimiento Estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Ciclo 2024</b></td>
                                <td>Inicio demorado debido a lluvias irregulares. Se acentuó el control fitosanitario temprano para mitigar pérdidas y estabilizar las parcelas.</td>
                                <td>~3.2 Ton / Ha</td>
                            </tr>
                            <tr>
                                <td><b>Ciclo 2025</b></td>
                                <td>Patrón pluviométrico óptimo y regular. Mayor implementación técnica en la calibración de densidades de siembra y sentido de surcos.</td>
                                <td>~3.6 Ton / Ha</td>
                            </tr>
                            <tr>
                                <td><b>Ciclo Actual 2026</b></td>
                                <td>Excelente retención hídrica en suelos durante el arranque del invierno. Monitoreo secuencial enfocado en asegurar el óptimo desarrollo del grano.</td>
                                <td>En Desarrollo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
            break;

        case 'proyecto':
            document.getElementById('nav-proyecto').classList.add('active');
            viewport.innerHTML = `
                <div class="content-card">
                    <h2>Sobre el Proyecto Integrado</h2>
                    <p>Esta plataforma ha sido desarrollada de acuerdo con las pautas y la estructura de datos expuesta en el manual técnico de la evaluación bajo el nombre de <b>Layout timeline</b>.</p>
                    <p><b>Objetivo Académico:</b> Diseñar una interfaz interactiva tipo SPA (Single Page Application) que demuestre la asimilación de flujos condicionales de datos simulando el consumo de objetos JSON, tomando como eje de estudio la infraestructura cerealera del <b>Municipio El Socorro, Estado Guárico</b>.</p>
                </div>
            `;
            break;

        case 'contacto':
            document.getElementById('nav-contacto').classList.add('active');
            viewport.innerHTML = `
                <div class="content-card">
                    <h2>Formulario de Contacto Técnico</h2>
                    <p>Canal directo para el envío de dudas o reportes en parcelas municipales:</p>
                    <form onsubmit="alert('¡Reporte agrícola enviado con éxito!'); return false;" style="margin-top:20px;">
                        <div class="form-group">
                            <label>Nombre y Apellido</label>
                            <input type="text" placeholder="Ej. Carlos Mendoza" required>
                        </div>
                        <div class="form-group">
                            <label>Correo Electrónico de Contacto</label>
                            <input type="email" placeholder="ejemplo@correo.com" required>
                        </div>
                        <div class="form-group">
                            <label>Descripción / Observación de Campo</label>
                            <textarea rows="4" placeholder="Indique detalles de interés técnico o agronómico..." required></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Enviar Reporte</button>
                    </form>
                </div>
            `;
            break;

        default:
            viewport.innerHTML = `<div class="status-box error"><h3>Respuesta 404</h3><p>Ruta no localizada.</p></div>`;
    }
}

window.addEventListener('DOMContentLoaded', appRouter);
window.addEventListener('popstate', appRouter);