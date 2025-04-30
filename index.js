< !DOCTYPE html >
    <html>
        <head>
            <title>Cournonterral</title>
            <meta charset="utf-8">
                <meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui" />
                <style> @-ms-viewport {width: device-width; } </style>
                <link rel="stylesheet" href="vendor/reset.min.css">
                    <link rel="stylesheet" href="style.css">
                    </head>
                    <body class="multiple-scenes view-control-buttons">

                        <div id="pano"></div>

                        <!-- Liste des sc�nes -->
                        <div id="sceneList">
                            <a href="javascript:void(0)" onclick="loadScene('salon')">Salon</a>
                            <a href="javascript:void(0)" onclick="loadScene('chambre')">Chambre</a>
                            <a href="javascript:void(0)" onclick="loadScene('sdb')">Salle de Bain</a>
                        </div>

                        <!-- Titre de la sc�ne -->
                        <div id="titleBar">
                            <h1 class="sceneName"></h1>
                        </div>

                        <!-- Minimap -->
                        <div id="minimap">
                            <img id="minimap-img" src="img/minimap.png" alt="Mini Map" />
                        </div>

                        <!-- Controles -->
                        <a href="javascript:void(0)" id="autorotateToggle">
                            <img class="icon off" src="img/play.png">
                                <img class="icon on" src="img/pause.png">
                                </a>
                                <a href="javascript:void(0)" id="fullscreenToggle">
                                    <img class="icon off" src="img/fullscreen.png">
                                        <img class="icon on" src="img/windowed.png">
                                        </a>

                                        <script src="vendor/screenfull.min.js"></script>
                                        <script src="vendor/bowser.min.js"></script>
                                        <script src="vendor/marzipano.js"></script>
                                        <script src="data.js"></script>
                                        <script src="index.js"></script>

                                        <script>
        // Fonction pour charger une sc�ne et mettre � jour la minimap
                                            function loadScene(sceneId) {
                                                // Mettre � jour le titre de la sc�ne
                                                document.querySelector('#titleBar .sceneName').textContent = sceneId.charAt(0).toUpperCase() + sceneId.slice(1);

                                            // Mettre � jour l'image de la minimap en fonction de la sc�ne
                                            updateMinimap(sceneId);
        }

                                            // Fonction pour changer l'image de la minimap en fonction de la sc�ne
                                            function updateMinimap(sceneId) {
            // R�cup�rer l'�l�ment de l'image de la minimap
            const minimapImg = document.getElementById('minimap-img');

                                            // Changer l'image selon la sc�ne
                                            switch(sceneId) {
                case 'salon':
                                            minimapImg.src = 'img/minimap_salon.png'; // Remplacer par l'image avec le salon en surbrillance
                                            break;
                                            case 'chambre':
                                            minimapImg.src = 'img/minimap_chambre.png'; // Remplacer par l'image avec la chambre en surbrillance
                                            break;
                                            case 'sdb':
                                            minimapImg.src = 'img/minimap_sdb.png'; // Remplacer par l'image avec la salle de bain en surbrillance
                                            break;
                                            default:
                                            minimapImg.src = 'img/minimap.png'; // Image de minimap g�n�rique (aucune pi�ce en surbrillance)
                                            break;
            }
        }
                                        </script>

                                        <style>
        /* Style de la minimap */
                                            #minimap {
                                                position: absolute;
                                            bottom: 20px;
                                            right: 20px;
                                            width: 40vw; /* 40% de la largeur de l'�cran */
                                            max-width: 500px;
                                            z-index: 9999;
                                            background: #fff;
                                            padding: 5px;
                                            position: relative;
        }

                                            #minimap img {
                                                width: 100%;
                                            height: auto;
                                            display: block;
        }

                                            /* Pour les tablettes */
                                            @media (max-width: 1024px) {
                                                #minimap {
                                                width: 200px; /* R�duit la taille de la minimap sur tablette */
                                            bottom: 15px;
                                            right: 15px;
            }
        }

                                            /* Pour les mobiles */
                                            @media (max-width: 600px) { /* Changer de 400px � 600px pour mieux adapter les t�l�phones */
                                                #minimap {
                                                width: 25vw; /* Utilise 25% de la largeur de l'�cran sur mobile */
                                            height: auto;
                                            min-width: 250px; /* S'assure que la minimap ne soit pas trop petite */
                                            bottom: 10px;
                                            right: 10px;
            }
        }
                                        </style>

                                    </body>
                                </html>
