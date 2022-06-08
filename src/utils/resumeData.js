import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import GitHub from '@material-ui/icons/GitHub';

export default {
    name: "Simon Dimitri NGOUTOUGA",
    birthday: "31 Mars 1998",
    email: "ndimitri.ngoutouga1@gmail.com",
    address: "22 Rue Jbal Bargou Bab Bhar Tunis",
    phone: "+216 50 119 915",

    socials: {
        Facebook: {
            link: "https://www.facebook.com/Simon.Dimitri.N",
            text: "My Facebook",
            icon: <FacebookIcon />
        },

        Twitter: {
            link: "https://twitter.com/",
            text: "My Twitter",
            icon: <TwitterIcon />
        },

        Linkedin: {
            link: "https://www.linkedin.com/in/simon-dimitri-ngoutouga-42372330/",
            text: "My Linkedin",
            icon: <LinkedInIcon />
        },

        GitHub: {
            link: "https://github.com/Dimitri3103",
            text: "My GitHub",
            icon: <GitHubIcon />
        }
    },

    experiences: [
        {

            title: "Développeur Web Full Stack",
            date: "Bulldozer Tunisie | Février 2021 - Août 2021",
            description: "Conception et Implémentation d'une application web de gestion des dépenses des employés : \n - Analyse des besoins fonctionnels et rédaction des spécifications techniques relatives à la solution à mettre en place; \n- Conception de la solution; \n- Implémentation et déploiement de la solution.",
        },
        {

            title: "Technicien Web",
            date: "Media Concept Tunisie | Juillet 2020 - Septembre 2020",
            description: "Participation à la conception et au développement de plusieurs modules relatifs à l’ERP GENIETEX \n - Analyse des besoins fonctionnels et rédaction des spécifications techniques relatives à la solution à mettre en place; \n- Analyse des besoins techniques et installation des technologies; \n- Implémentation des fonctionnalités.",
        }
    ],
    educations: [
        {

            title: "Diplôme D'ingénieur En Système D'informations Et Génie Logiciel (SIGL)",
            date: "Université libre de Tunis | 2018 - 2021",
            description: "Le génie informatique, ou l'ingénierie informatique, est une discipline qui traite de la conception, du développement et de la fabrication de systèmes informatiques, aussi bien d'un point de vue matériels que logiciels. A l’Université Libre de Tunis notre cursus est répartie sur 6 semestres dont trois en tronc commun, deux où chaque étudiant est amené à choisir une spécialité et le dernier est dédié au stage de fin d’études à l’issu duquel l’étudiant obtiendra son diplôme d’ingénieur.",
        },
        {

            title: "Classes Préparatoires MPSI (Mathématiques, Physiques et Sciences de l'Ingénieur)",
            date: "Université libre de Tunis | 2016 - 2018",
            description: "Les classes préparatoires dont la durée est de deux ans permettent aux nouveaux bacheliers de se préparer aux trois années du cycle ingénieur.",
        }
    ],
    skills: [
        {

            title: "FRONT-END",
            description: [
                "REACT JS",
                "NEXT JS",
                "ANGULAR",
                "VUE JS",
                "JavaScript",
                "TypeScript",
                "Material UI",
                "Bootstrap",
                "HTML5",
                "CSS3",
                "C#",
                "VB.NET",
            ]
        },
        {

            title: "BACK-END",
            description: [
                "Node JS",
                "Express JS",
                "Spring",
                "Java",
                "PHP",
                "Python",
                "ASP.NET",
                "Laravel",
            ]
        },
        {

            title: "BASE DE DONNÉES",
            description: [
                "MySQL",
                "SQLITE",
                "Firebase",
                "MongoDB",
                "Apache CouchDB"
            ]
        },
        {

            title: "DEVOPS",
            description: [
                "Git",
                "GitHub",
                "GitLab",
                "Docker",
            ]
        },
        {

            title: "CMS",
            description: ["Wordpress"]
        },
        {

            title: "GESTION DE PROJET",
            description: [
                "SCRUM/Agile",
                "Kanban",]
        },
        {

            title: "MOBILE",
            description: [
                "React Native",
                "Flutter",
                "Android",
            ]
        },
        {

            title: "LANGUES",
            description: [
                "Français",
                "Anglais",
                "Espagnol"]
        },
    ],
    projects: [
        {
            tag: "WEB",
            title: "Xpense",
            images: [
                require('../assets/xpense/Authentification.png'),
                require('../assets/xpense/Inscription.png'),
                require('../assets/xpense/Dashboard.png'),
                require('../assets/xpense/Collaborateurs.png'),
                require('../assets/xpense/Groupes.png'),
                require('../assets/xpense/Taxes.png'),
                require('../assets/xpense/Dépenses.png'),
                require('../assets/xpense/Justificatif.png'),
                require('../assets/xpense/ListeDépenses.png'),
                require('../assets/xpense/Validation.png'),
            ],
            caption: "Application web de gestion des notes de frais",
            description: "Projet de fin d'études FullStack consistant à la conception et à l'implémentation d'uneapplication web destinée aux entreprises souhaitant optimiser la gestion des dépenses et notesde frais de leurs employés et réduire le temps alloué à celle-ci.\n\nTechnologies : BackEnd (Node.JS, Express.JS, Firebase, CouchDB) - FrontEnd (Next.JS,REACT) - Méthode de gestion de projets (KANBAN)",
            links: [
                { link: "https://github.com/Dimitri3103/Xpense", icon: <GitHub /> }
            ]
        },
        {
            tag: "MOBILE",
            title: "TopTroc",
            images: [
                require('../assets/TopTroc/1.PNG'),
                require('../assets/TopTroc/2.PNG'),
                require('../assets/TopTroc/3.PNG'),
                require('../assets/TopTroc/4.PNG'),
                require('../assets/TopTroc/5.PNG'),
                require('../assets/TopTroc/6.PNG'),
                require('../assets/TopTroc/7.PNG'),
                require('../assets/TopTroc/8.PNG'),
                require('../assets/TopTroc/9.PNG'),
                require('../assets/TopTroc/10.PNG'),
                require('../assets/TopTroc/11.PNG'),
                require('../assets/TopTroc/12.PNG'),
                require('../assets/TopTroc/13.PNG'),
                require('../assets/TopTroc/14.PNG'),
                require('../assets/TopTroc/15.PNG'),
            ],
            caption: "Application Mobile d'échange d'objets",
            description: "Projet académique consistant à la conception et au développement d'une application mobileandroid permettant à ses utilisateurs de faire des échanges d'objets ou de se rendre service \n\nTechnologies : Application Mobile (Android, Firebase, REST Api), Interface d'administration Web (Springboot & Angular).",
            links: [
                { link: "https://github.com/Dimitri3103/Android_App_TopTroc", icon: <GitHub /> }
            ]
        },
        {
            tag: "WEB",
            title: "FindLove",
            images: [
                require('../assets/FindLove/1.PNG'),
                require('../assets/FindLove/2.PNG'),
                require('../assets/FindLove/3.PNG'),
                require('../assets/FindLove/4.PNG'),
                require('../assets/FindLove/5.PNG'),
                require('../assets/FindLove/6.PNG'),
                require('../assets/FindLove/7.PNG'),
                require('../assets/FindLove/8.PNG'),
                require('../assets/FindLove/9.PNG'),
            ],
            caption: "Application web de rencontre entre célibataires",
            description: "Projet académique FullStack consistant à la conception et au développement d'une application web destinée à aux célibataires désirant faire des rencontres avec d'autres célibataires; Rencontres qui pourront aboutir ou pas à des relations amoureuses! \n\n Technologies : BackEnd (MongoDB, Express.Js, Node.Js) - FrontEnd (Angular)",
            links: [
                { link: "https://github.com/Dimitri3103/FindLove", icon: <GitHub /> }
            ]
        },
        {
            tag: "WEB",
            title: "E-commerce",
            images: [
                require('../assets/E_Commerce/1.PNG'),
                require('../assets/E_Commerce/2.PNG'),
                require('../assets/E_Commerce/3.PNG'),
            ],
            caption: "Plateforme d'E-commerce",
            description: "Projet scolaire en trio de conception et développement d'une plateforme de commercialisation en ligne de smartphones",
            links: [
                { link: "https://github.com/Dimitri3103/Projet_Site_web_E-Commerce", icon: <GitHub /> }
            ]
        },
        {
            tag: "WEB",
            title: "Restaurant",
            images: [
                require('../assets/Restaurant/Accueil.PNG'),
                require('../assets/Restaurant/Menu.PNG'),
                require('../assets/Restaurant/Menu2.PNG'),
                require('../assets/Restaurant/Menu3.PNG'),
                require('../assets/Restaurant/Menu4.PNG'),
                require('../assets/Restaurant/Menu5.PNG'),
                require('../assets/Restaurant/Services.PNG'),
                require('../assets/Restaurant/Services2.PNG'),
                require('../assets/Restaurant/Blog.PNG'),
                require('../assets/Restaurant/Blog2.PNG'),
                require('../assets/Restaurant/About.PNG'),
                require('../assets/Restaurant/Connexion.PNG'),
                require('../assets/Restaurant/Contact.PNG'),
                require('../assets/Restaurant/Footer.PNG'),
            ],
            caption: "Appliaction .NET pour un restaurant en Ligne",
            description: "Application web developpée avec le Framework ASP.NET : \n- Intégration des templates Front; \n- Établissement de la connexion avec la base de données; \n- Établissement d'un système d'authentification. \n\nTechnologies utilisées : ASP.NET, Visual Studio ",
            links: [
                { link: "https://github.com/Dimitri3103/Projet_.NET_Restaurant", icon: <GitHub /> }
            ]
        },
        {
            tag: "WEB",
            title: "FastJob",
            images: [
                require('../assets/FastJob/1.png'),
                require('../assets/FastJob/2.png'),
                require('../assets/FastJob/3.png'),
                require('../assets/FastJob/4.png'),
                require('../assets/FastJob/5.png'),
                require('../assets/FastJob/6.png'),
                require('../assets/FastJob/7.png'),
                require('../assets/FastJob/8.png'),
                require('../assets/FastJob/9.png'),
                require('../assets/FastJob/10.png'),
            ],
            caption: "Réseau social professionnel",
            description: "Conception et développement d'un réseau social professionnel tunisien appelé “Fastjob” destiné uniquement aux informaticiens. Il permettra aux utilisateurs de trouver du travail, recruter des employés, ouvrir de nouvelles perspectives d’affaires, ou encore de disposer d’un carnet d’adresses en ligne accessible et à jour. \n\nFastjob devra disposer d’une manière globale des fonctionnalités telles que :\n• Un système d’inscription et d’authentification. \n• Un système de messagerie permettant aux entreprises recruteuses et aux candidats chercheurs d’emploi de discuter en temps réel pour faciliter le processus de recrutement. \n• Un espace candidat qui permettra aux utilisateurs recherchant des emplois de suivre les actualités sur les nouvelles offres et de postuler. \n• Un espace entreprise pour permettre aux recruteurs de gérer les CV, surveiller et contrôler l’ensemble du processus de recrutement mais également mettre en valeur leur société à travers la présentation de ses activités et de ses informations, l’affichage de son logo et le listage de ses annonces. \n\nTechnologies utilisées : Spring Boot, Spring Security, Spring Data, MySQL",
            links: [
                { link: "https://github.com/Dimitri3103/Reseau_Social_Professionnel_FastJob", icon: <GitHub /> }
            ]
        },
        {
            tag: "WEB",
            title: "GENIETEX",
            images: [
                require('../assets/GENIETEX/Auth.jpg'),
                require('../assets/GENIETEX/Dashboard.png'),
                require('../assets/GENIETEX/Admin.png'),
                require('../assets/GENIETEX/RH.png'),
                require('../assets/GENIETEX/MvtEntree.png'),
                require('../assets/GENIETEX/ListMvtsEntree.png'),
                require('../assets/GENIETEX/MvtSortie.png'),
                require('../assets/GENIETEX/ListMvtsSortie.png'),
                require('../assets/GENIETEX/MvtTransfert.png'),
                require('../assets/GENIETEX/ListMvtsTransfert.png'),
                require('../assets/GENIETEX/EtatStock.png'),
                require('../assets/GENIETEX/EtatStockMagasin.png'),
                require('../assets/GENIETEX/ListMvtsPiecesMag.png'),
                require('../assets/GENIETEX/ImpressionBon.png'),
                require('../assets/GENIETEX/ImpressionEtatStock.png'),
                require('../assets/GENIETEX/ImpressionEtatStockPiece.png'),
                require('../assets/GENIETEX/ImpressionListMvtsPiecesMag.png'),
                require('../assets/GENIETEX/Ateliers.png'),
                require('../assets/GENIETEX/PieceRechange.png'),
                require('../assets/GENIETEX/Maintenance.png'),
                require('../assets/GENIETEX/Responsable.png'),
            ],
            caption: "Progiciel GENIETEX",
            description: "Conception et Implémentation d'une application web de gestion des dépenses des employés : \n - Analyse des besoins fonctionnels et rédaction des spécifications techniques relatives à la solution à mettre en place; \n- Conception de la solution; \n- Implémentation et déploiement de la solution. \n\nTechnologies utilisées : VB.NET, ASP.NET, Visual Studio",
            links: [
                { link: "https://github.com/Dimitri3103/Modules_GMAO_GPAO-ERP_GENIETEX-Stage_2020", icon: <GitHub /> }
            ]
        }

    ],
    certifications: [
        {
            key: "c1",
            title: "CCNA 1",
            caption: "Cisco Certified Network Associate Routing and Switching 1",
            description: "La formation CISCO CCNA Routing and Switching Niveau 1 est le point de départ pour tous les professionnels amenés à travailler dans le domaine des réseaux. \nElle permet d’acquérir les connaissances et compétences de base pour installer, configurer et vérifier les réseaux locaux IPv4 et IPv6, et identifier les menaces élémentaires pour la sécurité.\nElle passe en revue l’architecture, la structure et les fonctions nécessaires pour prendre en charge aussi bien les opérations des grandes entreprises que celles de petites enseignes innovantes.",
            images: [
                require('../assets/Certifications/CCNA2.jpg'),
                require('../assets/Certifications/LetterCCNA2.jpg'),
            ]
        },
        {
            key: "c2",
            title: "CCNA 2",
            caption: "Cisco Certified Network Associate Routing and Switching 2",
            description: "La formation CISCO CCNA Routing and Switching Niveau 2 permet d’acquérir les connaissances et compétences nécessaires pour installer, configurer, et dépanner les infrastructures réseaux d'entreprise. \nElle aborde les topologies redondantes, le dépannage des problèmes réseaux courants, la configuration des protocoles dynamiques de routage associés à l’IPv4 et IPv6, la gestion des périphériques et des services de bases.",
            images: [
                require('../assets/Certifications/CCNA2.jpg'),
                require('../assets/Certifications/LetterCCNA2.jpg'),
            ]
        },
        {
            key: "c3",
            title: "TOEIC",
            caption: "Test of English for International Communication",
            description: "Les tests Test of English for International Communication (TOEIC) sont des certifications standardisées permettant d'évaluer le niveau d'anglais des locuteurs non anglophones à l'écrit et à l'oral. Ces tests, créés et gérés par un organisme sis aux États-Unis (l'ETS : Educational Testing Service), visent en particulier à évaluer les connaissances linguistiques du candidat dans un contexte professionnel, sans jamais pour autant entrer dans un jargon technique spécifique.",
            images: [
                require('../assets/Certifications/TOEIC.jpg'),
            ]
        },
        {
            key: "c4",
            title: "PMP",
            caption: "Project Management Professional",
            description: "La certification PMP1 est une certification internationale en management de projet. Cette certification est délivrée par le Project Management Institute . L’objectif de cette certification est de pouvoir évaluer formellement les expériences, connaissances et performances des chefs de projet à travers le monde et de faire reconnaître leur profession, comme activité substantielle aux projets.",
            images: [
                require('../assets/Certifications/PMP.png'),
            ]
        },
    ]
}