import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import oliver1932 from '../images/articlePictures/oliver1932.png'
import ftMyerFootball from '../images/articlePictures/ftMyerFootball.png'
import ftMyerBasketball from '../images/articlePictures/ftMyerBasketball.png'
import footballPromo from '../images/articlePictures/footballPromo.png'
import frank1932 from '../images/articlePictures/frank1932.png'
import clyde1932 from '../images/articlePictures/clyde1932.png'
import clydeNatGuard from '../images/articlePictures/clydeNatGuard.png'
import heitmanSt from '../images/articlePictures/heitmanSt.png'

const KimCarolMatch = () => (

<React.Fragment>
<Segment  style={{ padding: '0em 0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Kim &amp; Carol <br/> A Perfect Match </Header>
                <br/>

            </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='left'>
            <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                <p style={{ fontSize: '1.33em' }}>
                <br/>
                On Wednesday, June 5, 1980, Kim and Carol were introduced to each other at a Tee-Ball game by Cindy Roberts.  Cindy worked with Kim and had a son in Carol’s First Grade class.  At the game, a first date was set up for three days later, to go to an Astros Game.
                 <br/>
                 <br/>
                 <SimpleReactLightbox>
                    <SRLWrapper>
                        <img src={oliver1932} class="familyTree" alt="1980 - Carol" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                <br/>
                <br/>
                For the next 401 days, they saw each other 228 of those days.  They went to the Windmill Dinner Theater three times, Astros games, Rocket games, Ferrante and Teicher, movies, and more.  On November 26, 1980, they drove to Gainesville, Florida to meet Kim’s family and to watch the Gators play Miami and also went to Disney World.  On May 21, 1981, they drove to St. Louis to visit Carol’s sister, Kathy and her then husband Steve.   Also during this time Carol taught her first graders, and Kim worked at Central Freight lines during the day and Sears at night.  One weekend a month and two weeks during the year he served with the Naval Reserve.
                <br/>
                <br/>
                They got married on July 11, 1981 and spent a short honeymoon in South Florida.
                <br/>
                <br/>
                <div class="ui four column grid">
                <div class="column">
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <img src={ftMyerFootball} class="familyTree" alt="July 11, 1981 - The Ceremony" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                </div>
                <div class="column">
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <img src={footballPromo} class="familyTree" alt="Carol and her parents, Gloria &amp; Joe" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                </div>
                <div class="column">
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <img src={ftMyerBasketball} class="familyTree" alt="July 11, 1981 - Carol &amp; Kim" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <img src={ftMyerBasketball} class="familyTree" alt="The Richardsons. From right to left: Gail, Karen, Jay, Carol, Kim, Edna, &amp; Clyde" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                </div>
                </div>
                The reception was held at Steak &amp; Ale.  Everyone seemed to have a good time.  Steve made the toast.  Jay, Carol’s Mom, Cindy and Sharon handled cutting the cake and serving.
                <br/>
                <br/>
                Kim &amp; Carol were blessed with a son, Scott Frank was born on April 13, 1984.
                <br/>
                <br/>
                <div class="ui two column grid">
                <div class="column">
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <img src={ftMyerFootball} class="familyTree" alt="1984 - Scott" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                </div>
                <div class="column">
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <img src={footballPromo} class="familyTree" alt="1985 - Scott" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                </div>
                </div>
                <br/>
                <br/>
                On March 1, 1988, Kevin was introduced to the family.
                <br/>
                <br/>
                <div class="ui two column grid">
                <div class="column">
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <img src={ftMyerFootball} class="familyTree" alt="1988 - Kevin" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                </div>
                <div class="column">
                <SimpleReactLightbox>
                    <SRLWrapper>
                    <img src={footballPromo} class="familyTree" alt="1989 - Kevin" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                </div>
                </div>
                <br/>
                <br/>

                <br/>
                <br/>

                </p>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Segment>
</React.Fragment>
)

export default KimCarolMatch