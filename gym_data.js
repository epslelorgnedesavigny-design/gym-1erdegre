const gymData = [
    // =========================================================================
    // AGRÈS : SOL
    // =========================================================================
    
    // --- ACTION : ROULER ---
    {
        id: "sol_culbuto", agre: "SOL", action: "ROULER", nom: "CULBUTO", difficulte: "⭐",
        media: { face: "SOL - ROULER - CULBUTO - FACE.webp", profil: "SOL - ROULER - CULBUTO - PROFIL.webp" },
        criteres_realisation: ["Dos bien rond", "Menton collé à la poitrine", "Attraper fermement les genoux"],
        criteres_reussite: ["Revenir en position assise", "Ne pas lâcher les jambes", "Absence de choc sur la colonne"],
        erreurs: [{ titre: "Pas de retour", indicateur: "Reste bloqué sur le dos", correction: "Prendre plus d'élan et grouper fort dès le départ", media: { face: "SOL - ROULER - CULBUTO - FACE - ERREUR - CULBUTO INCOMPLET (PAS DE RETOUR).webp" }}]
    },
    {
        id: "sol_roulade_av", agre: "SOL", action: "ROULER", nom: "ROULADE AVANT", difficulte: "⭐⭐",
        media: { face: "SOL - ROULER - ROULADE AVANT - FACE.webp", profil: "SOL - ROULER - ROULADE AVANT - PROFIL.webp" },
        criteres_realisation: ["Mains à plat largeur épaules", "Regard vers le nombril", "Pousser sur les jambes"],
        criteres_reussite: ["Se relever sans l'aide des mains", "Rester dans l'axe du tapis", "Finir debout"],
        etapes: [
            { nom: "Départ sur bloc", media: { face: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 1 - ROULADE AVANT DEPART SUR BLOC.webp", profil: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 1 - ROULADE AVANT DEPART SUR BLOC.webp" }},
            { nom: "Sur pente (arr. assis)", media: { face: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp", profil: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp" }},
            { nom: "Sur pente (arr. debout)", media: { face: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 3 - ROULADE AVANT SUR PENTE ARRIVEE DEBOUT.webp", profil: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 3 - ROULADE AVANT SUR PENTE ARRIVEE DEBOUT.webp" }}
        ],
        erreurs: [
            { titre: "Désaxée", indicateur: "Roule sur le côté", correction: "Pousser de manière symétrique avec les deux mains", media: { face: "SOL - ROULER - ROULADE AVANT - FACE - ERREUR - ROULADE AVANT DESAXEE.webp", profil: "SOL - ROULER - ROULADE AVANT - PROFIL - ERREUR - ROULADE AVANT DESAXEE.webp" }}
        ]
    },
    {
        id: "sol_roulade_ar", agre: "SOL", action: "ROULER", nom: "ROULADE ARRIERE", difficulte: "⭐⭐⭐",
        media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE.webp", profil: "SOL - ROULER - ROULADE ARRIERE - PROFIL.webp" },
        criteres_realisation: ["Mains aux oreilles, paumes vers le plafond", "Pousser fort sur les bras", "Grouper les genoux à la poitrine"],
        criteres_reussite: ["Passer par dessus la tête sans basculer sur le côté", "Arriver sur les pieds", "Rester groupé"],
        etapes: [
            { nom: "Sur pente (arr. genoux)", media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE - ETAPE - 2 - ROULADE ARRIERE SUR PENTE ARRIVEE GENOUX.webp", profil: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ETAPE - 2 - ROULADE ARRIERE SUR PENTE ARRIVEE GENOUX.webp" }},
            { nom: "Sur pente (simple)", media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE - ETAPE - 3 - ROULADE ARRIERE SUR PENTE.webp" }}, 
            { nom: "Au sol (arr. genoux)", media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE - ETAPE - 4 - ROULADE ARRIERE AU SOL ARRIVEE GENOUX.webp", profil: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ETAPE - 4 - ROULADE ARRIERE AU SOL ARRIVEE GENOUX.webp" }}
        ],
        erreurs: [
            { titre: "Désaxée", indicateur: "Part de travers", correction: "Placer les mains symétriquement et pousser ensemble", media: { face: "SOL - ROULER - ROULADE ARRIERE - FACE - ERREUR - ROULADE ARRIERE DESAXEE.webp", profil: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ERREUR - ROULADE ARRIERE DESAXEE.webp" }},
            { titre: "Tête relevée", indicateur: "Blocage de la nuque", correction: "Bien coller le menton pour protéger les cervicales", media: { profil: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ERREUR - TETE RELEVEE MANQUE D ENROULEMENT.webp" }}
        ]
    },
    {
        id: "sol_rouleaux", agre: "SOL", action: "ROULER", nom: "ROULEAUX", difficulte: "⭐",
        media: { face: "SOL - ROULER - ROULEAUX - FACE.webp", profil: "SOL - ROULER - ROULEAUX - PROFIL.webp" },
        criteres_realisation: ["Corps parfaitement gainé et tendu", "Bras aux oreilles", "Pointes tendues"],
        criteres_reussite: ["Rouler sans dévier de la ligne droite", "Ne pas plier les jambes ou les bras"]
    },

    // --- ACTION : SAUTER ---
    {
        id: "sol_saut_chat", agre: "SOL", action: "SAUTER", nom: "SAUT DE CHAT", difficulte: "⭐⭐",
        media: { face: "SOL - SAUTER - SAUT DE CHAT - FACE.webp", profil: "SOL - SAUTER - SAUT DE CHAT - PROFIL.webp" },
        criteres_realisation: ["Appui mains bref et tonique", "Montée rapide des genoux", "Pousser vers le haut"],
        criteres_reussite: ["Passage des pieds entre les mains", "Réception stable sans bouger les pieds"]
    },
    {
        id: "sol_saut_lapin_haut", agre: "SOL", action: "SAUTER", nom: "SAUT DE LAPIN (HAUT)", difficulte: "⭐",
        media: { face: "SOL - SAUTER - SAUT DE LAPIN EN CONTRE HAUT - FACE.webp", profil: "SOL - SAUTER - SAUT DE LAPIN EN CONTRE HAUT - PROFIL.webp" },
        criteres_realisation: ["Poser les mains loin devant", "Impulsion simultanée des deux pieds"],
        criteres_reussite: ["Monter les fesses au-dessus des épaules", "Réception équilibrée sur le bloc"]
    },
    {
        id: "sol_saut_demi", agre: "SOL", action: "SAUTER", nom: "SAUT DEMI TOUR", difficulte: "⭐⭐",
        media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL.webp" },
        criteres_realisation: ["Impulsion verticale explosive", "Rotation du corps gainé autour de l'axe"],
        criteres_reussite: ["Rotation exacte de 180°", "Réception équilibrée sans sursaut"],
        etapes: [
            { nom: "Saut extension", media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ETAPE - 1 - SAUT EXTENSION.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL - ETAPE - 1 - SAUT EXTENSION.webp" }},
            { nom: "Quart de tour", media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ETAPE - 2 - SAUT QUART DE TOUR.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL - ETAPE - 2 - SAUT QUART DE TOUR.webp" }}
        ],
        erreurs: [
            { titre: "Déséquilibre", indicateur: "Chute à la réception", correction: "Fixer un point du regard à l'arrivée", media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ERREUR - DESEQUILIBRE A LA RECEPTION.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL - ERREUR - DESEQUILIBRE A LA RECEPTION.webp" }}
        ]
    },
    {
        id: "sol_saut_extension", agre: "SOL", action: "SAUTER", nom: "SAUT EXTENSION", difficulte: "⭐",
        media: { face: "SOL - SAUTER - SAUT EXTENSION - FACE.webp", profil: "SOL - SAUTER - SAUT EXTENSION - PROFIL.webp" },
        criteres_realisation: ["Pousser fort sur les jambes", "Grandir le corps au maximum"],
        criteres_reussite: ["Corps aligné et tendu en l'air", "Bras aux oreilles lors du vol"]
    },
    {
        id: "sol_saut_extension_bas", agre: "SOL", action: "SAUTER", nom: "EXTENSION CONTRE BAS", difficulte: "⭐",
        media: { face: "SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - FACE.webp", profil: "SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp" },
        criteres_realisation: ["Regarder devant soi", "Engager les bras vers le haut"],
        criteres_reussite: ["Amortir la réception (flexion jambes)", "Rester immobile 2 secondes à l'arrivée"]
    },
    {
        id: "sol_saut_groupe", agre: "SOL", action: "SAUTER", nom: "SAUT GROUPE", difficulte: "⭐⭐",
        media: { face: "SOL - SAUTER - SAUT GROUPE - FACE.webp", profil: "SOL - SAUTER - SAUT GROUPE - PROFIL.webp" },
        criteres_realisation: ["Monter les genoux à la poitrine", "Garder le dos droit (ne pas se pencher)"],
        criteres_reussite: ["Genoux au-dessus de la taille en l'air", "Redéplier les jambes pour la réception"],
        etapes: [
            { nom: "Groupé au sol", media: { face: "SOL - SAUTER - SAUT GROUPE - FACE - ETAPE - 1 - GROUPE AU SOL.webp", profil: "SOL - SAUTER - SAUT GROUPE - PROFIL - ETAPE - 1 - GROUPE AU SOL.webp" }},
            { nom: "Saut extension", media: { face: "SOL - SAUTER - SAUT GROUPE - FACE - ETAPE - 2 - SAUT EXTENSION.webp", profil: "SOL - SAUTER - SAUT GROUPE - PROFIL - ETAPE - 2 - SAUT EXTENSION.webp" }}
        ]
    },
    {
        id: "sol_saut_cerceaux", agre: "SOL", action: "SAUTER", nom: "SAUTS DANS CERCEAUX", difficulte: "⭐",
        media: { face: "SOL - SAUTER - SAUTS PIEDS JOINTS DANS CERCEAUX - FACE.webp", profil: "SOL - SAUTER - SAUTS PIEDS JOINTS DANS CERCEAUX - PROFIL.webp" },
        criteres_realisation: ["Pieds joints", "Utiliser les bras pour s'équilibrer"],
        criteres_reussite: ["Atterrir précisément dans chaque cerceau", "Rebond dynamique (ne pas s'arrêter)"]
    },

    // --- ACTION : SE DEPLACER ---
    { id: "sol_araignee", agre: "SOL", action: "SE DEPLACER", nom: "EN ARAIGNEE", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - EN ARAIGNEE - FACE.webp", profil: "SOL - SE DEPLACER - EN ARAIGNEE - PROFIL.webp" }, criteres_realisation: ["Ventre vers le plafond", "Bassin maintenu haut"], criteres_reussite: ["Avancer sans poser les fesses", "Vitesse régulière"] },
    { id: "sol_chat", agre: "SOL", action: "SE DEPLACER", nom: "EN CHAT", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - EN CHAT - FACE.webp", profil: "SOL - SE DEPLACER - EN CHAT - PROFIL.webp" }, criteres_realisation: ["Quadrupédie souple", "Pas de bruit lors des appuis"], criteres_reussite: ["Dos plat pendant tout le trajet", "Mouvement fluide"] },
    { id: "sol_chenille", agre: "SOL", action: "SE DEPLACER", nom: "EN CHENILLE", difficulte: "⭐⭐", media: { face: "SOL - SE DEPLACER - EN CHENILLE - FACE.webp", profil: "SOL - SE DEPLACER - EN CHENILLE - PROFIL.webp" }, criteres_realisation: ["Avancer les mains au maximum", "Garder les jambes tendues"], criteres_reussite: ["Décomposition mains-puis-pieds respectée", "Bassin monte haut"] },
    { id: "sol_elephant", agre: "SOL", action: "SE DEPLACER", nom: "EN ELEPHANT", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - EN ELEPHANT - FACE.webp", profil: "SOL - SE DEPLACER - EN ELEPHANT - PROFIL.webp" }, criteres_realisation: ["Jambes et bras tendus", "Pas lourds et assurés"], criteres_reussite: ["Garder les fesses hautes", "Appuis solides"] },
    { id: "sol_girafe", agre: "SOL", action: "SE DEPLACER", nom: "EN GIRAFE", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - EN GIRAFE - FACE.webp", profil: "SOL - SE DEPLACER - EN GIRAFE - PROFIL.webp" }, criteres_realisation: ["Sur la pointe des pieds uniquement", "Bras tendus vers le ciel"], criteres_reussite: ["Ne jamais poser les talons", "Corps le plus grand possible"] },
    { id: "sol_kangourou", agre: "SOL", action: "SE DEPLACER", nom: "EN KANGOUROU", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - EN KANGOUROU - FACE.webp", profil: "SOL - SE DEPLACER - EN KANGOUROU - PROFIL.webp" }, criteres_realisation: ["Sauts pieds joints", "Mains contre la poitrine"], criteres_reussite: ["Sauts réguliers et rythmés", "Réception sur l'avant du pied"] },
    { id: "sol_lapin", agre: "SOL", action: "SE DEPLACER", nom: "EN LAPIN", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - EN LAPIN - FACE.webp", profil: "SOL - SE DEPLACER - EN LAPIN - PROFIL.webp" }, criteres_realisation: ["Mains posées loin devant", "Pieds qui rattrapent les mains"], criteres_reussite: ["Les pieds dépassent les mains à chaque saut", "Impulsion dynamique"] },
    { id: "sol_phoque", agre: "SOL", action: "SE DEPLACER", nom: "EN PHOQUE", difficulte: "⭐", media: { face: "SOL - SE DEPLACER - EN PHOQUE - FACE.webp", profil: "SOL - SE DEPLACER - EN PHOQUE - PROFIL.webp" }, criteres_realisation: ["Tirer uniquement avec les bras", "Jambes relâchées"], criteres_reussite: ["Le bassin reste au sol", "Avancer de manière continue"] },

    // --- ACTION : SE MAINTENIR ---
    {
        id: "sol_chandelle", agre: "SOL", action: "SE MAINTENIR", nom: "CHANDELLE", difficulte: "⭐⭐",
        media: { face: "SOL - SE MAINTENIR - CHANDELLE - FACE.webp", profil: "SOL - SE MAINTENIR - CHANDELLE - PROFIL.webp" },
        criteres_realisation: ["Alignement épaules-bassin-pieds", "Serrer les fessiers"],
        criteres_reussite: ["Tenir la position immobile 3 secondes", "Pointes de pieds vers le plafond"],
        etapes: [{ nom: "Dos/Jambes pliées", media: { face: "SOL - SE MAINTENIR - CHANDELLE - FACE - ETAPE - 1 - SE METTRE SUR LE DOS ET JAMBES PLIEES.webp", profil: "SOL - SE MAINTENIR - CHANDELLE - PROFIL - ETAPE - 1 - SE METTRE SUR LE DOS ET JAMBES PLIEES.webp" }}]
    },
    { id: "sol_cuillere", agre: "SOL", action: "SE MAINTENIR", nom: "CUILLERE", difficulte: "⭐⭐", media: { face: "SOL - SE MAINTENIR - CUILLERE - FACE.webp", profil: "SOL - SE MAINTENIR - CUILLERE - PROFIL.webp" }, criteres_realisation: ["Bas du dos collé au tapis", "Bras tendus derrière"], criteres_reussite: ["Jambes et épaules décollées", "Tenir l'effort sans cambrer"] },
    { id: "sol_eq_1pied", agre: "SOL", action: "SE MAINTENIR", nom: "EQUILIBRE 1 PIED", difficulte: "⭐", media: { face: "SOL - SE MAINTENIR - EQUILIBRE 1 PIED - FACE.webp", profil: "SOL - SE MAINTENIR - EQUILIBRE 1 PIED - PROFIL.webp" }, criteres_realisation: ["Jambe d'appui tendue", "Fixer un point devant soi"], criteres_reussite: ["Immobilité totale", "Tenir sans poser le deuxième pied"] },
    {
        id: "sol_eq_fessier", agre: "SOL", action: "SE MAINTENIR", nom: "EQUILIBRE FESSIER", difficulte: "⭐⭐",
        media: { face: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - FACE.webp", profil: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - PROFIL.webp" },
        criteres_realisation: ["Dos plat et solide", "Bras en croix pour l'équilibre"],
        criteres_reussite: ["Seules les fesses touchent le sol", "Tenir immobile"],
        etapes: [
            { nom: "Jambes pliées", media: { face: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - FACE - ETAPE - 1 - EQUILBRE FESSIER JAMBES PLIES AVEC LES BRAS.webp", profil: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - PROFIL - ETAPE - 1 - EQUILBRE FESSIER JAMBES PLIES AVEC LES BRAS.webp" }},
            { nom: "Jambes tendues", media: { face: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - FACE - ETAPE - 2 - EQUILBRE FESSIER JAMBES TENDUES AVEC LES BRAS.webp", profil: "SOL - SE MAINTENIR - EQUILIBRE FESSIER - PROFIL - ETAPE - 2 - EQUILBRE FESSIER JAMBES TENDUES AVEC LES BRAS.webp" }}
        ]
    },
    {
        id: "sol_planche", agre: "SOL", action: "SE MAINTENIR", nom: "PLANCHE", difficulte: "⭐⭐",
        media: { face: "SOL - SE MAINTENIR - PLANCHE - FACE.webp", profil: "SOL - SE MAINTENIR - PLANCHE - PROFIL.webp" },
        criteres_realisation: ["Bascule du buste vers l'avant", "Jambe arrière monte progressivement"],
        criteres_reussite: ["Jambe libre à l'horizontale", "Dos droit et tête levée"],
        etapes: [
            { nom: "Équilibre 1 jambe", media: { face: "SOL - SE MAINTENIR - PLANCHE - FACE - ETAPE - 1 - EQUILIBRE 1 JAMBE .webp", profil: "SOL - SE MAINTENIR - PLANCHE - PROFIL - ETAPE - 1 - EQUILIBRE 1 JAMBE.webp" }},
            { nom: "Planche oblique", media: { face: "SOL - SE MAINTENIR - PLANCHE - FACE - ETAPE - 2 - PLANCHE OBLIQUE.webp", profil: "SOL - SE MAINTENIR - PLANCHE - PROFIL - ETAPE - 2 - PLANCHE OBLIQUE.webp" }}
        ],
        erreurs: [{ titre: "Déséquilibre", indicateur: "Bascule avant", correction: "Gainer le dos et fixer un point au sol", media: { face: "SOL - SE MAINTENIR - PLANCHE - FACE - ERREUR - DESEQUILIBRE AVANT.webp", profil: "SOL - SE MAINTENIR - PLANCHE - PROFIL - ERREUR - DESEQUILIBRE AVANT.webp" }}]
    },
    { id: "sol_pont", agre: "SOL", action: "SE MAINTENIR", nom: "PONT", difficulte: "⭐⭐⭐", media: { face: "SOL - SE MAINTENIR - PONT - FACE.webp", profil: "SOL - SE MAINTENIR - PONT - PROFIL.webp" }, criteres_realisation: ["Mains près des oreilles", "Pousser simultanément sur bras et jambes"], criteres_reussite: ["Bras complètement tendus", "Tête décollée du tapis"] },

    // --- ACTION : SE RENVERSER ---
    {
        id: "sol_atr", agre: "SOL", action: "SE RENVERSER", nom: "ATR", difficulte: "⭐⭐⭐⭐",
        media: { face: "SOL - SE RENVERSER - ATR - FACE.webp", profil: "SOL - SE RENVERSER - ATR - PROFIL.webp" },
        criteres_realisation: ["Fente avant profonde", "Mains cherchent loin devant", "Serrer fessiers et abdos"],
        criteres_reussite: ["Passage précis par la verticale", "Alignement segmentaire parfait"],
        etapes: [
            { nom: "Départ bloc", media: { face: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 1 - ATR 1 JAMBE DEPART AU SOL AVEC BLOC.webp", profil: "SOL - SE RENVERSER - ATR - PROFIL - ETAPE - 1 - ATR 1 JAMBE DEPART AU SOL AVEC BLOC.webp" }},
            { nom: "Lancer jambe (bloc)", media: { face: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 2 - ATR DEPART AU SOL AVEC BLOC.webp", profil: "SOL - SE RENVERSER - ATR - PROFIL - ETAPE - 2 - ATR DEPART AU SOL AVEC BLOC.webp" }},
            { nom: "Départ sol", media: { face: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 3 - ATR 1 JAMBE DEPART AU SOL.webp", profil: "SOL - SE RENVERSER - ATR - PROFIL - ETAPE - 3 - ATR 1 JAMBE DEPART AU SOL.webp" }},
            { nom: "ATR 1 Jambe", media: { face: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 4 - ATR 1 JAMBE.webp", profil: "SOL - SE RENVERSER - ATR - PROFIL - ETAPE - 4 - ATR 1 JAMBE.webp" }}
        ],
        erreurs: [{ titre: "Banane", indicateur: "Dos cambré", correction: "Gainer et regarder les mains sans casser la nuque", media: { face: "SOL - SE RENVERSER - ATR - FACE - ERREUR - LE CORPS EST EN ”BANANE”.webp", profil: "SOL - SE RENVERSER - ATR - PROFIL - ERREUR - LE CORPS EST EN ”BANANE”.webp" }}]
    },
    {
        id: "sol_roue", agre: "SOL", action: "SE RENVERSER", nom: "ROUE", difficulte: "⭐⭐⭐",
        media: { face: "SOL - SE RENVERSER - ROUE - FACE.webp", profil: "SOL - SE RENVERSER - ROUE - PROFIL.webp" },
        criteres_realisation: ["Pose alternée des appuis (rythme régulier)", "Bras tendus"],
        criteres_reussite: ["Passage par la verticale", "Réception stable un pied après l'autre"],
        etapes: [
            { nom: "Sur banc", media: { face: "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp", profil: "SOL - SE RENVERSER - ROUE - PROFIL - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp" }},
            { nom: "Jambes élevées", media: { face: "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 3 - ROUE EN APPUI SUR UN BANC JAMBES ELEVEES.webp", profil: "SOL - SE RENVERSER - ROUE - PROFIL - ETAPE - 3 - ROUE EN APPUI SUR UN BANC JAMBES ELEVEES.webp" }}
        ]
    },

    // =========================================================================
    // AGRÈS : POUTRE
    // =========================================================================
    
    // --- POUTRE : SAUTER ---
    { id: "poutre_saut", agre: "POUTRE", action: "SAUTER", nom: "SAUT", difficulte: "⭐⭐", media: { profil: "POUTRE - SAUTER.webp" }, criteres_realisation: ["Impulsion dynamique", "Regard au bout de la poutre"], criteres_reussite: ["Réception stabilisée (pas de chute)"] },
    
    // --- POUTRE : SE DEPLACER ---
    { id: "poutre_araignee", agre: "POUTRE", action: "SE DEPLACER", nom: "EN ARAIGNEE", difficulte: "⭐", media: { face: "POUTRE - SE DEPLACER - EN ARAIGNEE - FACE.webp", profil: "POUTRE - SE DEPLACER - EN ARAIGNEE - PROFIL.webp" }, criteres_realisation: ["Mains et pieds bien à plat", "Bassin décollé"], criteres_reussite: ["Parcourir la longueur sans déséquilibre"] },
    { id: "poutre_chat", agre: "POUTRE", action: "SE DEPLACER", nom: "EN CHAT", difficulte: "⭐", media: { face: "POUTRE - SE DEPLACER - EN CHAT - FACE.webp", profil: "POUTRE - SE DEPLACER - EN CHAT - PROFIL.webp" }, criteres_realisation: ["Mouvement fluide bras/jambes", "Dos plat"], criteres_reussite: ["Déplacement silencieux et stable"] },
    { id: "poutre_chenille", agre: "POUTRE", action: "SE DEPLACER", nom: "EN CHENILLE", difficulte: "⭐⭐", media: { face: "POUTRE - SE DEPLACER - EN CHENILLE - FACE.webp", profil: "POUTRE - SE DEPLACER - EN CHENILLE - PROFIL.webp" }, criteres_realisation: ["Alternance mains-pieds", "Garder l'alignement"], criteres_reussite: ["Ne pas sortir de l'axe de la poutre"] },
    { id: "poutre_girafe", agre: "POUTRE", action: "SE DEPLACER", nom: "EN GIRAFE", difficulte: "⭐", media: { face: "POUTRE - SE DEPLACER - EN GIRAFE - FACE.webp", profil: "POUTRE - SE DEPLACER - EN GIRAFE - PROFIL.webp" }, criteres_realisation: ["Marcher sur demi-pointes", "Bras hauts"], criteres_reussite: ["Maintenir la hauteur constante"] },
    { id: "poutre_kangourou", agre: "POUTRE", action: "SE DEPLACER", nom: "EN KANGOUROU", difficulte: "⭐⭐", media: { face: "POUTRE - SE DEPLACER - EN KANGOUROU - FACE.webp", profil: "POUTRE - SE DEPLACER - EN KANGOUROU - PROFIL.webp" }, criteres_realisation: ["Sauts légers", "Amortir avec les chevilles"], criteres_reussite: ["Enchaîner 3 sauts sans s'arrêter"] },
    { id: "poutre_lapin", agre: "POUTRE", action: "SE DEPLACER", nom: "EN LAPIN", difficulte: "⭐⭐", media: { face: "POUTRE - SE DEPLACER - EN LAPIN - FACE.webp", profil: "POUTRE - SE DEPLACER - EN LAPIN - PROFIL.webp" }, criteres_realisation: ["Transfert du poids sur les mains", "Serrer les pieds"], criteres_reussite: ["Contrôler le retour des pieds sur la poutre"] },
    { id: "poutre_marchant", agre: "POUTRE", action: "SE DEPLACER", nom: "EN MARCHANT", difficulte: "⭐", media: { face: "POUTRE - SE DEPLACER - EN MARCHANT - FACE.webp", profil: "POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp" }, criteres_realisation: ["Bras à l'horizontale", "Poser le pied dans l'axe"], criteres_reussite: ["Marche assurée, regard devant"] },
    { id: "poutre_reculant", agre: "POUTRE", action: "SE DEPLACER", nom: "EN RECULANT", difficulte: "⭐⭐", media: { face: "POUTRE - SE DEPLACER - EN RECULANT - FACE.webp", profil: "POUTRE - SE DEPLACER - EN RECULANT - PROFIL.webp" }, criteres_realisation: ["Chercher la poutre avec la pointe du pied", "Garder le buste droit"], criteres_reussite: ["Reculer sur 2 mètres sans hésiter"] },

    // --- POUTRE : SE MAINTENIR ---
    { id: "poutre_eq_1pied", agre: "POUTRE", action: "SE MAINTENIR", nom: "EQUILIBRE 1 PIED", difficulte: "⭐⭐", media: { face: "POUTRE - SE MAINTENIR - EQUILIBRE 1 PIED - FACE.webp", profil: "POUTRE - SE MAINTENIR - EQUILIBRE 1 PIED - PROFIL.webp" }, criteres_realisation: ["Jambe libre en retrait", "Gainer la jambe d'appui"], criteres_reussite: ["Tenir immobile 3 secondes"] },
    { id: "poutre_eq_fessier", agre: "POUTRE", action: "SE MAINTENIR", nom: "EQUILIBRE FESSIER", difficulte: "⭐⭐⭐", media: { face: "POUTRE - SE MAINTENIR - EQUILIBRE FESSIER - FACE.webp", profil: "POUTRE - SE MAINTENIR - EQUILIBRE FESSIER - PROFIL.webp" }, criteres_realisation: ["Trouver le point de bascule", "Serrer les abdominaux"], criteres_reussite: ["Pas de contact mains/poutre", "Jambes levées"] },
    { id: "poutre_planche", agre: "POUTRE", action: "SE MAINTENIR", nom: "PLANCHE", difficulte: "⭐⭐⭐", media: { face: "POUTRE - SE MAINTENIR - PLANCHE - FACE.webp", profil: "POUTRE - SE MAINTENIR - PLANCHE - PROFIL.webp" }, criteres_realisation: ["Fixer un point au bout de la poutre", "Aligner jambe et buste"], criteres_reussite: ["Jambe arrière à l'horizontale"] },

    // =========================================================================
    // AGRÈS : BARRES
    // =========================================================================
    { id: "barres_appui", agre: "BARRES", action: "S APPUYER", nom: "APPUI SIMPLE", difficulte: "⭐", media: { face: "BARRES - S APPUYER - APPUI SIMPLE - FACE.webp" }, criteres_realisation: ["Bras tendus", "Pousser sur les épaules pour s'éloigner de la barre"], criteres_reussite: ["Corps gainé", "Pas de balancement"] },
    { id: "barres_suspension", agre: "BARRES", action: "SE SUSPENDRE", nom: "SUSPENSION SIMPLE", difficulte: "⭐", media: { face: "BARRES - SE SUSPENDRE - SUSPENSION SIMPLE - FACE.webp" }, criteres_realisation: ["Mains largeur épaules", "Bras tendus (ne pas plier)"], criteres_reussite: ["Rester suspendu sans toucher le sol", "Corps droit"] }
];
