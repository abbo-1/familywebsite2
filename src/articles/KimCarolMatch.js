import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import carol80 from '../images/articlePictures/carol80.png'
import ceremony81 from '../images/articlePictures/ceremony81.png'
import carolparentswedding81 from '../images/articlePictures/carolparentswedding81.png'
import wedding81 from '../images/articlePictures/wedding81.png'
import weddingparty81 from '../images/articlePictures/weddingparty81.png'
import scott84 from '../images/articlePictures/scott84.png'
import scott85 from '../images/articlePictures/scott85.png'
import kevin88 from '../images/articlePictures/kevin88.png'
import kevin89 from '../images/articlePictures/kevin89.png'


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
                        <img src={carol80} class="familyTree" alt="1980 - Carol" />
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
                    <img src={ceremony81} class="familyTree" alt="July 11, 1981 - The Ceremony" />
                </div>
                <div class="column">
                    <img src={carolparentswedding81} class="familyTree" alt="Carol and her parents, Gloria &amp; Joe" />
                </div>
                <div class="column">
                    <img src={wedding81} class="familyTree" alt="July 11, 1981 - Carol &amp; Kim" />
                </div>
                <dic class="column">
                <img src={weddingparty81} class="familyTree" alt="The Richardsons. From right to left: Gail, Karen, Jay, Carol, Kim, Edna, &amp; Clyde" />
                </dic>
                </div>
                The reception was held at Steak &amp; Ale.  Everyone seemed to have a good time.  Steve made the toast.  Jay, Carol’s Mom, Cindy and Sharon handled cutting the cake and serving.
                <br/>
                <br/>
                Kim &amp; Carol were blessed with a son, Scott Frank was born on April 13, 1984.
                <br/>
                <br/>
                <div class="ui two column grid">
                <div class="column">
                    <img src={scott84} class="familyTree" alt="1984 - Scott" />
                </div>
                <div class="column">
                    <img src={scott85} class="familyTree" alt="1985 - Scott" />
                </div>
                </div>
                <br/>
                <br/>
                On March 1, 1988, Kevin was introduced to the family.
                <br/>
                <br/>
                <div class="ui two column grid">
                <div class="column">
                    <img src={kevin88} class="familyTree" alt="1988 - Kevin" />
                </div>
                <div class="column">
                    <img src={kevin89} class="familyTree" alt="1989 - Kevin" />
                </div>
                </div>
                </SRLWrapper>
                </SimpleReactLightbox>
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