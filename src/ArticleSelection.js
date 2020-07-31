
import React, { Component } from 'react'


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

  import ButtonList from './Buttonlist.js'

const ArticleSelection = () => (
 <div>
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
            <ButtonList/>
        </Grid>
</Segment>
</div>
)
export default ArticleSelection