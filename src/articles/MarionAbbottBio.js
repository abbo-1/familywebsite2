import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import marionBetty00 from '../images/articlePictures/marionBetty00.png'
import marion13 from '../images/articlePictures/marion13.png'
import marion15 from '../images/articlePictures/marion15.png'
import marionAbbott58 from '../images/articlePictures/marionAbbott58.png'

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

const MarionAbbottBio = () => (

    <React.Fragment>
    <Segment  style={{ padding: '0em 0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
                <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                    <br/>
                    <Header as='h3' style={{ fontSize: '2em' }}>Marion Erskine Abbott Jones <br/>(1891 - 1974)  </Header>
                    <br/>
                </Grid.Column>
            </Grid.Row>
    
            <Grid.Row textAlign='left'>
                <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                    <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                    <br/>
                    Marion Erskine Abbott was born in Schuylkill Haven, Pennsylvania on November 23, 1891 to William Oliphant Abbott and Anna Zulick. Her sister, Elizabeth (Betty) Zulick Abbott was born two years later. Her father was a civil engineer who worked for the Lehigh Valley Railroad when Marion was young. The family was required to move to a new location every time he had to start work on a new bridge, Thus, Marion attended many different schools in her younger years. Betty remembers living in Rochester, NY, Ball Mountain near Wilkes Barre, Kittaning, and Pittsburgh (all in Pennsylvania). When asked what her sister was like, Betty wrote, "She was very attractive and everyone seemed to love her. She had a temper, however,and would take no criticism from anyone." 
                    <br/>
                    <br/>
                    <div class="column">
                        {/* <SRLWrapper options={options}> */}
                        <img src={marionBetty00} class="articlePhoto" alt="1900 - Marion &amp; Betty" />
                    </div>
                    <br/>
                    <br/>
                    Marion had a beautiful operatic singing voice and at one point was invited to tour with the Pittsburgh Philharmonic Orchestra. Betty wrote, "When our mother said they couldn't afford to buy her a new dress for every evening Marion refused to go. We thought this was a mistake as the orchestra would be in a city only one night. However, Marion played in many amateur shows, and one summer played in the stock company theatre (musicals) where they played one show, rehearsed another and studied parts for the third." A 1913 newspaper review of a play she was in reads:
                    <br/>
                    <br/>
                    "The Forum of the Philadelphia Trades School will produce its second annual play, 'The Private Secretary,' at LuLu Temple next Wednesday night. The play, which was staged by the boys of the school, is woven about the life of a young man who is heir to a fortune. Frank H. Hoffman, who takes the part of Douglas Cattermole, is told by his rich uncle that he must 'sow his wild oats.' To do this he takes a position as a private secretary to a planter. The planter has already engaged a young minister to the position, who is in love with the planter's daughter. During the time Cattermole is acting as secretary his creditors swarm him, but in spit of all he wins the planter's daughter and the fortune, too." Marion played Edith Marsland, the planter's daughter and Mrs. Stead, Cattermoles' landlady.
                    <br/>
                    <br/>
                    Betty also remembered, "She was always wonderful with me and would read to me when I was punished, etc., etc. When she was in (her) third year of high school, mother had to go to the hospital for a slight operation and was hospitalized...a week or so. Marion stayed home from school to care for the house and cook meals. She refused to go back to school but read a great deal and studied some. She was very fond of Shakespeare. She studied some French with a very fine boy friend, Jimmy Miller. Incidentally, he wanted to marry her, but he was a minister's son and that seemed to discourage her."
                    <br/>
                    <br/>  
                    Marion and Betty spent their summers in Schulkill Haven when they were growing up. Betty said "many good friends would stop by for a chat." One of these visitors was John Robert Jones, who was thirteen years Marion's senior. He was Welsh and his mother was Pennsylvania Dutch. On September 8, 1915, at the age of twenty-four, Marion married John. Everyone in Schulkill Haven thought it was a wonderful match. Betty said that Marion married John because life with him seemed "glamorous and more to her liking." Betty said, "Although he wasn't liked personally, he was continually called on by lawyers for advice." He was highly respected in his field. John worked with the Red Cross during World War I taking service men who were on leave to places of interest. According to Betty, he was "very popular there." John was later a politician in the Pennsylvania state capital of Harrisburg and eventually became a judge in Philadelphia.
                    <br/>
                    <br/>
                    Marion saved a few newspaper articles that chronicle some of her performances in her years with John. In the Pottstown Republican an article about a Red Cross concert on April 30th (year unknown) lists Mrs. J. R. Jones as singing Cycle of Life, Prelude, Spring, Down in the Forest, Summer, Love I Have Won You; Autumn, the Winds are Calling; Winter, Drift Down. The article states, "Mrs. J. R. Jones, soprano from Schuylkill Haven is also well known and holds the distinction of being one of the finest singers in this section of the state."
                    <br/>
                    <br/>
                    <div class="column">
                        {/* <SRLWrapper options={options}> */}
                        <img src={marion13} class="articlePhoto" alt="1915 - Marion" />
                        </div>
                    <br/>
                    Marion sang at many events while they lived in Harrisburg. An undated newspaper clipping probably from a Harrisburg newspaper reviewed one of her performances:
                    <br/>
                    <br/>
                    "The concert held in the auditorium Tuesday evening for the benefit of the Red Cross was a complete success, musically and financially. Mrs. John Robert Jones, as soloist made her debut before a local audience and pleasured and delighted. This former Pittsburg resident proved herself quite an artist, having a full, rich and sweet tone of considerable range, and perfect control of it. Her varied program lent added effectiveness to her evening's contributions to the program."
                    <br/>
                    <br/>
                     <div class="column">
                        {/* <SRLWrapper options={options}> */}
                        <img src={marion15} class="articlePhoto" alt="1915 - Marion" />
                        </div>
                    <br/>
                    In the Patriot, a Harrisburg newspaper, dated Thursday, November 4, 1920, under the heading, "Social Events of Capital City", an article highlights another production put on for the benefit of the Salvation Army. The production was entitled "America" and the review reads in part:
                    <br/>
                    <br/>
                    "The leading part was taken by Mrs. John Robert Jones, a newcomer to Harrisburg whose soprano voice is a distinct addition to the musical life of the city. Her main song "Castles in College Dreamland" was especially well given and gave opportunity for her to show her wide range and the power and beauty of her voice."
                    <br/>
                    <br/>
                    Marion and John's only child, Robert (Bobbie) Erskine Jones, was born on January 18, 1922. The details are unknown but at some point in time Marion took Bobbie and left John. John refused to give her a divorce and continued to support her throughout her life. Betty once wrote that John was "thought a great deal of in Pottsville and Schuylkill Haven, but after he and Marion were married, his relatives told her that John was mean to his mother." She believed that this knowledge shed some light on the reasons Marion left.
                    <br/>
                    <br/>
                    Always impeccably dressed, Marion was a very independent woman. She was a perfectionist who had very definite ways about how things should be done. Her daughter-in-law, Gloria, claimed that she learned a lot about entertaining from Marion who had a way of letting people know what she thought they should do. More than once she said to Gloria, "You ARE going to use this (serving spoon, ladle, etc.), aren't you dear?" 
                    <br/>
                    <br/>
                    When Bob and his wife, Gloria, had two daughters, Kathy and Carol, Marion doted on them and they adored her. The girls remember loving to being with her because she had a way of making them feel like they were the center of her universe. The girls called her "Babbie" because Marion claimed she was trying to teach older granddaughter, Kathy, to say "Granny" but the name came out "Babbie". Babbie always seemed to know the one thing they wanted more than anything else for their birthday or Christmas and it wasn't until they were grown and their grandmother had passed away that they learned their mother had made the gift purchases and Marion had paid for them.
                    <br/>
                    <br/>
                    Kathy remembers spending a week at Alden Park when she was young (around 1960) and being exceedingly spoiled. Specifically she recalls loving to watch Babbie take off her make-up with cold cream at night and being allowed to stay up past her bedtime to watch The Andy Griffith Show on television. A copy of Misty of Chincoteague, Marguerite Henry's famous story about a horse, was ordered and delivered to the apartment by the store. Horse lover Kathy was thrilled.
                    <br/>
                    <br/>
                    Marion lived alone for many years at Alden Park Manor in the Germantown section of Philadelphia. From 1963 to 1965 she lived in West Chester, PA in an apartment with her sister, Betty, who had been recently widowed. In 1965, Betty moved in with her daughter's family and Marion moved back to Alden Park. Marion died in 1974.
                    <br/>
                    <br/>
                    <div class="column">
                        {/* <SRLWrapper options={options}> */}
                        <img src={marionAbbott58} class="articlePhoto" alt="1958 - Marion" />
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
    
    export default MarionAbbottBio