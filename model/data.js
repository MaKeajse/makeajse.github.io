// Datos de experiencia laboral
window.experiencias = [
     {
        rol: "Optimizadora de Procesos",
        empresa: "CELERIX S.A.S.",
        periodo: "nov 2025 - Actualidad",
        responsabilidades: [
        "Realizar aplicaciones con Filemaker Pro",
        "Automatización de procesos",
        "Formación constante para dar mejor respuesta a las necesidades de los usuarios"
        ],
        logros: [
        "Aplicaciones con Filemaker Pro",
        "Diagrama de Flujo"
        ]
    },
    {
        rol: "Analista de Sistemas — Líder de Proceso",
        empresa: "COTIVIDRIOS S.A.S.",
        periodo: "ene 2021 – nov 2025",
        responsabilidades: [
        "Diseñar, automatizar y mantener formatos corporativos en Excel con VBA.",
        "Desarrollar aplicaciones internas en Python (Tkinter, Pandas).",
        "Administrar y optimizar bases de datos en SQL Server.",
        "Implementar y dar soporte a procesos de integración inter-áreas."
        ],
        logros: [
        "Formatos en Excel con VBA conectados a SQL Server.",
        "Optimizador de cortes de aluminio en Python.",
        "Sistema detallado de control de inventarios.",
        "Formato de cotizaciones con conversión a dólares."
        ]
    },
    {
        rol: "Usuario Líder World Office (ERP)",
        empresa: "COTIVIDRIOS S.A.S.",
        periodo: "ene 2020 – dic 2021",
        responsabilidades: [
        "Parametrización del software contable World Office.",
        "Implementación de Órdenes de Producción y Centros de Costos.",
        "Migración de productos.",
        "Apoyo en juntas directivas."
        ],
        logros: [
        "Formatos integrados con el ERP.",
        "Creación de base de datos en Access."
        ]
    },
    {
        rol: "Costos y Presupuestos",
        empresa: "COTIVIDRIOS S.A.S.",
        periodo: "jul 2019 – ene 2020",
        responsabilidades: [
        "Realizar cotizaciones siguiendo criterios de gerencia.",
        "Organizar documentación para entrega al cliente.",
        "Revisar contratos y firma digital de gerencia."
        ],
        logros: [
        "Primer modelo de formato de cotizaciones en Excel.",
        "Formato para cotizar serie superior."
        ]
    },
    {
        rol: "Auditora",
        empresa: "COTIVIDRIOS S.A.S.",
        periodo: "abr 2017 – jul 2019",
        responsabilidades: [
        "Entrega de órdenes de pedido a líderes de proceso.",
        "Actualización de estados.",
        "Manejo de la firma digital de gerencia."
        ],
        logros: [
        "Cuadro de seguimiento de producción."
        ]
    },
    {
        rol: "Asistente de Gerencia",
        empresa: "COTIVIDRIOS S.A.S.",
        periodo: "may 2016 – abr 2017",
        responsabilidades: [
        "Recepcionista y manejo de caja menor.",
        "Apoyo en actividades administrativas."
        ],
        logros: [
        "Ingreso al mundo laboral.",
        "Apoyo directo a gerencia."
        ]
    }
];

// =================== EDUCACIÓN ===================
window.educacion = [
    {
        titulo: "Ingeniería de Software",
        institucion: "Politécnico Grancolombiano",
        ciudad: "Medellín (virtual)",
        periodo: "2022 – 2026",
        detalle: "Actualmente 8º semestre (promedio 4.75).",
        logo: "../assets/img/logos/poligran.png"
    },
    {
        titulo: "Asistente en Desarrollo de Software (Técnico)",
        institucion: "CESDE",
        ciudad: "Medellín",
        periodo: "2019 – 2021",
        logo: "../assets/img/logos/cesde.png"
    },
    {
        titulo: "Trabajo Social (7 semestres)",
        institucion: "Universidad Industrial de Santander",
        ciudad: "Bucaramanga",
        periodo: "2009 – 2013",
        detalle: "Promedio 4.22 (no culminado).",
        logo: "../assets/img/logos/uis.png"
    },
    {
        titulo: "Bachiller con énfasis en Comercio",
        institucion: "Liceo Señor de los Milagros",
        ciudad: "Girón",
        periodo: "1992 – 2004",
        logo: "../assets/img/logos/colisemi.png"
    }
];

