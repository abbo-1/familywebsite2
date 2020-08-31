import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import henrickHudson from '../images/articlePictures/henrickHudson.png'
import oliver15 from '../images/articlePictures/oliver15.png'
import williamReed20 from '../images/articlePictures/williamReed20.png'


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

const WilliamReedBio = () => (

<React.Fragment>
<Segment  style={{ padding: '0em 0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                <br/>
                <Header as='h3' style={{ fontSize: '2em' }}>William Haskell Reed <br/> (1831 - 1934) </Header>
                <br/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='left'>
            <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                <SimpleReactLightbox>
                    <SRLWrapper>
                <br/>
                William Haskell Reed was born on June 24, 1831 in Whitfield, Maine. He grew up in Deer Isle, where his mother’s family had lived since 1768. Will took to the sea at an early age and had his own sloop by the time he married Lucy Elizabeth Thompson on January 8, 1852.
                <br/>
                <br/>
                He built a rambling farm house on the Eggomoggin Ranch and their first three children, William Sumner, Florence Lucy and Eugene, were born there. On February 11, 1865, he joined the Union Navy. He reported to the Navy Yard in New York for instruction on the Savannah. Then he reported as an Ensign on the gunboat boat Hendrick Hudson. The Hudson was part of the Gulf Blockading Fleet. Ensign Reed was part of a landing party, which inspected Sanibel Island. He was honorably discharged on September 18, 1865.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={henrickHudson} class="articlePhoto" alt="USS Henrick Hudson at anchor during the Civil War" />
                </div>
                After the war, he was the Master of the brig Itasca. An accident occurred while landing at Fire Island, New York and five crewmen lost their lives. Deeply saddened, he continued as the ship's Captain until the family moved to Portland, Maine, where he worked as a shoe salesman.
                <br/>
                <br/>
                In 1880 he resided at the Perry Hotel on Federal Street. Florence was now 16, William 14, and Eugene was 11. Lucy Hayes had been added to the family in 1877.
                <br/>
                <br/>
                Predictably, the job proved not to suit him. In 1887 he moved to Punta Gorda, Florida. When Sanibel was opened to homesteading, He and his eldest son, William Sumner, investigated the Island. In 1888, Captain Reed laid claim to 160 acres along San Carlos Bay. When the house was completed, he sent for the rest of the family. As homesteaders began farming, Reed bought first one boat and then others to carry produce over to Punta Gorda.
                <br/>
                <br/>
                In April of 1889, Eugene, 20, was drowned when he fell from his sailboat.
                <br/>
                <br/>
                Captain Reed and Will built homes and a dock from which the Captain sailed his sloop "Lucy," between Sanibel and Punta Gorda carrying freight and produce. Due partly to the heat, humidity, mosquitoes and Eugene's death, Lucy had become very unhappy on Sanibel. It was said by family members that she died of a broken heart in 1894.
                <br/>
                <br/>
                Captain Reed's son William Sumner Reed became Sanibel's second Postmaster in December of 1894. A building was put up beside the Reed dock and letters sent from there were postmarked "Reed, Lee County, Florida" until the name was officially changed to Sanibel on April 1, l895.
                <br/>
                <br/>
                Will was postmaster for forty-four years, during which time he and his wife, Florence raised their four daughters, Lelia, Carrie, Florence and Hazel.
                <br/>
                <br/>
                In 1896, Sanibel was still sparsely inhabited. A settler by the name of Frank Padgett landed at the Reed's dock. Reed invited him to dine with the family and met Reed's son, Will, and daughter Lucy-and millions of mosquitoes, gnats, and sand flies. The drinking water smelled and tasted of sulfur.
                <br/>
                <br/>
                Padgett asked if anyone else was living in so desolate a place. Reed said, "Yes," took a chaw of Sensation Tobacco, and told him about homesteaders and settlers living in scattered locales around the islands.
                <br/>
                <br/>
                Astonished, Frank inquired if they were "dodging the law, or escaped convicts, or what?" Reed told him the climate, fishing and healthful surroundings had brought them and the fine crops and good incomes caused them to remain. It was a good enough answer. Frank stayed.
                <br/>
                <br/>
                A few years after his wife's death he moved back to Deer Isle, Maine and went into business in Stonington. He married Jennie R. Haskell in 1901. By 1910 he moved back to Sanibel to spend his remaining days.
                <br/>
                <br/>
                Captain Reed's daughter, Lucy, married Bert Daniels in 1897. In 1907, Lucy and her children, Bert, J.B., and Haskell, witnessed Bert being shot and killed by a drunken farm hand. 
                <br/>
                <br/>
                In 1910, Lucy married Oliver L. Richardson, who had bought the Mackie homestead land and put in Richardson subdivision. The Richardson’s had two sons, Clyde and Frank. 
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={oliver15} class="articlePhoto" alt="1915 - A characture of Oliver Richardson" />
                </div>
                <br/>
                <br/>
                The pepper crop was good that year and with the profits from it and help from her father, she bought the "Floating Palace," a houseboat hotel. It was put ashore at the Reed place and renamed Sanibel House. It became a popular hostelry. One of the most violent hurricanes to ever hit Sanibel occurred on October 17, 1910. Reed was worried about his son Will, who had gone off in a boat with Sam and Harrison Woodring and some stranger who wanted to be taken to La Costa. As it turned out, the men holed up on Pine Island and were much safer than the people they had left behind.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={williamReed20} class="articlePhoto" alt="1920 - William Reed" />
                </div>
                <br/>
                <br/>
                The wind had been increasing through the day on Monday and by early afternoon, San Carlos Bay was a boiling pot, spilling over into a long line of breakers that rolled over the Reed dock and crashed onto the beach behind it. By 3:00 P.M. the wind was howling through the coconut palms, whipping the fronds to shreds, the rain had begun to fall and the sky took on another unsettling sight. Except for the channel which ran around the end of Woodring's Point, the water had gone out of the bay and Pine Island Sound and one almost could have walked to St. James.
                <br/>
                <br/>
                The Reeds had been busy all day, securing the boats, boarding up windows and laying in extra food and supplies, and by evening, fifteen anxious people had taken refuge in the homestead. The fringe winds of the one hundred mile wind hurricane reached them at about ten o'clock, and by 11:00 P.M., winds that exceeded 110 mph bore down on the cluster of buildings, moaning and shrieking like some wild beast. Time and again it slammed into the Captain's house, which shuddered and shook and finally cracked under the impact.
                <br/>
                <br/>
                Tired and scared, the islanders crawled on hands and knees to Will's place, but when one of the windows blew in and driving rain drenched them, they decided it would be best to go to a small wash-house at the back of the property. Moments later, the captain's house crashed down on the washhouse and the fifteen weary people, miraculously unhurt, took shelter under some trees. Then Will's house collapsed and one corner of Lucy's Sanibel House was knocked off its foundations. With nowhere else to go, they started for the interior of the island.
                <br/>
                <br/>
                There was a road of sorts behind the post office which went through the sand flats to Periwinkle Way, a distance of about one and three quarters miles. Although it was knee-deep in seawater, it was decided to chance it and with the men carrying the children and supporting the women, the bedraggled little band set out. Lucy was pregnant with her fourth child, Clyde. The wind still plucked at them with furious gusts and frequently they were toppled by it, but they fought their way on until close to their destination. Suddenly, the wind dropped and within minutes they were walking through moonlight, ghostly and still. For about a half an hour, the eye of the storm passed over them. They had reached the Mitchell home, and safety, before the hurricane began blowing full fury from the opposite direction.
                <br/>
                <br/>
                On April 12, 1921, Captain Reed died of natural causes. Due to a lack of undertaking facilities, he was buried the next day behind the hotel. Immediately, the family decided to move him to the cemetery. Haskell Daniels, his grandson dug him up and the family took him to the cemetery on a horse drawn wagon. 
                <br/>
                <br/>
                His young grandson, Clyde (9 years old) Richardson remembers riding to the cemetery and being dropped off nearby to wait until the funeral was over. His daughter Lucy, along with Clyde and Frank stayed on Sanibel until around 1921, after which they moved to Fort Myers. 
                    </SRLWrapper>
                </SimpleReactLightbox>
                </p>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Segment>
</React.Fragment>
)

export default WilliamReedBio