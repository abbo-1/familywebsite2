import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import johnJones05 from '../images/articlePictures/johnJones05.png'
import johnMarion16 from '../images/articlePictures/johnMarion16.png'
import johnJones23 from '../images/articlePictures/johnJones23.png'
import johnJones13 from '../images/articlePictures/johnJones13.png'


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
                <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={johnJones05} class="articlePhoto" alt="1905 - John Robert Jones" />
                    </div>
                <br/>
                John Robert Jones was born on April 4, 1878. Very little is known about his life or his family. He was a brilliant man who graduated from the University of Pennsylvania and law school in 1902. In 1911 he was elected as a republican to the Pennsylvania House of Representatives and was re-elected in 1913.
                <br/>
                <br/>
                One newspaper in 1913 described John as having "...two hobbies- progressive legislation and the constitution". It went on to describe as an active and fierce reformer who would go to great lengths to protect the state's constitution. That same article remarked "the House has grown to consider John Robert as a part of the constitution and when he reaches in his desk and pulls out the document they do not wait for him to cite a few dozen cases, but accept his position."
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={johnJones13} class="articlePhoto" alt="1913 - John Robert Jones as pictured in the Harrisberg Telegraph" />
                </div>
                <br/>
                <br/>
                In 1914, for unknown reasons he left the Republican party, running for a third term under both the Prohibition and Washington ticket - under which he lost by 600 votes.
                <br/>
                <br/>
                John married Marion Erskine Abbott on September 8, 1915. In 1922 they had one son, Robert (Bobbie) Erskine, born on January 18.
                <br/>
                <br/>
                He held a variety of local and state-wide government positions over the next several years. Including being appointed the Deputy Attorney General for the Pennyslvania's Attorney General's office from 1923 to 1925, and later a municipal court judge from 1939 to 1959.
                <br/>
                <br/>
                John was well respected in his work life but many said he was not a very personable man. He reportedly did not treat his mother well, and apparently this was also true of his wife since she left him when Bobbie was young. He refused to grant her a divorce and supported her for the rest of her life.
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