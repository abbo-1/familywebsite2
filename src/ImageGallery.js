import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css'
// import './index.css';

import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  import 'semantic-ui-css/semantic.min.css'
  import {
    Button,
    Divider,
    Grid,
    Header,
    Segment,
  } from 'semantic-ui-react'


import charlesPilot19 from './images/articlePictures/charlesPilot19.png'
import charles32 from './images/articlePictures/charles32.png'
import charlesMarion19 from './images/articlePictures/charlesMarion19.png'
import charles82 from './images/articlePictures/charles82.png'
import clydeEdnaWedding from './images/articlePictures/clydeEdnaWedding.png'
import ftMyerBasketball from './images/articlePictures/ftMyerBasketball.png'
import clydeNatGuard from './images/articlePictures/clydeNatGuard.png'
import clyde1941 from './images/articlePictures/clyde1941.png'
import clyde1945 from './images/articlePictures/clyde1945.png'
import clyekim47 from './images/articlePictures/clyekim47.png'
import gail58 from './images/articlePictures/gail58.png'
import clydeKimScooter51 from './images/articlePictures/clydeKimScooter55.png'
import ednaclyde00 from './images/articlePictures/ednaclyde00.png'
import clyde from './images/articlePictures/clydeService.png'
import zulick89 from './images/articlePictures/zulick89.png'
import edna27 from './images/articlePictures/edna27.png'
import maizieEdnaJo31 from './images/articlePictures/maizieEdnaJo31.png'
import edna41 from './images/articlePictures/edna41.png'
import edna45 from './images/articlePictures/edna45.png'
import frankKids79 from './images/articlePictures/frankKids79.png'
import ednaClyde88 from './images/articlePictures/ednaClyde88.png'
import clydeEdna96 from './images/articlePictures/clydeEdna96.png'
import family07 from './images/articlePictures/family07.png'
import edna08 from './images/articlePictures/edna08.png'
import edna23 from './images/articlePictures/edna23.png'
import gloriaRobertWedding47 from './images/articlePictures/gloriaRobertWedding47.png'
import gloria48 from './images/articlePictures/gloria48.png'
import gloriaJoe70 from './images/articlePictures/gloriaJoe70.png'
import gloria77 from './images/articlePictures/gloria77.png'
import carolGloriaKathy63 from './images/articlePictures/carolGloriaKathy63.png'
import gloriaJoe90 from './images/articlePictures/gloriaJoe90.png'
import johnJones05 from './images/articlePictures/johnJones05.png'
import johnMarion16 from './images/articlePictures/johnMarion16.png'
import johnJones23 from './images/articlePictures/johnJones23.png'
import johnJones13 from './images/articlePictures/johnJones13.png'
import carol80 from './images/articlePictures/carol80.png'
import ceremony81 from './images/articlePictures/ceremony81.png'
import carolparentswedding81 from './images/articlePictures/carolparentswedding81.png'
import wedding81 from './images/articlePictures/wedding81.png'
import weddingparty81 from './images/articlePictures/weddingparty81.png'
import scott84 from './images/articlePictures/scott84.png'
import scott85 from './images/articlePictures/scott85.png'
import kevin88 from './images/articlePictures/kevin88.png'
import kevin89 from './images/articlePictures/kevin89.png'
import scottkevin88 from './images/articlePictures/scottkevin88.png'
import familyPortrait91 from './images/articlePictures/familyPortrait91.png'
import scottkimcarol93 from './images/articlePictures/scottkimcarol93.png'
import columbia95 from './images/articlePictures/columbia95.png'
import disney96 from './images/articlePictures/disney96.png'
import scottkevin97 from './images/articlePictures/scottkevin97.png'
import kimkevinlondo03 from './images/articlePictures/kimkevinlondo03.png'
import kimandboys88 from './images/articlePictures/kimandboys88.png'
import kimgreatsitkin from './images/articlePictures/kimgreatsitkin.png'
import dk3kim from './images/articlePictures/dk3kim.png'
import italianriveria from './images/articlePictures/italianriveria.png'
import danpatkim68 from './images/articlePictures/danpatkim68.png'
import kimdoncharliecar from './images/articlePictures/kimdoncharliecar.png'
import kimdonpat68 from './images/articlePictures/kimdonpat68.png'
import donkimpat68 from './images/articlePictures/donkimpat68.png'
import kimtina from './images/articlePictures/kimtina.png'
import cargilbrta86 from './images/articlePictures/cargilbrta86.png'
import lucy1901 from './images/articlePictures/lucy1901.png'
import frank1932 from './images/articlePictures/frank1932.png'
import clyde1932 from './images/articlePictures/clyde1932.png'
import lucy45 from './images/articlePictures/lucy45.png'
import marieZepf00 from './images/articlePictures/marieZepf00.png'
import zepfFranks48 from './images/articlePictures/zepfFranks48.png'
import zepf58 from './images/articlePictures/zepf58.png'
import zepf76 from './images/articlePictures/zepf76.png'
import marionBetty00 from './images/articlePictures/marionBetty00.png'
import marion13 from './images/articlePictures/marion13.png'
import marion15 from './images/articlePictures/marion15.png'
import marionAbbott58 from './images/articlePictures/marionAbbott58.png'
import sandyBairds65 from './images/articlePictures/sandyBairds65.png'
import sandy07 from './images/articlePictures/sandy07.png'
import michaelFrank21 from './images/articlePictures/michaelFrank21.png'
import oliver1932 from './images/articlePictures/oliver1932.png'
import ftMyerFootball from './images/articlePictures/ftMyerFootball.png'
import clydeEdnaMeet42 from './images/articlePictures/clydeEdnaMeet42.png'
import clydeEdnaBabyKim from './images/articlePictures/clydeEdnaBabyKim.png'
import familyAndBill55 from './images/articlePictures/familyAndBill55.png'
import gailKaren60 from './images/articlePictures/gailKaren60.png'
import jay58 from './images/articlePictures/jay58.png'
import familyPortrait79 from './images/articlePictures/familyPortrait79.png'
import robert43 from './images/articlePictures/robert43.png'
import robertCrew45 from './images/articlePictures/robertCrew45.png'
import robertKellion45 from './images/articlePictures/robertKellion45.png'
import robertGloriaWedding47 from './images/articlePictures/robertGloriaWedding47.png'
import robertKathyCarol56 from './images/articlePictures/robertKathyCarol56.png'
import williamAbbott25 from './images/articlePictures/williamAbbott25.png'
import robertMarion26 from './images/articlePictures/robertMarion26.png'
import oliver15 from './images/articlePictures/oliver15.png'
import williamReed20 from './images/articlePictures/williamReed20.png'
import gailKim58 from './images/articlePictures/gailKim58.png'
import peteMaribeth55 from './images/articlePictures/peteMaribeth55.png'
import kim48 from './images/articlePictures/kim48.png'
import dottieGus38 from './images/articlePictures/dottieGus38.png'
// import williamReed20 from './images/articlePictures/williamReed20.png'

