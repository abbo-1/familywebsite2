import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import marieZepf00 from '../images/articlePictures/marieZepf00.png'
import zepfFranks48 from '../images/articlePictures/zepfFranks48.png'
import zepf58 from '../images/articlePictures/zepf58.png'
import zepf76 from '../images/articlePictures/zepf76.png'



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

const MarieZepfBio = () => (

<React.Fragment>
<Segment  style={{ padding: '0em 0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Marie Zepf Frank <br/> (1886 - 1981) </Header>
                <br/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='left'>
            <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                <SimpleReactLightbox>
                    <SRLWrapper>
                <br/>
                Marie was born on March 19, 1886.  The family lived on Hamburg Avenue in Brooklyn.  After World War I, the street was renamed Wilson Avenue.  She was the oldest surviving child of Edmund and Caroline Zepf.  Their children's names were, Marie, Eddie, Frederick, Edmund, and Helen.  Marie was known as Mamie.
                <br/>
                <br/>
                She went through school as far as the sixth grade.  Later she worked in a sewing factory.  She had a temper and it got her into a lot of fights.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={marieZepf00} class="articlePhoto" alt="1900 - Marie (Mamie) Zepf" />
                </div>
                <br/>
                <br/>
                Once she was assigned the task of watching her brother in a carriage on the sidewalk.  She was playing jacks while rocking the carriage with her foot.  The carriage got away from her and rolled into the street.  A passerby notified her father at the store and she got into a lot of trouble.
                <br/>
                <br/>
                She met her future husband, Michael (aka Bill), at a dance.  They dated and then got married on January 26, 1908.  They lived with his Mother and Sister until after Gus (August) was born.  They had one boy (August) and four girls (Helen, Josephine, Maizie and Edna).
                <br/>
                <br/>
                Mamie was very frugal.  Before Bill was laid off during the depression, she did the shopping and always served good meals.  She always put enough money away to pay for life insurance.
                <br/>
                <br/>
                Mamie and her mother-in-law, Barbara Pickle Frank had a strong disagreement as to where Gus should go to school.  Barbara insisted he go to a Catholic School.  Mamie refused to let him.  As a result, Gus didn't go to school.  The matter was not solved until Barbara died in 1917.  It was only then that she sent Gus to school.
                <br/>
                <br/>
                In 1927, Mamie took her family to see Charles Lindberg in a parade on Bushwick Avenue, right after his historic flight.
                <br/>
                <br/>
                At Christmas time the Frank’s would celebrate by combining the old world with the new.  On December 5th, the would hang their stockings and St Nicholas would fill them with an apple, an orange and various candies and cookies.  Then on December 25th, they would get their presents.  The kids would line up by age, (the youngest first) and go into the living room where their presents were grouped for each child.
                <br/>
                <br/>
                Mamie and Bill used to fight a lot.  Once she hit him with a sawed off broomstick and on another occasion she jabbed him with a paring knife.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={zepfFranks48} class="articlePhoto" alt="1948 - Marie (Mamie) &amp; Michael Frank" />
                </div>
                <br/>
                <br/>
                Bill died in February of 1950.  She stayed on Wilson Avenue until 1951 when she moved to 7319 71st Street with Helen with her oldest daughter, Helen.  They were just around the corner from Maizie and her husband Joe who had lived on Myrtle Avenue since 1942.
                <br/>
                <br/>
                She died on August 29, 1981, at the age of 95.
                <br/>
                <br/>
                <div class="ui two column grid">
                <div class="column">
                    <img src={zepf58} class="articlePhoto" alt="1958 – Helen, Joe, Maizie, and Marie Frank" />
                </div>
                <div class="column">
                    <img src={zepf76} class="articlePhoto" alt="1976 – Marie, Maribeth, Helen, Jay, Jo, and Maizie" />
                </div>
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

export default MarieZepfBio