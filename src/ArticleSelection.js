import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css'
import './index.css';

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
    Container,
    List,
    Grid,
    Header,
    Segment,
  } from 'semantic-ui-react'

  import ClydeWWII from './articles/ClydeWW2.js'
  import ClydeAndEdna from './articles/ClydeAndEdna.js'
  import ClydeSanibel from './articles/ClydeSanibel.js'
  import RichardsonFtMyer from './articles/RichardsonFtMyer.js'
  import RichardsonGainesville from './articles/RichardsonGainesville.js'
  import KimFourYearsNavy from './articles/KimFourYearsNavy.js'
  import KimCarolMatch from './articles/KimCarolMatch.js'
  import ClydeBio from './articles/ClydeBio.js'
  import RobertJonesBio from './articles/RobertJonesBio.js'
  import JohnJonesBio from './articles/JohnJonesBio.js'
  import LucyRichardsonBio from './articles/LucyBio.js'
  import WilliamReedBio from './articles/WilliamReedBio.js'
  import MarieZepfBio from './articles/MarieZepfBio.js'
  import MichaelFrankBio from  './articles/MichaelFrankBio.js'
  import EdnaBio from "./articles/EdnaBio";
  import EdnaOwnWords from "./articles/EdnaOwnWords";
  import MarionAbbottBio from "./articles/MarionAbbottBio";
  import WilliamAbbottBio from "./articles/WilliamAbbottBio";
  import CharlesCassidyBio from "./articles/CharlesCassidyBio";
  import GloriaCassidyBio from "./articles/GloriaCassidyBio";
  import MarionCassidyBio from "./articles/MarionCassidyBio";
  import MarionOwnWords from "./articles/MarionOwnWords";
  import ConradZulickBio from "./articles/ConradZulickBio";

  import backgroundSmall from './images/backsplashPlain.png'

  function ArticleSelection() {



    const [displayComponent, setDisplayComponent] = useState(null);

    // const search = new URLSearchParams(props.location.search)
    // const article = search.get("article") 

    // if {fromJones}: true {() => setDisplayComponent(<RobertJonesBio/>)}

    // const If = ({{fromJones}:true, children }) => {
    //   if (condition) {
    //     setDisplayComponent(<RobertJonesBio/>);
    //   }
    // };

    return (
<React.Fragment>
  <div class = "backgroundSmall">
    {/* <img src={backgroundSmall} class="backgroundImage" alt="Background" /> */}
    </div>
<div class = "mazeBackground">

 {/* <Divider />  */}

<Segment id="buttonSegment"  style={{ padding: '0em 0em' }} vertical>
<Grid celled='internally' columns='equal' stackable>
<Grid.Row textAlign='center'>
<Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
    <Header as='h3' style={{ fontSize: '2em' }}>
        Richardson:
    </Header>
    <Button.Group basic vertical>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<ClydeBio/>)}>Clyde Frank Richardson: Biography</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<ClydeWWII/>)}>Clyde Richardson's WWII Service</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<ClydeAndEdna/>)}>Clyde and Edna: From War to Marriage</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<ClydeSanibel/>)} >Clyde on Sanibel Island 1911- 1926</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<KimFourYearsNavy/>)}>Kim Richardson: Four Years in the US Navy</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<KimCarolMatch/>)}>Kim and Carol: A Perfect Match</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<RichardsonFtMyer/>)}>Richardson's in Ft. Myers 1924- 1938</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<RichardsonGainesville/>)}>Richardson's in Gainsville, Florida 1939 - 1979</Button>
    </Button.Group>
    </Grid.Column>

    <Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Reed:
    </Header>
    <Button.Group basic vertical>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<LucyRichardsonBio/>)}>Lucy Richardson: A Biography 1877 - 1960</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<WilliamReedBio/>)}>William Reed: A Biography 1831 - 1921</Button>
    </Button.Group>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Zepf:
    </Header>
    <Button.Group basic vertical>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<MarieZepfBio/>)}>Marie Zepf: A Biography 1886 - 1981</Button>
    </Button.Group>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Frank:
    </Header>
    <Button.Group basic vertical>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<MichaelFrankBio/>)}>Michael Frank: A Biography 1882 - 1950</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<EdnaBio/>)}>Edna Frank: A Biography 1923 - 2008</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<EdnaOwnWords/>)}>Edna Frank: Memories of Brooklyn</Button>
    </Button.Group>
    </Grid.Column>

    <Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
    <Header as='h3' style={{ fontSize: '2em' }}>
        Jones:
    </Header>
    <Button.Group basic vertical>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<RobertJonesBio/>)}>Robert Erskine Jones: Biography</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<JohnJonesBio/>)}>John Robert Jones: A Biography 1878 - 1963</Button>
    </Button.Group>
    </Grid.Column>
    
    <Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Abbott:
    </Header>
    <Button.Group basic vertical>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<MarionAbbottBio/>)}>Marion Abbott: A Biography 1891 - 1974</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<WilliamAbbottBio/>)}>William Abbott: A Biography 1866 - 1933</Button>
    </Button.Group>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Cassidy:
    </Header>
    <Button.Group basic vertical>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<CharlesCassidyBio/>)}>Charles Cassidy: A Biography 1893 - 1983</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<GloriaCassidyBio/>)}>Gloria Cassidy: A Biography 1924 - 1997</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<MarionCassidyBio/>)}>Marion Sandra Cassidy: A Biography 1935 - Present</Button>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<MarionOwnWords/>)}>Marion Knell Cassidy: My Life</Button>
    </Button.Group>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Zulick:
    </Header>
    <Button.Group basic vertical>
        <Button href='#goToDisplayComponent' onClick={() => setDisplayComponent(<ConradZulickBio/>)}>Conrad Zulick: A Biography 1838 - 1926</Button>
    </Button.Group>
    </Grid.Column>
    
</Grid.Row>
</Grid>
</Segment>


    <Segment  style={{ padding: '0em 0em' }} vertical>
<Grid celled='internally' columns='equal' stackable>
<Grid.Row textAlign='center'>
<Grid.Column  style={{ paddingBottom: '5em', paddingTop: '0em' }}>

<div id="goToDisplayComponent">
  <br/>
{displayComponent}
</div>

</Grid.Column>
</Grid.Row>
</Grid>
</Segment>
</div>
</React.Fragment>
)
}

export default ArticleSelection