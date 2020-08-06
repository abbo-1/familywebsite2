import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import backgroundImage from './images/backsplashWithLogo.png'

import zepfTree from './images/familyTrees/zepf.png'
import abbottTree from './images/familyTrees/abbott.png'
import haskellReedTree from './images/familyTrees/haskellReed.png'
import haskellTree from './images/familyTrees/haskell.png'

import wedding from './images/wedding.jpg'
import logo from './images/logo.png'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Home = () => (
    <div>
<Segment style={{ padding: '8em 0em' }} vertical>
{/* <div class ="homePageBackground"> */}
  <Grid container stackable verticalAlign='middle'>
    <Grid.Row>
      <Grid.Column width={8}>
        <Header as='h3' style={{ fontSize: '2em' }}>
          About:
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        On July 11, 1981, the Richardson family and the Jones family were linked with the marriage of Kim Frank Richardson of Florida and Carol Anne Jones of Pennsylvania.
        <br/>
        <br/>
        This website seeks to house and chronicle the history/ancestry of both families for personal use, research, and future generations. Within these archives you'll find stories of love, records of war, and a small sampling of the many photos we have accumulated over the decades.
        <br/>
        <br/>
        Most of the information found here is available only thanks to the decades long research, dedication, and archival prowess of Kim Frank Richardson.
        </p>
      </Grid.Column>
      <Grid.Column floated='right' width={6}>
        <Image bordered rounded size='large' src={wedding} />
      </Grid.Column>
    </Grid.Row>

    {/* <Grid.Row>
      <Grid.Column textAlign='center'>
        <Button size='huge'>Click Me</Button>
      </Grid.Column>
    </Grid.Row> */}

  </Grid>
</Segment>

<Segment  style={{ padding: '0em' }} vertical>
  <Grid celled='internally' columns='equal' stackable>
    <Grid.Row textAlign='center'>
      <Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
      <a href='./MainPage.js'><button class ="clydeButton" /></a>
      </Grid.Column>
      <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
        <button class="jonesButton" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Segment>

<Segment style={{ padding: '8em 0em' }} vertical>
  <Container text>
    <Header as='h3' style={{ fontSize: '2em' }}>
      Check out our image gallery
    </Header>
    <p style={{ fontSize: '1.33em' }}>
      Our Image Gallery is full of pictures and documents from our entire family. Some of our photos of all the way back to the mid 19th century.
    </p>
    <Button as='a' size='large'>
      Image Gallery
    </Button>
    

    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin: '3em 0em', textTransform: 'uppercase' }}
    >
      <a>Family Trees</a>
    </Divider>

    <Header as='h3' style={{ fontSize: '2em' }}>
    Click on one to make it bigger.
    </Header>
    <SimpleReactLightbox>
    <SRLWrapper>
    <img src={zepfTree} class="familyTree" alt="This is the Zepf family tree" />
    <img src={abbottTree} class="familyTree" alt="This is the Abbott family tree" />
    <img src={haskellTree} class="familyTree" alt="This is the Haskell family tree" />
    <img src={haskellReedTree} class="familyTree" alt="This is the Haskell/Reed family tree" />

    </SRLWrapper>
    </SimpleReactLightbox>

    <p style={{ fontSize: '1.33em' }}>

      
    </p>

  </Container>
</Segment>
</div>
);

export default Home