import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import lucy1901 from '../images/articlePictures/lucy1901.png'
import frank1932 from '../images/articlePictures/frank1932.png'
import clyde1932 from '../images/articlePictures/clyde1932.png'
import lucy45 from '../images/articlePictures/lucy45.png'
import sanibel1909 from '../images/articlePictures/sanibel1909.png'
import dec1306 from '../images/articlePictures/dec1306.png'


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

const LucyRichardsonBio = () => (

<React.Fragment>
<Segment  style={{ padding: '0em 0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Lucy Hayes Reed Daniels Richardson <br/> (1877 - 1960) </Header>
                <br/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='left'>
            <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                <SimpleReactLightbox>
                    <SRLWrapper>
                <br/>
                Lucy Hayes Reed was born in Deer Isle, Maine on April 2, 1877.  She was the fourth child of William H Reed and Lucy Thompson Reed.  She had two brothers, William and Eugene and a sister named Florence.
                <br/>
                <br/>
                In 1880, they resided at the Perry Hotel on Federal Street in Portland, Maine.
                <br/>
                <br/>
                In 1887, the family moved to Punta Gorda, Florida.  When Sanibel Island was opened to homesteading, the Captain and his son, Will, investigated the island.  In 1888, Captain Reed laid claim to 160 acres along San Carlos Bay.  When the house was completed, Lucy and the rest of the family joined them.
                <br/>
                <br/>
                In April of 1889, her brother, Eugene, was drowned when he fell from his sailboat.
                <br/>
                <br/>
                Due partly to the heat, humidity, mosquitoes and Eugene's death, 1894, her Mother, Lucy died.  It was said by family members that she died of a broken heart.
                <br/>
                <br/>
                Lucy married John B. Daniels on April 6, 1897 and lived in a two-story house on the corner of Bailey road and Periwinkle Way.  She gave birth to Bertha on November 10, 1898 and William Haskell on January 18, 1901.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={lucy1901} class="articlePhoto" alt="1901 - Lucy &amp; John Daniels with Bertha &amp; Haskell" />
                </div>
                <br/>
                <br/>
                In 1902 Lucy and John moved to Tampa so John could work as a streetcar conductor.  Soon after their third child, J.B. was born on November 2, 1903, they moved back to Sanibel.
                <br/>
                <br/>
                In December 1906, John invited a man named A.J. Chansey to dinner. The men had words over an unknown matter by which Chansey had held a grudge. Both men were drinking or drunk prior to the meeting. When it came time to serve dinner, Chansey walked out. John chased him out into the road, insisting he stay and eat. Chansey raised a gun and shot John. When Lucy, in shock and terror, ran to her husband, Chancy threatened to shoot her too. Frank Bailey, justice of the peace, arrested Chancy and he was sent to prison for life.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={dec1306} class="articlePhoto" alt="1906 - An article about the murder dated December 13 from the Miami Weekly Tribune" />
                </div>
                <br/>
                <br/>
                The Daniels farm produced a fine crop of peppers that year and Lucy was able to sell them for a good price.  Along with that money and some she borrowed from her father, she bought the Hughes Floating Hotel.  It was a huge houseboat with decks spacious enough for dancing, 21 rooms, two baths, and a dining room. kitchen, office and wine rooms.
                <br/>
                <br/>
                Somehow it was heaved ashore and put up on blocks next to the Captain's house.  Lucy renamed the hotel, "Sanibel House."
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={sanibel1909} class="articlePhoto" alt="1909 - Sanibel House" />
                </div>
                <br/>
                <br/>
                Lucy married Oliver Richardson on May 9, 1910.  Oliver bought the Mackie homestead and put in the Richardson subdivision, but he mainly farmed the land.
                <br/>
                <br/>
                On October 17, 1910, the worst hurricane in Sanibel's history hit.  The dock was swept away and all the buildings were damaged or destroyed.   Lucy (now pregnant with Clyde), Oliver, the Captain and the rest of the family and some neighbors, took refuge in the Captain's house.  Later as 110 mile per hour winds beat on the house, it began to crack and surge.  They knew they had to leave and went to Will's (Lucy's brother) house.  Soon it began to shake and they left it for the wash house.  Then the Captain's house blew down and soon after that, Will's  followed.  Then the hotel fell off its blocks.  The group of 15 headed inland by foot.  As they struggled across the island, the eye of the storm passed over them. They found safety by the time the winds came back.
                <br/>
                <br/>
                Clyde James was born on June 27, 1911 in the Sanibel House.  Frank was born on June 1, 1913.
                <div class="ui two column grid">
                <div class="column">
                    <img src={frank1932} class="articlePhotoRow" alt="1932 – Frank" />
                </div>
                <div class="column">
                    <img src={clyde1932} class="articlePhotoRow" alt="1932 – Clyde" />
                </div>
                </div>
                Once when Hack (Haskell) had misbehaved, Lucy went to grab him.  Hack went under the house.  Lucy told him to come out.  He refused.  Lucy told him if he didn't, she would get her gun and shoot him.  He refused again.  She went and got her gun.  Hack came out.
                <br/>
                <br/>
                In 1918, JB lied about his age and enlisted in the Navy.  He soon decided he didn't like it and jumped ship.  He was later caught and years later he was cleared because of his age.
                <br/>
                <br/>
                In 1920 the Census shows Lucy was 43 and Oliver was 37.  They lived with Clyde, Frank, Hack and JB and Oliver's brother, Horace.
                <br/>
                <br/>
                In 1926 another hurricane hit Sanibel.  This storm pretty much wiped out farming on the island.  The Richardson's moved to Ft. Myers.  Oliver made a deal with the owner of some farmland south of town.  He worked the land and grew his crops, the family stayed in a house that was provided him and he shared the profits with the owner.  It was hard making a go of it as the land was low and flooded often.
                <br/>
                <br/>
                Oliver would send his crops up north on consignment.  His agents would in turn sell them and send him the profit.  For several years this worked out fine until, for two years in a row, they sent him a bill rather than a check.  He concluded that there was money to be made by sending his produce up north anymore.  As time passed, he grew less and sold what he could at the Fort Myers Curb Market.
                <br/>
                <br/>
                Oliver was called "Pop" by the kids.  Everyone else called him Ollie.  The kids were very fond of him.  Once he was planting a row of pepper plants.  Dorothy Nell was following him as he worked and pulled out the plants right after he planted them.  When he reached the end of the row and looked back at what she was doing, he popped her.  Later she told her Mother (Rita), that Pop knocked her down.  But, she still loved her "Pop."
                <br/>
                <br/>
                Lucy got a job at Flossie Hills, a drygoods store, and worked there until she retired.  The Richardson's moved closer to town.  They rented the second story of a two-story house.
                <br/>
                <br/>
                Oliver and Lucy were very compatible.  They were not very affectionate openly, but were described as good companions.  Lucy usually slept in a cot next to the bed because Ollie had a habit of getting up in the middle of the night and taking a shower and getting back into bed soaking wet.
                <br/>
                <br/>
                Occasionally the family would travel to Arcadia, Florida to visit his family or go to Tampa to see JB or Hack.  These trips would usually only be for the day.  Once, before they owned a car, they borrowed one from one of Lucy's friends.  Oliver failed to check the oil level and on the way back from Arcadia, they blew the engine.
                <br/>
                <br/>
                In 1932 or 1933, the Richardson's rented a two-bedroom house on Heitman Street, close to downtown.  It was a simple house with a big screened in porch running the entire length of the house in front.  The living room was in the middle with the two bedrooms on either side.  The kitchen was in the back.  It was the house where Lucy would spend the rest of her life.
                <br/>
                <br/>
                Life in those days was quiet and simple.  The house was always left unlocked.  Lucy would spend her evenings listening to the radio, talking with family members and waiting up at night until Clyde and Ben (Frank) came home. 
                <br/>
                <br/>
                At Christmas time JB, Hack and or Bert (Bertha) would come down for Christmas Dinner.  They would put up a Christmas tree and be thankful for what they had.
                <br/>
                <br/>
                Ben (Frank) was working for the Sunshine Market as a delivery boy in 1934, when his car struck a parked car and the steering wheel caused fatal internal injuries.  Oliver and Lucy used the two thousand dollars insurance they received from Ben's death to buy the house on Heitman Street and the adjoining lot.
                <br/>
                <br/>
                In July of 1938, Clyde moved to Gainesville to work for Bert's husband, David Kite.  In 1941, he joined the Navy after the Japanese attacked Pearl Harbor.
                <br/>
                <br/>
                Oliver's health began to deteriorate.  On August 13 1942, Oliver had a stroke, while he was working in a field, farming.  He refused to go to the doctor.  Two days later he died, he was able to hold Lucy's hand.  Lucy wrote to Clyde, who was over seas at the time, informing him of his father's death.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={lucy45} class="articlePhoto" alt="1945 - Lucy" />
                </div>
                <br/>
                <br/>
                Lucy lived the rest of her life on Heitman Street.  JB and his wife Rita lived in Fort Myers also.  They raised four children, Dorothy Nell, Benny, Johnny and Billy.  Tragedy struck in August, 1949, when Dorothy Nell died at the age of fourteen.
                <br/>
                <br/>
                Lucy died at home of a heart attack, on July 11, 1960.  Her four surviving children, Bert, Hack, JB, and Clyde came home for the funeral.  Also her grandchildren, Buddy, Benny, Johnny, Billy, Kim and Gail were in attendance.  She was laid to rest next to her husband Oliver and her son, Frank.
                    </SRLWrapper>
                </SimpleReactLightbox>
                </p>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Segment>
</React.Fragment>
)

export default LucyRichardsonBio