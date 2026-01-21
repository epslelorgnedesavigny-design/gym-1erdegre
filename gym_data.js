const gymData = [
    // ==========================================
    // BARRES
    // ==========================================
    {
        id: "barres_appui_simple",
        agre: "BARRES", action: "SE MAINTENIR", nom: "APPUI SIMPLE", difficulte: "⭐",
        media: { face: "BARRES - SE MAINTENIR - APPUI SIMPLE - FACE.webp" }
    },
    {
        id: "barres_suspension",
        agre: "BARRES", action: "SE MAINTENIR", nom: "SUSPENSION SIMPLE", difficulte: "⭐",
        media: { face: "BARRES - SE MAINTENIR - SUSPENSION SIMPLE - FACE.webp" }
    },

    // ==========================================
    // POUTRE - DÉPLACEMENTS
    // ==========================================
    {
        id: "poutre_4_pattes",
        agre: "POUTRE", action: "SE DEPLACER", nom: "A 4 PATTES", difficulte: "⭐",
        media: { face: "POUTRE - SE DEPLACER - A 4 PATTES - FACE.webp", profil: "POUTRE - SE DEPLACER - A 4 PATTES - PROFIL.webp" }
    },
    {
        id: "poutre_araignee",
        agre: "POUTRE", action: "SE DEPLACER", nom: "EN ARAIGNEE", difficulte: "⭐",
        media: { face: "POUTRE - SE DEPLACER - EN ARRAIGNEE - FACE.webp", profil: "POUTRE - SE DEPLACER - EN ARRAIGNEE - PROFIL.webp" }
    },
    {
        id: "poutre_chenille",
        agre: "POUTRE", action: "SE DEPLACER", nom: "EN CHENILLE", difficulte: "⭐⭐",
        media: { face: "POUTRE - SE DEPLACER - EN CHENILLE - FACE.webp", profil: "POUTRE - SE DEPLACER - EN CHENILLE - PROFIL.webp" }
    },
    {
        id: "poutre_girafe",
        agre: "POUTRE", action: "SE DEPLACER", nom: "EN GIRAFE", difficulte: "⭐",
        media: { face: "POUTRE - SE DEPLACER - EN GIRAFE - FACE.webp", profil: "POUTRE - SE DEPLACER - EN GIRAFE - PROFIL.webp" }
    },
    {
        id: "poutre_kangourou",
        agre: "POUTRE", action: "SE DEPLACER", nom: "EN KANGOUROU", difficulte: "⭐",
        media: { face: "POUTRE - SE DEPLACER - EN KANGOUROU - FACE.webp", profil: "POUTRE - SE DEPLACER - EN KANGOUROU - PROFIL.webp" }
    },
    {
        id: "poutre_lapin",
        agre: "POUTRE", action: "SE DEPLACER", nom: "EN LAPIN", difficulte: "⭐",
        media: { face: "POUTRE - SE DEPLACER - EN LAPIN - FACE.webp", profil: "POUTRE - SE DEPLACER - EN LAPIN - PROFIL.webp" }
    },
    {
        id: "poutre_marchant",
        agre: "POUTRE", action: "SE DEPLACER", nom: "EN MARCHANT", difficulte: "⭐",
        media: { face: "POUTRE - SE DEPLACER - EN MARCHANT - FACE.webp", profil: "POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp" }
    },
    {
        id: "poutre_reculant",
        agre: "POUTRE", action: "SE DEPLACER", nom: "EN RECULANT", difficulte: "⭐⭐",
        media: { face: "POUTRE - SE DEPLACER - EN RECULANT - FACE.webp", profil: "POUTRE - SE DEPLACER - EN RECULANT - PROFIL.webp" }
    },
    {
        id: "poutre_saut_dessus",
        agre: "POUTRE", action: "SAUTER", nom: "SAUT AU DESSUS DE LA POUTRE", difficulte: "⭐⭐",
        media: { profil: "POUTRE - SAUTER - SAUT AU DESSUS DE LA POUTRE - PROFIL.webp" }
    },

    // ==========================================
    // SOL - ROULER
    // ==========================================
    {
        id: "sol_culbuto",
        agre: "SOL", action: "ROULER", nom: "CULBUTO", difficulte: "⭐",
        media: { face: "SOL - ROULER - CULBUTO - FACE.webp", profil: "SOL - ROULER - CULBUTO - PROFIL.webp" },
        erreurs: [
            { titre: "Bascule incomplète", indicateur: "Pas de retour", correction: "Prendre de l'élan avec les pieds", media: { face: "SOL - ROULER - CULBUTO - FACE - ERREUR - CULBUTO INCOMPLET (PAS DE RETOUR).webp" }}
        ]
    },
    {
        id: "sol_roulade_avant",
        agre: "SOL", action: "ROULER", nom: "ROULADE AVANT", difficulte: "⭐⭐",
        media: { face: "SOL - ROULER - ROULADE AVANT - FACE.webp", profil: "SOL - ROULER - ROULADE AVANT - PROFIL.webp" },
        etapes: [
            { nom: "Départ sur bloc", media: { face: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 1 - ROULADE AVANT DEPART SUR BLOC.webp" }},
            { nom: "Arrivée assis (pente)", media: { face: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp" }},
            { nom: "Arrivée debout (pente)", media: { face: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 3 - ROULADE AVANT SUR PENTE ARRIVEE DEBOUT.webp" }}
        ],
        erreurs: [
            { titre: "Désaxée", indicateur: "Chute sur le côté", correction: "Mains bien à plat et symétriques", media: { face: "SOL - ROULER - ROULADE AVANT - FACE - ERREUR - ROULADE AVANT DESAXEE.webp" }}
        ]
    },
    {
        id: "sol_roulade_arriere",
        agre: "SOL", action: "ROULER", nom: "ROULADE ARRIERE", difficulte: "⭐⭐⭐",
        media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE.webp", profil: "SOL - ROULER - ROULADE ARRIERE - PROFIL.webp" },
        etapes: [
            { nom: "Sur pente (genoux)", media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE - ETAPE - 2 - ROULADE ARRIERE SUR PENTE ARRIVEE GENOUX.webp" }},
            { nom: "Sur pente (enroulement)", media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE - ETAPE - 3 - ROULADE ARRIERE SUR PENTE.webp" }},
            { nom: "Au sol (genoux)", media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE - ETAPE - 4 - ROULADE ARRIERE AU SOL ARRIVEE GENOUX.webp" }}
        ],
        erreurs: [
            { titre: "Désaxée", indicateur: "Trajectoire déviée", correction: "Pousser avec les deux mains", media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE - ERREUR - ROULADE ARRIERE DESAXEE.webp" }},
            { titre: "Tête relevée", indicateur: "Manque d'enroulement", correction: "Menton collé à la poitrine", media: { profil: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ERREUR - TETE RELEVEE MANQUE D ENROULEMENT.webp" }}
        ]
    },
    {
        id: "sol_rouleaux",
        agre: "SOL", action: "ROULER", nom: "ROULEAUX", difficulte: "⭐",
        media: { face: "SOL - ROULER - ROULEAUX - FACE.webp", profil: "SOL - ROULER - ROULEAUX - PROFIL.webp" }
    },

    // ==========================================
    // SOL - SAUTER
    // ==========================================
    {
        id: "sol_saut_chat",
        agre: "SOL", action: "SAUTER", nom: "SAUT DE CHAT", difficulte: "⭐⭐",
        media: { face: "SOL - SAUTER - SAUT DE CHAT - FACE.webp", profil: "SOL - SAUTER - SAUT DE CHAT - PROFIL.webp" }
    },
    {
        id: "sol_saut_demi_tour",
        agre: "SOL", action: "SAUTER", nom: "SAUT DEMI-TOUR", difficulte: "⭐⭐",
        media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL.webp" },
        etapes: [
            { nom: "Extension", media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ETAPE - 1 - SAUT EXTENTION.webp" }},
            { nom: "Quart de tour", media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ETAPE - 2 - SAUT QUART DE TOUR.webp" }}
        ],
        erreurs: [
            { titre: "Réception instable", indicateur: "Déséquilibre", correction: "Fixer un point devant soi", media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ERREUR - DESEQUILIBRE A LA RECEPTION.webp" }}
        ]
    },
    {
        id: "sol_saut_extension",
        agre: "SOL", action: "SAUTER", nom: "SAUT EXTENSION", difficulte: "⭐",
        media: { face: "SOL - SAUTER - SAUT EXTENSION - FACE.webp", profil: "SOL - SAUTER - SAUT EXTENSION - PROFIL.webp" }
    },
    {
        id: "sol_saut_extension_bas",
        agre: "SOL", action: "SAUTER", nom: "EXTENSION CONTRE BAS", difficulte: "⭐",
        media: { face: "SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - FACE.webp", profil: "SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp" }
    },
    {
        id: "sol_saut_groupe",
        agre: "SOL", action: "SAUTER", nom: "SAUT GROUPE", difficulte: "⭐⭐",
        media: { face: "SOL - SAUTER - SAUT GROUPE - FACE.webp" },
        etapes: [
            { nom: "Groupe au sol", media: { face: "SOL - SAUTER - SAUT GROUPE - FACE - ETAPE - 1 - GROUPE AU SOL.webp" }},
            { nom: "Saut extension", media: { face: "SOL - SAUTER - SAUT GROUPE - FACE - ETAPE - 2 - SAUT EXTENTION.webp" }}
        ]
    },
    {
        id: "sol_saut_lapin_haut",
        agre: "SOL", action: "SAUTER", nom: "LAPIN EN CONTRE HAUT", difficulte: "⭐",
        media: { face: "SOL - SAUTER - SAUT DE LAPIN EN CONTRE HAUT - FACE.webp", profil: "SOL - SAUTER - SAUT DE LAPIN EN CONTRE HAUT - PROFIL.webp" }
    },
    {
        id: "sol_sauts_cerceaux",
        agre: "SOL", action: "SAUTER", nom: "PIEDS JOINTS CERCEAUX", difficulte: "⭐",
        media: { face: "SOL - SAUTER - SAUTS PIEDS JOINTS DANS CERCEAUX - FACE.webp", profil: "SOL - SAUTER - SAUTS PIEDS JOINTS DANS CERCEAUX - PROFIL.webp" }
    },

    // ==========================================
    // SOL - SE DÉPLACER
    // ==========================================
    { id: "sol_dep_araignee", agre: "SOL", action: "SE DEPLACER", nom: "EN ARAIGNEE", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - SE DEPLACER EN ARAIGNEE - FACE.webp", profil: "SOL - SE DEPLACER - SE DEPLACER EN ARAIGNEE - PROFIL.webp" } },
    { id: "sol_dep_chat", agre: "SOL", action: "SE DEPLACER", nom: "EN CHAT", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - SE DEPLACER EN CHAT - FACE.webp", profil: "SOL - SE DEPLACER - SE DEPLACER EN CHAT - PROFIL.webp" } },
    { id: "sol_dep_chenille", agre: "SOL", action: "SE DEPLACER", nom: "EN CHENILLE", difficulte: "⭐⭐", media: { face: "SOL - SE DEPLACER - SE DEPLACER EN CHENILLE - FACE.webp", profil: "SOL - SE DEPLACER - SE DEPLACER EN CHENILLE - PROFIL.webp" } },
    { id: "sol_dep_elephant", agre: "SOL", action: "SE DEPLACER", nom: "EN ELEPHANT", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - SE DEPLACER EN ELEPHANT - FACE.webp", profil: "SOL - SE DEPLACER - SE DEPLACER EN ELEPHANT - PROFIL.webp" } },
    { id: "sol_dep_girafe", agre: "SOL", action: "SE DEPLACER", nom: "EN GIRAFE", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - SE DEPLACER EN GIRAFE - FACE.webp", profil: "SOL - SE DEPLACER - SE DEPLACER EN GIRAFE - PROFIL.webp" } },
    { id: "sol_dep_kangourou", agre: "SOL", action: "SE DEPLACER", nom: "EN KANGOUROU", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - SE DEPLACER EN KANGOUROU - FACE.webp", profil: "SOL - SE DEPLACER - SE DEPLACER EN KANGOUROU - PROFIL.webp" } },
    { id: "sol_dep_lapin", agre: "SOL", action: "SE DEPLACER", nom: "EN LAPIN", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - SE DEPLACER EN LAPIN - FACE.webp", profil: "SOL - SE DEPLACER - SE DEPLACER EN LAPIN - PROFIL.webp" } },
    { id: "sol_dep_phoque", agre: "SOL", action: "SE DEPLACER", nom: "EN PHOQUE", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - SE DEPLACER EN PHOQUE - FACE.webp", profil: "SOL - SE DEPLACER - SE DEPLACER EN PHOQUE - PROFIL.webp" } },

    // ==========================================
    // SOL - SE MAINTENIR
    // ==========================================
    {
        id: "sol_attitude_1pied",
        agre: "SOL", action: "SE MAINTENIR", nom: "EQUILIBRE 1 PIED", difficulte: "⭐",
        media: { face: "SOL - SE MAINTENIR - ATTITUDE EQUILIBRE 1 PIED - FACE.webp", profil: "SOL - SE MAINTENIR - ATTITUDE EQUILIBRE 1 PIED - PROFIL.webp" }
    },
    {
        id: "sol_chandelle",
        agre: "SOL", action: "SE MAINTENIR", nom: "CHANDELLE", difficulte: "⭐⭐",
        media: { profil: "SOL - SE MAINTENIR - CHANDELLE - PROFIL.webp" },
        etapes: [
            { nom: "Équilibre haut du dos", media: { profil: "SOL - SE MAINTENIR - CHANDELLE - PROFIL - ETAPE - 1.webp" }},
            { nom: "Dos vertical aidé", media: { profil: "SOL - SE MAINTENIR - CHANDELLE - PROFIL - ETAPE - 2.webp" }},
            { nom: "Chandelle complète", media: { profil: "SOL - SE MAINTENIR - CHANDELLE - PROFIL - ETAPE - 3.webp" }}
        ]
    },
    {
        id: "sol_cuilliere",
        agre: "SOL", action: "SE MAINTENIR", nom: "CUILLIERE", difficulte: "⭐⭐",
        media: { face: "SOL - SE MAINTENIR - CUILLIERE - FACE.webp", profil: "SOL - SE MAINTENIR - CUILLIERE - PROFIL.webp" }
    },
    {
        id: "sol_equilibre_fessier",
        agre: "SOL", action: "SE MAINTENIR", nom: "EQUILIBRE FESSIER", difficulte: "⭐",
        media: { face: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - FACE.webp", profil: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - PROFIL.webp" },
        etapes: [
            { nom: "Appui mains/pieds", media: { face: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - FACE - ETAPE - 1.webp" }},
            { nom: "Jambes tendues appui mains", media: { face: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - FACE - ETAPE - 2.webp" }},
            { nom: "Équilibre fessier", media: { face: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - FACE - ETAPE - 3.webp" }}
        ]
    },
    {
        id: "sol_planche",
        agre: "SOL", action: "SE MAINTENIR", nom: "PLANCHE", difficulte: "⭐⭐",
        media: { profil: "SOL - SE MAINTENIR - PLANCHE - PROFIL.webp" },
        etapes: [
            { nom: "Équilibre 1 pied", media: { profil: "SOL - SE MAINTENIR - PLANCHE - PROFIL - ETAPE - 1.webp" }},
            { nom: "Planche oblique", media: { profil: "SOL - SE MAINTENIR - PLANCHE - PROFIL - ETAPE - 2.webp" }},
            { nom: "Planche complète", media: { profil: "SOL - SE MAINTENIR - PLANCHE - PROFIL - ETAPE - 3.webp" }}
        ]
    },
    { id: "sol_pont", agre: "SOL", action: "SE MAINTENIR", nom: "PONT", difficulte: "⭐⭐", media: { face: "SOL - SE MAINTENIR - PONT - FACE.webp", profil: "SOL - SE MAINTENIR - PONT - PROFIL.webp" } },

    // ==========================================
    // SOL - SE RENVERSER
    // ==========================================
    {
        id: "sol_atr",
        agre: "SOL", action: "SE RENVERSER", nom: "ATR", difficulte: "⭐⭐⭐⭐",
        media: { face: "SOL - SE RENVERSER - ATR - FACE.webp", profil: "SOL - SE RENVERSER - ATR - PROFIL.webp" },
        etapes: [
            { nom: "Départ sol avec bloc", media: { face: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 2 - ATR DEPART AU SOL AVEC BLOC.webp" }},
            { nom: "1 jambe départ au sol", media: { face: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 3 - ATR 1 JAMBE DEPART AU SOL.webp" }},
            { nom: "ATR complet", media: { face: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 4 - ATR 1 JAMBE.webp" }}
        ],
        erreurs: [
            { titre: "Corps en banane", indicateur: "Dos cambré", correction: "Serrer ventre et fessiers", media: { face: "SOL - SE RENVERSER - ATR - FACE - ERREUR - CORPS EN BANANE.webp" }}
        ]
    },
    {
        id: "sol_roue",
        agre: "SOL", action: "SE RENVERSER", nom: "ROUE", difficulte: "⭐⭐⭐",
        media: { face: "SOL - SE RENVERSER - ROUE - FACE.webp", profil: "SOL - SE RENVERSER - ROUE - PROFIL.webp" },
        etapes: [
            { nom: "Mains décalées", media: { face: "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 2.webp" }},
            { nom: "Lancer vertical", media: { face: "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 3.webp" }}
        ]
    }
];