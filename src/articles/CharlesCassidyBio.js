import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import williamAbbott25 from '../images/articlePictures/williamAbbott25.png'

const options = {
    thumbnails: {
        showThumbnails: false
    // buttons: {
    //   backgroundColor: "#1b5245",
    //   iconColor: "rgba(126, 172, 139, 0.8)",
    // },
    // caption: {
    //   captionColor: "#a6cfa5",
    //   captionFontFamily: "Raleway, sans-serif",
    //   captionFontWeight: "300",
    //   captionTextTransform: "uppercase",
    }
  };

const CharlesCassidyBio = () => (

    <React.Fragment>
    <Segment  style={{ padding: '0em 0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
                <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                    <Header as='h3' style={{ fontSize: '2em' }}>William Oliphant Abbott <br/>(1866 - 1933)  </Header>
                    <br/>
                </Grid.Column>
            </Grid.Row>
    
            <Grid.Row textAlign='left'>
                <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                    <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                    <br/>
                    William O. Abbott was born in June of 1866.  He married Anna Zulick in 1890.
                    <br/>
                    <br/>
                    William was a civil engineer.  He went to Lehigh but left in his senior year due to illness and traveled out west until he recovered.
                    <br/>
                    <br/>
                    William worked for the coal companies in Pittsburgh and invented the tipples which carry the coal up the shoots to the crushers.  Later he worked for Gulf Oil and designed the first gas stations in Pittsburgh.
                    <br/>
                    <br/>
                    In 1891 they had their first daughter, Marion Erskine. A sister, Elizabeth, in 1897.
                    <br/>
                    <br/>
                    Aroud the time Elizabeth was born they lived in Buffalo, New York.  By 1900, they were back in Allegheny County in western Pennsylvania.
                    <br/>
                    <br/>
                    William died on September 14, 1933.
                    <br/>
                    <div class="column">
                        {/* <SRLWrapper options={options}> */}
                        <img src={williamAbbott25} class="articlePhoto" alt="1925 - Marion" />
                    </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                    </p>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
    </React.Fragment>
    )
    
    export default CharlesCassidyBio