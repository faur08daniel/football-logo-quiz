import { useState, useEffect, useRef } from 'react'

const TEAMS = [
  {
    name: 'Real Madrid',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    league: 'la-liga',
    difficulty: 'easy',
  },
  {
    name: 'FC Barcelona',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    league: 'la-liga',
    difficulty: 'easy',
  },
  {
    name: 'Atletico Madrid',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Atletico_Madrid_Logo_2024.svg',
    league: 'la-liga',
    difficulty: 'easy',
  },
  {
    name: 'Sevilla FC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Valencia CF',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Athletic Bilbao',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Real Sociedad',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'Real Betis',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Villarreal CF',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Villarreal_CF_logo-en.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'RCD Espanyol',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/92/RCD_Espanyol_crest.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Celta Vigo',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'Getafe CF',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/46/Getafe_logo.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'CA Osasuna',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/38/CA_Osasuna_2024_crest.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'RCD Mallorca',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Rcd_mallorca.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'Girona FC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Girona_FC_Logo.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Real Valladolid',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Real_Valladolid_CF_crest.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Real Oviedo',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Real_Oviedo_logo.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'UD Las Palmas',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/20/UD_Las_Palmas_logo.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Sporting Gijon',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/48/Real_Sporting_de_Gijon.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Real Zaragoza',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/69/Real_Zaragoza_logo.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Granada CF',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Logo_of_Granada_Club_de_F%C3%BAtbol.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Cadiz CF',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/58/C%C3%A1diz_CF_logo.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'Levante UD',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg',
    league: 'la-liga',
    difficulty: 'medium',
  },
  {
    name: 'CD Tenerife',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/3a/CD_Tenerife_emblem.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'Racing Santander',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Racing_de_Santander_logo.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'Albacete',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/37/Albacete_balompie.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'SD Huesca',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Logo_of_SD_Huesca.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'Burgos CF',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Burgos_CF_logo.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'CD Leganes',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b8/Club_Deportivo_Legan%C3%A9s_logo.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'CD Mirandes',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b8/CD_Mirand%C3%A9s_logo.svg',
    league: 'la-liga',
    difficulty: 'hard',
  },
  {
    name: 'Manchester United',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
    league: 'premier-league',
    difficulty: 'easy',
  },
  {
    name: 'Liverpool',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
    league: 'premier-league',
    difficulty: 'easy',
  },
  {
    name: 'Chelsea',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
    league: 'premier-league',
    difficulty: 'easy',
  },
  {
    name: 'Arsenal',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
    league: 'premier-league',
    difficulty: 'easy',
  },
  {
    name: 'Manchester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    league: 'premier-league',
    difficulty: 'easy',
  },
  {
    name: 'Tottenham Hotspur',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg',
    league: 'premier-league',
    difficulty: 'easy',
  },
  {
    name: 'Newcastle United',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Aston Villa',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_new_crest.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'West Ham United',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Brighton',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Brighton_and_Hove_Albion_FC_crest.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Everton',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Wolverhampton',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Wolverhampton_Wanderers_FC_crest.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Crystal Palace',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Crystal_Palace_FC_logo_%282022%29.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Leeds United',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Brentford',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg',
    league: 'premier-league',
    difficulty: 'hard',
  },
  {
    name: 'Sheffield United',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Burnley',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Burnley_FC_Logo.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Sunderland',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/77/Logo_Sunderland.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Watford',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Norwich City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/17/Norwich_City_FC_logo.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'West Bromwich Albion',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/West_Bromwich_Albion.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Stoke City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Stoke_City_FC_crest_2001.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Coventry City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Coventry_City_FC_crest.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Sheffield Wednesday',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/88/Sheffield_Wednesday_badge.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Cardiff City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Middlesbrough',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Hull City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/54/Hull_City_A.F.C._logo.svg',
    league: 'premier-league',
    difficulty: 'hard',
  },
  {
    name: 'Preston North End',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/82/Preston_North_End_FC.svg',
    league: 'premier-league',
    difficulty: 'hard',
  },
  {
    name: 'Queens Park Rangers',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/31/Queens_Park_Rangers_crest.svg',
    league: 'premier-league',
    difficulty: 'hard',
  },
  {
    name: 'Swansea City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Swansea_City_AFC_logo.svg',
    league: 'premier-league',
    difficulty: 'medium',
  },
  {
    name: 'Juventus',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Juventus_FC_-_logo_black_%28Italy%2C_2020%29.svg',
    league: 'serie-a',
    difficulty: 'easy',
  },
  {
    name: 'AC Milan',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg',
    league: 'serie-a',
    difficulty: 'easy',
  },
  {
    name: 'Inter Milan',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg',
    league: 'serie-a',
    difficulty: 'easy',
  },
  {
    name: 'Napoli',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/SSC_Napoli_2025_%28white_and_azure%29.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'AS Roma',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Atalanta',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'Lazio',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/S.S._Lazio_badge.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'Fiorentina',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/ACF_Fiorentina_-_logo_%28Italy%2C_2022%29.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'Bologna',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Bologna_F.C._1909_logo.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'Torino',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Torino_FC_Logo.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'Udinese',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Udinese_Calcio_logo.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Genoa',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Genoa_CFC_crest.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'Hellas Verona',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/92/Hellas_Verona_FC_logo_%282020%29.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Cagliari',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/61/Cagliari_Calcio_1920.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Parma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_Parma_Calcio_1913_%28adozione_2016%29.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'Sampdoria',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d2/U.C._Sampdoria_logo.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'Sassuolo',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/1c/US_Sassuolo_Calcio_logo.svg',
    league: 'serie-a',
    difficulty: 'medium',
  },
  {
    name: 'Salernitana',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/85/US_Salernitana_1919_logo.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Spezia',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Spezia_Calcio_crest.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Frosinone',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Frosinone_Calcio_logo.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Modena',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Modena_FC_2018_crest.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Brescia',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/17/Brescia_calcio_badge.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Cremonese',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e1/US_Cremonese_logo.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Pisa',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Pisa_SC_crest.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Cesena',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Cesena_FC_crest.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Cosenza',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Cosenza_Calcio_crest.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Catanzaro',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/40/US_Catanzaro_1929_crest.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Cittadella',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e3/AS_Cittadella_logo.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'SudTirol',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/FC_Sudtirol_crest.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Reggiana',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/00/AC_Reggiana_1919_crest.svg',
    league: 'serie-a',
    difficulty: 'hard',
  },
  {
    name: 'Bayern Munchen',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
    league: 'bundesliga',
    difficulty: 'easy',
  },
  {
    name: 'Borussia Dortmund',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
    league: 'bundesliga',
    difficulty: 'easy',
  },
  {
    name: 'RB Leipzig',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'Bayer Leverkusen',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'Eintracht Frankfurt',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Eintracht_Frankfurt_crest.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'VfL Wolfsburg',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/VfL_Wolfsburg_logo_2026.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'Borussia Monchengladbach',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'VfB Stuttgart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/VfB_Stuttgart_1893_Logo.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'Werder Bremen',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'SC Freiburg',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/SC_Freiburg_logo.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'Mainz 05',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/1._FSV_Mainz_05_logo.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'TSG Hoffenheim',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_TSG_Hoffenheim.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'Union Berlin',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/1._FC_Union_Berlin_Logo.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'FC Augsburg',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c5/FC_Augsburg_logo.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'VfL Bochum',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/72/VfL_Bochum_logo.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'Hamburger SV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Hamburger_SV_logo.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'Schalke 04',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'Hertha BSC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Hertha_BSC_Logo_2012.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'FC Koln',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/1._FC_Koeln_Logo_2014%E2%80%93.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'FC Nurnberg',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/1._FC_N%C3%BCrnberg_logo.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'Hannover 96',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Hannover_96_Logo.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'FC Kaiserslautern',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Logo_1_FC_Kaiserslautern.svg',
    league: 'bundesliga',
    difficulty: 'medium',
  },
  {
    name: 'Fortuna Dusseldorf',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Fortuna_D%C3%BCsseldorf.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'Karlsruher SC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Karlsruher_SC_Logo_2.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'FC Magdeburg',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/1._FC_Magdeburg.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'SV Darmstadt 98',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/92/SV_Darmstadt_98_logo.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'SC Paderborn',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b3/SC_Paderborn_07_logo.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'Greuther Furth',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/SpVgg_Greuther_F%C3%BCrth_logo_%282017%29.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'Eintracht Braunschweig',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/60/Eintracht_Braunschweig_logo.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'SV Elversberg',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/SV_Elversberg_Logo_2021.svg',
    league: 'bundesliga',
    difficulty: 'hard',
  },
  {
    name: 'Paris Saint-Germain',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    league: 'ligue-1',
    difficulty: 'easy',
  },
  {
    name: 'Olympique Marseille',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Olympique_de_Marseille_2026_logo.svg',
    league: 'ligue-1',
    difficulty: 'medium',
  },
  {
    name: 'Olympique Lyonnais',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Olympique_Lyonnais_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'AS Monaco',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/cf/LogoASMonacoFC2021.svg',
    league: 'ligue-1',
    difficulty: 'medium',
  },
  {
    name: 'Lille OSC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Lille_OSC_2018_logo.svg',
    league: 'ligue-1',
    difficulty: 'medium',
  },
  {
    name: 'OGC Nice',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/2e/OGC_Nice_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'Stade Rennais',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Stade_Rennais_FC.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'RC Lens',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/RC_Lens_logo.svg',
    league: 'ligue-1',
    difficulty: 'medium',
  },
  {
    name: 'Saint-Etienne',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/25/AS_Saint-%C3%89tienne_logo.svg',
    league: 'ligue-1',
    difficulty: 'medium',
  },
  {
    name: 'FC Nantes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Logo_FC_Nantes_%28avec_fond%29_-_2019.svg',
    league: 'ligue-1',
    difficulty: 'medium',
  },
  {
    name: 'Stade Brestois',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/05/Stade_Brestois_29_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'RC Strasbourg',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/80/Racing_Club_de_Strasbourg_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'Toulouse FC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/63/Toulouse_FC_2018_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'Stade de Reims',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/19/Stade_de_Reims_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'Montpellier',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Montpellier_HSC_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'Bordeaux',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/11/FC_Girondins_de_Bordeaux_logo.svg',
    league: 'ligue-1',
    difficulty: 'medium',
  },
  {
    name: 'FC Lorient',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/4c/FC_Lorient_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'FC Metz',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/FC_Metz_2021_Logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'Angers SCO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Angers_Sporting_Club_de_l%27Ouest_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'AJ Auxerre',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/51/AJAuxerreLogo.svg',
    league: 'ligue-1',
    difficulty: 'medium',
  },
  {
    name: 'SM Caen',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/aa/SM_Caen_2016_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'SC Bastia',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d7/SC_Bastia_logo_2024.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'AC Ajaccio',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/1f/AC_Ajaccio_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'FC Annecy',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/db/FC_Annecy_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'Amiens SC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/25/Amiens_SC_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'ESTAC Troyes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/ESTAC_Troyes_Logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'Grenoble',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/de/Grenoble_Foot_38_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'EA Guingamp',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/En_Avant_Guingamp_logo.svg',
    league: 'ligue-1',
    difficulty: 'medium',
  },
  {
    name: 'Pau FC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/82/Pau_FC_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'Quevilly-Rouen',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/39/US_Quevilly-Rouen_M%C3%A9tropole_logo.svg',
    league: 'ligue-1',
    difficulty: 'hard',
  },
  {
    name: 'FCSB',
    logo: 'https://upload.wikimedia.org/wikipedia/ro/c/cb/FCSB_logo.svg',
    league: 'liga-1',
    difficulty: 'easy',
  },
  {
    name: 'CFR Cluj',
    logo: 'https://upload.wikimedia.org/wikipedia/ro/c/cc/CFR_Cluj.svg',
    league: 'liga-1',
    difficulty: 'easy',
  },
  {
    name: 'Universitatea Craiova',
    logo: 'https://upload.wikimedia.org/wikipedia/ro/6/68/CS_Universitatea_Craiova.svg',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'Dinamo Bucuresti',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c0/FC_Dinamo_Bucuresti_logo.svg',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'Rapid Bucuresti',
    logo: 'https://upload.wikimedia.org/wikipedia/ro/a/a1/FC_Rapid_Bucuresti.svg',
    league: 'liga-1',
    difficulty: 'easy',
  },
  {
    name: 'Sepsi OSK',
    logo: 'https://upload.wikimedia.org/wikipedia/ro/e/ec/ACS_Sepsi_OSK_Sfantu_Gheorghe_logo.svg',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'Farul Constanta',
    logo: 'https://upload.wikimedia.org/wikipedia/ro/d/dd/FC_Farul_Constanta.svg',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'UTA Arad',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/UTA_Arad_logo.svg',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'Petrolul Ploiesti',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/Petrolul_Ploiesti_logo.png',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'FC Botosani',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e7/FC_Botosani_2022_logo.svg',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'FC Voluntari',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/98/FC_Voluntari_logo.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'FC Hermannstadt',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/2b/FC_Hermannstadt_logo.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'Politehnica Iasi',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/16/FC_Politehnica_Iasi.svg',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'Otelul Galati',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/ASC_Otelul_Galati_logo.svg',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'FC Arges',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/FC_Arges_Pitesti_badge.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'CSA Steaua',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Steaua_Bucure%C8%99ti.svg',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'Universitatea Cluj',
    logo: 'https://upload.wikimedia.org/wikipedia/ro/3/3e/U_Cluj.svg',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'Politehnica Timisoara',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Poli_timisoara_2010_logo.png',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'Unirea Urziceni',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Unirea_Urziceni.png',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'Gloria Bistrita',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Gloria-Bistrita-New.png',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'Astra Giurgiu',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/96/Astra_Giurgiu_logo.png',
    league: 'liga-1',
    difficulty: 'medium',
  },
  {
    name: 'CS Mioveni',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/Cs_mioveni.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'Concordia Chiajna',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/39/Stema_Concordia.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'Corvinul Hunedoara',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Corvinul_Hunedoara.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'ASA Targu Mures',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/ASA_2013_Targu_Mures_logo.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'Foresta Suceava',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d4/ACS_Foresta_Suceava_logo.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'Dunarea Calarasi',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/FC_Dunarea_Clarasi_logo.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'Daco-Getica',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Daco-Getica_Bucure%C8%99ti_logo.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'Metaloglobus',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/FC_Metaloglobus_Bucure%C8%99ti_logo.svg',
    league: 'liga-1',
    difficulty: 'hard',
  },
  {
    name: 'FC Buzau',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/FC_Buz%C4%83u_logo.png',
    league: 'liga-1',
    difficulty: 'hard',
  },
]

