import { posix } from 'path';
import React, { JSX } from 'react';
import { text } from 'stream/consumers';

export const supportedLanguages = ['en', 'fr', 'nl', 'id', 'ja', 'sv'].sort();
export const SetLanguage = (lang: string) => {
    const selectedLang = supportedLanguages.includes(lang) ? lang : 'en';
    localStorage.setItem('language', selectedLang);
}
export const GetLanguage = () => {
    const lang = localStorage.getItem('language') || navigator.language.split('-')[0];
    return locales[lang] ? lang : 'en';
}
export function getLocaleKey(path: string): string {
    const lang = GetLanguage();
    const keys = path.split('.');
    let value = locales[lang];
    for (const key of keys) {
        if (value && key in value) {
            value = value[key];
        } else {
            value = undefined;
            break;
        }
    }
    if (typeof value === 'string') {
        return value;
    }
    // fallback to English
    value = locales['en'];
    for (const key of keys) {
        if (value && key in value) {
            value = value[key];
        } else {
            return '';
        }
    }
    return typeof value === 'string' ? value : '';
}
export const locales : any = {
    en: {
        name: "English",
        general: {
            yes: "Yes",
            no: "No"
        },
        home: {
            header: "Build your dreams without wasting time to learn complex tools. It's time to simplify your \"dream building\" design",
            descHero: "Imagine if CAD went as simple as the power tools we use today like Notion or even Figma. Except that, we can redefine what \"power tools\" means for architecture design",
            downloadButton: "Download for platform",
            inBrowserEditor: "Open in-browser editor",
            classicEdior: "Open Classic Editor",
            editorSel: {
                polished: {
                    name: "Organized Editor",
                    description: "Great for organizing, sharing, iterating, or just keeping up"
                },
                classic: {
                    name: "Standalone Editor",
                    description: "The good ol' classic web editor! For Chromebooks or CompassCAD PWA"
                }
            },
            header1Sub: "Blazingly fast CAD software. Free of charge, yet simple and minimalistic",
            paragraph1Sub: "Built from the hearts of broke developers who cannot afford a good computer and a CAD software, created for you to enjoy.",
            littleNote1: "*Only available for Windows and Linux.",
            header2Sub: "No desktop version or it doesn't work? We always have the web version!",
            littleNote2: "*Images may appear different than the actual software",
            header3Sub: "Love Indonesia? CompassCAD is 100% fully made in Indonesia!",
            paragraph3Sub: "You're not just directly supporting the developers, you are also supporting Indonesia, without realizing!",
            littleNote3: "*Images of CompassCAD doesn't represent the final product. Bangga Buatan Indonesia is a trademark by the Ministry of Tourism and Creative Economy of the Republic of Indonesia (Kemenparekraf)"
        },
        editor: {
            home: {
                quickActions: "Quick Actions",
                createNew: "Create New",
                importExisting: "Import existing",
                clearEntireHistory: "Clear entire history",
                askBlueprint: "Ask Blueprint",
                recents: "Recents",
                blueprintIntro: "Hey there! I'm Blueprint!",
                blueprintDesc: "I can help you create designs based on your prompts. Just ask me anything!",
                blueprintSuggestions: "Or try these suggestions:",
                bpGenerated: "Blueprint-generated Design",
                suggestions: {
                    one: {
                        shorthand: "🏠 A house with 2 floors",
                        prompt: "Create me a house with 2 floors"
                    },
                    two: {
                        shorthand: "🚗 A simple car design",
                        prompt: "Create me a simple car design, including everything such as the car chassis and wheels"
                    },
                    three: {
                        shorthand: "🏢 A floor plan for a building",
                        prompt: "Create me a floor plan for a building, including rooms and furniture"
                    },
                    four: {
                        shorthand: "🛠️ A plan layout for a workshop",
                        prompt: "Create me a plan layout for a workshop, including workbenches and tools"
                    },
                    five: {
                        shorthand: "🏰 A castle with a moat",
                        prompt: "Create me a castle with a moat, including towers and walls"
                    }
                },
                blueprintPlaceholder: "Ask or create with Blueprint AI",
                blueprintWarning: "AI-generated content may be false or inaccurate. Powered by Google AI's Gemini",
                clearHistoryModal: "Clear History",
                text1Sure: "Are you sure you want to clear the entire history? ",
                boldTextWarning: "This action cannot be undone.",
                viewInEditor: "View/Edit this design in editor",
                nothingInHistory: "Well, you got nothing on your history list today. Make some drawings and your history will appear here.",
                randomMesg: {
                    morning: {
                        one: "Hey there? Had some coffee? ☕",
                        two: "Good morning! Ready to start your day? 🌄",
                        three: "Morning! Let's see what you'll brainstorm! 🤩"
                    },
                    noon: {
                        one: "Starting anything at this time? 🧐",
                        two: "Lunch time! Crave something and work here! 😋",
                        three: "I hope you're not sleeping! 😴"
                    },
                    afternoon: {
                        one: "You still up? Let's design! 🗺️",
                        two: "Keep the creativity flowing! ✏️",
                        three: "Perfect time for CAD work! 📐"
                    },
                    evening: {
                        one: "You still working on evenings? 🧐",
                        two: "Got anything last minute? ⌚",
                        three: "Yet you're still strong. Keep it up 💪"
                    },
                    night: {
                        one: "Aren't you supposed to sleep? 🛌",
                        two: "Accidentally brainstormed now? 😵‍💫",
                        three: "Yet, your caffeine never drains. ☕"
                    },
                    dawn: {
                        one: "I'm going to sleep, wait nevermind. 😴",
                        two: "This late and you got any ideas? 😮‍💨",
                        three: "Hope you're not procrastinating! 🥲"
                    },
                }
            },
            main: {
                newDesign: "New Design",
                openDesign: "Open Design",
                menu: "Menu",
                standaloneTip: "TIP: Are you looking for a way to save .ccad files? Go to Share/Export > Export as .ccad",
                loading: {
                    heading: "Loading CompassCAD...",
                    subHeading: "Just wait, you'll be ready in a sec.",
                },
                betaWarning: "Hey there! Just a heads up that this editor is still in beta, so expect broken buttons and non-functioning UI",
                header: {
                    goBackHome: "Go back home",
                    undo: "Undo",
                    redo: "Redo",
                    share: "Share/Export",
                    feedback: "Send Feedback",
                    record: "Record Video",
                    recordPopup: {
                        startRecording: "Start Recording",
                        stopRecording: "Stop Recording",
                        micOff: "Turn on microphone",
                        micOn: "Turn off microphone"
                    },
                    shareModal: {
                        heading: "Share/Export Design",
                        copyLink: "Copy Link",
                        exportAsSvg: "Export as SVG",
                        exportAsCcad: "Export as CCAD",
                        embedToSite: "Embed to website",
                        preview: "Preview",
                        previewDifferent: "Preview may look stretched than usual",
                        settings: "Settings",
                        padding: "Padding",
                        monochrome: "Monochrome",
                        font: "Font",
                        export: "Export",
                        nothingOnPreview: "You have nothing on preview right now!"
                    }
                },
                essential: {
                    select: "Select",
                    navigate: "Navigate",
                    move: "Move",
                    delete: "Delete",
                    addPoint: "Add Point",
                    addLine: "Add Line",
                    addRectangle: "Add Rectangle",
                    addCircle: "Add Circle",
                    addArc: "Add Arc",
                    addMeasure: "Add Measure",
                    addLabel: "Add Label",
                    addImage: "Add Image",
                    addPolygon: "Add Polygon",
                    addBoundbox: "Add Boundbox",
                },
                inspector: {
                    header: "Inspector",
                    collapseToRight: "Collapse to right",
                    expand: "Expand",
                    nothing: "Select a component then your component details should appear here.",
                    properties: "Properties",
                    hierarchy: "Hierarchy",
                    searchInHiearchy: "Search in Hierarchy",
                    general: {
                        active: "Active",
                        radius: "Radius",
                        color: "Color",
                        opacity: "Opacity",
                        name: "Name",
                        position: "Position",
                        size: "Size",
                        coverage: "Arc Coverage",
                    },
                    text: {
                        heading: "Text Properties",
                        text: "Text",
                        fontSize: "Font Size",
                    },
                    picture: {
                        heading: "Picture Properties",
                        src: "Source",
                    },
                    polygon: {
                        heading: "Polygon Properties",
                        fillColor: "Fill Color",
                        strokeColor: "Stroke Color",
                        enableStroke: "Enable Stroke",
                    }
                }
            }
        }
    },
    fr: {
        name: "Français",
        general: {
            yes: "Oui",
            no: "Non"
        },
        home: {
            header: "Concevez vos rêves sans perdre de temps à apprendre des outils complexes. Il est temps de simplifier votre approche du design.",
            descHero: "Imaginez si la CAO devenait aussi simple que les outils que nous utilisons aujourd'hui comme Notion ou Figma. Nous redéfinissons ce que signifie « outil de précision » pour l'architecture.",
            downloadButton: "Télécharger pour votre plateforme",
            inBrowserEditor: "Éditeur en ligne",
            classicEdior: "Ouvrir l'éditeur classique",
            editorSel: {
                polished: {
                    name: "Éditeur Organisé",
                    description: "Idéal pour organiser, partager, itérer ou simplement rester à jour."
                },
                classic: {
                    name: "Éditeur Autonome",
                    description: "Le bon vieil éditeur web classique ! Pour Chromebooks ou CompassCAD PWA."
                }
            },
            header1Sub: "Un logiciel de CAO ultra-rapide. Gratuit, simple et minimaliste.",
            paragraph1Sub: "Conçu avec passion par des développeurs fauchés pour ceux qui n'ont pas forcément un ordinateur de compétition, mais qui veulent créer.",
            littleNote1: "*Uniquement disponible pour Windows et Linux.",
            header2Sub: "Pas de version de bureau ou ça ne fonctionne pas ? Utilisez la version web !",
            littleNote2: "*Les images peuvent différer du logiciel final.",
            header3Sub: "Vous aimez l'Indonésie ? CompassCAD est 100% fabriqué en Indonésie !",
            paragraph3Sub: "Vous ne soutenez pas seulement les développeurs, vous soutenez aussi l'Indonésie, sans même vous en rendre compte !",
            littleNote3: "*Les images de CompassCAD ne représentent pas le produit final. « Bangga Buatan Indonesia » est une marque déposée par le ministère du Tourisme et de l'Économie créative de la République d'Indonésie (Kemenparekraf)."
        },
        editor: {
            home: {
                quickActions: "Actions rapides",
                createNew: "Créer un nouveau",
                importExisting: "Importer un fichier",
                clearEntireHistory: "Effacer tout l'historique",
                askBlueprint: "Demander à Blueprint",
                recents: "Récents",
                blueprintIntro: "Salut ! Je suis Blueprint !",
                blueprintDesc: "Je peux vous aider à créer des designs à partir de vos instructions. Demandez-moi n'importe quoi !",
                blueprintSuggestions: "Ou essayez ces suggestions :",
                bpGenerated: "Design généré par Blueprint",
                suggestions: {
                    one: {
                        shorthand: "🏠 Une maison à 2 étages",
                        prompt: "Crée-moi une maison à 2 étages"
                    },
                    two: {
                        shorthand: "🚗 Un design de voiture simple",
                        prompt: "Crée-moi un design de voiture simple, incluant le châssis et les roues"
                    },
                    three: {
                        shorthand: "🏢 Un plan d'étage pour un bâtiment",
                        prompt: "Crée-moi un plan d'étage pour un bâtiment, avec les pièces et les meubles"
                    },
                    four: {
                        shorthand: "🛠️ Un plan pour un atelier",
                        prompt: "Crée-moi un plan pour un atelier, incluant les établis et les outils"
                    },
                    five: {
                        shorthand: "🏰 Un château avec des douves",
                        prompt: "Crée-moi un château avec des douves, des tours et des remparts"
                    }
                },
                blueprintPlaceholder: "Demandez ou créez avec l'IA Blueprint",
                blueprintWarning: "Le contenu généré par l'IA peut être erroné ou inexact. Propulsé par Google AI Gemini.",
                clearHistoryModal: "Effacer l'historique",
                text1Sure: "Êtes-vous sûr de vouloir effacer tout l'historique ? ",
                boldTextWarning: "Cette action est irréversible.",
                viewInEditor: "Voir/Modifier ce design dans l'éditeur",
                nothingInHistory: "Votre historique est vide pour aujourd'hui. Dessinez quelque chose et vos créations apparaîtront ici.",
                randomMesg: {
                    morning: {
                        one: "Salut ! Un petit café ? ☕",
                        two: "Bonjour ! Prêt à commencer la journée ? 🌄",
                        three: "Salut ! Voyons ce que vous allez imaginer ! 🤩"
                    },
                    noon: {
                        one: "On commence quelque chose à cette heure-ci ? 🧐",
                        two: "C'est l'heure du déjeuner ! Mangez un morceau et créez ! 😋",
                        three: "J'espère que vous ne dormez pas ! 😴"
                    },
                    afternoon: {
                        one: "Toujours là ? Et si on dessinait ? 🗺️",
                        two: "Laissez parler votre créativité ! ✏️",
                        three: "Le moment idéal pour faire de la CAO ! 📐"
                    },
                    evening: {
                        one: "Vous travaillez encore le soir ? 🧐",
                        two: "Un projet de dernière minute ? ⌚",
                        three: "Encore d'attaque ? Continuez comme ça ! 💪"
                    },
                    night: {
                        one: "Vous ne devriez pas dormir ? 🛌",
                        two: "Une illumination nocturne ? 😵‍💫",
                        three: "Apparemment, votre dose de caféine est inépuisable. ☕"
                    },
                    dawn: {
                        one: "Je vais me coucher... ah non, tant pis. 😴",
                        two: "Des idées à une heure aussi tardive ? 😮‍💨",
                        three: "J'espère que ce n'est pas de la procrastination ! 🥲"
                    },
                }
            },
            main: {
                newDesign: "Nouveau Design",
                openDesign: "Ouvrir un Design",
                menu: "Menu",
                standaloneTip: "ASTUCE : Vous cherchez comment enregistrer vos fichiers .ccad ? Allez dans Partager/Exporter > Exporter en .ccad",
                loading: {
                    heading: "Chargement de CompassCAD...",
                    subHeading: "Patientez un instant, tout sera prêt dans une seconde.",
                },
                betaWarning: "Hé ! Juste pour info, cet éditeur est encore en version bêta. Attendez-vous à quelques boutons cassés et des éléments d'interface capricieux.",
                header: {
                    goBackHome: "Retour à l'accueil",
                    undo: "Annuler",
                    redo: "Rétablir",
                    share: "Partager/Exporter",
                    feedback: "Envoyer un avis",
                    record: "Enregistrer une vidéo",
                    recordPopup: {
                        startRecording: "Démarrer l'enregistrement",
                        stopRecording: "Arrêter l'enregistrement",
                        micOff: "Activer le micro",
                        micOn: "Désactiver le micro"
                    },
                    shareModal: {
                        heading: "Partager/Exporter le Design",
                        copyLink: "Copier le lien",
                        exportAsSvg: "Exporter en SVG",
                        exportAsCcad: "Exporter en CCAD",
                        embedToSite: "Intégrer à un site web",
                        preview: "Aperçu",
                        previewDifferent: "L'aperçu peut paraître plus étiré que d'habitude",
                        settings: "Paramètres",
                        padding: "Marge (Padding)",
                        monochrome: "Monochrome",
                        font: "Police",
                        export: "Exporter",
                        nothingOnPreview: "Il n'y a rien à afficher pour le moment !"
                    }
                },
                essential: {
                    select: "Sélectionner",
                    navigate: "Naviguer",
                    move: "Déplacer",
                    delete: "Supprimer",
                    addPoint: "Ajouter un point",
                    addLine: "Ajouter une ligne",
                    addRectangle: "Ajouter un rectangle",
                    addCircle: "Ajouter un cercle",
                    addArc: "Ajouter un arc",
                    addMeasure: "Ajouter une mesure",
                    addLabel: "Ajouter une étiquette",
                    addImage: "Ajouter une image",
                    addPolygon: "Ajouter un polygone",
                    addBoundbox: "Ajouter une boîte englobante",
                },
                inspector: {
                    header: "Inspecteur",
                    collapseToRight: "Réduire à droite",
                    expand: "Agrandir",
                    nothing: "Sélectionnez un composant pour voir ses détails ici.",
                    properties: "Propriétés",
                    hierarchy: "Hiérarchie",
                    searchInHiearchy: "Rechercher dans la hiérarchie",
                    general: {
                        active: "Actif",
                        radius: "Rayon",
                        color: "Couleur",
                        opacity: "Opacité",
                        name: "Nom",
                        position: "Position",
                        size: "Taille",
                        coverage: "Couverture de l'arc",
                    },
                    text: {
                        heading: "Propriétés du texte",
                        text: "Texte",
                        fontSize: "Taille de police",
                    },
                    picture: {
                        heading: "Propriétés de l'image",
                        src: "Source",
                    },
                    polygon: {
                        heading: "Propriétés du polygone",
                        fillColor: "Couleur de remplissage",
                        strokeColor: "Couleur du trait",
                        enableStroke: "Activer le trait",
                    }
                }
            }
        }
    },
    nl: {
        name: "Nederlands",
        general: {
            yes: "Ja",
            no: "Nee"
        },
        home: {
            header: "Bouw je dromen zonder tijd te verspillen aan complexe tools. Het is tijd om het 'droombouw'-ontwerp te vereenvoudigen",
            descHero: "Stel je voor dat CAD net zo eenvoudig was als de krachtige tools die we vandaag gebruiken, zoals Notion of zelfs Figma. Alleen kunnen we dan opnieuw definiëren wat 'krachtige tools' betekent voor architectuurontwerp",
            downloadButton: "Downloaden voor platform",
            inBrowserEditor: "In-browser editor",
            classicEdior: "Open Klassieke Editor",
            editorSel: {
                polished: {
                    name: "Georganiseerde Editor",
                    description: "Geweldig voor organiseren, delen, itereren of gewoon bijblijven"
                },
                classic: {
                    name: "Standalone Editor",
                    description: "De goede oude klassieke web-editor! Voor Chromebooks of CompassCAD PWA"
                }
            },
            header1Sub: "Razendsnelle CAD-software. Gratis, doch eenvoudig en minimalistisch",
            paragraph1Sub: "Gebouwd vanuit het hart van blutte ontwikkelaars die zich geen goede computer en CAD-software kunnen veroorloven, speciaal voor jou gemaakt om van te genieten.",
            littleNote1: "*Alleen beschikbaar voor Windows en Linux.",
            header2Sub: "Geen desktopversie of werkt het niet? We hebben altijd de webversie!",
            littleNote2: "*Afbeeldingen kunnen afwijken van de daadwerkelijke software",
            header3Sub: "Hou je van Indonesië? CompassCAD is 100% volledig gemaakt in Indonesië!",
            paragraph3Sub: "Je ondersteunt niet alleen direct de ontwikkelaars, je ondersteunt ook Indonesië, zonder dat je het doorhebt!",
            littleNote3: "*Afbeeldingen van CompassCAD vertegenwoordigen niet het eindproduct. Bangga Buatan Indonesia is een handelsmerk van het Ministerie van Toerisme en Creatieve Economie van de Republiek Indonesië (Kemenparekraf)"
        },
        editor: {
            home: {
                quickActions: "Snelle acties",
                createNew: "Nieuw maken",
                importExisting: "Bestaand importeren",
                clearEntireHistory: "Hele geschiedenis wissen",
                askBlueprint: "Vraag Blueprint",
                recents: "Recent",
                blueprintIntro: "Hallo! Ik ben Blueprint!",
                blueprintDesc: "Ik kan je helpen ontwerpen te maken op basis van je prompts. Vraag me gerust alles!",
                blueprintSuggestions: "Of probeer deze suggesties:",
                bpGenerated: "Door Blueprint gegenereerd ontwerp",
                suggestions: {
                    one: {
                        shorthand: "🏠 Een huis met 2 verdiepingen",
                        prompt: "Maak een huis met 2 verdiepingen"
                    },
                    two: {
                        shorthand: "🚗 Een eenvoudig auto-ontwerp",
                        prompt: "Maak een eenvoudig auto-ontwerp, inclusief alles zoals het chassis en de wielen"
                    },
                    three: {
                        shorthand: "🏢 Een plattegrond voor een gebouw",
                        prompt: "Maak een plattegrond voor een gebouw, inclusief kamers en meubels"
                    },
                    four: {
                        shorthand: "🛠️ Een indelingsplan voor een werkplaats",
                        prompt: "Maak een indelingsplan voor een werkplaats, inclusief werkbanken en gereedschap"
                    },
                    five: {
                        shorthand: "🏰 Een kasteel met een slotgracht",
                        prompt: "Maak een kasteel met een slotgracht, inclusief torens en muren"
                    }
                },
                blueprintPlaceholder: "Vraag of creëer met Blueprint AI",
                blueprintWarning: "AI-gegenereerde inhoud kan onjuist of onnauwkeurig zijn. Aangedreven door Google AI's Gemini",
                clearHistoryModal: "Geschiedenis wissen",
                text1Sure: "Weet je zeker dat je de hele geschiedenis wilt wissen? ",
                boldTextWarning: "Deze actie kan niet ongedaan worden gemaakt.",
                viewInEditor: "Bekijk/bewerk dit ontwerp in de editor",
                nothingInHistory: "Je hebt vandaag niets in je geschiedenislijst staan. Maak wat tekeningen en je geschiedenis verschijnt hier.",
                randomMesg: {
                    morning: {
                        one: "Hé! Al koffie gehad? ☕",
                        two: "Goedemorgen! Klaar om je dag te beginnen? 🌄",
                        three: "Morgen! Laten we eens zien wat je gaat brainstormen! 🤩"
                    },
                    noon: {
                        one: "Nu al iets beginnen? 🧐",
                        two: "Lunchtijd! Zin in iets lekkers en werken hier! 😋",
                        three: "Ik hoop dat je niet slaapt! 😴"
                    },
                    afternoon: {
                        one: "Nog steeds wakker? Laten we ontwerpen! 🗺️",
                        two: "Houd de creativiteit gaande! ✏️",
                        three: "Perfecte tijd voor CAD-werk! 📐"
                    },
                    evening: {
                        one: "'s Avonds nog aan het werk? 🧐",
                        two: "Iets last minute? ⌚",
                        three: "Toch ben je nog sterk. Ga zo door 💪"
                    },
                    night: {
                        one: "Hoort u niet te slapen? 🛌",
                        two: "Per ongeluk nu gebrainstormd? 😵‍💫",
                        three: "Toch raakt je cafeïne nooit op. ☕"
                    },
                    dawn: {
                        one: "Ik ga slapen, wacht nee toch niet. 😴",
                        two: "Zo laat en heb je nog ideeën? 😮‍💨",
                        three: "Ik hoop dat je niet aan het uitstellen bent! 🥲"
                    }
                }
            },
            main: {
                newDesign: "Nieuw ontwerp",
                openDesign: "Open ontwerp",
                menu: "Menu",
                standaloneTip: "TIP: Ben je op zoek naar een manier om .ccad-bestanden op te slaan? Ga naar Delen/Exporteren > Exporteren als .ccad",
                loading: {
                    heading: "CompassCAD laden...",
                    subHeading: "Even wachten, je bent zo klaar."
                },
                betaWarning: "Hé! Even een waarschuwing: deze editor is nog in beta, dus verwacht kapotte knoppen en niet-werkende UI",
                header: {
                    goBackHome: "Terug naar start",
                    undo: "Ongedaan maken",
                    redo: "Opnieuw doen",
                    share: "Delen/Exporteren",
                    feedback: "Feedback sturen",
                    record: "Video opnemen",
                    recordPopup: {
                        startRecording: "Opname starten",
                        stopRecording: "Opname stoppen",
                        micOff: "Microfoon aanzetten",
                        micOn: "Microfoon uitzetten"
                    },
                    shareModal: {
                        heading: "Ontwerp delen/exporteren",
                        copyLink: "Link kopiëren",
                        exportAsSvg: "Exporteren als SVG",
                        exportAsCcad: "Exporteren als CCAD",
                        embedToSite: "Insluiten in website",
                        preview: "Voorbeeld",
                        previewDifferent: "Voorbeeld kan er uitgerekter uitzien dan normaal",
                        settings: "Instellingen",
                        padding: "Padding",
                        monochrome: "Monochroom",
                        font: "Lettertype",
                        export: "Exporteren",
                        nothingOnPreview: "Je hebt momenteel niets in het voorbeeld!"
                    }
                },
                essential: {
                    select: "Selecteren",
                    navigate: "Navigeren",
                    move: "Verplaatsen",
                    delete: "Verwijderen",
                    addPoint: "Punt toevoegen",
                    addLine: "Lijn toevoegen",
                    addRectangle: "Rechthoek toevoegen",
                    addCircle: "Cirkel toevoegen",
                    addArc: "Boog toevoegen",
                    addMeasure: "Maat toevoegen",
                    addLabel: "Label toevoegen",
                    addImage: "Afbeelding toevoegen",
                    addPolygon: "Veelhoek toevoegen",
                    addBoundbox: "Begrenzingskader toevoegen",
                },
                inspector: {
                    header: "Inspector",
                    collapseToRight: "Invouwen naar rechts",
                    expand: "Uitvouwen",
                    nothing: "Selecteer een component; de details van je component verschijnen dan hier.",
                    properties: "Eigenschappen",
                    hierarchy: "Hiërarchie",
                    searchInHiearchy: "Zoeken in hiërarchie",
                    general: {
                        active: "Actief",
                        radius: "Straal",
                        color: "Kleur",
                        opacity: "Doorzichtigheid",
                        name: "Naam",
                        position: "Positie",
                        size: "Grootte",
                        coverage: "Boogdekking"
                    },
                    text: {
                        heading: "Teksteigenschappen",
                        text: "Tekst",
                        fontSize: "Lettergrootte"
                    },
                    picture: {
                        heading: "Afbeeldingseigenschappen",
                        src: "Bron"
                    },
                    polygon: {
                        heading: "Veelhoek Eigenschappen",
                        fillColor: "Vulkleur",
                        strokeColor: "Lijnkleur",
                        enableStroke: "Lijn inschakelen"
                    }
                }
            }
        }
    },
    id: {
        name: "Bahasa Indonesia",
        general: {
            yes: "Iya",
            no: "Tidak"
        },
        home: {
            header: "Buatlah mimpimu tanpa membuang waktu untuk belajar alat yang susah. Saatnya menyederhanakan desain \"bangunan impian\"",
            descHero: "Bayangkan kalau CAD menjadi semudah alat canggih kita pakai seperti Notion atau Figma. Kecuali itu, kita bisa mengartikan ulang apa itu \"alat canggih\" untuk desain arsitektur sipil.",
            downloadButton: "Unduh untuk platform",
            inBrowserEditor: "Buka editor dalam browser",
            classicEdior: "Buka Editor Klasik",
            editorSel: {
                polished: {
                    name: "Editor Teratur",
                    description: "Bagus untuk mengatur, berbagi, iterasi, atau sekadar memantau"
                },
                classic: {
                    name: "Editor Standalone",
                    description: "Editor web klasik yang lama! Untuk Chromebook atau CompassCAD PWA"
                }
            },
            header1Sub: "Software CAD yang betul-betulnya cepat. Gratis, tetapi mudah dan minimalis",
            paragraph1Sub: "Dibuat dari hati seorang programmer biasa yang tidak bisa membeli komputer bagus dan software CAD, dibuat untukmu untuk dinikmati.",
            littleNote1: "*Hanya tersedia untuk Windows dan Linux.",
            header2Sub: "Tidak ada versi desktop atau tidak bekerja? Kita selalu punya versi web!",
            littleNote2: "*Gambar mungkin tampak berbeda dari software sebenarnya",
            header3Sub: "Suka Indonesia? CompassCAD itu 100% dibuat di Indonesia!",
            paragraph3Sub: "Kamu tidak hanya mendukung developer, kamu juga mendukung Indonesia, tanpa sadar!",
            littleNote3: "*Gambar CompassCAD tidak menunjukkan produk final. Bangga Buatan Indonesia adalah merek dagang milik Kementerian Pariwisata dan Ekonomi Kreatif Republik Indonesia (Kemenparekraf)"
        },
        editor: {
            home: {
                quickActions: "Aksi cepat",
                createNew: "Buat baru",
                importExisting: "Impor yang sudah ada",
                clearEntireHistory: "Hapus seluruh riwayat",
                askBlueprint: "Tanya Blueprint",
                recents: "Terbaru",
                blueprintIntro: "Hei di sana! Aku Blueprint!",
                blueprintDesc: "Aku bisa membantu kamu membuat desain berdasarkan instruksimu. Tanya saja apa pun!",
                blueprintSuggestions: "Atau coba saran ini:",
                bpGenerated: "Desain yang dibuat Blueprint",
                suggestions: {
                    one: {
                        shorthand: "🏠 Rumah dengan 2 lantai",
                        prompt: "Buatkan aku rumah dengan 2 lantai"
                    },
                    two: {
                        shorthand: "🚗 Desain mobil sederhana",
                        prompt: "Buatlah aku desain mobil sederhana, termasuk semua seperti sasis mobil dan roda"
                    },
                    three: {
                        shorthand: "🏢 Rencana lantai untuk bangunan",
                        prompt: "Buatkan aku rencana lantai untuk bangunan, termasuk ruangan dan furnitur"
                    },
                    four: {
                        shorthand: "🛠️ Rencana layout untuk bengkel",
                        prompt: "Buatlah aku rencana layout untuk bengkel, termasuk meja kerja dan alat"
                    },
                    five: {
                        shorthand: "🏰 Sebuah kastil dengan parit",
                        prompt: "Buatlah aku sebuah kastil dengan parit, termasuk menara dan dinding"
                    }
                },
                blueprintPlaceholder: "Tanya atau buat dengan Blueprint AI",
                blueprintWarning: "Konten yang dibuat AI mungkin salah atau tidak akurat. Didukung oleh Gemini dari Google AI",
                clearHistoryModal: "Hapus Riwayat",
                text1Sure: "Apakah Anda yakin ingin menghapus seluruh riwayat? ",
                boldTextWarning: "Tindakan ini tidak bisa dibatalkan.",
                viewInEditor: "Lihat/edit desain ini di editor",
                nothingInHistory: "Yah, kamu tidak punya apa-apa di daftar riwayat hari ini. Buatlah beberapa gambar dan riwayatmu akan muncul di sini.",
                randomMesg: {
                    morning: {
                        one: "Hei? Sudah minum kopi? ☕",
                        two: "Selamat pagi! Siap untuk memulai harimu? 🌄",
                        three: "Pagi! Mari kita lihat apa yang akan kamu curahkan! 🤩"
                    },
                    noon: {
                        one: "Memulai sesuatu di jam segini? 🧐",
                        two: "Waktunya makan siang! Inginkan sesuatu dan bekerjalah di sini! 😋",
                        three: "Aku harap kamu tidak sedang tidur! 😴"
                    },
                    afternoon: {
                        one: "Kamu masih bangun? Mari mendesain! 🗺️",
                        two: "Biarkan kreativitas tetap mengalir! ✏️",
                        three: "Waktu yang tepat untuk kerja CAD! 📐"
                    },
                    evening: {
                        one: "Kamu masih bekerja di malam hari? 🧐",
                        two: "Ada sesuatu yang mendadak? ⌚",
                        three: "Namun kamu masih kuat. Teruskan 💪"
                    },
                    night: {
                        one: "Bukankah seharusnya kamu tidur? 🛌",
                        two: "Tanpa sengaja curah ide sekarang? 😵‍💫",
                        three: "Namun, kafeinmu tidak pernah habis. ☕"
                    },
                    dawn: {
                        one: "Aku mau tidur, eh tunggu tidak jadi. 😴",
                        two: "Sudah selarut ini dan kamu punya ide? 😮‍💨",
                        three: "Semoga kamu tidak menunda-nunda! 🥲"
                    },
                }
            },
            main: {
                newDesign: "Desain Baru",
                openDesign: "Buka Desain",
                menu: "Menu",
                standaloneTip: "TIPS: Apakah Anda mencari cara untuk menyimpan file .ccad? Buka Bagikan/Ekspor > Ekspor sebagai .ccad",
                loading: {
                    heading: "Memuat CompassCAD...",
                    subHeading: "Tunggu sebentar, kamu akan siap dalam sekejap.",
                },
                betaWarning: "Hei! Sekadar informasi bahwa editor ini masih dalam versi beta, jadi harap maklum jika ada tombol yang rusak dan UI yang tidak berfungsi",
                header: {
                    goBackHome: "Kembali ke beranda",
                    undo: "Urungkan",
                    redo: "Ulangi",
                    share: "Bagikan/Ekspor",
                    feedback: "Kirim Umpan Balik",
                    record: "Rekam Video",
                    recordPopup: {
                        startRecording: "Mulai Merekam",
                        stopRecording: "Berhenti Merekam",
                        micOff: "Nyalakan mikrofon",
                        micOn: "Matikan mikrofon"
                    },
                    shareModal: {
                        heading: "Bagikan/Ekspor Desain",
                        copyLink: "Salin Tautan",
                        exportAsSvg: "Ekspor sebagai SVG",
                        exportAsCcad: "Ekspor sebagai CCAD",
                        embedToSite: "Sematkan ke situs web",
                        preview: "Pratinjau",
                        previewDifferent: "Pratinjau mungkin tampak lebih meregang dari biasanya",
                        settings: "Pengaturan",
                        padding: "Padding",
                        monochrome: "Monokrom",
                        font: "Font",
                        export: "Ekspor",
                        nothingOnPreview: "Kamu tidak punya apa-apa untuk dipratinjau saat ini!"
                    }
                },
                essential: {
                    select: "Pilih",
                    navigate: "Navigasi",
                    move: "Pindah",
                    delete: "Hapus",
                    addPoint: "Tambah Titik",
                    addLine: "Tambah Garis",
                    addRectangle: "Tambah Persegi",
                    addCircle: "Tambah Lingkaran",
                    addArc: "Tambah Busur",
                    addMeasure: "Tambah Ukuran",
                    addLabel: "Tambah Label",
                    addImage: "Tambah Gambar",
                    addPolygon: "Tambah Poligon",
                    addBoundbox: "Tambah Boundbox",
                },
                inspector: {
                    header: "Inspektur",
                    collapseToRight: "Ciutkan ke kanan",
                    expand: "Perluas",
                    nothing: "Pilih komponen maka detail komponenmu akan muncul di sini.",
                    properties: "Properti",
                    hierarchy: "Hierarki",
                    searchInHiearchy: "Cari di Hierarki",
                    general: {
                        active: "Aktif",
                        radius: "Radius",
                        color: "Warna",
                        opacity: "Opasitas",
                        name: "Nama",
                        position: "Posisi",
                        size: "Ukuran",
                        coverage: "Cakupan Busur",
                    },
                    text: {
                        heading: "Properti Teks",
                        text: "Teks",
                        fontSize: "Ukuran Font",
                    },
                    picture: {
                        heading: "Properti Gambar",
                        src: "Sumber",
                    },
                    polygon: {
                        heading: "Properti Poligon",
                        fillColor: "Warna Isi",
                        strokeColor: "Warna Garis",
                        enableStroke: "Aktifkan Garis",
                    }
                }
            }
        }
    },
    ja: {
        name: "日本語",
        general: {
            yes: "はい",
            no: "いいえ"
        },
        home: {
            header: "複雑なツールの習得に時間を費やすことなく、理想を形にしましょう。設計のあり方をシンプルにする時が来ました。",
            descHero: "もしCADがNotionやFigmaのように直感的なツールだったらどうでしょう？私たちは建築設計における「パワーツール」の定義を再定義します。",
            downloadButton: "プラットフォーム向けにダウンロード",
            inBrowserEditor: "ブラウザ版エディタを開く",
            classicEdior: "クラシックエディタを開く",
            editorSel: {
                polished: {
                    name: "整理されたエディタ",
                    description: "整理、共有、反復、または最新状態の維持に最適です"
                },
                classic: {
                    name: "スタンドアロンエディタ",
                    description: "古き良きクラシックなウェブエディタ！ChromebookやCompassCAD PWA向け"
                }
            },
            header1Sub: "驚異的な速さを誇るCADソフトウェア。無料でシンプル、かつミニマルです。",
            paragraph1Sub: "高価なコンピュータやソフトウェアを買えない開発者が、情熱を込めて作り上げました。ぜひお楽しみください。",
            littleNote1: "*WindowsおよびLinuxでのみ利用可能です。",
            header2Sub: "デスクトップ版がない、または動作しませんか？ウェブ版がいつでも利用可能です！",
            littleNote2: "*画像は実際のソフトウェアとは異なる場合があります",
            header3Sub: "インドネシアはお好きですか？CompassCADは100%インドネシア製です！",
            paragraph3Sub: "開発者を直接支援するだけでなく、気づかないうちにインドネシアもサポートしています！",
            littleNote3: "*CompassCADの画像は最終製品を代表するものではありません。「Bangga Buatan Indonesia」はインドネシア共和国観光クリエイティブ経済省（Kemenparekraf）の商標です。"
        },
        editor: {
            home: {
                quickActions: "クイックアクション",
                createNew: "新規作成",
                importExisting: "既存のファイルをインポート",
                clearEntireHistory: "すべての履歴を消去",
                askBlueprint: "Blueprintに質問",
                recents: "最近の項目",
                blueprintIntro: "こんにちは！私はBlueprintです！",
                blueprintDesc: "プロンプトに基づいてデザインの作成をお手伝いします。何でも聞いてください！",
                blueprintSuggestions: "または、以下の提案を試してみてください：",
                bpGenerated: "Blueprint生成デザイン",
                suggestions: {
                    one: {
                        shorthand: "🏠 2階建ての家",
                        prompt: "2階建ての家を作成してください"
                    },
                    two: {
                        shorthand: "🚗 シンプルな車のデザイン",
                        prompt: "車のシャシーやホイールを含む、シンプルな車のデザインを作成してください"
                    },
                    three: {
                        shorthand: "🏢 ビルのフロアプラン",
                        prompt: "部屋や家具を含む、ビルのフロアプランを作成してください"
                    },
                    four: {
                        shorthand: "🛠️ ワークショップのレイアウト",
                        prompt: "作業台や道具を含む、ワークショップのレイアウトプランを作成してください"
                    },
                    five: {
                        shorthand: "🏰 堀のある城",
                        prompt: "塔や壁、堀のある城を作成してください"
                    }
                },
                blueprintPlaceholder: "Blueprint AIに質問または作成依頼",
                blueprintWarning: "AI生成コンテンツは誤りや不正確な場合があります。Google AIのGeminiを使用しています",
                clearHistoryModal: "履歴を消去",
                text1Sure: "本当にすべての履歴を消去しますか？",
                boldTextWarning: "この操作は取り消せません。",
                viewInEditor: "エディタでこのデザインを表示/編集",
                nothingInHistory: "今日の履歴はありません。図面を作成すると、ここに履歴が表示されます。",
                randomMesg: {
                    morning: {
                        one: "やあ！コーヒーは飲みましたか？ ☕",
                        two: "おはようございます！一日の準備はいいですか？ 🌄",
                        three: "おはよう！どんなアイデアが浮かぶか楽しみです！ 🤩"
                    },
                    noon: {
                        one: "この時間に何か始めますか？ 🧐",
                        two: "ランチタイムです！何か食べてから作業しましょう！ 😋",
                        three: "寝てしまわないよう願っています！ 😴"
                    },
                    afternoon: {
                        one: "まだ起きていますか？デザインしましょう！ 🗺️",
                        two: "創造性を維持しましょう！ ✏️",
                        three: "CAD作業に最適な時間です！ 📐"
                    },
                    evening: {
                        one: "夜まで作業しているのですか？ 🧐",
                        two: "直前の変更はありますか？ ⌚",
                        three: "まだまだ元気ですね。その調子です 💪"
                    },
                    night: {
                        one: "もう寝る時間ではありませんか？ 🛌",
                        two: "こんな時間にアイデアが？ 😵‍💫",
                        three: "カフェインが切れることはなさそうですね。 ☕"
                    },
                    dawn: {
                        one: "寝ようかな…やっぱりやめました。 😴",
                        two: "こんなに遅くにアイデアが湧きましたか？ 😮‍💨",
                        three: "先延ばしにしていませんよね？ 🥲"
                    }
                }
            },
            main: {
                newDesign: "新規デザイン",
                openDesign: "デザインを開く",
                menu: "メニュー",
                standaloneTip: "ヒント: .ccadファイルの保存方法をお探しですか？共有/エクスポート > .ccadとしてエクスポート に進んでください",
                loading: {
                    heading: "CompassCADを読み込み中...",
                    subHeading: "すぐ準備が整います。少々お待ちください。",
                },
                betaWarning: "お知らせ：このエディタはまだベータ版です。ボタンやUIが正常に動作しない場合があります。",
                header: {
                    goBackHome: "ホームに戻る",
                    undo: "元に戻す",
                    redo: "やり直し",
                    share: "共有/エクスポート",
                    feedback: "フィードバックを送信",
                    record: "ビデオを録画",
                    recordPopup: {
                        startRecording: "録画開始",
                        stopRecording: "録画停止",
                        micOff: "マイクをオンにする",
                        micOn: "マイクをオフにする"
                    },
                    shareModal: {
                        heading: "デザインの共有/エクスポート",
                        copyLink: "リンクをコピー",
                        exportAsSvg: "SVGとしてエクスポート",
                        exportAsCcad: "CCADとしてエクスポート",
                        embedToSite: "ウェブサイトに埋め込み",
                        preview: "プレビュー",
                        previewDifferent: "プレビューは通常より引き伸ばされて見える場合があります",
                        settings: "設定",
                        padding: "余白 (Padding)",
                        monochrome: "モノクロ",
                        font: "フォント",
                        export: "エクスポート",
                        nothingOnPreview: "現在、プレビューするものがありません！"
                    }
                },
                essential: {
                    select: "選択",
                    navigate: "ナビゲート",
                    move: "移動",
                    delete: "削除",
                    addPoint: "点を追加",
                    addLine: "線を追加",
                    addRectangle: "長方形を追加",
                    addCircle: "円を追加",
                    addArc: "円弧を追加",
                    addMeasure: "寸法を追加",
                    addLabel: "ラベルを追加",
                    addImage: "画像を追加",
                    addPolygon: "多角形を追加",
                    addBoundbox: "バウンディングボックスを追加",
                },
                inspector: {
                    header: "インスペクタ",
                    collapseToRight: "右側に折りたたむ",
                    expand: "展開",
                    nothing: "コンポーネントを選択すると、ここに詳細が表示されます。",
                    properties: "プロパティ",
                    hierarchy: "階層",
                    searchInHiearchy: "階層内を検索",
                    general: {
                        active: "アクティブ",
                        radius: "半径",
                        color: "色",
                        opacity: "不透明度",
                        name: "名前",
                        position: "位置",
                        size: "サイズ",
                        coverage: "円弧の範囲",
                    },
                    text: {
                        heading: "テキストプロパティ",
                        text: "テキスト",
                        fontSize: "フォントサイズ",
                    },
                    picture: {
                        heading: "画像プロパティ",
                        src: "ソース",
                    },
                    polygon: {
                        heading: "多角形プロパティ",
                        fillColor: "塗りつぶしの色",
                        strokeColor: "線の色",
                        enableStroke: "線を有効にする",
                    }
                }
            }
        }
    },
    sv: {
        name: "Svenska",
        general: {
            yes: "Ja",
            no: "Nej"
        },
        home: {
            header: "Bygg dina drömmar utan att slösa tid på komplexa verktyg. Det är dags att förenkla din designprocess.",
            descHero: "Tänk om CAD var lika enkelt som de verktyg vi använder idag, som Notion eller Figma. Vi omdefinierar vad \"kraftfulla verktyg\" innebär för arkitektonisk design.",
            downloadButton: "Ladda ner för plattform",
            inBrowserEditor: "Öppna webbläsar-editor",
            classicEdior: "Öppna klassisk editor",
            editorSel: {
                polished: {
                    name: "Organiserad Editor",
                    description: "Perfekt för att organisera, dela, iterera eller bara hålla ordning."
                },
                classic: {
                    name: "Fristående Editor",
                    description: "Den gamla goda klassiska webbeditorn! För Chromebooks eller CompassCAD PWA."
                }
            },
            header1Sub: "Blixtsnabb CAD-programvara. Helt gratis, enkel och minimalistisk.",
            paragraph1Sub: "Byggd med kärlek av utvecklare som vill att alla ska ha råd med bra designverktyg.",
            littleNote1: "*Endast tillgängligt för Windows och Linux.",
            header2Sub: "Ingen skrivbordsversion eller fungerar det inte? Vi har alltid webbversionen!",
            littleNote2: "*Bilder kan skilja sig från den faktiska programvaran.",
            header3Sub: "Älskar du Indonesien? CompassCAD är till 100% skapat i Indonesien!",
            paragraph3Sub: "Du stöder inte bara utvecklarna, du stöder också Indonesien utan att ens inse det!",
            littleNote3: "*Bilder av CompassCAD representerar inte slutprodukten. Bangga Buatan Indonesia är ett varumärke som tillhör ministeriet för turism och kreativ ekonomi i Republiken Indonesien (Kemenparekraf)."
        },
        editor: {
            home: {
                quickActions: "Snabbåtgärder",
                createNew: "Skapa ny",
                importExisting: "Importera befintlig",
                clearEntireHistory: "Rensa hela historiken",
                askBlueprint: "Fråga Blueprint",
                recents: "Senaste",
                blueprintIntro: "Hej där! Jag är Blueprint!",
                blueprintDesc: "Jag kan hjälpa dig att skapa design baserat på dina instruktioner. Fråga mig vad som helst!",
                blueprintSuggestions: "Eller prova dessa förslag:",
                bpGenerated: "Design genererad av Blueprint",
                suggestions: {
                    one: {
                        shorthand: "🏠 Ett hus med 2 våningar",
                        prompt: "Skapa ett hus med 2 våningar åt mig"
                    },
                    two: {
                        shorthand: "🚗 En enkel bildesign",
                        prompt: "Skapa en enkel bildesign åt mig, inklusive allt som chassi och hjul"
                    },
                    three: {
                        shorthand: "🏢 En planlösning för en byggnad",
                        prompt: "Skapa en planlösning för en byggnad åt mig, inklusive rum och möbler"
                    },
                    four: {
                        shorthand: "🛠️ En layout för en verkstad",
                        prompt: "Skapa en layout för en verkstad åt mig, inklusive arbetsbänkar och verktyg"
                    },
                    five: {
                        shorthand: "🏰 Ett slott med vallgrav",
                        prompt: "Skapa ett slott med vallgrav åt mig, inklusive torn och murar"
                    }
                },
                blueprintPlaceholder: "Fråga eller skapa med Blueprint AI",
                blueprintWarning: "AI-genererat innehåll kan vara felaktigt. Drivs av Google AI:s Gemini",
                clearHistoryModal: "Rensa historik",
                text1Sure: "Är du säker på att du vill rensa hela historiken?",
                boldTextWarning: "Denna åtgärd kan inte ångras.",
                viewInEditor: "Visa/redigera denna design i editorn",
                nothingInHistory: "Du har inget i din historiklista idag. Skapa några ritningar så visas din historik här.",
                randomMesg: {
                    morning: {
                        one: "Hej! Har du druckit kaffe än? ☕",
                        two: "God morgon! Redo att börja dagen? 🌄",
                        three: "God morgon! Låt oss se vad du brainstormar fram! 🤩"
                    },
                    noon: {
                        one: "Börja med något nu? 🧐",
                        two: "Lunchtid! Sugen på något gott medan du jobbar? 😋",
                        three: "Jag hoppas att du inte sover! 😴"
                    },
                    afternoon: {
                        one: "Är du fortfarande vaken? Låt oss designa! 🗺️",
                        two: "Håll kreativiteten flödande! ✏️",
                        three: "Perfekt tid för CAD-arbete! 📐"
                    },
                    evening: {
                        one: "Jobbar du fortfarande på kvällen? 🧐",
                        two: "Något i sista minuten? ⌚",
                        three: "Du är fortfarande stark. Fortsätt så 💪"
                    },
                    night: {
                        one: "Borde du inte sova nu? 🛌",
                        two: "Brainstorming mitt i natten? 😵‍💫",
                        three: "Ditt koffein tar aldrig slut. ☕"
                    },
                    dawn: {
                        one: "Jag ska gå och lägga mig... vänta, glöm det. 😴",
                        two: "Så här sent och du har fortfarande idéer? 😮‍💨",
                        three: "Jag hoppas att du inte prokrastinerar! 🥲"
                    }
                }
            },
            main: {
                newDesign: "Ny design",
                openDesign: "Öppna design",
                menu: "Meny",
                standaloneTip: "TIPS: Letar du efter ett sätt att spara .ccad-filer? Gå till Dela/Exportera > Exportera som .ccad",
                loading: {
                    heading: "Laddar CompassCAD...",
                    subHeading: "Vänta lite, du är snart redo.",
                },
                betaWarning: "Hej! Tänk på att denna editor fortfarande är i beta, så förvänta dig trasiga knappar och ofullständigt gränssnitt.",
                header: {
                    goBackHome: "Gå tillbaka hem",
                    undo: "Ångra",
                    redo: "Gör om",
                    share: "Dela/Exportera",
                    feedback: "Skicka feedback",
                    record: "Spela in video",
                    recordPopup: {
                        startRecording: "Starta inspelning",
                        stopRecording: "Stoppa inspelning",
                        micOff: "Slå på mikrofon",
                        micOn: "Stäng av mikrofon"
                    },
                    shareModal: {
                        heading: "Dela/Exportera design",
                        copyLink: "Kopiera länk",
                        exportAsSvg: "Exportera som SVG",
                        exportAsCcad: "Exportera som CCAD",
                        embedToSite: "Bädda in på webbplats",
                        preview: "Förhandsgranskning",
                        previewDifferent: "Förhandsgranskningen kan se mer utdragen ut än vanligt",
                        settings: "Inställningar",
                        padding: "Marginal (Padding)",
                        monochrome: "Monokrom",
                        font: "Typsnitt",
                        export: "Exportera",
                        nothingOnPreview: "Du har ingenting i förhandsgranskningen just nu!"
                    }
                },
                essential: {
                    select: "Välj",
                    navigate: "Navigera",
                    move: "Flytta",
                    delete: "Radera",
                    addPoint: "Lägg till punkt",
                    addLine: "Lägg till linje",
                    addRectangle: "Lägg till rektangel",
                    addCircle: "Lägg till cirkel",
                    addArc: "Lägg till båge",
                    addMeasure: "Lägg till mått",
                    addLabel: "Lägg till etikett",
                    addImage: "Lägg till bild",
                    addPolygon: "Lägg till polygon",
                    addBoundbox: "Lägg till begränsningsruta",
                },
                inspector: {
                    header: "Inspektör",
                    collapseToRight: "Fäll ihop till höger",
                    expand: "Expandera",
                    nothing: "Välj en komponent för att se detaljer här.",
                    properties: "Egenskaper",
                    hierarchy: "Hierarki",
                    searchInHiearchy: "Sök i hierarkin",
                    general: {
                        active: "Aktiv",
                        radius: "Radie",
                        color: "Färg",
                        opacity: "Opacitet",
                        name: "Namn",
                        position: "Position",
                        size: "Storlek",
                        coverage: "Bågtäckning",
                    },
                    text: {
                        heading: "Textegenskaper",
                        text: "Text",
                        fontSize: "Teckenstorlek",
                    },
                    picture: {
                        heading: "Bildegenskaper",
                        src: "Källa",
                    },
                    polygon: {
                        heading: "Polygonegenskaper",
                        fillColor: "Fyllnadsfärg",
                        strokeColor: "Linjefärg",
                        enableStroke: "Aktivera linje",
                    }
                }
            }
        }
    }
};