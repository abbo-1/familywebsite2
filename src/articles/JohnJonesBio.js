import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import johnJones05 from '../images/articlePictures/johnJones05.png'
import johnMarion16 from '../images/articlePictures/johnMarion16.png'
import johnJones23 from '../images/articlePictures/johnJones23.png'
// import robertGloriaWedding47 from '../images/articlePictures/robertGloriaWedding47.png'
// import robertKathyCarol56 from '../images/articlePictures/robertKathyCarol56.png'


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

const JohnJonesBio = () => (

<React.Fragment>
<Segment  style={{ padding: '0em 0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>John Robert Jones <br/> (1878 - 1963) </Header>
                <br/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='left'>
            <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                <p style={{ fontSize: '1.33em' }}>
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={johnJones05} class="articlePhoto" alt="1905 - John Robert Jones" />
                    </div>
                <br/>
                John Robert Jones was born on April 4, 1878. Very little is known about his life or his family. He was a brilliant man who graduated from the University of Pennsylvania and law school. He was a politician of some sort in the Pennsylvania state capital of Harrisburg at some point and eventually became a municipal court judge in Philadelphia.
                <br/>
                <br/>
                John married Marion Erskine Abbott on September 8, 1915 and they had one son, Robert (Bobbie) Erskine, born on January 18, 1922. John was well respected in his work life but many said he was not a very personable man. He reportedly did not treat his mother well, and apparently this was also true of his wife since she left him when Bobbie was young. He refused to grant her a divorce and supported her for the rest of her life.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={johnMarion16} class="articlePhoto" alt="1916 - John &amp; Marion after their wedding." />
                </div>
                <br/>
                <br/>
                Bobbie visited him weekly and John put a great deal of pressure on his son. One example that stands out happened when Bob returned from the Army Air Force in World War II. He very much wanted to be a commercial pilot but John would have none of it and allegedly threatened to stop supporting Bob's mother if he did not attend law school. Bob did go to law school but sadly committed suicide in 1962 while his father was still alive. No one knows how this event affected John.
                <br/>
                <br/>
                John spent his last years in a nursing home. He had lost a leg but the reason for this is unknown. Bob's daughters remember visiting their grandfather (they called him "Grandad") when they were very young and finding him to be very intimidating. He passed away on August 20, 1963.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={johnJones23} class="articlePhoto" alt="1923, John holding his son, Robert Jones." />
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

export default JohnJonesBio