import backgroundSmall from './images/backsplashPlain.png'

function ImageGallery() {

    const items = [
        {
        itemId: 'sample-id',
        mediaUrl: charlesPilot19,
        metaData: {
          type: 'image',
          title: 'samaasddddddddtitlasdase',
          description: "1919 - Charlie in a flying boat.",
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: clydeKimScooter51,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: '1955 - Clyde Richardson and his son, Kim Richardson.',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: ednaclyde00, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '2000 - Edna and Clyde Richardson.',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: clyde, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Clyde Richardson in uniform.',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: zulick89, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1886 - Conrad Zulick.',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: edna27, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: '1927 - Edna Caroline Frank (Richardson).',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: maizieEdnaJo31,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1931 - The Frank Sisters. Maizie, Edna, & Jo.',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: edna41, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1941 - Edna Caroline Frank (Richardson).',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: edna45, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1945 - Edna Caroline Frank (Richardson).',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: frankKids79, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: '1979 - Frank Siblings. Gus, Helen, Josephine, Maizie, & Edna.',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: ednaClyde88,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1988 - Edna & Clyde Richardson.',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: clydeEdna96, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1996 - Edna & Clyde Richardson',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: family07, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '2007 - The Richardson Family.',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: edna08, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: '2008 - Edna Richardson.',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: edna23, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1923 - Edna Caroline Frank (Richardson) in New York',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: gloriaRobertWedding47, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1947 - Gloria Cassidy & Robert Jones on their wedding day.',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: gloria48,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1948 - Gloria Margaret Cassidy (Jones) (Haddock)',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: gloriaJoe70,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: '1970 - Gloria Margaret (Cassidy) (Jones) Haddock',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: gloria77, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1977 - Gloria Margaret (Cassidy) (Jones) Haddock',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: carolGloriaKathy63,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1963 - Carol Anne Jones (Richardson), Gloria Margaret (Cassidy) Jones, and Kathy Jones', 
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: gloriaJoe90, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1990 - Gloria & Joe Haddock  ',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: johnJones05, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: '1905 - John Robert Jones',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: johnMarion16, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1916 - John & Marion Jones',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: johnJones23, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1923 - John Robert Jones',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: johnJones13,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1913 - John Robert Jones',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: carol80, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: '1980 - Carole Anne Jones (Richardson)',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: ceremony81, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1981 - The wedding of Carol Ann Jones & Kim Frank Richardson',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: carolparentswedding81, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '1981 - Carol Ann Jones Richardson with her parents on her wedding day',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: wedding81, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: weddingparty81, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: scott84, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: scott85, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: kevin88, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: kevin89,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: scottkevin88, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: familyPortrait91, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: scottkimcarol93, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: columbia95, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: disney96, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: scottkevin97,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: kimkevinlondo03, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: kimandboys88,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: kimgreatsitkin,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: dk3kim, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: italianriveria, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: danpatkim68, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: kimdoncharliecar, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: kimdonpat68, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: donkimpat68, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: kimtina, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: cargilbrta86,  
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: lucy1901, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: frank1932, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: clyde1932, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: lucy45, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: marieZepf00, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: zepfFranks48, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: zepf58, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: zepf76, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: marionBetty00,  
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: marion13, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: marion15, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: marionAbbott58, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: sandyBairds65, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: sandy07, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: michaelFrank21, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: oliver1932, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: ftMyerFootball, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: clydeEdnaMeet42, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: clydeEdnaBabyKim, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: familyAndBill55, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: gailKaren60,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: jay58, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: zepfFranks48, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: familyPortrait79, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: robert43,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: robertCrew45, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: robertKellion45, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: robertGloriaWedding47, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: robertKathyCarol56, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: williamAbbott25, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: oliver15, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: williamReed20,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: robertMarion26, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: gailKim58, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: kim48, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: peteMaribeth55, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: dottieGus38, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: charles32, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: charlesMarion19, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: charles82, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: clydeEdnaWedding, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: ftMyerBasketball, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: clydeNatGuard, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: clyde1941,
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sample-id',
        mediaUrl: clyde1945, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sample-id',
        mediaUrl: gailKim58, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sample-id',
        mediaUrl: clyekim47, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: 'Charles flying',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'sample-id',
      mediaUrl: gail58, 
      metaData: {
        type: 'image',
        title: 'sample-title',
        description: 'Charles flying',
        focalPoint: [0, 0],
      }
    },
    // {
    //     itemId: 'sample-id',
    //     mediaUrl: dottieGus38, 
    //     metaData: {
    //       type: 'image',
    //       title: 'sample-title',
    //       description: 'Charles flying',
    //       focalPoint: [0, 0],
    //     }
    //   },
    // {
    //     itemId: 'sample-id',
    //     mediaUrl: gailKaren60,
    //     metaData: {
    //       type: 'image',
    //       title: 'sample-title',
    //       description: 'Charles flying',
    //       focalPoint: [0, 0],
    //     }
    //   },
    ];



    // The options of the gallery (from the playground current state)
    const options = {
      galleryLayout: -1,
      imageMargin: 10,
      itemClick: 'expand',
      imageHoverAnimation: 'BLUR',
    };

    // The size of the gallery container. The images will fit themselves in it
    const container = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

    // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
    const scrollingElement = window;

    return (
<div>
<div class = "backgroundSmall">
    {/* <img src={backgroundSmall} class="backgroundImage" alt="Background" /> */}
    </div>
<div class = "mazeBackground">
<Segment  style={{ padding: '0em 0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                <br/>
                <Header as='h3' style={{ fontSize: '2em' }}>Image Gallery </Header>
                <br/>
            </Grid.Column>
        </Grid.Row>
        </Grid>
</Segment>

 {/* <Divider />  */}

<Segment  style={{ padding: '1em 1em' }} vertical>

<ProGallery
        items={items}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
        customHoverRenderer={itemProps => <div>{itemProps.description}</div>}
        // customHoverRenderer={itemProps => <div>Hover #{itemProps.idx}</div>}
      />

</Segment>


</div>
</div>
)
}

export default ImageGallery