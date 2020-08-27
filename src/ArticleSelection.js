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
    Grid,
    Header,
    Segment,
  } from 'semantic-ui-react'

  import ClydeWWII from './articles/ClydeWW2.js'
  import ClydeAndEdna from './articles/ClydeAndEdna.js'
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


  function ArticleSelection() {
    const [visible, setVisible] = useState(false);

    function makeVisible() {
      setVisible(!visible);
    }



  //   const [isVisible, setVisibility] = useState(null);

  //   function makeVisible () {
  //     setVisibility = useState(true)
  //   }

  //   useEffect(() => {
  //     setVisibility(visible); // update the state
  // }, [visible]); // hook is only triggered when value changes

    // function loadIt(){
    //   console.log("brownsound")
    // }

    return (
//   export const ArticleSelection = ({ visible, children }) => {

//     const [isVisible, setVisibility] = useState(null);

//     useEffect(() => {
//       setVisibility(visible); // update the state
//   }, [visible]);

//     return children;
// };
// afffffffffffffffffff
// afffffffffffffffffff
// afffffffffffffffffff
// afffffffffffffffffff
// afffffffffffffffffff
// class ArticleSelection extends Component {
//   render() {
//     state = {
//       isActive:false
//    }

   
//   handleShow = ()=>{
//     this.setState({
//         isActive: true
//     })
// }

// handleHide = () =>{
//     this.setState({
//         isActive: false
//     })
// }
 
// return(
//   <div>
//   {this.state.isActive && <h1>Hello react</h1>}
//    {this.state.isActive ?(
//       <HideButton onClick={this.handleHide}/>
//    ) : (
//      <ShowButton onClick={this.handleShow}/>
//    )}
// </div>
//     )
// }
// }
// kifggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
// const ArticleSelection = () => (
<React.Fragment>
<div class = "mazeBackground">

 <Divider /> 

<Segment id="buttonSegment"  style={{ padding: '0em 0em' }} vertical>
<Grid celled='internally' columns='equal' stackable>
<Grid.Row textAlign='center'>
<Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
    <Header as='h3' style={{ fontSize: '2em' }}>
        Richardson:
    </Header>
    <Button.Group basic vertical>
        <Button  id="buttonList">Clyde Frank Richardson: Biography</Button>
        <Button onClick={makeVisible}>Clyde Richardson's WWII Service</Button>
        <Button class="articleButtons">Clyde and Edna: From War to Marriage</Button>
        <Button  class="articleButtons">Clyde's Memories of Sanibel Island 1911- 1926</Button>
        <Button class="ui button">Kim Richardson: Four Years in the US Navy</Button>
        <Button>Kim and Carol: A Perfect Match</Button>
        <Button>Richardson's in Ft. Myers 1924- 1938</Button>
        <Button>Richardson's in Gainsville, Florida 1939 - 1979</Button>
    </Button.Group>
    </Grid.Column>

    <Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Reed:
    </Header>
    <Button.Group basic vertical>
        <Button>Lucy Richardson: A Biography 1877 - 1960</Button>
        <Button>William Reed: A Biography 1831 - 1921</Button>
    </Button.Group>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Zepf:
    </Header>
    <Button.Group basic vertical>
        <Button>Marie Zepf: A Biography 1886 - 1981</Button>
    </Button.Group>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Frank:
    </Header>
    <Button.Group basic vertical>
        <Button>Michael Frank: A Biography 1882 - 1950</Button>
        <Button>Edna Frank: A Biography 1923 - 2008</Button>
        <Button>Edna Frank: Memories of Brooklyn</Button>
    </Button.Group>
    </Grid.Column>

    <Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
    <Header as='h3' style={{ fontSize: '2em' }}>
        Jones:
    </Header>
    <Button.Group basic vertical>
        <Button>John Erskine Jones: Biography</Button>
        <Button>John Robert Jones: A Biography 1878 - 1963</Button>
    </Button.Group>
    </Grid.Column>
    
    <Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Abbott:
    </Header>
    <Button.Group basic vertical>
        <Button>Marion Abbott: A Biography 1891 - 1974</Button>
        <Button>William Abbott: A Biography 1866 - 1933</Button>
    </Button.Group>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Cassidy:
    </Header>
    <Button.Group basic vertical>
        <Button>Charles Cassidy: A Biography 1893 - 1983</Button>
        <Button>Gloria Cassidy: A Biography 1924 - 1997</Button>
        <Button>Marion Sandra Cassidy: A Biography 1935 - Present</Button>
        <Button>Marion Knell Cassidy: My Life</Button>
    </Button.Group>
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        Zulick:
    </Header>
    <Button.Group basic vertical>
        <Button>Conrad Zulick: A Biography 1838 - 1926</Button>
    </Button.Group>
    </Grid.Column>

    <Segment  style={{ padding: '0em 0em' }} vertical>
<Grid celled='internally' columns='equal' stackable>
<Grid.Row textAlign='center'>
<Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>

{/* <span>test</span> */}
{/* {visible && <ClydeWWII/> } */}
{/* {visible && "boxhall" } */}

{/* <ClydeWWII/> */}
{/* <ClydeAndEdna/> */}
{/* <RichardsonFtMyer/> */}
{/* <RichardsonGainesville/> */}
{/* <KimFourYearsNavy/> */}
{/* <KimCarolMatch/> */}
{/* <ClydeBio/> */}
{/* <RobertJonesBio/> */}
{/* <JohnJonesBio/> */}
{/* <LucyRichardsonBio/> */}
{/* <WilliamReedBio/> */}
{/* <MarieZepfBio/> */}
{/* <MichaelFrankBio/> */}
{/* <EdnaBio/> */}
{/* <EdnaOwnWords/> */}
{/* <MarionAbbottBio/> */}
{/* <WilliamAbbottBio/> */}
{/* <CharlesCassidyBio/> */}
{/* <GloriaCassidyBio/> */}
{/* <MarionCassidyBio/> */}
{/* <MarionOwnWords/> */}
<ConradZulickBio/>

</Grid.Column>
</Grid.Row>
</Grid>
</Segment>

</Grid.Row>
</Grid>
</Segment>

</div>
</React.Fragment>
)

}
export default ArticleSelection