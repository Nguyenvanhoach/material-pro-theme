import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui icons
import Subject from "@material-ui/icons/Subject";
import ModeEdit from "@material-ui/icons/ModeEdit";
import Delete from "@material-ui/icons/Delete";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import cardBlog5 from "assets/img/examples/card-blog5.jpg";

import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

const style = {
  ...cardsStyle
};

class CardExampleCardRotating extends React.Component {
  componentDidMount() {
    const { classes } = this.props;
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} lg={6}>
          <div className={classes.rotatingCardContainer}>
            <Card background className={classes.cardRotate}>
              <div
                className={`${classes.front} ${classes.wrapperBackground}`}
                style={{
                  backgroundImage: `url(${cardBlog5})`
                }}
              >
                <CardBody background className={classes.cardBodyRotate}>
                  <h6 className={classes.cardCategoryWhite}>
                    Full Background Card
                  </h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      This Background Card Will Rotate on Hover
                    </h3>
                  </a>
                  <p className={classes.cardDescriptionWhite}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick OwensΓÇÖ bed design but the back is...
                  </p>
                </CardBody>
              </div>
              <div
                className={`${classes.back} ${classes.wrapperBackground}`}
                style={{
                  backgroundImage: `url(${cardBlog5})`
                }}
              >
                <CardBody background className={classes.cardBodyRotate}>
                  <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                  <p className={classes.cardDescriptionWhite}>
                    As an Admin, you have shortcuts to edit, view or delete the
                    posts.
                  </p>
                  <div className={classes.textCenter}>
                    <Button round justIcon color="info">
                      <Subject />
                    </Button>
                    <Button round justIcon color="success">
                      <ModeEdit />
                    </Button>
                    <Button round justIcon color="danger">
                      <Delete />
                    </Button>
                  </div>
                </CardBody>
              </div>
            </Card>
          </div>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(CardExampleCardRotating);



// WEBPACK FOOTER //
// ./src/views/Documentation/Sections/Cards/CardExampleCardRotating.jsx