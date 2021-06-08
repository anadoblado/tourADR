var APP_DATA = {
  "scenes": [
    {
      "id": "0-1_entrada_principal",
      "name": "1_Entrada_principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.010069921330432052,
        "pitch": 0,
        "fov": 1.3848081938437478
      },
      "linkHotspots": [
        {
          "yaw": -0.02167618768721269,
          "pitch": 0.1289020064675448,
          "rotation": 0,
          "target": "1-2_entrada_2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1059933285739856,
          "pitch": 0.0750468311194954,
          "title": "Entrada principal",
          "text": "Entrada principal del centro. Aunque debido a la pandemia, se habilitaron distintas entradas para evitar aglomeraciones."
        }
      ]
    },
    {
      "id": "1-2_entrada_2",
      "name": "2_Entrada_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.136548159401851,
          "pitch": 0.16235983226197348,
          "rotation": 0,
          "target": "0-1_entrada_principal"
        },
        {
          "yaw": 1.507434786958786,
          "pitch": 0.024318846318294618,
          "rotation": 0,
          "target": "2-3_entrada_biblioteca"
        },
        {
          "yaw": -0.02428330524558575,
          "pitch": 0.16899847560749492,
          "rotation": 0,
          "target": "3-4_entrada_cafeteria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3_entrada_biblioteca",
      "name": "3_Entrada_biblioteca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9029061057004668,
          "pitch": 0.20510674442945387,
          "rotation": 0,
          "target": "1-2_entrada_2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0915027593660778,
          "pitch": -0.056248636312471234,
          "title": "Biblioteca",
          "text": "La biblioteca está al servicio del alumnado, pudiendo acceder a ella en el horario del recreo."
        }
      ]
    },
    {
      "id": "3-4_entrada_cafeteria",
      "name": "4_Entrada_cafeteria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12472780919405224,
          "pitch": 0.16146489542320452,
          "rotation": 0,
          "target": "1-2_entrada_2"
        },
        {
          "yaw": -3.0508353839781215,
          "pitch": 0.22710686414919223,
          "rotation": 0,
          "target": "4-5_patio_fuente"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6779732167148929,
          "pitch": 0.07751828513141668,
          "title": "Cafetería",
          "text": "Servicio de cafetería para el alumnado, profesorado y personal del centro. Presta sus servicios en horario escolar."
        },
        {
          "yaw": 1.5370143922013613,
          "pitch": 0.07827575286072275,
          "title": "Sala de profesoras y profesores",
          "text": "Entrada a la sala del profesorado a través del patio."
        }
      ]
    },
    {
      "id": "4-5_patio_fuente",
      "name": "5_Patio_fuente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.45458286139479753,
          "pitch": 0.12577438612759195,
          "rotation": 0,
          "target": "3-4_entrada_cafeteria"
        },
        {
          "yaw": -2.9499518942039398,
          "pitch": 0.019189646046109843,
          "rotation": 0,
          "target": "5-6_poreche_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6_poreche_2",
      "name": "6_Poreche_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6146938266869384,
          "pitch": 0.06227803734334714,
          "rotation": 0,
          "target": "6-7_clases_exteriores"
        },
        {
          "yaw": -0.1104469101642831,
          "pitch": 0.21197442136723232,
          "rotation": 0,
          "target": "4-5_patio_fuente"
        },
        {
          "yaw": 3.1182839613900093,
          "pitch": 0.23445291380842548,
          "rotation": 0,
          "target": "8-9_patio_interior"
        },
        {
          "yaw": 1.4766379643380425,
          "pitch": 0.10088602318098339,
          "rotation": 0,
          "target": "16-17_hall_1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7044904476578902,
          "pitch": -0.010068728373294533,
          "title": "Entrada hall",
          "text": "Edificio principal.&nbsp;<div><br></div>"
        }
      ]
    },
    {
      "id": "6-7_clases_exteriores",
      "name": "7_Clases_exteriores",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8619477531765156,
          "pitch": 0.13900024971302827,
          "rotation": 0,
          "target": "5-6_poreche_2"
        },
        {
          "yaw": 0.20059691885600728,
          "pitch": 0.12264996347748891,
          "rotation": 0,
          "target": "7-8_clases_exteriores_2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0959200593958585,
          "pitch": 0.07866308102627606,
          "title": "Edificio E",
          "text": "Edificio destinado a aulario."
        }
      ]
    },
    {
      "id": "7-8_clases_exteriores_2",
      "name": "8_Clases_exteriores_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5257803590593264,
          "pitch": 0.14837664446418053,
          "rotation": 0,
          "target": "6-7_clases_exteriores"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-9_patio_interior",
      "name": "9_Patio_interior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09904630309305773,
          "pitch": 0.1186025563873283,
          "rotation": 0,
          "target": "5-6_poreche_2"
        },
        {
          "yaw": -3.0619289701592294,
          "pitch": 0.18784342171039015,
          "rotation": 0,
          "target": "9-10_patio_interior_fondo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10_patio_interior_fondo",
      "name": "10_Patio_interior_fondo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.035333309276294855,
          "pitch": 0.19473660987932462,
          "rotation": 0,
          "target": "8-9_patio_interior"
        },
        {
          "yaw": -3.0557961330040833,
          "pitch": 0.19336163088224723,
          "rotation": 0,
          "target": "11-12_patio_interior_3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1877179173213985,
          "pitch": 0.003433820580912794,
          "title": "Pista deportiva",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-11_pista_multideporte",
      "name": "11_Pista_multideporte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1324795017828233,
          "pitch": 0.1663805262374325,
          "rotation": 0,
          "target": "11-12_patio_interior_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-12_patio_interior_3",
      "name": "12_Patio_interior_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17493355426504564,
          "pitch": 0.1779415591344513,
          "rotation": 0,
          "target": "10-11_pista_multideporte"
        },
        {
          "yaw": 2.289111300048143,
          "pitch": 0.128786714730591,
          "rotation": 5.497787143782138,
          "target": "9-10_patio_interior_fondo"
        },
        {
          "yaw": 3.060434252892186,
          "pitch": 0.12190805552259576,
          "rotation": 0,
          "target": "12-13_patio_interior_4_fondo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.02944853560343752,
          "pitch": -0.01177729735522881,
          "title": "Pista deportiva entrada",
          "text": "Pista multideporte para el uso del alumnado en diversas actividades."
        }
      ]
    },
    {
      "id": "12-13_patio_interior_4_fondo",
      "name": "13_Patio_interior_4_fondo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03239104853115471,
          "pitch": 0.11431989103569684,
          "rotation": 0,
          "target": "11-12_patio_interior_3"
        },
        {
          "yaw": -3.1098488565525404,
          "pitch": 0.18515558595648685,
          "rotation": 0,
          "target": "13-14_patio_trasero_fondo"
        },
        {
          "yaw": 0.9243521976643123,
          "pitch": 0.10556021625577117,
          "rotation": 5.497787143782138,
          "target": "29-30_ala_blanca_inferior_fondo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-14_patio_trasero_fondo",
      "name": "14_Patio_trasero_fondo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0665180200216895,
          "pitch": 0.061596368497415455,
          "rotation": 0,
          "target": "12-13_patio_interior_4_fondo"
        },
        {
          "yaw": 0.6862077716522279,
          "pitch": 0.042794166954863044,
          "rotation": 0.7853981633974483,
          "target": "14-15_patio_trasero_fondo_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-15_patio_trasero_fondo_2",
      "name": "15_Patio_trasero_fondo_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.999521350177444,
          "pitch": 0.2544065891216878,
          "rotation": 0,
          "target": "13-14_patio_trasero_fondo"
        },
        {
          "yaw": 0.02719805677037357,
          "pitch": 0.31779028618002947,
          "rotation": 0.7853981633974483,
          "target": "15-16_patio_trasero_lateral"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-16_patio_trasero_lateral",
      "name": "16_Patio_trasero_lateral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.778479441217513,
          "pitch": 0.23637115181400858,
          "rotation": 0,
          "target": "14-15_patio_trasero_fondo_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-17_hall_1",
      "name": "17_Hall_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.208991164111195,
          "pitch": 0.2537507458592323,
          "rotation": 0,
          "target": "5-6_poreche_2"
        },
        {
          "yaw": -1.9437612828508275,
          "pitch": 0.22327069195096882,
          "rotation": 5.497787143782138,
          "target": "17-18_hall_lateral_derecho"
        },
        {
          "yaw": -1.5543590914833239,
          "pitch": 0.14820604600476983,
          "rotation": 0,
          "target": "30-31_ala_blanca_entrada"
        },
        {
          "yaw": 2.961444067365293,
          "pitch": 0.16672325742785432,
          "rotation": 0,
          "target": "18-19_hall_fondo"
        },
        {
          "yaw": -1.210625433805392,
          "pitch": 0.1247585375101341,
          "rotation": 0.7853981633974483,
          "target": "25-26_ala_blanca_superior_1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.258064437673256,
          "pitch": 0.09538609036370893,
          "title": "Conserjería",
          "text": "Text"
        },
        {
          "yaw": 0.873906049338995,
          "pitch": 0.08018641755111133,
          "title": "Secretaría",
          "text": "<div>Horario disponible en la web:</div>www.iesmarquesdecomares&nbsp;<div><br></div>"
        }
      ]
    },
    {
      "id": "17-18_hall_lateral_derecho",
      "name": "18_Hall_lateral_derecho",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9351798919116714,
          "pitch": 0.06761193306454771,
          "rotation": 0,
          "target": "18-19_hall_fondo"
        },
        {
          "yaw": 2.3000687685568586,
          "pitch": 0.15812816974448474,
          "rotation": 5.497787143782138,
          "target": "30-31_ala_blanca_entrada"
        },
        {
          "yaw": 2.6099190739380163,
          "pitch": 0.2251924540260397,
          "rotation": 7.853981633974483,
          "target": "16-17_hall_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-19_hall_fondo",
      "name": "19_Hall_fondo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.785960474873761,
          "pitch": 0.14823074803731373,
          "rotation": 0.7853981633974483,
          "target": "16-17_hall_1"
        },
        {
          "yaw": -1.0702889384469998,
          "pitch": 0.19034927373749433,
          "rotation": 0.7853981633974483,
          "target": "19-20_ala_roja_1"
        },
        {
          "yaw": -1.558006553600169,
          "pitch": 0.1622072505625276,
          "rotation": 5.497787143782138,
          "target": "31-33_salon_actos_1"
        },
        {
          "yaw": 2.382312305464346,
          "pitch": 0.16128683649865394,
          "rotation": 0.7853981633974483,
          "target": "33-35_aparcamiento_reto"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8862337505591036,
          "pitch": 0.08123044529808965,
          "title": "Salón de actos",
          "text": "Text"
        },
        {
          "yaw": 2.3614887277253302,
          "pitch": -0.07261813179936283,
          "title": "Salida al aparcamiento",
          "text": "Aparcamiento para el profesorado y personal del centro. Cuenta con aparcabicis."
        }
      ]
    },
    {
      "id": "19-20_ala_roja_1",
      "name": "20_Ala_roja_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5940101483431368,
          "pitch": 0.2241018793752243,
          "rotation": 0,
          "target": "18-19_hall_fondo"
        },
        {
          "yaw": -1.3967093493307523,
          "pitch": 0.23665184202264555,
          "rotation": 0,
          "target": "20-21_ala_roja_2"
        },
        {
          "yaw": 2.7341770352382646,
          "pitch": 0.13360293637795806,
          "rotation": 0.7853981633974483,
          "target": "24-25_interseccion_alas_parte_superior"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.41642916697841237,
          "pitch": -0.38786250511813947,
          "title": "Aseos",
          "text": "Text"
        },
        {
          "yaw": -2.1928379815235672,
          "pitch": -0.011547194129722271,
          "title": "Pasillo&nbsp;",
          "text": "Aquí se ubican los ciclos:<div>&nbsp;- CFGM Sistemas Microinformáticos y Redes</div><div>- CFGS Desarrollo de Aplicaciones Web&nbsp;&nbsp;</div>"
        }
      ]
    },
    {
      "id": "20-21_ala_roja_2",
      "name": "21_Ala_roja_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07442712050318612,
          "pitch": 0.15184768775392676,
          "rotation": 0,
          "target": "19-20_ala_roja_1"
        },
        {
          "yaw": 3.07692191324489,
          "pitch": 0.23815005971611036,
          "rotation": 0,
          "target": "21-22_ala_roja_fondo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-22_ala_roja_fondo",
      "name": "22_Ala_roja_fondo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.089731259510744,
          "pitch": 0.22814558583995037,
          "rotation": 0,
          "target": "20-21_ala_roja_2"
        },
        {
          "yaw": -1.2359306182813548,
          "pitch": 0.14642575227993504,
          "rotation": 0,
          "target": "22-23_subida_ala_roja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-23_subida_ala_roja",
      "name": "23_Subida_ala_roja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7681185527692485,
          "pitch": 0.30763876886296515,
          "rotation": 0,
          "target": "21-22_ala_roja_fondo"
        },
        {
          "yaw": 2.978278084272162,
          "pitch": 0.22556895826729395,
          "rotation": 0,
          "target": "23-24_ala_roja_superior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-24_ala_roja_superior",
      "name": "24_Ala_roja_superior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.031070677464949625,
          "pitch": 0.1696749406400304,
          "rotation": 0,
          "target": "22-23_subida_ala_roja"
        },
        {
          "yaw": 3.055701594647509,
          "pitch": 0.12412811257726375,
          "rotation": 0,
          "target": "24-25_interseccion_alas_parte_superior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-25_interseccion_alas_parte_superior",
      "name": "25_Interseccion_alas_parte_superior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15102634600433795,
          "pitch": 0.25649751160721124,
          "rotation": 0.7853981633974483,
          "target": "23-24_ala_roja_superior"
        },
        {
          "yaw": -0.08767028049986791,
          "pitch": 0.1925109963644811,
          "rotation": 0,
          "target": "19-20_ala_roja_1"
        },
        {
          "yaw": 3.0076259300250534,
          "pitch": 0.1889311945184744,
          "rotation": 0,
          "target": "25-26_ala_blanca_superior_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-26_ala_blanca_superior_1",
      "name": "26_Ala_blanca_superior_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9571391133243417,
          "pitch": 0.15586462506185228,
          "rotation": 5.497787143782138,
          "target": "24-25_interseccion_alas_parte_superior"
        },
        {
          "yaw": -0.42211294997866133,
          "pitch": 0.3189344890128041,
          "rotation": 0.7853981633974483,
          "target": "16-17_hall_1"
        },
        {
          "yaw": -1.702430002238918,
          "pitch": 0.30074935938912795,
          "rotation": 0,
          "target": "26-27_ala_blanca_pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-27_ala_blanca_pasillo",
      "name": "27_Ala_blanca_pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20322946891977267,
          "pitch": 0.14036421341416627,
          "rotation": 0,
          "target": "25-26_ala_blanca_superior_1"
        },
        {
          "yaw": 2.9138501617599566,
          "pitch": 0.27446626731618906,
          "rotation": 0,
          "target": "27-28_ala_blanca_fondo_superior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-28_ala_blanca_fondo_superior",
      "name": "28_Ala_blanca_fondo_superior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04552936593938739,
          "pitch": 0.1632876541641597,
          "rotation": 0,
          "target": "26-27_ala_blanca_pasillo"
        },
        {
          "yaw": 1.6008139322879655,
          "pitch": 0.18491184637417568,
          "rotation": 0,
          "target": "29-30_ala_blanca_inferior_fondo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-29_ala_blanca_fondo_superior_2",
      "name": "29_Ala_blanca_fondo_superior_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "29-30_ala_blanca_inferior_fondo",
      "name": "30_Ala_blanca_inferior_fondo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5502987963413197,
          "pitch": 0.11930834142627411,
          "rotation": 0.7853981633974483,
          "target": "27-28_ala_blanca_fondo_superior"
        },
        {
          "yaw": -1.6202900882249338,
          "pitch": 0.205876614216276,
          "rotation": 0,
          "target": "12-13_patio_interior_4_fondo"
        },
        {
          "yaw": 3.1241850926502197,
          "pitch": 0.12757758789669538,
          "rotation": 0,
          "target": "30-31_ala_blanca_entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-31_ala_blanca_entrada",
      "name": "31_Ala_blanca_entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15270048378650536,
          "pitch": 0.1690063561671984,
          "rotation": 0,
          "target": "29-30_ala_blanca_inferior_fondo"
        },
        {
          "yaw": -3.0325348632376468,
          "pitch": 0.3502360747039166,
          "rotation": 0.7853981633974483,
          "target": "17-18_hall_lateral_derecho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-33_salon_actos_1",
      "name": "33_Salon_actos_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5705267577540667,
          "pitch": 0.09808263372492121,
          "rotation": 0,
          "target": "18-19_hall_fondo"
        },
        {
          "yaw": 2.9095529634949058,
          "pitch": 0.1000977951308819,
          "rotation": 0,
          "target": "32-34_salon_actos_tarima"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-34_salon_actos_tarima",
      "name": "34_Salon_actos_tarima",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.053208261092468234,
          "pitch": 0.1695228645594078,
          "rotation": 0,
          "target": "31-33_salon_actos_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-35_aparcamiento_reto",
      "name": "35_Aparcamiento_reto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3911447238858976,
          "pitch": 0.14067028121390912,
          "rotation": 5.497787143782138,
          "target": "18-19_hall_fondo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
