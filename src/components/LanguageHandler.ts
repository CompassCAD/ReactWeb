import { posix } from 'path';
import React, { JSX } from 'react';
import { text } from 'stream/consumers';

export const supportedLanguages = ['en', 'nl', 'id', 'ja', 'sv'].sort();
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
            inBrowserEditor: "In-browser editor",
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
            header1Sub: "Razendsnelle CAD-software. Gratis, doch eenvoudig en minimalistisch",
            paragraph1Sub: "Gebouwd vanuit het hart van blutte ontwikkelaars die zich geen goede computer en CAD-software kunnen veroorloven, speciaal voor jou gemaakt om van te genieten.",
            littleNote1: "*Alleen beschikbaar voor Windows en Linux.",
            header2Sub: "Geen desktopversie of werkt het niet? We hebben altijd de webversie!",
            littleNote2: "*Afbeeldingen kunnen afwijken van de daadwerkelijke software"
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
                text1Sure: "Weet je zeker dat je de hele geschiedenis wilt wissen?",
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
                    shareModal: {
                        heading: "Ontwerp delen/exporteren",
                        copyLink: "Link kopiëren"
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
                    addPolygon: "Veelhoek toevoegen"
                },
                inspector: {
                    header: "Inspector",
                    collapseToRight: "Invouwen naar rechts",
                    expand: "Uitvouwen",
                    nothing: "Selecteer een component; de details van je component verschijnen dan hier.",
                    general: {
                        active: "Actief",
                        radius: "Straal",
                        color: "Kleur",
                        opacity: "Doorzichtigheid",
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
            downloadButton: "Unduh untuk",
            inBrowserEditor: "Editor dalam browser",
            header1Sub: "Software CAD yang betul-betulnya cepat. Gratis, tetapi mudah dan minimalis",
            paragraph1Sub: "Dibuat dari hati seorang programmer biasa yang tidak bisa membeli komputer bagus dan software CAD, dibuat untukmu untuk dinikmati.",
            littleNote1: "*Hanya ada di Windows dan Linux",
            header2Sub: "Tidak ada versi desktop atau tidak bisa? Kita selalu punya versi web!",
            littleNote2: "*Gambar tentu berbeda dari software sebenarnya",
            header3Sub: "Suka tanah air? CompassCAD itu 100% dibuat di Indonesia!",
            paragraph3Sub: "Kamu tidak hanya mendukung developer, kamu juga mendukung Indonesia, tanpa sadar!",
            littleNote3: "Gambar CompassCAD tidak menunjukkan produk final. Bangga Buatan Indonesia adalah merek dagang milik Kementerian Pariwisata dan Ekonomi Kreatif Republik Indonesia (Kemenparekraf)"
        },
        editor: {
            home: {
                quickActions: "Aksi cepat",
                createNew: "Buat baru",
                importExisting: "Buka yang tersedia",
                clearEntireHistory: "Hapus riwayat",
                askBlueprint: "Tanya Blueprint",
                recents: "Terbaru",
                blueprintPlaceholder: "Tanya atau buat dengan Blueprint AI",
                blueprintWarning: "Konten dibuat AI mungkin salah atau tidak akurat.",
                blueprintIntro: "Hei! Aku Blueprint!",
                blueprintDesc: "Aku bisa membantu kamu membuat desain berdasarkan pertanyaanmu. Tanya saja apa pun!",
                blueprintSuggestions: "Atau coba saran ini:",
                bpGenerated: "Desain dibuat Blueprint",
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
                        shorthand: "🏰 Sebuah kasta dengan parit",
                        prompt: "Buatlah aku sebuah kasta dengan parit, termasuk menara dan dinding"
                    }
                },
                clearHistoryModal: "Hapus riwayat",
                text1Sure: "Yakin untuk menghapuskan seluruh riwayatmu? ",
                boldTextWarning: "Aksi ini tidak bisa diundurkan!",
                viewInEditor: "Lihat/sunting desain ini di editor",
                nothingInHistory: "Kamu tidak mempunyai apa-apa di daftar riwayatmu. Buatlah desain dan riwayatmu akan muncul disini",
                randomMesg: {
                    morning: {
                        one: "Hey! Lo udah ngopi belom? ☕",
                        two: "Pagi! Udah siap mulai hari? 🌄",
                        three: "Pagi! Ayo liat lo brainstorm apa ini! 🤩"
                    },
                    noon: {
                        one: "Lo lagi gabut ya? 🧐",
                        two: "Maem siang dulu, baru balik kesini! 😋",
                        three: "Semoga ga tidur! 😴"
                    },
                    afternoon: {
                        one: "Masih bangun? Ayo desain! 🗺️",
                        two: "Kreativitasnya dong, terusin! ✏️",
                        three: "Waktunya perfect buat CAD! 📐"
                    },
                    evening: {
                        one: "Malem malem masih kerja? 🧐",
                        two: "Ada sesuatu sebelom deadline ga? ⌚",
                        three: "Lo masih kuat aja. Terusin. 💪"
                    },
                    night: {
                        one: "Bukannya lo harus tidur? 🛌",
                        two: "Ga sengaja brainstorm? 😵‍💫",
                        three: "Beuh, kafein lo ga pernah turun sama sekali ☕"
                    },
                    dawn: {
                        one: "Gue mau tidur, eh gajadi 😴",
                        two: "Dini hari/subuh dan lo aja masih ada ide? 😮‍💨",
                        three: "Semoga ga ditekan deadline 🥲"
                    },
                }
            },
            main: {
                newDesign: "Desain Baru",
                openDesign: "Buka Desain",
                menu: "Menu",
                standaloneTip: "TIP: Ingin mencari dimana untuk menyimpan file .ccad? Pergi ke Bagikan/Ekspor > Ekspor sebagai .ccad",
                loading: {
                    heading: "Memuat CompassCAD...",
                    subHeading: "Bentar lagi, nanti disiapin kok.",
                },
                betaWarning: "Hei! Cuma mau kasih tau kalau editor ini masih beta, jadi harap maklum kalau ada tombol yang rusak atau UI yang ga berfungsi",
                header: {
                    goBackHome: "Kembali",
                    undo: "Urungkan",
                    redo: "Ulangi",
                    share: "Bagi/Ekspor",
                    feedback: "Kirim Umpan Balik",
                    record: "Rekam Video",
                    recordPopup: {
                        startRecording: "Mulai merekam",
                        stopRecording: "Hentikan rekaman",
                        micOff: "Hidupkan mikrofon",
                        micOn: "Matikan mikrofon"
                    },
                    shareModal: {
                        heading: "Bagi/Ekspor Desain",
                        copyLink: "Salin link",
                        exportAsSvg: "Ekspor sebagai SVG",
                        exportAsCcad: "Ekspor sebagai CCAD",
                        embedToSite: "Cantumkan di situs",
                        preview: "Pratinjau",
                        previewDifferent: "Pratinjau bisa menampil lebih lebar",
                        settings: "Pengaturan",
                        padding: "Padding",
                        monochrome: "Monokrom",
                        font: "Font",
                        export: "Ekspor",
                        nothingOnPreview: "Kamu tidak memiliki apa-apa dalam pratinjau!"
                    }
                },
                essential: {
                    select: "Pilih",
                    navigate: "Navigasi",
                    move: "Pindah",
                    delete: "Hapus",
                    addPoint: "Tambahkan Poin",
                    addLine: "Tambahkan Garis",
                    addRectangle: "Tambahkan Persegi",
                    addCircle: "Tambahkan Lingkaran",
                    addArc: "Tambahkan Busur",
                    addMeasure: "Ukur",
                    addLabel: "Tambahkan Label",
                    addImage: "Tambahkan Gambar",
                    addPolygon: "Tambahkan Poligon",
                    addBoundbox: "Tambahkan kotak batas",
                },
                inspector: {
                    header: "Inspektor",
                    collapseToRight: "Tutup ke kanan",
                    expand: "Buka",
                    nothing: "Pilih komponen, lalu detail komponen kamu akan ditampil disini.",
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
                        coverage: "Koverasi Busur",
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
            header: "複雑なツールの学習に時間を費やすのはもう終わり。あなたの「夢」を形にするデザインを、もっとシンプルに。",
            descHero: "もしCADが、NotionやFigmaのように直感的なツールになったら？私たちは建築デザインにおける「パワーツール」の定義を再定義します。",
            downloadButton: "プラットフォーム版をダウンロード",
            inBrowserEditor: "ブラウザで起動",
            header1Sub: "圧倒的に高速なCADソフトウェア。無料でシンプル、そしてミニマリストな設計。",
            paragraph1Sub: "高価なPCやソフトウェアに手が届かなかった開発者たちが、情熱を込めて作り上げました。誰もが楽しめる設計環境をあなたに。",
            littleNote1: "*WindowsおよびLinuxのみ対応。",
            header2Sub: "デスクトップ版が動かない？ウェブ版ならいつでもどこでも利用可能です！",
            littleNote2: "*画像は実際のソフトウェアとは異なる場合があります。",
            header3Sub: "インドネシア発。CompassCADは100%インドネシア国内で開発されています！",
            paragraph3Sub: "利用するだけで、開発者だけでなく、インドネシアのものづくり（Bangga Buatan Indonesia）を直接支援することに繋がります。",
            littleNote3: "*CompassCADの画像は最終製品を代表するものではありません。「Bangga Buatan Indonesia」はインドネシア観光・創造経済省（Kemenparekraf）の登録商標です。"
        },
        editor: {
            home: {
                quickActions: "クイックアクション",
                createNew: "新規作成",
                importExisting: "既存ファイルのインポート",
                clearEntireHistory: "履歴をすべて削除",
                askBlueprint: "Blueprintに相談",
                recents: "最近のプロジェクト",
                blueprintIntro: "こんにちは！私はBlueprintです！",
                blueprintDesc: "プロンプトからデザインを作成するお手伝いをします。何でも聞いてください！",
                blueprintSuggestions: "または、こちらを試してみますか？",
                bpGenerated: "Blueprint生成デザイン",
                suggestions: {
                    one: {
                        shorthand: "🏠 2階建ての家",
                        prompt: "2階建ての家を作成して"
                    },
                    two: {
                        shorthand: "🚗 シンプルな車のデザイン",
                        prompt: "車体やホイールを含めた、シンプルな車のデザインを作成して"
                    },
                    three: {
                        shorthand: "🏢 ビルのフロアプラン",
                        prompt: "家具や部屋のレイアウトを含めた、ビルのフロアプランを作成して"
                    },
                    four: {
                        shorthand: "🛠️ ワークショップのレイアウト",
                        prompt: "作業台や道具の配置を含めた、ワークショップのレイアウト図面を作成して"
                    },
                    five: {
                        shorthand: "🏰 堀のあるお城",
                        prompt: "塔や城壁、堀を備えたお城のデザインを作成して"
                    }
                },
                blueprintPlaceholder: "Blueprint AIに質問、または作成依頼",
                blueprintWarning: "AIが生成する内容は誤りや不正確な場合があります。Google AIのGeminiを搭載しています。",
                clearHistoryModal: "履歴の削除",
                text1Sure: "本当に履歴をすべて削除しますか？",
                boldTextWarning: "この操作は取り消せません。",
                viewInEditor: "このデザインをエディタで表示/編集",
                nothingInHistory: "現在、履歴はありません。図面を作成するとここに表示されます。",
                randomMesg: {
                    morning: {
                        one: "お疲れ様です。コーヒーは飲みましたか？ ☕",
                        two: "おはようございます！一日の準備はいいですか？ 🌄",
                        three: "おはよう！今日はどんなアイデアが浮かぶか楽しみです！ 🤩"
                    },
                    noon: {
                        one: "この時間から何か始めますか？ 🧐",
                        two: "ランチタイム！しっかり食べて、作業も捗らせましょう！ 😋",
                        three: "居眠りしていませんよね？ 😴"
                    },
                    afternoon: {
                        one: "まだ頑張っていますね？さあ、デザインしましょう！ 🗺️",
                        two: "クリエイティビティを止めないで！ ✏️",
                        three: "CAD作業にぴったりの時間です！ 📐"
                    },
                    evening: {
                        one: "夜まで作業ですか？お疲れ様です。 🧐",
                        two: "やり残したことはありませんか？ ⌚",
                        three: "まだまだ元気ですね。その調子です 💪"
                    },
                    night: {
                        one: "そろそろ寝る時間ではありませんか？ 🛌",
                        two: "こんな時間にアイデアが降ってきましたか？ 😵‍💫",
                        three: "カフェインがまだ効いているようですね。 ☕"
                    },
                    dawn: {
                        one: "寝ようと思ったけど……やっぱり起きてます。 😴",
                        two: "こんな深夜に名案が？ 😮‍💨",
                        three: "後回しにしていたわけじゃないですよね……？ 🥲"
                    }
                }
            },
            main: {
                newDesign: "新規デザイン",
                openDesign: "デザインを開く",
                menu: "メニュー",
                standaloneTip: "ヒント: .ccadファイルの保存方法をお探しですか？「共有/書き出し」>「.ccadとして書き出し」から行えます。",
                loading: {
                    heading: "CompassCADを読み込み中...",
                    subHeading: "準備ができるまで、少々お待ちください。"
                },
                betaWarning: "このエディタは現在ベータ版です。ボタンが動作しなかったり、UIに不具合がある場合があります。",
                header: {
                    goBackHome: "ホームに戻る",
                    undo: "元に戻す",
                    redo: "やり直し",
                    share: "共有/書き出し",
                    feedback: "フィードバックを送信",
                    record: "動画を録画",
                    recordPopup: {
                        startRecording: "録画開始",
                        stopRecording: "録画停止",
                        micOff: "マイクをオンにする",
                        micOn: "マイクをオフにする"
                    },
                    shareModal: {
                        heading: "デザインの共有/書き出し",
                        copyLink: "リンクをコピー",
                        exportAsSvg: "SVGとして書き出し",
                        exportAsCcad: "CCADとして書き出し",
                        embedToSite: "サイトに埋め込み",
                        preview: "プレビュー",
                        previewDifferent: "プレビューは通常より引き伸ばされて見える場合があります",
                        settings: "設定",
                        padding: "余白",
                        monochrome: "モノクロ",
                        font: "フォント",
                        export: "書き出し",
                        nothingOnPreview: "プレビューするものがありません！"
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
                    addMeasure: "計測を追加",
                    addLabel: "ラベルを追加",
                    addImage: "画像を追加",
                    addPolygon: "多角形を追加",
                    addBoundbox: "バウンディングボックスを追加"
                },
                inspector: {
                    header: "インスペクター",
                    collapseToRight: "右にたたむ",
                    expand: "展開",
                    nothing: "コンポーネントを選択すると、詳細がここに表示されます。",
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
                        coverage: "弧の範囲"
                    },
                    text: {
                        heading: "テキストプロパティ",
                        text: "テキスト",
                        fontSize: "フォントサイズ"
                    },
                    picture: {
                        heading: "画像プロパティ",
                        src: "ソース"
                    },
                    polygon: {
                        heading: "多角形プロパティ",
                        fillColor: "塗りつぶしの色",
                        strokeColor: "線の色",
                        enableStroke: "線を有効にする"
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
            header: "Bygg dina drömmar utan att slösa tid på att lära dig komplexa verktyg. Det är dags att förenkla din \"drömbyggande\" design",
            descHero: "Tänk om CAD var lika enkelt som de verktyg vi använder idag, som Notion eller till och med Figma. Förutom att vi kan omdefiniera vad \"kraftfulla verktyg\" betyder för arkitekturdesign",
            downloadButton: "Ladda ner för plattform",
            inBrowserEditor: "Redigerare i webbläsaren",
            header1Sub: "Blixtsnabbt CAD-program. Gratis, men ändå enkelt och minimalistiskt",
            paragraph1Sub: "Byggd från hjärtat av fattiga utvecklare som inte har råd med en bra dator och ett CAD-program, skapat för att du ska kunna njuta av det.",
            littleNote1: "*Endast tillgängligt för Windows och Linux.",
            header2Sub: "Ingen skrivbordsversion eller fungerar det inte? Vi har alltid webbversionen!",
            littleNote2: "*Bilder kan se annorlunda ut än den faktiska programvaran",
            header3Sub: "Älskar du Indonesien? CompassCAD är 100 % tillverkat i Indonesien!",
            paragraph3Sub: "Du stöder inte bara utvecklarna direkt, du stöder även Indonesien, utan att inse det!",
            littleNote3: "*Bilder från CompassCAD representerar inte slutprodukten. Bangga Buatan Indonesia är ett varumärke som tillhör Republiken Indonesiens ministerium för turism och kreativ ekonomi (Kemenparekraf)"
        },
        editor: {
            home: {
                quickActions: "Snabba åtgärder",
                createNew: "Skapa ny",
                importExisting: "Importera befintlig",
                clearEntireHistory: "Rensa hela historiken",
                askBlueprint: "Fråga Blueprint",
                recents: "Senaste",
                blueprintIntro: "Hej där! Jag är Blueprint!",
                blueprintDesc: "Jag kan hjälpa dig att skapa designer baserat på dina frågor. Fråga mig bara vad som helst!",
                blueprintSuggestions: "Eller prova dessa förslag:",
                bpGenerated: "Blueprint-genererad design",
                suggestions: {
                    one: {
                        shorthand: "🏠 Ett hus med 2 våningar",
                        prompt: "Skapa ett hus med 2 våningar"
                    },
                    two: {
                        shorthand: "🚗 En enkel bildesign",
                        prompt: "Skapa en enkel bildesign, inklusive allt som bilchassi och hjul"
                    },
                    three: {
                        shorthand: "🏢 En planlösning för en byggnad",
                        prompt: "Skapa en planlösning för en byggnad, inklusive rum och möbler"
                    },
                    four: {
                        shorthand: "🛠️ En planlösning för en verkstad",
                        prompt: "Skapa en planlösning för en verkstad, inklusive arbetsbänkar och verktyg"
                    },
                    five: {
                        shorthand: "🏰 Ett slott med vallgrav",
                        prompt: "Skapa ett slott med vallgrav, inklusive torn och väggar"
                    }
                },
                blueprintPlaceholder: "Fråga eller skapa med Blueprint AI",
                blueprintWarning: "AI-genererat innehåll kan vara felaktigt eller oprecist. Drivs av Google AI:s Gemini",
                clearHistoryModal: "Rensa historik",
                text1Sure: "Är du säker på att du vill rensa hela historiken? ",
                boldTextWarning: "Denna åtgärd kan inte ångras.",
                viewInEditor: "Visa/redigera denna design i redigeraren",
                nothingInHistory: "Du har inget i din historiklista idag. Gör några ritningar så visas din historik här.",
                randomMesg: {
                    morning: {
                        one: "Hallå där? Har du tagit en kopp kaffe? ☕",
                        two: "God morgon! Redo att börja dagen? 🌄",
                        three: "Morgon! Låt oss se vad du hittar på! 🤩"
                    },
                    noon: {
                        one: "Börjar du något vid den här tiden? 🧐",
                        two: "Lunchdags! Sugen på något och jobba här! 😋",
                        three: "Jag hoppas du inte sover! 😴"
                    },
                    afternoon: {
                        one: "Är du fortfarande uppe? Låt oss designa! 🗺️",
                        two: "Låt kreativiteten flöda! ✏️",
                        three: "Perfekt tid för CAD-arbete! 📐"
                    },
                    evening: {
                        one: "Jobbar du fortfarande på kvällarna? 🧐",
                        two: "Har du något i sista minuten? ⌚",
                        three: "Ändå är du fortfarande stark. Fortsätt så 💪"
                    },
                    night: {
                        one: "Ska du inte sova? 🛌",
                        two: "Brainstormade du av misstag nu? 😵‍💫",
                        three: "Ändå tar ditt koffein aldrig slut. ☕"
                    },
                    dawn: {
                        one: "Jag ska sova, vänta, strunt samma. 😴",
                        two: "Så sent och har du några idéer? 😮‍💨",
                        three: "Hoppas du inte skjuter upp saker! 🥲"
                    }
                }
            },
            main: {
                loading: {
                    heading: "Laddar CompassCAD...",
                    subHeading: "Vänta bara, du är klar om en sekund."
                },
                betaWarning: "Hej! Bara ett tips om att den här redigeraren fortfarande är i beta, så förvänta dig trasiga knappar och ett icke-fungerande användargränssnitt.",
                newDesign: "Ny Design",
                openDesign: "Öppna Design",
                menu: "Meny",
                standaloneTip: "TIPP: Du letar efter en metod att spara .ccad-filer? Gå till Dela/Exportera > Exportera som .ccad",
                header: {
                    goBackHome: "Gå tillbaka hem",
                    undo: "Ångra",
                    redo: "Upprepa",
                    share: "Dela/Exportera",
                    feedback: "Skicka Feedback",
                    record: "Spela in Video",
                    recordPopup: {
                        startRecording: "Starta Inspelningen",
                        stopRecording: "Stoppa Inspelningen",
                        micOff: "Slå på mikrofonen",
                        micOn: "Slå av mikrofonen"
                    },
                    shareModal: {
                        heading: "Dela/Exportera Design",
                        copyLink: "Kopiera Link",
                        exportAsSvg: "Exportera som SVG",
                        exportAsCcad: "Exportera som CCAD",
                        embedToSite: "Bädda på webbplats",
                        preview: "Förhands",
                        previewDifferent: "Förhandsgranskningen kan se utdragen ut än vanligt",
                        settings: "Inställningar",
                        padding: "Stoppning",
                        monochrome: "Svartvit",
                        font: "Font",
                        export: "Exportera",
                        nothingOnPreview: "Du har inget i förhandsgranskningen just nu!"
                    }
                },
                essential: {
                    select: "Välja",
                    navigate: "Navigera",
                    move: "Flytta",
                    delete: "Raderra",
                    addPoint: "Lägg till Punkt",
                    addLine: "Lägg till Linje",
                    addRectangle: "Lägg till Rektangel",
                    addBoundbox: "Lägg till avgränsningsruta",
                    addCircle: "Lägg till Cirkel",
                    addArc: "Lägg till Båge",
                    addMeasure: "Mät",
                    addLabel: "Lägg till Text",
                    addImage: "Lägg till Bild",
                    addPolygon: "Lägg till Polygon",
                },
                inspector: {
                    header: "Inspektör",
                    collapseToRight: "Kollapsa åt höger",
                    expand: "Expandera",
                    nothing: "Välj en komponent så ska dina komponentdetaljer visas här.",
                    properties: "Egenskaper",
                    hierarchy: "Hierarki",
                    searchInHiearchy: "Sök i Hierarki",
                    general: {
                        active: "Aktiv",
                        radius: "Radius",
                        color: "Färg",
                        opacity: "Opacitet",
                        name: "Namn",
                        position: "Position",
                        size: "Storlek",
                        coverage: "Båge Täckning",
                    },
                    text: {
                        heading: "Text Egenskaper",
                        text: "Text",
                        fontSize: "Fontstorlek",
                    },
                    picture: {
                        heading: "Bild Egenskaper",
                        src: "Källa",
                    },
                    polygon: {
                        heading: "Polygon Egenskaper",
                        fillColor: "Fyllningsfärg",
                        strokeColor: "Streckfärg",
                        enableStroke: "Aktivera Streck",
                    }
                }
            }
        }
    }
}