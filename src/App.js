import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'

import {
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

import Home from './Home.js'
import ArticleSelection from './ArticleSelection.js'
import ImageGallery from './ImageGallery.js'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          {/* 00000000000000 NAV BAR AND BACKGROUND PHOTO 000000000000000000000 */}
          {/* <Segment
            inverted
            textAlign='center'
            style={{ padding: '1em 0em' }}
            vertical
          > */}
        <div class="ui inverted menu">
            <Menu
              fixed={fixed ? 'bottom' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
             <Menu.Item as='a' >
             <Icon name='home' />
                <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='archive' />
                  <Link to="/history">Archives</Link>
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='image' />
                  <Link to="/images">Image Gallery</Link>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
            </div>
          {/* </Segment> */}
          {/* 00000000000000 NAV BAR AND BACKGROUND PHOTO 000000000000000000000 */}
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
  {/* <div class="ui inverted menu">
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        > */}
        <div class="ui inverted fluid three item menu">
          <Menu.Item as='a' active>
          <Icon name='home' />
                <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item as='a'>
          <Icon name='archive' />
                  <Link to="/history">Archives</Link>
          </Menu.Item>
          <Menu.Item as='a'>
          <Icon name='image' />
                  <Link to="/images">Image Gallery</Link>
          </Menu.Item>
          </div>
        {/* </Sidebar> */}

        {/* <Sidebar.Pusher dimmed={sidebarOpened}> */}
          {/* <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          > */}

            {/* <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile /> */}

          {/* </Segment> */}
          {children}
        {/* </Sidebar.Pusher> */}
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  
  <ResponsiveContainer >
{/* 000000000000000000000000000000000000000000000000000000000000000000000000 */}
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/history' component={ArticleSelection} />
    <Route path='/images' component={ImageGallery} />
    <Route component={Error} />
    </Switch>
    
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'> <a href="https://www.kevinjabbott.com" target="_blank">Website designed and maintained by Kevin Abbott</a></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
            <a href="https://www.amazon.com/Far-Side-Silence-Robert-Marcus-ebook/dp/B00ENOVQSY/https://www.amazon.com/Far-Side-Silence-Robert-Marcus-ebook/dp/B00ENOVQSY/" target="_blank">
              <div class="farSideAd" />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout