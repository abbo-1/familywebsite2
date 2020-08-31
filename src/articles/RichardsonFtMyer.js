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

const RichardsonFtMyer = () => (

<React.Fragment>
<Segment  style={{ padding: '0em 0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                <br/>
                <Header as='h3' style={{ fontSize: '2em' }}>The Richardson's in Ft. Myer  <br/> (1924 - 1938) </Header>
                <br/>

            </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='left'>
            <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                <br/>
                When Oliver and Lucy Richardson moved to Fort Myers in or around 1921, it was a small town on the Caloosahatchie River. Oliver made a deal with the owner of some farm land south of town. He worked the land and he shared the profits with the owner. It was hard making a go of it as the land was low and flooded often.
                <br/>
                <br/>
                He would send his crops up north on consignment. His agents would in turn sell them and send him the profit. For several years this worked out fine. Then for two years in a row they sent him a bill rather than a check. He conclude that there was no money to be made by sending his produce up north anymore. As time passed, he grew less and sold what he could at the Fort Myers Curb Market.
                <br/>
                <br/>
	            <SimpleReactLightbox>
                    <SRLWrapper>
                        <img src={oliver1932} class="articlePhoto" alt="1932 – Oliver on the left" />
                <br/>
                Lucy got a job a Flossie Hills, a dry goods store, and worked there until she retired on June 30, 1957.
                <br/>
                <br/>
                Their two youngest sons, Clyde and Ben (Frank) went to school and worked at what odd jobs they could find.  They also helped with the food by hunting and fishing.  Later, the family moved closer to town.
                <br/>
                <br/>
                Clyde and Ben played on their High School Football, Basketball and Baseball team.  On the football team, Clyde was a running back and his nickname was “Cannonball.”
                <br/>
                <br/>
                <div class="ui three column grid">
                <div class="column">
                    <img src={ftMyerFootball} class="articlePhoto" alt="1931 Football Team – Clyde is on middle row left end and Ben (Frank) is on the middle row right, second from end" />
                </div>
                <div class="column">
                    <img src={footballPromo} class="articlePhoto" alt="1930 - Football Lettermen – Clyde is bottom right" />
                </div>
                <div class="column">
                    <img src={ftMyerBasketball} class="articlePhoto" alt="1932 – Basketball Team – Clyde on left and Frank on right" />
                </div>
                </div>
                <br/>
                Clyde and Ben would occupy their time with school, odd jobs and sports.  When they played softball, Clyde would play somewhere in the infield and Ben would pitch.  Ben was considered one of the best hurlers in the league.  He was the pitcher who first introduced on the local diamond the “rise” ball which baffled batters when thrown properly.  When they were older, they would even arrange games with other nearby town teams
                <br/>
                <br/>
                At night, Clyde would drift over to the park to meet friends.  They would play tennis or basketball.  Sometimes, when he was in the Sea Scouts, they would borrow the sailboat and go sailing or fishing.
                <br/>
                <br/>
                There was one movie theater in town, “The Florida.”  It was located in the Arcade on First Street.  It was an open air theater and the building had no roof.  For a dime you could see such movies as Captain Blood or Robin Hood.
                <br/>
                <br/>
                The boys would stay out until two or three o’clock in the morning.  Lucy would wait up until they were both in for the night before she would go to bed.
                <br/>
                <br/>
                Occasionally the family would travel to Arcadia, Florida to visit Oliver’s family or to Tampa to see Hack or JB.  These trips would usually only be for the day.  Once, before they owned a car, they borrowed one from one of Lucy’s friends.  Oliver failed to check the oil level and on the way back from Arcadia, they blew an engine.
                <br/>
                <br/>
                <div class="ui two column grid">
                <div class="column">
                    <img src={frank1932} class="articlePhoto" alt="1932 – Frank" />
                </div>
                <div class="column">
                    <img src={clyde1932} class="articlePhoto" alt="1932 – Clyde" />
                </div>
                </div>
                <br/>
                On June 30, 1930, Clyde joined the National Guard.  Guard members were encouraged to ride the Guard Horses.  That provided another recreational activity.  Clyde spent many hours with friends riding through the fields and woods around Fort Myers.  In the summers Clyde would travel to South Carolina with his Guard unit for his two weeks of active duty. In 1938 when he resigned he was a Sergeant.
                <br/>
                <br/>
                    <img src={clydeNatGuard} class="articlePhoto" alt="1938 – Clyde on the left" />
                <br/>
                Once Clyde borrowed Hack’s car to go to a Guard meeting.  Not being real familiar with it, when the meeting was over, he got in the wrong car and drove it home.  In those days most people didn’t bother using the key and unless you locked it, it started without one.  That night the Sergeant showed up at the door inquiring about his car.  Needless to say it was an embarrassing moment for Clyde.
                <br/>
                <br/>
                In 1932 or 1933, the Richardson’s rented a two bedroom house on Heitman Street, close to downtown.
                    <img src={heitmanSt} class="articlePhoto" alt="1424 Heitman, Fort Myers" />
                    </SRLWrapper>
                </SimpleReactLightbox>
                <br/>
                Life, in those days were quiet and simple.  The house was always left unlocked.  A night at home would involve with sitting around listening to the radio.  They listened to Jack Benny, Bob Hope, Amos and Andy, the Lone Ranger and many more.
                <br/>
                <br/>
                At Christmas time JB, Hack and Bert (Bertha) would come down to Fort Myers for Christmas Dinner.  They would put up a Christmas tree and be thankful for what they had.
                <br/>
                <br/>
                During the Depression Clyde and Ben grabbed what jobs they could find.  Clyde worked as a Lifeguard and Pool cleaner at the city pool.  He also had a paper route for several years.  At time he worked for the A&amp;P and the Sunshine Market.
                <br/>
                <br/>
                During the Depression Clyde and Ben grabbed what jobs they could find.  Clyde worked as a Lifeguard and Pool cleaner at the city pool.  He also had a paper route for several years.  At time he worked for the A&amp;P and the Sunshine Market.
                <br/>
                <br/>
                Ben was a Volunteer fireman.  He was working for the Sunshine Market as a delivery boy in 1934.  On March 10, 1934, his car struck a parked car and the steering wheel caused fatal internal injuries.  Ben died on March 14, 1934.  The local city softball field was named “Richardson Field” in his honor.
                <br/>
                <br/>
                Oliver and Lucy used the insurance money they got for Frank’s death to buy their house on Heitman Street.
                <br/>
                <br/>
                Clyde’s first car was an Oakland.  He paid $15.00 for it.  It was stripped down to four wheels, an engine and a seat.  At that time there was no driver’s license or car tab to contend with.
                <br/>
                <br/>
                From 1932 to 1938, Clyde was a joiner.  He competed in swimming, baseball, basketball, shuffleboard, bowling and any other sport they played in the city leagues in Fort Myers.
                <br/>
                <br/>
                In July of 1938, Clyde moved to Gainesville to work for his brother-in-law, David Kite.  He was discharged from the National Guard on July 20, 1938.  In December 22, 1941, Clyde enlisted in the United States Navy.
                <br/>
                <br/>
                Oliver Richardson died on August 15, 1942 and Lucy Richardson died on July 11, 1960.  Clyde Richardson died on August 5, 2002.	
                </p>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Segment>
</React.Fragment>
)

export default RichardsonFtMyer