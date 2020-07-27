import React from 'react'
import { Button, Divider, Header, Grid } from 'semantic-ui-react'

const ButtonExampleGroupBasic = () => (
  <div>
{/* <Divider /> */}
<Grid celled='internally' columns='equal' stackable>
<Grid.Row textAlign='center'>
<Grid.Column  style={{ paddingBottom: '5em', paddingTop: '5em' }}>
    <Header as='h3' style={{ fontSize: '2em' }}>
        Richardson:
    </Header>
    <Button.Group basic vertical>
        <Button>Clyde Richardson's WWII Service</Button>
        <Button>Clyde and Edna: From War to Marriage</Button>
        <Button>Kim Richardson: Four Years in the US Navy</Button>
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
        <Button>John Robert Jones: A Biography 1878 - 1963</Button>
        <Button>Marion Knell Cassidy: My Life</Button>
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

</Grid.Row>
</Grid>
  </div>
)

export default ButtonExampleGroupBasic