const LEAGUES = [
  { id: 'all', name: 'Random', icon: '🌍', flag: null, color: '#6366f1', teams: [] },
  { id: 'premier-league', name: 'Premier League', icon: '🏴', flag: 'https://flagcdn.com/gb-eng.svg', color: '#3d0066', teams: [] },
  { id: 'la-liga', name: 'La Liga', icon: '🇪🇸', flag: 'https://flagcdn.com/es.svg', color: '#ee8707', teams: [] },
  { id: 'bundesliga', name: 'Bundesliga', icon: '🇩🇪', flag: 'https://flagcdn.com/de.svg', color: '#d3010c', teams: [] },
  { id: 'serie-a', name: 'Serie A', icon: '🇮🇹', flag: 'https://flagcdn.com/it.svg', color: '#1a4fba', teams: [] },
  { id: 'ligue-1', name: 'Ligue 1', icon: '🇫🇷', flag: 'https://flagcdn.com/fr.svg', color: '#003b8e', teams: [] },
  { id: 'liga-1', name: 'Liga 1 România', icon: '🇷🇴', flag: 'https://flagcdn.com/ro.svg', color: '#002B7F', teams: [] },
]

const QUESTIONS_COUNT = 5

const DIFFICULTY_LABELS = { easy: 'Ușor', medium: 'Mediu', hard: 'Greu' }

const QUESTIONS_OPTIONS = [5, 10, 15]

const DIFFICULTY_CARDS = [
  { id: 'easy',   label: 'Ușor',  icon: '⭐', color: '#22c55e', desc: '20 secunde / întrebare', seconds: 20 },
  { id: 'medium', label: 'Mediu', icon: '🔥', color: '#f59e0b', desc: '13 secunde / întrebare', seconds: 13 },
  { id: 'hard',   label: 'Greu',  icon: '💀', color: '#ef4444', desc: '8 secunde / întrebare',  seconds: 8 },
]

const ANSWER_MODES = [
  { id: 'type',    label: 'Scrie',  icon: '⌨️', color: '#3b82f6', desc: 'Tasteaza numele echipei' },
  { id: 'choices', label: 'Alege',  icon: '📋', color: '#8b5cf6', desc: '4 variante, alegi una' },
]

const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

function playTickSound(ctx, timeLeft, totalSeconds) {
  const urgency = 1 - timeLeft / totalSeconds
  const baseFreq = 600 + urgency * 500
  const playBeep = (freq, dur, delay = 0) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.value = freq
    const start = ctx.currentTime + delay
    gain.gain.setValueAtTime(0.12, start)
    gain.gain.exponentialRampToValueAtTime(0.001, start + dur)
    osc.start(start)
    osc.stop(start + dur)
  }
  if (timeLeft <= 3) {
    playBeep(baseFreq, 0.04)
    playBeep(baseFreq * 1.15, 0.04, 0.1)
    playBeep(baseFreq * 1.3, 0.05, 0.2)
  } else if (timeLeft <= 5) {
    playBeep(baseFreq, 0.06)
    playBeep(baseFreq * 1.1, 0.06, 0.15)
  } else {
    playBeep(baseFreq, 0.08)
  }
}

