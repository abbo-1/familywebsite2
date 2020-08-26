import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import williamAbbott25 from '../images/articlePictures/williamAbbott25.png'
import charlesCassidyEnrollment from '../images/articlePictures/charlesCassidyEnrollment.png'


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
                    <Header as='h3' style={{ fontSize: '2em' }}>Charles Raymond Cassidy <br/>(1893 - 1983)  </Header>
                    <br/>
                </Grid.Column>
            </Grid.Row>
    
            <Grid.Row textAlign='left'>
                <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                    <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                    <br/>
                    Charles Raymond Cassidy was born on February 6, 1893 to William J. Cassidy and Emma Anne Wehrheim in Attleborough, Massachusetts. He had one older brother, William Wehrheim Cassidy born on December 8, 1890.  Emma died May 16, 1896 at the age of 35.  Right after her death, William moved back to Philadelphia.  1900 found them living with their Grandfather, John Wehrheim and his step Grandmother, Henrietta.  William was living there with his boys.  Shortly after that, William disappeared, deserting the boys. 
                    <br/>
                    <br/>
                    Bill and Charlie were raised by their Step-Grandmother, Henrietta Wehrheim.  For many years the only relatives Charlie remembers were Aunt Ida Wehrheim (his mother’s sister) and a cousin, William Gray who lived in Rhode Island.
                    <br/>
                    <br/>
                    Charlie had to leave school at a very young age but was very bright and loved to learn. When he was a young man he worked for a company called N.W. Ayer on Rittenhouse Square in Philadelphia as a messenger boy and noticed various ad campaigns on desks of the men he was delivering things to. Whenever he thought of an idea for something, he'd leave a note on the desk. After a while they gave him a job as a copy writer and his lifelong career in advertising was launched. Charlie eventually started his own advertising agency, appropriately titled, Charles R. Cassidy, Advertising. He had a woman who worked for him for many years but otherwise his company was a one man operation.
                    <br/>
                    <br/>
                    Charlie met his wife, Marion Agatha Knell at Boulevard United Presbyterian Church in 1915. She was only fifteen at the time while he was twenty two. They both attended Sunday school and sang in the choir. When they were dating they often went to the movies on Saturday nights.
                    <br/>
                    <br/>
                    Charlie enlisted in the Navy and was gone for about one year. He was stationed in Miami attached to a squadron of Curtis Flying Boats.  He was part of Naval Aviation in its infancy, before the Navy commissioned its first Air Craft Carrier. 
                    <br/>
                    <div class="ui two column grid">
                <div class="column">
                        {/* <SRLWrapper options={options}> */}
                        <img src={charlesCassidyEnrollment} class="articlePhoto" alt="1918 - Charlie's Enrollment Record" />
                </div>
                <div class="column">
                        {/* <SRLWrapper options={options}> */}
                        <img src={williamAbbott25} class="articlePhoto" alt="1919 - Charlie in a flying boat" />
                </div>
                </div>
                    <br/>
                    He proposed to Marion when he returned in December 1920 and they were married on June 22, 1921 at Marion's parents home on East Wyoming Avenue. Charlie’s' brother, Bill, was best man and Marion's sister, Jeannette, was maid of honor. The ceremony took place at 6 p.m. with only family and a few friends in attendance. Their honeymoon was in Atlantic City, New Jersey where they stayed at the Traymore Hotel.  On September 30th, 1921, Charlie was discharged from the Navy.
                    <br/>
                    <div class="column">
                        {/* <SRLWrapper options={options}> */}
                        <img src={williamAbbott25} class="articlePhoto" alt="1919 - Charlie &amp; Marion" />
                    </div>
                    <br/>
                    The details of their married life can be found in Marion's biography. However, there are some interesting stories about Charlie that are worth telling. Charlie loved to enter contests and at some point he started entering a recipe contest every month. He would write a jingle to go with the recipe and his daughter Gloria, a talented artist, designed a brochure. They evidently won frequently and enjoyed such prizes as a stove, refrigerator and even a car! (This was before rules that prohibited the same person from winning a contest more than once.)
                    <br/>
                    <br/>
                    In their younger days, Marion and Charlie both smoked cigarettes, as did most of their generation. Their daughter, Sandy, remembers that her older sister, Gloria, and her mother both rolled their own cigarettes and her father bought different colored cigarettes when he was in New York City. The photo of Charlie in a regular tie above is a rare one as he was particularly fond of bowties.
                    <br/>
                    <br/>
                    Charlie's grandchilden, Kathy and Carol Jones, remember that their grandparents were frequent visitors to their home in Valley Forge, about a half hour drive up the Schulkill Expressway. When the girls were in elementary school, their parents purchased a complete set of the World Book Encyclopedias which were kept on a shelf in their "rec" room (short for recreation room, now we'd say family room). When Charlie disappeared, which he did regularly, the girls were not surprised to find their grandfather all alone in the rec room pouring over one of the volumes.
                    <br/>
                    <br/>
                    Charlie's advertising business was extremely successful. His earnings allowed him to retire and live comfortably for the rest of his life. (He lived to age 90.) He was very proud that he was able to afford to live in a retirement community where he knew Marion would be cared for the rest of her life.  Charlie died in August of 1983.
                    <br/>
                    <div class="column">
                        {/* <SRLWrapper options={options}> */}
                        <img src={williamAbbott25} class="articlePhoto" alt="1982 - Charlie &amp; Marion with the Bairds and Carol Jones Richardson" />
                    </div>
                    <br/>
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