interface Translations {
  [key: string]: string | { title: string; description: string; technologies: string; linkText: string }[];
}

export interface TranslationData {
  en: Translations;
  es: Translations;
}

export const translations: TranslationData = {
  en: {
    hello: "HELLO",
    im: "I'm Ricardo",
    description: `Front-end developer<br>From Ecuador<br>Living in New York`,
    contactMeButton: "Contact Me",
    home: "HOME",
    homeInfo: `Junior Web Developer | Passionate About UX & Aesthetics
<br>I'm a junior web developer with experience in JavaScript, TypeScript, Angular, HTML, and CSS. I love creating intuitive and visually appealing web experiences. Always eager to learn new technologies, my goal is to become a senior full-stack developer. <br>Outside of coding, I enjoy video games and downhill mountain biking.
<br>Let's build something great together! 🚀`,
    aboutMe: "ABOUT ME",
    aboutMeDescription: `Junior Web Developer | Passionate About UX & Collaborative Growth
<br>
I'm a junior web developer with experience in JavaScript, TypeScript, Angular, HTML, and CSS. As a self-taught programmer, I've worked on a few projects where I focused on creating clean, intuitive, and visually appealing user experiences. I enjoy the challenge of turning ideas into interactive and responsive web applications, always aiming for a balance between aesthetics and functionality.
<br>
I thrive in collaborative environments, valuing the opportunity to learn from experienced developers while fostering a positive and relaxed workspace. I believe that teamwork and continuous learning are key to professional growth. Although my backend experience is minimal, I'm eager to expand my knowledge and take on new challenges that will help me become a well-rounded full-stack developer.
<br>
For me, coding should be as enjoyable as it is challenging. While problem-solving and debugging can be tough at times, I believe in making the process fun and engaging. Whether I'm refining UI designs, optimizing performance, or experimenting with new technologies, I approach development with curiosity and enthusiasm.
<br>
Beyond coding, I'm always looking for new challenges both on and off the screen. I'm passionate about video games, where I enjoy strategy, creativity, and problem-solving in a different way. Additionally, I love downhill mountain biking, pushing my limits while navigating fast descents and technical terrain. Both hobbies fuel my love for challenges, adaptability, and constant improvement—values that I bring into my work as a developer.`,
    projects: "PROJECTS",
    contact: "CONTACT ME",
    contact2: "CONTACT",
    phoneNumber: "Phone number:",

    //text for the project cards
    projectsList: [
      {
        title: "Tic-Tac-Toe Online",
        description: "Online multiplayer game made with Angular 19, NodeJs and Socket.IO",
        technologies: "Angular, SCSS, TypeScript, Socket.IO",
        linkText: "Watch the project",
      },
      {
        title: "E-Commerce",
        description: "Single page E-Commerce app made with Angular 19 and Typescript",
        technologies: "Angular, SCSS, TypeScript",
        linkText: "Watch the repository",
      },
      {
        title: "Random Roulette",
        description: "Made for random gifts exchanges events like secret santa made with the ionic framework",
        technologies: "Angular, SCSS, TypeScript, Ionic",
        linkText: "Watch the repository",
      },
      {
        title: "Pong game",
        description: 'Retro "Pong" game that can be played in local multiplayer with 2 people or just one person against the CPU',
        technologies: "HTML, CSS, JavaScript",
        linkText: "Watch the project",
      },
      {
        title: "Log In form",
        description: "Log in form made with html, css, Javascript and using NodeJs, dotenv and express",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Watch the repository",
      },
      {
        title: "Pokedex",
        description: "Tool that consumes PokeAPI to see the information of different types of pokemons",
        technologies: "Angular, SCSS, TypeScript, Ionic",
        linkText: "Watch the repository",
      },
      {
        title: "Typing test",
        description: "Typing test that show how fast can you type different words in a minute, and also shows how manny letters you typed and how many mistakes you made",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Watch the project",
      },
      {
        title: "Calculator",
        description: "Basic calculator that can be used both by clicking the screen or with the keyboard made with html, css and javascript",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Watch the project",
      },
      {
        title: "Digital Clock",
        description: "Digital clock that shows live the current time of your current time zone made with a seven-segment display",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Watch the project",
      },
      {
        title: "Portfolio V1.0",
        description: "The first version of my portfolio made with just HTML, CSS, and JavaScript",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Watch the project",
      },
    ],
  },

  es: {
    hello: "HOLA",
    im: "Soy Ricardo",
    description: `Desarrollador Front-end<br>De Ecuador<br>Viviendo en New York`,
    contactMeButton: "Contactame",
    home: "INICIO",
    homeInfo: `Desarrollador Web Junior | Apasionado por la UX y la Estética
<br>Soy un desarrollador web junior con experiencia en JavaScript, TypeScript, Angular, HTML y CSS. Me encanta crear experiencias web intuitivas y visualmente atractivas. Siempre con ganas de aprender nuevas tecnologías, mi objetivo es convertirme en un desarrollador full-stack senior.<br>Fuera del mundo del código, disfruto de los videojuegos y el downhill.
<br>¡Construyamos algo increíble juntos! 🚀`,
    aboutMe: "SOBRE MÍ",
    aboutMeDescription: `Desarrollador Web Junior | Apasionado por la UX y el Crecimiento Colaborativo
<br>
Soy un desarrollador web junior con experiencia en JavaScript, TypeScript, Angular, HTML y CSS. Como programador autodidacta, he trabajado en varios proyectos en los que me he centrado en crear experiencias de usuario limpias, intuitivas y visualmente atractivas. Disfruto el desafío de convertir ideas en aplicaciones web interactivas y responsivas, siempre buscando un equilibrio entre estética y funcionalidad.
<br>
Me desenvuelvo mejor en entornos colaborativos, valorando la oportunidad de aprender de desarrolladores con más experiencia mientras promuevo un ambiente de trabajo positivo y relajado. Creo firmemente que el trabajo en equipo y el aprendizaje continuo son clave para el crecimiento profesional. Aunque mi experiencia en el backend es limitada, estoy ansioso por ampliar mis conocimientos y asumir nuevos desafíos que me ayuden a convertirme en un desarrollador full-stack completo.
<br>
Para mí, programar debe ser tan divertido como desafiante. Aunque la resolución de problemas y la depuración pueden ser complicadas a veces, creo en hacer que el proceso sea entretenido y enriquecedor. Ya sea refinando diseños de interfaz, optimizando el rendimiento o experimentando con nuevas tecnologías, abordo el desarrollo con curiosidad y entusiasmo.
<br>
Más allá del código, siempre busco nuevos retos dentro y fuera de la pantalla. Soy un apasionado de los videojuegos, donde disfruto de la estrategia, la creatividad y la resolución de problemas desde una perspectiva diferente. Además, me encanta el ciclismo de montaña downhill, donde empujo mis límites mientras desciendo a toda velocidad por terrenos técnicos. Ambas aficiones alimentan mi amor por los desafíos, la adaptabilidad y la mejora constante, valores que aplico en mi trabajo como desarrollador.`,
    projects: "PROYECTOS",
    contact: "CONTACTO",
    contact2: "CONTACTO",
    phoneNumber: "Numero de teléfono:",

    //texto para las tarjetas de proyectos
    projectsList: [
      {
        title: "Tic-Tac-Toe Online",
        description: "Juego multijugador en linea hecho con Angular 19, NodeJs y Socket.IO",
        technologies: "Angular, SCSS, TypeScript, Socket.IO",
        linkText: "Mira el proyecto",
      },
      {
        title: "E-Commerce",
        description: "App de comercio electrónico de una sola página hecho con Angular 19 y Typescript",
        technologies: "Angular, SCSS, TypeScript",
        linkText: "Mira el repositorio",
      },
      {
        title: "Random Roulette",
        description: "Hecho para intercambios de regalos aleatorios, como el amigo secreto, creado con el framework Ionic",
        technologies: "Angular, SCSS, TypeScript, Ionic",
        linkText: "Mira el repositorio",
      },
      {
        title: "Pong game",
        description: 'Juego retro de "Pong" que se puede jugar en multijugador local con 2 personas o solo una persona contra la CPU',
        technologies: "HTML, CSS, JavaScript",
        linkText: "Mira el proyecto",
      },
      {
        title: "Log In form",
        description: "Formulario de inicio de sesión creado con HTML, CSS y JavaScript, utilizando Node.js, dotenv y Express",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Mira el repositorio",
      },
      {
        title: "Pokedex",
        description: "Herramienta que consume la PokeAPI para ver la información de distintos tipos de Pokémon",
        technologies: "Angular, SCSS, TypeScript, Ionic",
        linkText: "Mira el repositorio",
      },
      {
        title: "Typing test",
        description: "Prueba de mecanografía que muestra qué tan rápido puedes escribir diferentes palabras en un minuto, además de cuántas letras escribiste y cuántos errores cometiste",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Mira el proyecto",
      },
      {
        title: "Calculator",
        description: "Calculadora básica que se puede usar tanto haciendo clic en la pantalla como con el teclado, creada con HTML, CSS y JavaScript",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Mira el proyecto",
      },
      {
        title: "Digital Clock",
        description: "Reloj digital que muestra en vivo la hora actual de tu zona horaria, utilizando una pantalla de siete segmentos",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Mira el proyecto",
      },
      {
        title: "Portfolio V1.0",
        description: "La primera versión de mi portafolio, creada solo con HTML, CSS y JavaScript",
        technologies: "HTML, CSS, JavaScript",
        linkText: "Mira el proyecto",
      },
    ],
  },
};
