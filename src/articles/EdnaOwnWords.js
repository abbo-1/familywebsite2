import React from 'react'
import { Button, Divider, Segment, Header, Grid } from 'semantic-ui-react'

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import edna23 from '../images/articlePictures/edna23.png'

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

const EdnaOwnWords = () => (

<React.Fragment>
<Segment  style={{ padding: '0em 0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column  style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                <br/>
                <Header as='h3' style={{ fontSize: '2em' }}>Edna Caroline Frank <br/>Growing Up In Brooklyn <br/> (In Her Own Words) <br/>  Written roughly around 1990  </Header>
                <br/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='left'>
            <Grid.Column  style={{ paddingBottom: '1em', paddingTop: '.5em' }} >
                <p class="sidePadding" style={{ fontSize: '1.33em' }}>
                <SimpleReactLightbox>
                    <SRLWrapper>
                <br/>
                I’m writing this mainly at the urging of Kim, my oldest child.  I think the other three, Gail, Jay and Karen might enjoy reading it and hopefully even my grandchildren.
                <br/>
                <br/>
                I was named Edna after my maternal grandfather Edmund Zepf and Caroline after my maternal grandmother Caroline Schmidt Zepf.
                <br/>
                <br/>
                I was born on Palm Sunday, March 25, 1923, the fifth child of Marie Zepf (known as Mamie) and Michael Frank (known as Will or Bill, by his own choosing as he didn’t like the name Mike).  My Mom had tried to abort me but the midwife wouldn’t do it.  The cops were cracking down because a woman had died having an abortion shortly before.  Mama had good reason.  My Pop didn’t make much money and they already had 4 children.  When I realize that my brother Gus (August George) and my sister Helen Mary had to leave school and go to work when I was about two years old (Gus had to have been about 15 or 16 and Helen was 14).  I can’t help but wonder if I was the cause.
                <br/>
                <br/>
                <div class="column">
                    {/* <SRLWrapper options={options}> */}
                    <img src={edna23} class="articlePhoto" alt="1923 - Edna" />
                </div>
                <br/>
                I don’t want to give the impression that I wasn’t a loved child.  I was.  Frankly, I was spoiled rotten by my sisters and brother.  Even Grandma treated me differently than the others.  My sister Maizie (Marie Lillian) will attest to that).  Jo (Josephine Florence) especially seemed to dote on my.  She was a second mother.  If I got a new dress she would buy me socks and a hair ribbon to match out of her own spend money.  She would put my hair up in curlers every night.  I wore glasses from the time I was six and every night Jo would wash my glasses and polish my shoes.
                <br/>
                <br/>
                I grew up on Wilson Avenue in the Bushwick section of Brooklyn, New York.  The houses were attached and there were stores in the bottom and above were two floors of railroad flats, two to a floor.  They were cold water flats that had four rooms in a row, a kitchen, two bedrooms and a front room.  There were two windows in the kitchen and tow in the front room.  There was an airshaft between the two bed rooms.  Since there were seven of us we kind of spread around.  Helen and Jo slept next door in my Grandmother’s flat.  The rest of us were squeezed into the two bedrooms.  I think for a while Gus slept in the smaller bedroom and Mom and Dad and Maizie and I slept in two double beds in the other one.
                <br/>
                <br/>
                224 Wilson Avenue was a house away from the corner.  The corner was where three streets intersects Wilson Avenue had a trolley car running it.  Himrod Street cut across Wilson and Myrtle, with both a trolley and an elevated train angled between the two.
                <br/>
                <br/>
                We played on the sidewalks when I was very little.  I recall the city attaching a sprinkler to a fire hydrant for the kids to play under in the hot summer days.  It did get hot in the summer with all the concrete.  That was on Himrod Street.  There were not many cars then.
                <br/>
                <br/>
                I remember peddlers coming around in horse drawn wagons in the summer selling vegetables and watermelons and other fruits.  The Italians in the neighborhood usually planted gardens and fig trees.  I can recall some of the Italian kid’s collection the horse manure for fertilizer.  In the winter all the fig trees would be wrapped up in tar paper and old rugs so they wouldn’t freeze in the winter.  They looked like statues in the yards when it snowed.
                <br/>
                <br/>
                The ice wagons used to be horse drawn too and the kids would jump on the backs of the wagons to snitch the small pieces of ice that would chip off where iceman would cut up the big blocks into little ones that would fit in the ice boxes.  They would put a burlap bag on their shoulders and sling the ice up with big tongs as they climbed the stars.  Usually the housewives would buy a 10 or 15 cents piece of ice.  Each ice box had a pan under it to catch the melting water.  It didn’t happen often, but occasionally someone forget to empty the pan and a little trail of water would flow across the kitchen, which was the main room in those flats.
                <br/>
                <br/>
                When I said cold water flat, that meant no running hot water and in my earliest memory, a coal stove was all that heated the flat.  We lived over the hall so our floors were cold.  The floors were covered with linoleum.  In the winter the door to the front room was usually kept closed.  A warm bathrobe (usually a beacon bath robe which was like a blanket) and warm slippers were necessities of life when you got up in the morning.  Mama always got up first and started the fire with charcoal and paper before adding the coal.  At night she would bank the fire and it would go out.
                <br/>
                <br/>
                We had no bathrooms in the early days, just a toilet in the hall (with running water) between the two flats.  When we got older, we had a few more amenities.  A side arm gas hot water heater was installed and the city of New York enacted a law whereby every apartment had to have its own bathroom so Grandma (who owned the house had to have bathrooms installed.  They took away part of the kitchen to build them.
                    </SRLWrapper>
                </SimpleReactLightbox>
                </p>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Segment>
</React.Fragment>
)

export default EdnaOwnWords