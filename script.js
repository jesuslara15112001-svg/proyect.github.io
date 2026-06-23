// BASE DE DATOS CON LAS RUTAS EXACTAS DE TU PROYECTO
const TIMELINE_DATABASE = [
    { 
        "id": 1, 
        "fecha": "Abril / Mayo", 
        "evento": "Preparación y Rastreo de Tierra", 
        "desc": "Esta labor inicial es indispensable para romper las capas compactadas del suelo debido al tránsito de maquinaria anterior y el pastoreo. El pase de rastra pesada desmenuza los terrones grandes y duros, facilitando que las futuras raíces del maíz penetren con libertad y busquen nutrientes a mayor profundidad.",
        "imagen": "imagen/preparacion_de_tierra.jpeg"
    },
    { 
        "id": 2, 
        "fecha": "Mayo", 
        "evento": "Siembra Mecanizada", 
        "desc": "La siembra se ejecuta inmediatamente después de que se establece el ciclo regular de lluvias, garantizando que el suelo cuente con la humedad óptima para activar la germinación de la semilla certificada. Utilizar sembradoras mecánicas de precisión permite calibrar con exactitud tanto la profundidad como la distancia.",
        "imagen": "imagen/mayo_siembra.png"
    },
    { 
        "id": 3, 
        "fecha": "Junio", 
        "evento": "Monitoreo Fitosanitario", 
        "desc": "Durante las primeras semanas de desarrollo, la plántula de maíz es sumamente susceptible a factores externos que pueden diezmar el rendimiento final. El monitoreo técnico constante en el campo permite identificar a tiempo la aparición de malezas y plagas como el gusano cogollero.",
        "imagen": "imagen/primeros_dias_del_maiz.jpg"
    },
    { 
        "id": 4, 
        "fecha": "Julio", 
        "evento": "Fertilización de Rebono", 
        "desc": "Cuando el cultivo alcanza la fase de desarrollo vegetativo acelerado, sus requerimientos nutricionales se disparan exponencialmente. Se aplica una fertilización nitrogenada complementaria, orientada principalmente mediante el uso de urea pesada en bandas.",
        "imagen": "imagen/fase_de_urea.jpg"
    },
    { 
        "id": 5, 
        "fecha": "Agosto", 
        "evento": "Evaluación del Llenado", 
        "desc": "Esta fase consiste en inspecciones técnicas directas en las parcelas para auditar el comportamiento agronómico real del cultivo antes de organizar la logística de cosecha. Los técnicos realizan muestreos aleatorios abriendo las espatas de las mazorcas para verificar el grano.",
        "imagen": "imagen/fase_de_evaluacion.jpg"
    },
    { 
        "id": 6, 
        "fecha": "Septiembre", 
        "evento": "Cosecha y Acopio", 
        "desc": "Es la culminación del esfuerzo productivo y se activa cuando la planta llega a su madurez fisiológica y el grano reduce de forma natural su porcentaje de humedad interna a los niveles exigidos por la industria (idealmente entre el 12% y el 14%).",
        "imagen": "imagen/cosecha.jpg"
    }
];

// CREDENCIALES DEL LOGIN
const CREDENCIALES_VALIDAS = {
    usuario: "Jesus_Lara",
    cedula: "31079893"
};

// ELEMENTOS DE LA PÁGINA
const loginContainer = document.getElementById('login-container');
const appContainer = document.getElementById('app-container');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const navButtons = document.querySelectorAll('.nav-btn');
const contentViews = document.querySelectorAll('.content-view');
const timelineContainer = document.getElementById('timeline-container');
const btnLogout = document.getElementById('btn-logout');

// CONTROL DEL LOGIN
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputUser = document.getElementById('username').value.trim();
    const inputCedula = document.getElementById('cedula').value.trim();

    if (inputUser === CREDENCIALES_VALIDAS.usuario && inputCedula === CREDENCIALES_VALIDAS.cedula) {
        loginContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');
        loginError.textContent = "";
        loginForm.reset();
        
        renderizarLineaTiempo(); // Carga las tarjetas al entrar
    } else {
        loginError.textContent = "Usuario o Cédula incorrectos.";
    }
});

// CERRAR SESIÓN
btnLogout.addEventListener('click', function() {
    appContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
});

// CAMBIO DE PESTAÑAS (SPA)
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.id === 'btn-logout') return;

        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        contentViews.forEach(view => view.classList.add('hidden'));

        const targetViewId = `view-${this.getAttribute('data-target')}`;
        document.getElementById(targetViewId).classList.remove('hidden');
    });
});

// MOSTRAR LAS TARJETAS EN PANTALLA
function renderizarLineaTiempo() {
    timelineContainer.innerHTML = "";

    TIMELINE_DATABASE.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${item.imagen}" alt="${item.evento}">
            <div class="card-info">
                <span class="fecha">${item.fecha}</span>
                <h3>${item.evento}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        timelineContainer.appendChild(card);
    });
}
