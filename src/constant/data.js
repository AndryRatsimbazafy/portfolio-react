const year = new Date().getFullYear() - 2000;

export const myDescription = {
  home: `Andry Patrick Ratsimbazafy. 
  I’m a fullstack developer with 3 YEARS of experiences, specialised in building (and occasionally designing) web or desktop applications. 
  I have a master's degree (MBDS) from University Côte d'Asur of Nice, France. I also work as a Freelancer on software and game development. 
  I gained experience in the area of development through the companies in which I worked.`,
  about: `a qualified and professional FullStack developer
  (specialization: Javascript/Typescript) with a Master's degree in
  Computer Science Specialization MOBIQUITY, DATABASES AND SYSTEMS
  INTEGRATION from the Université Côte d'Azur and 3 years of
  experience in website conception and development. Creative and
  analytical skills. Team player with an eye for detail.`,
};

export const myData = {
  nom: "Ratsimbazafy",
  prenom: "Andry Patrick",
  birthDate: "23 march 2000",
  age: year,
  nationality: "Malagasy",
  experience: "3 years",
  freelance: "Available",
  languages: "English, French",
  phone: "+261 34 80 773 38",
  email: "andrypatrick8@gmail.com",
  skype: "andrypatrick8",
  linkedIn: "Andry Patrick Ratsimbazafy",
  instagram: "andry.rts",
  address: "Madagascar",
};

export const myWorkExperience = [
  {
    date: "Aug 2022 - Today",
    job: "FrontEnd Developer",
    company: "BOCASAY",
    description: `Design and development of modules or new features on the client's platform. Application debugging and maintenance. 
        Project management method: Agile. Make the plan and estimate the tasks. Write technical documents and help the PO or tests. 
        Stack Used: React (Typescript, Redux, Material UI, Saga), REST API, Git, Trello Slack.`,
  },
  {
    date: "Nov 2020 - May 2022",
    job: "FullStack Developer",
    company: "W3D Madagascar",
    description: `Website conception and development, Database conception and administration, R&D,
        feasibility study, participated in FrontOffice and BackOffice. Made the planning of the tasks of the project. Focus on
        virtual tour, interactive virtual clinic and interactive virtual exhibition projects; and some project management web
        applications. Stack Used: Angular (Typescript, NgRX, Material), Node (Typescript, ExpressJS, NestJS, REST API,
        JWT), MongoDB, Unity 3D, Git and Jira.`,
  },
  {
    date: "Feb 2020 - June 2020",
    job: "FullStack Developer",
    company: "Eufonie Madagascar",
    description: `Website conception and development, Database conception and administration, debugging and maintenance, R&D,
        build app from scratch. Made some projects like web scrapping and mobile game. Stack Used: Node (ExpressJS), Flutter,
        Firebase, Git and AWS.`,
  },
  {
    date: "Jul 2019 - Sept 2019",
    job: "FullStack Developer Intern",
    company: "PULSE Axian Group",
    description: `Assist in the design and participate in the development of applications or add modules to existing applications. Writing
        clean code for the front and back end of the software. Stack Used: PHP (Symfony), MySQL, Ajax and Git.`,
  },
];

export const myEducationExperience = [
  {
    date: "Nov 2020 - Nov 2021",
    degree: "Master in SCIENCE, TECHNOLOGY, HEALTH",
    college: "Côte d'Azur University - France",
    description: `Graduated with a Master's degree in MBDS (Mobiquity, Database and Systems Integration) at the University of Côte d'Azur (France). 
      Specialization in Information and Communication Sciences and Technologies.`,
  },
  {
    date: "Nov 2020 - Today",
    degree: "Protocol and Membership Officer",
    college: "Rotaract Club Ivandry",
    description: `Former Public Image Officer: Managed the club's social media pages. Implemented the club's digital communication. 
    Current Protocol (Speaking at official club events) and Membership Manager.`,
  },
  {
    date: "Apr 2022 - Today",
    degree: "American English Formation",
    college: "ETP - Madagascar",
    description: `Current level: Advanced 1 certificate. English American Formation: Speaking, Listening, ...`,
  },
  {
    date: "Jan 2020 - Sept 2020",
    degree: "Master I (M1)",
    college: "IT University - Madagascar",
    description: `Graduated with a Master I in Computer Science specialized in Application Development.`,
  },
  {
    date: "Oct 2016 - Nov 2019",
    degree: "Bachelor in Computer Science",
    college: "IT University - Madagascar",
    description: `Graduated with a Bachelor's degree in Computer Science with a major in Application Development`,
  },
];

export const mySkills = [
  {
    name: "ReactJS",
    value: 70,
  },
  {
    name: "Angular",
    value: 80,
  },
  {
    name: "NodeJs",
    value: 70,
  },
  {
    name: "MongoDB",
    value: 70,
  },
  {
    name: "Html & CSS",
    value: 70,
  },
  {
    name: "Git & Jira",
    value: 60,
  },
  {
    name: "Agile methodology",
    value: 75,
  },
  {
    name: "English",
    value: 75,
  },
  {
    name: "French",
    value: 80,
  },
];