function shuffle(arr) {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const NICKNAMES = {
  'barca': 'FC Barcelona',
  'barça': 'FC Barcelona',
  'spurs': 'Tottenham Hotspur',
  'man utd': 'Manchester United',
  'man united': 'Manchester United',
  'united': 'Manchester United',
  'man city': 'Manchester City',
  'city': 'Manchester City',
  'psg': 'Paris Saint-Germain',
  'paris': 'Paris Saint-Germain',
  'bayern': 'Bayern Munchen',
  'munchen': 'Bayern Munchen',
  'munich': 'Bayern Munchen',
  'real': 'Real Madrid',
  'madrid': 'Real Madrid',
  'atletico': 'Atletico Madrid',
  'atleti': 'Atletico Madrid',
  'juve': 'Juventus',
  'milan': 'AC Milan',
  'inter': 'Inter Milan',
  'dortmund': 'Borussia Dortmund',
  'bvb': 'Borussia Dortmund',
  'liverpool': 'Liverpool',
  'arsenal': 'Arsenal',
  'chelsea': 'Chelsea',
  'sevilla': 'Sevilla FC',
  'valencia': 'Valencia CF',
  'athletic': 'Athletic Bilbao',
  'bilbao': 'Athletic Bilbao',
  'sociedad': 'Real Sociedad',
  'newcastle': 'Newcastle United',
  'roma': 'AS Roma',
  'om': 'Olympique Marseille',
  'marseille': 'Olympique Marseille',
  'ol': 'Olympique Lyonnais',
  'lyon': 'Olympique Lyonnais',
  'monaco': 'AS Monaco',
  'lille': 'Lille OSC',
  'losc': 'Lille OSC',
  'nice': 'OGC Nice',
  'rennes': 'Stade Rennais',
  'leipzig': 'RB Leipzig',
  'leverkusen': 'Bayer Leverkusen',
  'frankfurt': 'Eintracht Frankfurt',
  'wolfsburg': 'VfL Wolfsburg',
  'gladbach': 'Borussia Monchengladbach',
  'monchengladbach': 'Borussia Monchengladbach',
  'steaua': 'FCSB',
  'fcsb': 'FCSB',
  'cfr': 'CFR Cluj',
  'cluj': 'CFR Cluj',
  'craiova': 'Universitatea Craiova',
  'dinamo': 'Dinamo Bucuresti',
  'rapid': 'Rapid Bucuresti',
  'sepsi': 'Sepsi OSK',
  'farul': 'Farul Constanta',
  'wolves': 'Wolverhampton',
  'betis': 'Real Betis',
  'villarreal': 'Villarreal CF',
  'espanyol': 'RCD Espanyol',
  'celta': 'Celta Vigo',
  'mallorca': 'RCD Mallorca',
  'fiore': 'Fiorentina',
  'verona': 'Hellas Verona',
  'stuttgart': 'VfB Stuttgart',
  'bremen': 'Werder Bremen',
  'freiburg': 'SC Freiburg',
  'mainz': 'Mainz 05',
  'hoffenheim': 'TSG Hoffenheim',
  'union': 'Union Berlin',
  'augsburg': 'FC Augsburg',
  'bochum': 'VfL Bochum',
  'lens': 'RC Lens',
  'asse': 'Saint-Etienne',
  'saint etienne': 'Saint-Etienne',
  'nantes': 'FC Nantes',
  'brest': 'Stade Brestois',
  'strasbourg': 'RC Strasbourg',
  'toulouse': 'Toulouse FC',
  'reims': 'Stade de Reims',
  'montpellier': 'Montpellier',
  'uta': 'UTA Arad',
  'petrolul': 'Petrolul Ploiesti',
  'botosani': 'FC Botosani',
  'voluntari': 'FC Voluntari',
  'hermannstadt': 'FC Hermannstadt',
  'sibiu': 'FC Hermannstadt',
  'poli iasi': 'Politehnica Iasi',
  'otelul': 'Otelul Galati',
  'arges': 'FC Arges',
}

function localEvaluate(correctTeam, userAnswer) {
  const normalize = (s) =>
    s.toLowerCase().trim().replace(/\s+/g, ' ').replace(/[^a-z0-9 ]/g, '')

  const guess = normalize(userAnswer)
  const correct = normalize(correctTeam.name)

  if (!guess) {
    return { correct: false, feedback: 'Nu ai introdus niciun raspuns.' }
  }

  if (guess === correct) {
    return { correct: true, feedback: 'Corect!' }
  }

  const mapped = NICKNAMES[guess]
  if (mapped && normalize(mapped) === correct) {
    return { correct: true, feedback: `Corect! "${userAnswer}" este o porecla pentru ${correctTeam.name}.` }
  }

  if (correct.includes(guess) && guess.length >= 4) {
    return { correct: true, feedback: `Corect! Raspuns acceptat: ${correctTeam.name}.` }
  }

  return { correct: false, feedback: `Gresit. Raspunsul corect era ${correctTeam.name}.` }
}

async function evaluateWithClaude(correctTeam, userAnswer, apiKey) {
  if (!apiKey) {
    return localEvaluate(correctTeam, userAnswer)
  }

  const prompt = `Esti arbitru pentru un quiz de logo-uri de fotbal. Echipa corecta este "${correctTeam.name}" (${correctTeam.league}). Utilizatorul a raspuns: "${userAnswer}".

Evalueaza daca raspunsul este corect. Accepta:
- greseli de ortografie minore (ex: "Bayren" pentru "Bayern")
- porecle uzuale (Barca = Barcelona, Spurs = Tottenham, Man Utd = Manchester United, PSG = Paris Saint-Germain, Bayern = Bayern Munchen)
- nume scurte sau partiale clare (ex: "Real" pentru "Real Madrid")

Raspunde DOAR cu un obiect JSON valid, fara text suplimentar, in formatul:
{"correct": true sau false, "feedback": "mesaj scurt in romana (max 15 cuvinte)"}`

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 120,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    if (!response.ok) {
      throw new Error(`API a raspuns cu status ${response.status}`)
    }

    const data = await response.json()
    const textBlock = data.content?.find((b) => b.type === 'text')
    if (!textBlock?.text) {
      throw new Error('Raspuns gol de la API')
    }

    const match = textBlock.text.match(/\{[\s\S]*\}/)
    if (!match) {
      throw new Error('Nu s-a gasit JSON in raspuns')
    }

    const parsed = JSON.parse(match[0])
    if (typeof parsed.correct !== 'boolean' || typeof parsed.feedback !== 'string') {
      throw new Error('Format JSON invalid')
    }

    return { correct: parsed.correct, feedback: parsed.feedback }
  } catch (err) {
    console.warn('Claude API a esuat, folosesc comparare locala:', err.message)
    return localEvaluate(correctTeam, userAnswer)
  }
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 3)
}

