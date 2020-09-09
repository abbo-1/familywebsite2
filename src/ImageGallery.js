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
import madTifBrianCal from './images/articlePictures/madTifBrianCal.png'
import tomFamily from './images/articlePictures/tomFamily.png'
import orthFamily from './images/articlePictures/orthFamily.png'

import backgroundSmall from './images/backsplashPlain.png'

function ImageGallery() {

    const items = [
        {
        itemId: 'charles',
        mediaUrl: charlesPilot19,
        metaData: {
          type: 'image',
          title: '1919',
          description: "1919 - Charlie in a flying boat.",
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'clydeKim1',
      mediaUrl: clydeKimScooter51,
      metaData: {
        type: 'image',
        title: '1955',
        description: '1955 - Clyde Richardson and his son, Kim Richardson.',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'ednaClyde1',
        mediaUrl: ednaclyde00, 
        metaData: {
          type: 'image',
          title: '2000',
          description: '2000 - Edna and Clyde Richardson.',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'clyde1',
        mediaUrl: clyde, 
        metaData: {
          type: 'image',
          title: '1945',
          description: '1945 - Clyde Richardson in uniform.',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'zulick1',
        mediaUrl: zulick89, 
        metaData: {
          type: 'image',
          title: '1886',
          description: '1886 - Conrad Zulick.',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'edna1',
      mediaUrl: edna27, 
      metaData: {
        type: 'image',
        title: '1927',
        description: '1927 - Edna Caroline Frank (Richardson).',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'maizie1',
        mediaUrl: maizieEdnaJo31,
        metaData: {
          type: 'image',
          title: '1931',
          description: '1931 - The Frank Sisters. Maizie, Edna, & Jo.',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'edna2',
        mediaUrl: edna41, 
        metaData: {
          type: 'image',
          title: '1941',
          description: '1941 - Edna Caroline Frank (Richardson).',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'edna3',
        mediaUrl: edna45, 
        metaData: {
          type: 'image',
          title: '1945',
          description: '1945 - Edna Caroline Frank (Richardson).',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'frankkids1',
      mediaUrl: frankKids79, 
      metaData: {
        type: 'image',
        title: '1979',
        description: '1979 - Frank Siblings. Gus, Helen, Josephine, Maizie, & Edna.',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'ednaclyde2',
        mediaUrl: ednaClyde88,
        metaData: {
          type: 'image',
          title: '1988',
          description: '1988 - Edna & Clyde Richardson.',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'ednaclyde3',
        mediaUrl: clydeEdna96, 
        metaData: {
          type: 'image',
          title: '1996',
          description: '1996 - Edna & Clyde Richardson',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'family1',
        mediaUrl: family07, 
        metaData: {
          type: 'image',
          title: '2007',
          description: '2007 - The Richardson Family.',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'edna4',
      mediaUrl: edna08, 
      metaData: {
        type: 'image',
        title: '2008',
        description: '2008 - Edna Richardson.',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'edna5',
        mediaUrl: edna23, 
        metaData: {
          type: 'image',
          title: '1923',
          description: '1923 - Edna Caroline Frank (Richardson) in New York',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'gloriarobert1',
        mediaUrl: gloriaRobertWedding47, 
        metaData: {
          type: 'image',
          title: '1947',
          description: '1947 - Gloria Cassidy & Robert Jones on their wedding day.',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'gloria1',
        mediaUrl: gloria48,
        metaData: {
          type: 'image',
          title: '1948',
          description: '1948 - Gloria Margaret Cassidy (Jones) (Haddock)',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'gloria2',
      mediaUrl: gloriaJoe70,
      metaData: {
        type: 'image',
        title: '1970',
        description: '1970 - Gloria Margaret (Cassidy) (Jones) Haddock',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'gloria3',
        mediaUrl: gloria77, 
        metaData: {
          type: 'image',
          title: '1977',
          description: '1977 - Gloria Margaret (Cassidy) (Jones) Haddock',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'gloriaanddaughters1',
        mediaUrl: carolGloriaKathy63,
        metaData: {
          type: 'image',
          title: '1963',
          description: '1963 - Carol Anne Jones (Richardson), Gloria Margaret (Cassidy) Jones, and Kathy Jones', 
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'gloria4',
        mediaUrl: gloriaJoe90, 
        metaData: {
          type: 'image',
          title: '1990',
          description: '1990 - Gloria & Joe Haddock  ',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'john1',
      mediaUrl: johnJones05, 
      metaData: {
        type: 'image',
        title: '1905',
        description: '1905 - John Robert Jones',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'john2',
        mediaUrl: johnMarion16, 
        metaData: {
          type: 'image',
          title: '1916',
          description: '1916 - John & Marion Jones',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'john3',
        mediaUrl: johnJones23, 
        metaData: {
          type: 'image',
          title: '1923 Jones',
          description: '1923 - John Robert Jones',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'john4',
        mediaUrl: johnJones13,
        metaData: {
          type: 'image',
          title: '1913 Jones',
          description: '1913 - John Robert Jones',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'carol1',
      mediaUrl: carol80, 
      metaData: {
        type: 'image',
        title: '1980',
        description: '1980 - Carol Anne Jones (Richardson)',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'carolkim1',
        mediaUrl: ceremony81, 
        metaData: {
          type: 'image',
          title: '1981',
          description: '1981 - The wedding of Carol Ann Jones & Kim Frank Richardson',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'carol2',
        mediaUrl: carolparentswedding81, 
        metaData: {
          type: 'image',
          title: '1981 Carol & Parents',
          description: '1981 - Carol Ann Jones Richardson with her parents on her wedding day',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'carol3',
        mediaUrl: wedding81, 
        metaData: {
          type: 'image',
          title: '1981 Richardson Wedding',
          description: '1981 - The wedding of Carol Ann Jones & Kim Frank Richardson',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'carol4',
      mediaUrl: weddingparty81, 
      metaData: {
        type: 'image',
        title: '1981 Richardson Wedding Party',
        description: '1981 - Carol Ann Jones & Kim Frank Richardsons wedding party',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'scott1',
        mediaUrl: scott84, 
        metaData: {
          type: 'image',
          title: '1984 Scott',
          description: '1984 - Scott Richardson',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'scott2',
        mediaUrl: scott85, 
        metaData: {
          type: 'image',
          title: '1985 Scott',
          description: '1985 - Scott Richardson',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'kev1',
        mediaUrl: kevin88, 
        metaData: {
          type: 'image',
          title: '1988 Kevin',
          description: '1988 - Kevin Richardson',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'kev2',
      mediaUrl: kevin89,
      metaData: {
        type: 'image',
        title: '1989 Kevin',
        description: '1989 - Kevin Richardson',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'scottkev',
        mediaUrl: scottkevin88, 
        metaData: {
          type: 'image',
          title: '1988 Scott & Kevin',
          description: '1988 - Brothers, Scott & Kevin Richardson',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'family2',
        mediaUrl: familyPortrait91, 
        metaData: {
          type: 'image',
          title: '1991 Richardsons',
          description: '1991 - Richardson Family Portrait',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'scottandparents',
        mediaUrl: scottkimcarol93, 
        metaData: {
          type: 'image',
          title: '1993 Scott Kim Carol',
          description: '1993 - Scott, Kim, & Carol Richardson',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'columbia',
      mediaUrl: columbia95, 
      metaData: {
        type: 'image',
        title: '1995 Scott Kevin',
        description: '1995 - Scott & Kevin in front of the Spaceshuttle Columbia',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'disney',
        mediaUrl: disney96, 
        metaData: {
          type: 'image',
          title: '1996 Disney',
          description: '1996 - Disney World',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'scottkev2',
        mediaUrl: scottkevin97,
        metaData: {
          type: 'image',
          title: '1997 Scott Kevin',
          description: '1997 - Scott & Kevin Richardson',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'kevkim1',
        mediaUrl: kimkevinlondo03, 
        metaData: {
          type: 'image',
          title: '2003 Kim Kevin',
          description: '2003 - Kim & Kevin on the London Eye',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'kimandsons',
      mediaUrl: kimandboys88,
      metaData: {
        type: 'image',
        title: '1988 Kim with sons',
        description: '1988 - Kim Richardson and his sons',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'kim2',
        mediaUrl: kimgreatsitkin,
        metaData: {
          type: 'image',
          title: '1966 Kim',
          description: '1966 - Kim Richardson aboard the USS Great Sitkin ',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'kim3',
        mediaUrl: dk3kim, 
        metaData: {
          type: 'image',
          title: '1967 Kim',
          description: '1967 - Petty Officier Third Class Kim Richardson',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'kim4',
        mediaUrl: italianriveria, 
        metaData: {
          type: 'image',
          title: '1967 Kim Italy',
          description: '1967 - Kim Richardson on the Italian Riviera',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'kim5',
      mediaUrl: danpatkim68, 
      metaData: {
        type: 'image',
        title: '1968 Kim with buddies',
        description: '1968 - Kim Richardson and his navy buddies',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'kim6',
        mediaUrl: kimdoncharliecar, 
        metaData: {
          type: 'image',
          title: '1968 Kim with buddies 2',
          description: '1968 - Kim Richardson and his navy buddies',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'kim7',
        mediaUrl: kimdonpat68, 
        metaData: {
          type: 'image',
          title: '1968 Kim with buddies 3',
          description: '1968 - Kim Richardson and his navy buddies',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'kim8',
        mediaUrl: donkimpat68, 
        metaData: {
          type: 'image',
          title: '1968 Kim with buddies 4',
          description: '1968 - Kim Richardson and his navy buddies',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'kim9',
      mediaUrl: kimtina, 
      metaData: {
        type: 'image',
        title: '1968 Kim 2',
        description: '1968 - Kim Richardson',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'kim10',
        mediaUrl: cargilbrta86,  
        metaData: {
          type: 'image',
          title: '1968 Kim 3',
          description: '1968 - Kim Richardson',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'lcuy1',
        mediaUrl: lucy1901, 
        metaData: {
          type: 'image',
          title: '1901 Lucy',
          description: '1901 - Lucy Hayes Reed',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'frank1',
        mediaUrl: frank1932, 
        metaData: {
          type: 'image',
          title: '1932 Frank',
          description: '1932 - Frank Richardson',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'clyde7',
      mediaUrl: clyde1932, 
      metaData: {
        type: 'image',
        title: '1932 Clyde',
        description: '1932 - Clyde Richardson',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'lucy3',
        mediaUrl: lucy45, 
        metaData: {
          type: 'image',
          title: '1945 Lucy',
          description: '1945 - Lucy Hayes Reed',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'marie1',
        mediaUrl: marieZepf00, 
        metaData: {
          type: 'image',
          title: '1900 Marie',
          description: '1900 - Marie Zepf',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'zepfs',
        mediaUrl: zepfFranks48, 
        metaData: {
          type: 'image',
          title: '1948 Marie',
          description: '1948 - Marie (Mamie) & Michael Frank',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'zepfs2',
      mediaUrl: zepf58, 
      metaData: {
        type: 'image',
        title: '1958 Franks',
        description: '1958 – Helen, Joe, Maizie, and Marie Frank',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'zepfs3',
        mediaUrl: zepf76, 
        metaData: {
          type: 'image',
          title: '1976 Franks',
          description: '1976 – Marie, Maribeth, Helen, Jay, Jo, and Maizie',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'marion1',
        mediaUrl: marionBetty00,  
        metaData: {
          type: 'image',
          title: '1900 Marion',
          description: '1900 - Marion & Betty Abbott',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'marion2',
        mediaUrl: marion13, 
        metaData: {
          type: 'image',
          title: '1913 Marion',
          description: '1913 - Marion Abbott',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'marion3',
      mediaUrl: marion15, 
      metaData: {
        type: 'image',
        title: '1915 Marion',
        description: '1915 - Marion Abbott',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'marion4',
        mediaUrl: marionAbbott58, 
        metaData: {
          type: 'image',
          title: '1958 Marion',
          description: '1958 - Marion Abbott',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'sandy1',
        mediaUrl: sandyBairds65, 
        metaData: {
          type: 'image',
          title: '1965 Sandy',
          description: '1965 - Sandy & Sandy Baird on their wedding day',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'sandys2',
        mediaUrl: sandy07, 
        metaData: {
          type: 'image',
          title: '2007 Sandy',
          description: '2007 - Sandy Baird sitting center. Standing, Kathy Jones & Jamie Baird',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'michael1',
      mediaUrl: michaelFrank21, 
      metaData: {
        type: 'image',
        title: '1921 Michael',
        description: '1921 - Michael Frank',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'oliver1',
        mediaUrl: oliver1932, 
        metaData: {
          type: 'image',
          title: '1932 Oliver',
          description: '1932 - Oliver Richardson',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'ftmyer',
        mediaUrl: ftMyerFootball, 
        metaData: {
          type: 'image',
          title: '1931 Football',
          description: '1931 Football Team – Clyde is on middle row left end and Ben (Frank) is on the middle row right, second from end',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'clydeedna7',
        mediaUrl: clydeEdnaMeet42, 
        metaData: {
          type: 'image',
          title: '1942 Clyde Edna',
          description: '1942 - Clyde Richardson and Edna Frank meet',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'clydeedna8',
      mediaUrl: clydeEdnaBabyKim, 
      metaData: {
        type: 'image',
        title: '1947 Edna Clyde Kim',
        description: '1947 - Edna & Clyde Richardson holding their son Kim',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'family5',
        mediaUrl: familyAndBill55, 
        metaData: {
          type: 'image',
          title: '1955 Clyde Edna Gail Kim',
          description: '1955 - Clyde, Edna, Gail & Kim (far right)',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'gailkaren1',
        mediaUrl: gailKaren60,
        metaData: {
          type: 'image',
          title: '1960 Gail Karen',
          description: '1960 - Gail & Karen Richardson',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'jay1',
        mediaUrl: jay58, 
        metaData: {
          type: 'image',
          title: '1958 Jay',
          description: '1958 - Jay Richardson',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'family8',
      mediaUrl: familyPortrait79, 
      metaData: {
        type: 'image',
        title: '1979 Richardsons',
        description: '1979 - Richardson family portrait',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'robert4',
        mediaUrl: robert43,
        metaData: {
          type: 'image',
          title: '1943 Robert',
          description: '1943 - Robert Erskine Jones',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'robert5',
        mediaUrl: robertCrew45, 
        metaData: {
          type: 'image',
          title: '1945 Robert',
          description: '1945 - Robert Erskine Jones (seen standing far right)',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'robert6',
        mediaUrl: robertKellion45, 
        metaData: {
          type: 'image',
          title: '1945 Robert 2',
          description: '1945 - Robert Erskine Jones (on left)',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'robert7',
      mediaUrl: robertGloriaWedding47, 
      metaData: {
        type: 'image',
        title: '1947 Robert Gloria',
        description: '1947 - Robert Jones & Gloria Cassidy at their wedding',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'robert8',
        mediaUrl: robertKathyCarol56, 
        metaData: {
          type: 'image',
          title: '1956 Robert Kathy Carol',
          description: '1956 - Robert Jones with his daughters, Kathy & Carol',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'bill1',
        mediaUrl: williamAbbott25, 
        metaData: {
          type: 'image',
          title: '1925 Bill',
          description: '1925 - William (Bill) Abbott',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'oliver3',
        mediaUrl: oliver15, 
        metaData: {
          type: 'image',
          title: '1915 Oliver',
          description: '1915 - Oliver Richardson',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'willreed1',
      mediaUrl: williamReed20,
      metaData: {
        type: 'image',
        title: '1920 Will',
        description: '1920 - William Reed',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'robert9',
        mediaUrl: robertMarion26, 
        metaData: {
          type: 'image',
          title: '1926 Robert Marion',
          description: '1926 - Robert Jones and his mother, Marion',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'gail4',
        mediaUrl: gailKim58, 
        metaData: {
          type: 'image',
          title: '1958 Gail Kim',
          description: '1958 - Gail & Kim Richardson',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'kim9',
        mediaUrl: kim48, 
        metaData: {
          type: 'image',
          title: '1948 Kim 5',
          description: '1948 - Kim Richardson',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'petemaribeth',
      mediaUrl: peteMaribeth55, 
      metaData: {
        type: 'image',
        title: '1955 Pete Maribeth',
        description: '1955 - Pete & Maribeth',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'dottie1',
        mediaUrl: dottieGus38, 
        metaData: {
          type: 'image',
          title: '1938 Dottie Gus',
          description: '1938 - Dottie & Gus',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'charles8',
        mediaUrl: charles32, 
        metaData: {
          type: 'image',
          title: '1932 Charles',
          description: '1932 - Charles Cassidy',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'charles9',
        mediaUrl: charlesMarion19, 
        metaData: {
          type: 'image',
          title: '1919 Charles Marion',
          description: '1919 - Charles & Marion Cassidy',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'charles10',
      mediaUrl: charles82, 
      metaData: {
        type: 'image',
        title: '1982 Charles',
        description: '1982 - Charles Cassidy',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'clydeedna11',
        mediaUrl: clydeEdnaWedding, 
        metaData: {
          type: 'image',
          title: '1946 Clyde Edna',
          description: '1946 - Clyde & Edna on their wedding day',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'ftmeyerbball',
        mediaUrl: ftMyerBasketball, 
        metaData: {
          type: 'image',
          title: 'Ft Myer Basketball',
          description: 'Ft Myers High School Basketball Team     Clyde on left and Frank on the right',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'clyde13',
        mediaUrl: clydeNatGuard, 
        metaData: {
          type: 'image',
          title: '1938 Clyde',
          description: '1938 - Clyde Richardson (left)',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'clyde14',
      mediaUrl: clyde1941,
      metaData: {
        type: 'image',
        title: '1941 Clyde 7',
        description: '1941 - Clyde Richardson',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'clyde15',
        mediaUrl: clyde1945, 
        metaData: {
          type: 'image',
          title: '1945 Clyde 8',
          description: '1945 - Clyde Richardson',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'clydekim3',
        mediaUrl: clyekim47, 
        metaData: {
          type: 'image',
          title: '1947 Clyde Kim',
          description: '1947 - Clyde Richardson & son, Kim',
          focalPoint: [0, 0],
        }
      },
      {
      itemId: 'gail8',
      mediaUrl: gail58, 
      metaData: {
        type: 'image',
        title: '1958 Gail',
        description: '1958 - Gail Richardson',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'sheehanFam',
        mediaUrl: madTifBrianCal, 
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '2018 - Sheehan Family. Madison, Tiffany, Brian, and Calan',
          focalPoint: [0, 0],
        }
      },
    {
        itemId: 'allredFam',
        mediaUrl: tomFamily,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '2014 - Allred Family. Kaylin, Austin, Tom, Levi, and Brandy',
          focalPoint: [0, 0],
        }
      },
      {
        itemId: 'orth',
        mediaUrl: orthFamily,
        metaData: {
          type: 'image',
          title: 'sample-title',
          description: '2019 - Orth Family. Donnie, Brandy, Tiffany, Jerett, Gail',
          focalPoint: [0, 0],
        }
      },
    ];

    

    // The options of the gallery (from the playground current state)
    const options = {
      galleryLayout: 0,
      imageMargin: 10,
      itemClick: 'fullscreen',
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
        customInfoRenderer={itemProps => <div>ITEM{itemProps.description}</div>}
      />

</Segment>


</div>
</div>
)
}

export default ImageGallery