export const workData = [
  {
    img: "img/projects/virtual-clinic.png",
    name: "Virtual Clinic",
    format: "img",
    project: "WEBSITE",
    client: "Skinceuticals",
    technologies: ["Angular (Ngrx)", "NodeJs (ExpressJs)", "MongoDB"],
    description: `Web application for an interactive virtual clinic for an event presenting pharmaceutical treatment. 
      Possibility to visit the rooms, to see the conferences in the auditorium and to play mini games between the different phases.`,
    url: "https://skinceuticalsvirtualclinic.com/auth/signin",
  },
  {
    img: "img/projects/virtual-conference.png",
    name: "Virtual Conference",
    format: "img",
    project: "WEBSITE",
    client: "Skinceuticals",
    technologies: ["Angular (Ngrx)", "NodeJs (ExpressJs)", "MongoDB"],
    description: `Skinceuticals Web application for an interactive virtual conference for an event presenting pharmaceutical products and medical advice. 
    Possibility to visit the rooms, to see the conferences in the auditorium and to play mini games between the different phases.`,
    url: "https://masterphisicaneliteportfolio.com/",
  },
  {
    img: "img/projects/salon.png",
    name: "Interactive Virtual expo",
    format: "img", //youtube
    project: "WEBSITE",
    client: "W3D Madagascar",
    technologies: ["Unity 3D", "Angular", "NodeJS", "MongoDB"],
    description: `Web application for a virtual trade show (for targeted customer not for everyone) for an event gathering building and fitting professionals. 
    Possibility to navigate in the show, to visit the stands (see the contents and discuss with the salesmen).`,
  },
  {
    img: "img/projects/my-connectig.png",
    name: "Commercials space",
    format: "img",
    project: "WEBSITE",
    client: "My Connecting",
    technologies: ["ReactJs (Redux)", "Material UI"],
    description: `Web application for My Connecting's commercials. Help for managing commercials, formations, conventions and can deliver stats.`,
  },
  {
    img: "img/projects/tailora.png",
    name: "Tailora",
    format: "img",
    project: "WEBSITE",
    client: "W3D Madagascar",
    technologies: ["Angular (Ngrx)", "NodeJs (ExpressJs)", "MongoDB"],
    description: `Web application for managing and consulting internal projects such as virtual tours or 360° models.`,
  },
  {
    img: "img/projects/gtm.png",
    name: "GTM The Full Room",
    format: "img",
    project: "WEBSITE",
    client: "W3D Madagascar",
    technologies: ["ReactJs", "NodeJs (NestJs)", "MongoDB"],
    description: `A project management web application for GTM The full room. Manage the project by adding, deleting, updating, commenting, etc...`,
    url: "https://thefullroom.pimpmyroom.fr/",
  },
  {
    img: "img/projects/jigsaw.png",
    name: "Jigsaw Puzzle",
    format: "img",
    project: "MOBILE APP",
    client: "Eufonie Madagascar",
    technologies: ["Fultteur (Asyc Redux)", "SQLite", "Firebase"],
    description: `Mobile puzzle game for Android. Possibility to buy levels or play with free ones. Gameplay development.`,
  },
  {
    img: "img/projects/edm.png",
    name: "EDM TBQ",
    format: "img",
    project: "WEBSITE",
    client: "PULSE Axian Group",
    technologies: ["PHP (Symfony 3)", "MySQL", "AJAX & TWIG"],
    description: `Web application for managing EDM company reports. Possibility of importing and exporting reports for processing by a BI application.`,
  },
  {
    img: "img/projects/wines.png",
    name: "Scrapping Wines",
    format: "img",
    project: "WEB SCRAPPING",
    client: "Eufonie Madagascar",
    technologies: ["NodeJs (ExpressJs)", "AWS"],
    description: `Web application for scrapping the data all the client's websites.`,
  },
];

export const persoExpData = [
  {
    title: "Hasinala, on a journey",
    img: "img/personalExp/hasinala.png",
    des: [
      "Multi-type 2D video game on PC named 'Hasinala, on a journey' made for Game Jam+ 2020 (Platformer, Point and click, puzzle game, endless runner). Awarded 'Best Game of Africa' and nominated for world grand final.",
      "Stack used: Unity Engine",
    ],
  },
  {
    title: "Times like these",
    img: "img/personalExp/times.png",
    des: [
      "2D Plateformer video game on PC named 'Times like these' made for Global Game Jam 2019 (XBOX Controller required). Awarded for 1st place in Orange Madagascar Gaming Hackathon.",
      "Stack used: Unity Engine",
    ],
  },
  {
    title: "Hafa",
    img: "img/personalExp/hafa.png",
    des: [
      "2D Plateformer video game on PC named 'Hafa' made for Global Game Jam 2020.",
      "Stack used: Unity Engine",
    ],
  },
  {
    title: "In Memory of",
    img: "img/personalExp/memory.png",
    des: [
      "2D Plateformer video game on PC named 'In Memory of' made for US Embassy of Madagascar for the Cultural Heritage Game Jam 2021.",
      "Stack used: Unity Engine",
    ],
  },
  {
    title: "Personal Portfolio",
    img: "img/personalExp/portfolio.png",
    des: [
      "My personal portfolio for presenting who I am and what experiences and skills I have and what projects I made or been part of.",
      "Stack used: ReactJs",
    ],
  },
  {
    title: "Assignments",
    img: "img/personalExp/assignements.png",
    des: [
      "College Project. Website allowing students to to hand in their homework and teachers to consult the homework, to correct, grade and correct, grade, and give to students.",
      "Stack used: Angular, NodeJs",
    ],
  },
  {
    title: "Machine Learning",
    img: "img/personalExp/weka.png",
    des: [
      "College Project. Machine learning web application to make the prediction of the species of a flower from the data of its petals.",
      "Stack used: Spring Boot, Java WEKA",
    ],
  },
  {
    title: "Anime Tracker",
    img: "img/personalExp/anime.png",
    des: [
      "College Project. Mobile application to be able to see all the new anime with information information and trailers.",
      "Stack used: Android Native, SQLite, Firebase",
    ],
  },
  {
    title: "Sport Bet Application",
    img: "img/personalExp/bet.png",
    des: [
      "College Project. Online betting website with a mobile application. Web application and Windows application BackOffice.",
      "Stack used: NodeJs, Angular, MongoDB, Oracle, Spring Boot, C# WinForm",
    ],
  },
];