// =================== CURSOS (Categorizados) ===================
// Convención: month: 1..12  | year: YYYY
// Esto nos permite ordenar cronológicamente.
window.cursos = [
    // Ingeniería / fundamentos
    { nombre: "Fundamentos de Ingeniería de Software", institucion: "Platzi", month: 8, year: 2025, categoria: "Ingeniería & Fundamentos", logo: "../assets/img/logos/platzi.png" },

    // PHP / Backend
    { nombre: "Curso de Introducción a PHP con Composer", institucion: "Platzi", month: 1, year: 2025, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Curso práctico de PHP", institucion: "Platzi", month: 11, year: 2024, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Curso Básico de PHP: Arreglos, Funciones y Estructuras de Control", institucion: "Platzi", month: 10, year: 2024, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Curso Básico de PHP: Instalación, Fundamentos y Operadores", institucion: "Platzi", month: 10, year: 2024, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Diplomado en Programación en PHP (120 h)", institucion: "Politécnico de Colombia", month: 8, year: 2020, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/politecnicoColombia.png" },


    // Java / JS / Python
    { nombre: "Diplomado en Java (120 h)", institucion: "Politécnico de Colombia", month: 2, year: 2024, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/politecnicoColombia.png" },

    { nombre: "Básico de JavaScript (19 h)", institucion: "Platzi", month: 7, year: 2023, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Fundamentos de Python (17 h)", institucion: "Platzi", month: 6, year: 2023, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Variables y estructuras de control en Python (48 h)", institucion: "SENA", month: 9, year: 2022, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/sena.png" },

    { nombre: "Python Intermedio (20 h)", institucion: "COMFAMA", month: 9, year: 2022, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/comfama.png"  },

    { nombre: "Crea un juego con Python (10 h)", institucion: "COMFAMA", month: 6, year: 2022, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/comfama.png" },

    { nombre: "Curso básico de Python en Portugués", institucion: "Platzi", month: 4, year: 2024, categoria: "Lenguajes & Programación", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Básico de Algoritmos y Pensamiento Lógico (15 h)", institucion: "Platzi", month: 7, year: 2023, categoria: "Ingeniería & Fundamentos", logo: "../assets/img/logos/platzi.png"  },


    // Frontend / Web / Frameworks
    { nombre: "Angular (120 h)", institucion: "InfoCenter", month: 12, year: 2023, categoria: "Web & Frontend", logo: "../assets/img/logos/infocenter.png" },

    { nombre: "Curso Definitivo de HTML y CSS (23 h)", institucion: "Platzi", month: 8, year: 2023, categoria: "Web & Frontend", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Introducción a la Web: Historia y Funcionamiento de Internet (12 h)", institucion: "Platzi", month: 9, year: 2023, categoria: "Web & Frontend", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Fundamentos de programación con énfasis en Web (230 h)", institucion: "IBM – MinTIC", month: 6, year: 2022, categoria: "Web & Frontend", logo: "../assets/img/logos/IBM.png" },


    // Datos, Excel & Automatización
    { nombre: "Excel Avanzado con Macros", institucion: "Platzi", month: 4, year: 2024, categoria: "Datos, Excel & Automatización", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Excel Avanzado para Análisis de Datos", institucion: "Platzi", month: 4, year: 2024, categoria: "Datos, Excel & Automatización", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Excel (20 h)", institucion: "Platzi", month: 6, year: 2023, categoria: "Datos, Excel & Automatización", logo: "../assets/img/logos/platzi.png"  },


    // Bases de datos
    { nombre: "Base de Datos – Básico (20 h)", institucion: "COMFAMA", month: 9, year: 2022, categoria: "Bases de Datos", logo: "../assets/img/logos/comfama.png" },


    // Idiomas
    { nombre: "Ruta de Portugués", institucion: "Platzi", month: 6, year: 2024, categoria: "Idiomas", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Portugués cotidiano", institucion: "Platzi", month: 6, year: 2024, categoria: "Idiomas", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Básico de Portugués para hispanohablantes", institucion: "Platzi", month: 6, year: 2024, categoria: "Idiomas", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Práctico de Portugués para hispanohablantes", institucion: "Platzi", month: 6, year: 2024, categoria: "Idiomas", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Portugués para viajes", institucion: "Platzi", month: 6, year: 2024, categoria: "Idiomas", logo: "../assets/img/logos/platzi.png"  },


    // Móviles
    { nombre: "Desarrollo de aplicaciones móviles II nivel", institucion: "CENDI – Sapiencia", month: 6, year: 2022, categoria: "Móviles", logo: "../assets/img/logos/cendi.png" },

    // Otros
    { nombre: "Curso de Claude AI", institucion: "Platzi", month: 1, year: 2025, categoria: "Otros", logo: "../assets/img/logos/platzi.png"  },

    { nombre: "Teletrabajo para empleados (40 h)", institucion: "SENA", month: 8, year: 2020, categoria: "Otros", logo: "../assets/img/logos/sena.png" }
];

// ================ PROYECTOS DESTACADOS ================
window.proyectos = [
    {
        titulo: "Optimizador de cortes de aluminio",
        resumen: "App de escritorio que minimiza desperdicio y prioriza sobrantes grandes.",
        tecnologias: ["Python", "Tkinter", "Pandas"],
        responsabilidades: [
        "Diseño de lógica de optimización y UI en Tkinter",
        "Carga/validación de data y reporte de cortes"
        ],
        resultados: [
        "Reducción de desperdicio",
        "Estandarización de salida para producción"
        ],
        links: { repo: "", demo: "" } // si tienes URL de GitHub, ponla aquí
    },
    {
        titulo: "Sistema detallado de control de inventarios",
        resumen: "Extensión al ERP para llevar unidades, medidas y costos detallados.",
        tecnologias: ["Excel/VBA", "SQL Server"],
        responsabilidades: [
        "Modelo de datos y vistas en SQL Server",
        "Automatización con macros y migración semanal al ERP"
        ],
        resultados: [
        "Control granular y conciliación semanal con World Office"
        ],
        links: { repo: "", demo: "" }
    },
    {
        titulo: "Formato de Cotizaciones (APU + USD)",
        resumen: "Plantilla corporativa con conversión de moneda y análisis APU.",
        tecnologias: ["Excel/VBA", "SQL Server"],
        responsabilidades: [
        "Conectividad a vistas SQL",
        "Cálculo dinámico de APU y generación de PDFs"
        ],
        resultados: [
        "Tiempos de cotización menores",
        "Menos errores por digitación"
        ],
        links: { repo: "", demo: "" }
    },
    {
        titulo: "Hoja de vida de clientes",
        resumen: "Centraliza ubicación, tipo de proyecto y datos clave del cliente.",
        tecnologias: ["Excel/VBA", "SQL Server"],
        responsabilidades: [
        "Modelado y consultas",
        "Interfaz en Excel para equipos comerciales"
        ],
        resultados: [
        "Mejor seguimiento y segmentación"
        ],
        links: { repo: "", demo: "" }
    },
    {
        titulo: "Vistas personalizadas y auditoría contable",
        resumen: "Vistas y consultas para auditoría de documentos y contabilización.",
        tecnologias: ["SQL Server"],
        responsabilidades: [
        "Creación de vistas y refactor de consultas",
        "Soporte a integración inter-áreas"
        ],
        resultados: [
        "Más trazabilidad y control"
        ],
        links: { repo: "", demo: "" }
    }
];
