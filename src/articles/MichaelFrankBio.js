import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import michaelFrank21 from '../images/articlePictures/michaelFrank21.png'

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

const MichaelFrankBio = () => (

<React.Fragment>
<Segment  style={{ padding: '0em 0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                <br/>
                <Header as='h3' style={{ fontSize: '2em' }}>Michael (Bill) Frank <br/> (1882 - 1950) </Header>
                <br/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='left'>
            <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                <SimpleReactLightbox>
                    <SRLWrapper>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={michaelFrank21} class="articlePhoto" alt="1921 - Michael (Bill) Frank" />
                </div>
                <br/>
                <br/>
                Michael Frank was born in New York City on August 14, 1882.  He didn't like his name so he called himself William (Bill). He went to a Catholic school that went through the 4th grade.  After the 4th grade he quit school.  Through out his life he was an avid reader and spent a lot of time at the library.
                <br/>
                <br/>
                At an early age he was an Alter Boy.  Later on he showed his rebellious side, when his mother would send him to church, he would sit in the park until the service was over.
                <br/>
                <br/>
                As a young man he became a jeweler.  He made jewelry with a kick press.  He earned about $30.00 per week.  At a dance he met Marie Zepf.  She was a 5' 2" brown haired beauty with a quick temper.  They got married on January 26, 1908.  Between 1908 and 1923, they had one boy (August) and four girls (Helen, Josephine, Maizie and Edna).
                <br/>
                <br/>
                About the age of thirty, he became deaf. 
                <br/>
                <br/>
                In 1929, Michael bought a green1929 Chevrolet.  It was the only family car he ever owned.  In the winter he would have it put in storage and not get it out until spring.  Only Michael and his son Gus ever drove it.
                <br/>
                <br/>
                During the depression, at the age of 48, he was laid off from his job with the promise of being rehired when business picked up.  However in 1932 while following his daughter Jo down the stairs, she stopped to pick up her pocketbook so he wouldn't trip over it and he stumbled over her and broke his hip.  A helpful neighbor tried to help by picking him up and caused his fracture to compound.  After that he never worked again.
                <br/>
                <br/>
                After his layoff, Gus and Helen worked and supported the family.  Gus earned $25.00 per week and paid in $12.00 and Helen earned $18.00 and paid in $10.00.  This paid the $25.00 per month rent and put food on the table.
                <br/>
                <br/>
                During his marriage he was very jealous.  He claimed that she was using the clothesline to signal other men.  He demanded that she not talk to any other men.
                <br/>
                <br/>
                They used to fight a lot.  Once she jabbed him with a paring knife.  On another occasion she hit him with a sawed off broomstick.
                <br/>
                <br/>
                Bill was the family disciplinarian.  When one of the kids did something wrong, Marie would have Bill handle it.
                <br/>
                <br/>
                Bill loved kids and was very good to his own.  When he took them shopping, he would always buy better items than when did their Mother took them.  He also did most of the shopping for the family.
                <br/>
                <br/>
                In 1939, Edna (the youngest) took Marie and Bill to the World's Fair.  They had a great time and it was the only time Edna could remember ever being out with them alone.
                <br/>
                <br/>
                On February 14, 1950, Bill followed his normal routine after dinner.  From the Kitchen, he walked through the four rooms, stopping in the bedroom for a second and then went out into the front room.  Suddenly he spun around and landed in the chair and died of a heart attack.
                    </SRLWrapper>
                </SimpleReactLightbox>
                </p>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Segment>
</React.Fragment>
)

export default MichaelFrankBio