function getAvailableCount(leagueId) {
  if (!leagueId || leagueId === 'all') return TEAMS.length
  return TEAMS.filter((t) => t.league === leagueId).length
}

function generateChoices(correctTeam) {
  const sameLeague = TEAMS.filter(
    (t) => t.league === correctTeam.league && t.name !== correctTeam.name
  )
  const wrongs = shuffle(sameLeague).slice(0, 3)
  return shuffle([correctTeam, ...wrongs])
}

export default function App() {
  const [screen, setScreen] = useState('league')
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('claudeApiKey') || '')
  const [selectedLeague, setSelectedLeague] = useState(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy')
  const [selectedQuestions, setSelectedQuestions] = useState(5)
  const [selectedAnswerMode, setSelectedAnswerMode] = useState('type')
  const [timeLeft, setTimeLeft] = useState(0)
  const [currentChoices, setCurrentChoices] = useState([])
  const [audioEnabled, setAudioEnabled] = useState(false)
  const audioContextRef = useRef(null)
  const audioEnabledRef = useRef(false)
  const musicRef = useRef(null)
  const [questions, setQuestions] = useState([])
  const [idx, setIdx] = useState(0)
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [results, setResults] = useState([])
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (apiKey) localStorage.setItem('claudeApiKey', apiKey)
  }, [apiKey])

  useEffect(() => {
    audioEnabledRef.current = audioEnabled
    if (!musicRef.current) return
    if (audioEnabled) {
      musicRef.current.volume = 0.25
      musicRef.current.play().catch(() => {})
    } else {
      musicRef.current.pause()
    }
  }, [audioEnabled])

  const toggleAudio = () => {
    setAudioEnabled((prev) => {
      if (!prev && !audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
      }
      return !prev
    })
  }

  useEffect(() => {
    if (screen === 'quiz' && !feedback && !isEvaluating) {
      inputRef.current?.focus()
    }
  }, [screen, idx, feedback, isEvaluating])

  useEffect(() => {
    if (!selectedLeague) return
    const available = getAvailableCount(selectedLeague)
    if (available === 0) return
    if (selectedQuestions <= available) return
    const fit = [...QUESTIONS_OPTIONS].reverse().find((o) => o <= available)
    setSelectedQuestions(fit !== undefined ? fit : QUESTIONS_OPTIONS[0])
  }, [selectedLeague, selectedQuestions])

  useEffect(() => {
    if (screen !== 'quiz') return
    const team = questions[idx]
    if (!team) return
    if (selectedAnswerMode === 'choices') {
      setCurrentChoices(generateChoices(team))
    }
  }, [screen, idx, selectedAnswerMode, questions])

  useEffect(() => {
    if (screen !== 'quiz') return
    if (feedback || isEvaluating) return
    const totalSeconds =
      DIFFICULTY_CARDS.find((d) => d.id === selectedDifficulty)?.seconds || 20
    setTimeLeft(totalSeconds)
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          const team = questions[idx]
          if (team) {
            setFeedback({
              correct: false,
              feedback: `Raspuns Gresit. Raspuns corect: ${team.name}`,
            })
            setResults((r) => [
              ...r,
              { team, userAnswer: '(timp expirat)', correct: false },
            ])
          }
          return 0
        }
        const next = prev - 1
        if (audioEnabledRef.current && audioContextRef.current) {
          playTickSound(audioContextRef.current, next, totalSeconds)
        }
        return next
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [screen, idx, feedback, isEvaluating, selectedDifficulty, questions])

  const goToLeagueSelect = () => {
    setSelectedLeague(null)
    setScreen('league')
  }

  const handleSelectLeague = (leagueId) => {
    setSelectedLeague(leagueId)
  }

  const startQuiz = (leagueId) => {
    const pool =
      leagueId === 'all'
        ? TEAMS
        : TEAMS.filter((t) => t.league === leagueId)
    if (pool.length === 0) return
    const count = Math.min(selectedQuestions, pool.length)
    setSelectedLeague(leagueId)
    setQuestions(shuffle(pool).slice(0, count))
    setIdx(0)
    setAnswer('')
    setFeedback(null)
    setResults([])
    setLogoFailed(false)
    setScreen('quiz')
  }

  const submitChoice = (option) => {
    if (feedback) return
    const team = questions[idx]
    const correct = option.name === team.name
    setFeedback({
      correct,
      feedback: correct
        ? 'Raspunsul este corect, ai castigat 50 de puncte!'
        : `Raspuns Gresit. Raspuns corect: ${team.name}`,
    })
    setResults((prev) => [
      ...prev,
      { team, userAnswer: option.name, correct },
    ])
  }

  const renderLeagueIndicator = () => {
    if (!selectedLeague || screen === 'setup') return null
    const league = LEAGUES.find((l) => l.id === selectedLeague)
    if (!league) return null
    return (
      <div className="league-indicator" style={{ '--league-color': league.color }}>
        <span>{league.icon}</span>
        <span>{league.name}</span>
      </div>
    )
  }

  const submitAnswer = async () => {
    if (!answer.trim() || isEvaluating) return
    const team = questions[idx]
    let isCorrect
    if (!apiKey) {
      isCorrect = localEvaluate(team, answer).correct
    } else {
      setIsEvaluating(true)
      isCorrect = (await evaluateWithClaude(team, answer, apiKey)).correct
      setIsEvaluating(false)
    }
    setFeedback({
      correct: isCorrect,
      feedback: isCorrect
        ? 'Raspunsul este corect, ai castigat 50 de puncte!'
        : `Raspuns Gresit. Raspuns corect: ${team.name}`,
    })
    setResults((prev) => [...prev, { team, userAnswer: answer, correct: isCorrect }])
  }

  const nextQuestion = () => {
    if (idx + 1 >= questions.length) {
      setScreen('results')
    } else {
      setIdx((i) => i + 1)
      setAnswer('')
      setFeedback(null)
      setLogoFailed(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return
    if (feedback) nextQuestion()
    else submitAnswer()
  }

  if (screen === 'league') {
    return (
      <>
      <audio ref={musicRef} src={MUSIC_URL} loop preload="auto" />
      <button
        className="audio-toggle"
        onClick={toggleAudio}
        title={audioEnabled ? 'Dezactiveaza sunet' : 'Activeaza sunet'}
      >
        {audioEnabled ? '🔊' : '🔇'}
      </button>
      <div className="app" key={screen}>
        <style>{`
          .league-header { text-align: center; margin-bottom: 24px; }
          .league-header h1 {
            margin: 0 0 6px;
            font-size: 1.9rem;
            color: #e6edf3;
          }
          .league-header p {
            margin: 0;
            color: #8b949e;
            font-size: 0.95rem;
          }
          .league-grid {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 20px;
          }
          @keyframes cardEnter {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .league-card {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 10px;
            background: #161b22;
            border: 2px solid #30363d;
            border-radius: 8px;
            cursor: pointer;
            color: #e6edf3;
            font-family: inherit;
            text-align: left;
            width: 100%;
            transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s, opacity 0.2s;
            animation: cardEnter 0.4s ease backwards;
          }
          .league-card:hover:not(:disabled),
          .league-card:focus-visible:not(:disabled) {
            border-color: var(--league-color);
            transform: scale(1.02);
            box-shadow: 0 0 24px -4px var(--league-color);
            outline: none;
          }
          .league-card:disabled {
            opacity: 0.4;
            cursor: not-allowed;
          }
          .league-card.selected {
            border-color: var(--league-color);
            transform: scale(1.02);
            box-shadow: 0 0 36px -4px var(--league-color);
          }
          .league-flag {
            width: 38px;
            height: 28px;
            object-fit: cover;
            border-radius: 3px;
            flex-shrink: 0;
            background: #0d1117;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
          }
          .league-icon-box {
            width: 38px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 1.2rem;
            background: #0d1117;
            border-radius: 3px;
            line-height: 1;
          }
          .league-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;
          }

          @keyframes configFadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .config-wrapper {
            animation: configFadeIn 0.4s ease;
            margin-bottom: 16px;
          }
          .config-section { margin-bottom: 20px; }
          .config-title {
            font-size: 1rem;
            color: #e6edf3;
            margin: 0 0 10px;
            font-weight: 600;
          }
          .questions-options { display: flex; gap: 8px; }
          .questions-option {
            flex: 1;
            padding: 14px 8px;
            background: #161b22;
            border: 2px solid #30363d;
            border-radius: 10px;
            color: #e6edf3;
            cursor: pointer;
            font-family: inherit;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            transition: border-color 0.2s, background 0.2s, transform 0.15s;
          }
          .questions-option:hover:not(:disabled) {
            border-color: #3b82f6;
            transform: translateY(-1px);
          }
          .questions-option.active {
            border-color: #3b82f6;
            background: rgba(59, 130, 246, 0.15);
          }
          .questions-option:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .qo-num { font-size: 1.5rem; font-weight: 700; }
          .qo-label { font-size: 0.75rem; color: #8b949e; }
          .qo-warning {
            font-size: 0.65rem;
            color: #facc15;
            margin-top: 2px;
            font-weight: 500;
            line-height: 1.1;
          }
          .difficulty-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
          @media (max-width: 480px) {
            .difficulty-grid { grid-template-columns: repeat(2, 1fr); }
            .difficulty-card:nth-child(3) { grid-column: 1 / -1; }
            .questions-option { padding: 10px 6px; }
            .qo-num { font-size: 1.25rem; }
            .qo-label { font-size: 0.7rem; }
            .qo-warning { font-size: 0.6rem; }
          }
          .mode-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .mode-card {
            background: #161b22;
            border: 2px solid #30363d;
            border-radius: 10px;
            padding: 14px 8px;
            color: #e6edf3;
            cursor: pointer;
            font-family: inherit;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            text-align: center;
            transition: border-color 0.2s, background 0.2s, transform 0.15s;
          }
          .mode-card:hover {
            border-color: var(--mode-color);
            transform: translateY(-1px);
          }
          .mode-card.active {
            border-color: var(--mode-color);
            background: color-mix(in srgb, var(--mode-color) 14%, #161b22);
          }
          .mc-icon { font-size: 1.7rem; line-height: 1; }
          .mc-label { font-size: 0.95rem; font-weight: 600; color: var(--mode-color); }
          .mc-desc { font-size: 0.72rem; color: #8b949e; line-height: 1.25; }
          .difficulty-card {
            background: #161b22;
            border: 2px solid #30363d;
            border-radius: 10px;
            padding: 14px 8px;
            color: #e6edf3;
            cursor: pointer;
            font-family: inherit;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            text-align: center;
            transition: border-color 0.2s, background 0.2s, transform 0.15s;
          }
          .difficulty-card:hover {
            border-color: var(--diff-color);
            transform: translateY(-1px);
          }
          .difficulty-card.active {
            border-color: var(--diff-color);
            background: color-mix(in srgb, var(--diff-color) 14%, #161b22);
          }
          .dc-icon { font-size: 1.9rem; line-height: 1; }
          .dc-label {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--diff-color);
          }
          .dc-desc {
            font-size: 0.7rem;
            color: #8b949e;
            line-height: 1.25;
          }
          .btn-start {
            width: 100%;
            padding: 14px;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
            transition: background 0.2s, transform 0.1s;
          }
          .btn-start:hover:not(:disabled) { background: #2563eb; }
          .btn-start:active:not(:disabled) { transform: scale(0.98); }
          .btn-start:disabled {
            background: #475569;
            cursor: not-allowed;
          }
          .league-card.random {
            background: linear-gradient(135deg,
              color-mix(in srgb, var(--league-color) 18%, #161b22) 0%,
              #161b22 60%);
            border-color: var(--league-color);
          }
          .league-name { font-size: 0.88rem; font-weight: 600; }
          .league-count { font-size: 0.72rem; color: #8b949e; }
          .league-badge {
            flex-shrink: 0;
            font-size: 0.68rem;
            font-weight: 600;
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid;
            white-space: nowrap;
          }
          .league-badge.full {
            background: rgba(34, 197, 94, 0.12);
            border-color: #22c55e;
            color: #4ade80;
          }
          .league-badge.partial {
            background: rgba(234, 179, 8, 0.12);
            border-color: #eab308;
            color: #facc15;
          }
          .btn-back {
            background: transparent;
            border: 1px solid #30363d;
            color: #8b949e;
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            font-family: inherit;
            font-size: 0.95rem;
            transition: background 0.2s, color 0.2s;
          }
          .btn-back:hover {
            background: #161b22;
            color: #e6edf3;
          }
        `}</style>

        <div className="league-header">
          <h1>Alege Liga</h1>
          <p>Din ce campionat vrei sa joci?</p>
        </div>

        <div className="league-grid">
          {LEAGUES.map((league, index) => {
            const count =
              league.id === 'all'
                ? TEAMS.length
                : TEAMS.filter((t) => t.league === league.id).length
            const isRandom = league.id === 'all'
            const questionCount = Math.min(QUESTIONS_COUNT, count)
            const isFull = questionCount >= QUESTIONS_COUNT
            const isSelected = selectedLeague === league.id
            return (
              <button
                key={league.id}
                className={`league-card${isRandom ? ' random' : ''}${isSelected ? ' selected' : ''}`}
                style={{
                  '--league-color': league.color,
                  animationDelay: `${index * 0.06}s`,
                }}
                disabled={count === 0}
                onClick={() => handleSelectLeague(league.id)}
              >
                {league.flag ? (
                  <img src={league.flag} className="league-flag" alt="" />
                ) : (
                  <div className="league-icon-box">{league.icon}</div>
                )}
                <div className="league-info">
                  <div className="league-name">{league.name}</div>
                  <div className="league-count">{count} echipe</div>
                </div>
              </button>
            )
          })}
        </div>

        {selectedLeague && (
          <div className="config-wrapper">
            <div className="config-section">
              <h2 className="config-title">Câte întrebări?</h2>
              <div className="questions-options">
                {QUESTIONS_OPTIONS.map((opt) => {
                  const available = getAvailableCount(selectedLeague)
                  const enough = opt <= available
                  const isActive = selectedQuestions === opt
                  return (
                    <button
                      key={opt}
                      className={`questions-option${isActive ? ' active' : ''}`}
                      disabled={!enough}
                      onClick={() => setSelectedQuestions(opt)}
                    >
                      <span className="qo-num">{opt}</span>
                      <span className="qo-label">întrebări</span>
                      {!enough && (
                        <span className="qo-warning">doar {available} disponibile</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="config-section">
              <h2 className="config-title">Mod de raspuns</h2>
              <div className="mode-grid">
                {ANSWER_MODES.map((mode) => {
                  const isActive = selectedAnswerMode === mode.id
                  return (
                    <button
                      key={mode.id}
                      className={`mode-card${isActive ? ' active' : ''}`}
                      style={{ '--mode-color': mode.color }}
                      onClick={() => setSelectedAnswerMode(mode.id)}
                    >
                      <div className="mc-icon">{mode.icon}</div>
                      <div className="mc-label">{mode.label}</div>
                      <div className="mc-desc">{mode.desc}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="config-section">
              <h2 className="config-title">Nivel de dificultate</h2>
              <div className="difficulty-grid">
                {DIFFICULTY_CARDS.map((diff) => {
                  const isActive = selectedDifficulty === diff.id
                  return (
                    <button
                      key={diff.id}
                      className={`difficulty-card${isActive ? ' active' : ''}`}
                      style={{ '--diff-color': diff.color }}
                      onClick={() => setSelectedDifficulty(diff.id)}
                    >
                      <div className="dc-icon">{diff.icon}</div>
                      <div className="dc-label">{diff.label}</div>
                      <div className="dc-desc">{diff.desc}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {getAvailableCount(selectedLeague) === 0 && (
              <div className="no-teams-warning">
                Nu sunt echipe disponibile pentru aceasta selectie. Alege alta liga.
              </div>
            )}
            <button
              className="btn-start"
              onClick={() => startQuiz(selectedLeague)}
              disabled={getAvailableCount(selectedLeague) === 0}
            >
              Start Quiz →
            </button>
          </div>
        )}

      </div>
      </>
    )
  }

  if (screen === 'results') {
    const score = results.filter((r) => r.correct).length
    const total = questions.length
    const points = score * 50
    const playedLeague = LEAGUES.find((l) => l.id === selectedLeague)
    const pct = total > 0 ? score / total : 0
    const encouragement =
      pct === 1
        ? 'Perfect! Esti un adevarat expert al fotbalului!'
        : pct >= 0.8
          ? 'Excelent! Ai facut o treaba grozava!'
          : pct >= 0.6
            ? 'Foarte bine! Stii multe echipe!'
            : pct >= 0.4
              ? 'Bine! Continua sa exersezi si te vei imbunatati!'
              : pct > 0
                ? 'Nu te descuraja, mai incearca!'
                : 'E doar un inceput! Cu mai multa practica vei reusi!'
    return (
      <>
      <audio ref={musicRef} src={MUSIC_URL} loop preload="auto" />
      <button
        className="audio-toggle"
        onClick={toggleAudio}
        title={audioEnabled ? 'Dezactiveaza sunet' : 'Activeaza sunet'}
      >
        {audioEnabled ? '🔊' : '🔇'}
      </button>
      <div className="app" key={screen}>
        {renderLeagueIndicator()}
        <h1 className="title">Rezultate</h1>
        <div className="card">
          {playedLeague && (
            <p className="played-league">
              Ai jucat: {playedLeague.icon} {playedLeague.name}
            </p>
          )}
          <div className="score-display">{points} puncte</div>
          <p className="score-label">
            {score} din {total} intrebari corecte
          </p>
          <p className="score-encouragement">{encouragement}</p>
          <ul className="results-list">
            {results.map((r, i) => (
              <li key={i} className={`result-item ${r.correct ? 'result-correct' : 'result-wrong'}`}>
                <span className="result-icon">{r.correct ? '✓' : '✗'}</span>
                <div className="result-content">
                  <div className="result-team">{r.team.name}</div>
                  <div className="result-answer">
                    Raspunsul tau: <em>{r.userAnswer}</em>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn" onClick={goToLeagueSelect}>
            Joaca din nou
          </button>
        </div>
      </div>
      </>
    )
  }

  const current = questions[idx]
  const progressPercent = (idx / questions.length) * 100
  const currentLeague = LEAGUES.find((l) => l.id === selectedLeague)
  const teamLeague = LEAGUES.find((l) => l.id === current.league)
  const currentDiffCard = DIFFICULTY_CARDS.find((d) => d.id === selectedDifficulty)
  const fewerThanRequested = questions.length < selectedQuestions

  return (
    <div className="app">
      {renderLeagueIndicator()}
      <h1 className="title">
        Football Logo Quiz
        {fewerThanRequested && (
          <span className="quiz-count-note">
            ({questions.length} intrebari disponibile)
          </span>
        )}
      </h1>
      <div className="progress-row">
        <span className="progress-text">
          Intrebarea {idx + 1} din {questions.length}
        </span>
        {currentDiffCard && (
          <span
            className="difficulty-badge"
            style={{ '--diff-color': currentDiffCard.color }}
          >
            {currentDiffCard.icon} {currentDiffCard.label}
          </span>
        )}
        {currentLeague && (
          <span className="progress-league">
            {currentLeague.icon} {currentLeague.name}
          </span>
        )}
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
      {!feedback && !isEvaluating && (
        <div className={`quiz-timer${timeLeft <= 3 ? ' urgent' : ''}`}>
          ⏱ {timeLeft}s
        </div>
      )}
      <div className="card">
        <div className="logo-wrapper">
          {logoFailed ? (
            <div
              className="logo-fallback-initials"
              style={{ background: teamLeague?.color || '#475569' }}
            >
              {getInitials(current.name)}
            </div>
          ) : (
            <img
              src={current.logo}
              alt="Logo echipa"
              onError={() => setLogoFailed(true)}
            />
          )}
        </div>
        <p className="league-hint">
          Liga: {LEAGUES.find((l) => l.id === current.league)?.name ?? current.league}
        </p>

        {feedback ? (
          <>
            <div className={`feedback ${feedback.correct ? 'feedback-correct' : 'feedback-wrong'}`}>
              {feedback.feedback}
            </div>
            <button className="btn" onClick={nextQuestion}>
              {idx + 1 >= questions.length ? 'Vezi rezultatul' : 'Urmatoarea →'}
            </button>
          </>
        ) : isEvaluating ? (
          <div className="loading">
            <div className="spinner" />
            <p>Claude evalueaza raspunsul...</p>
          </div>
        ) : selectedAnswerMode === 'choices' ? (
          <div className="choices-grid">
            {currentChoices.map((option) => (
              <button
                key={option.name}
                className="choice-btn"
                onClick={() => submitChoice(option)}
              >
                {option.name}
              </button>
            ))}
          </div>
        ) : (
          <>
            <input
              ref={inputRef}
              type="text"
              className="answer-input"
              placeholder="Numele echipei..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="btn"
              onClick={submitAnswer}
              disabled={!answer.trim()}
            >
              Trimite
            </button>
          </>
        )}
      </div>
    </div>
  )
}
