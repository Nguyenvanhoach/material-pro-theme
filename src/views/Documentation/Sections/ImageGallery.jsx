import React from "react";
// react component for code display
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";

const styles = {
  productContainer: {
    "& .image-gallery-slide img": {
      borderRadius: "3px",
      maxWidth: "300px",
      height: "auto"
    },
    "& .image-gallery-swipe": {
      margin: "30px 0px",
      overflow: "hidden",
      width: "100%",
      height: "auto",
      textAlign: "center"
    },
    "& .image-gallery-thumbnails > .image-gallery-thumbnails-container a": {
      "&.active > div": {
        opacity: "1",
        borderColor: "#DDDDDD"
      },
      "& > div": {
        width: "80%",
        maxWidth: "85px",
        margin: "0 auto",
        padding: "8px",
        display: "block",
        border: "1px solid transparent",
        background: "transparent",
        borderRadius: "3px",
        opacity: ".8"
      },
      "& > div img": {
        borderRadius: "3px",
        width: "100%",
        height: "auto",
        textAlign: "center"
      }
    }
  }
};

const exampleImageGallery = `import React from 'react';
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";

const styles = {
  productContainer: {
    "& .image-gallery-slide img": {
      borderRadius: "3px",
      maxWidth: "300px",
      height: "auto"
    },
    "& .image-gallery-swipe": {
      margin: "30px 0px",
      overflow: "hidden",
      width: "100%",
      height: "auto",
      textAlign: "center"
    },
    "& .image-gallery-thumbnails > .image-gallery-thumbnails-container a": {
      "&.active > div": {
        opacity: "1",
        borderColor: "#DDDDDD"
      },
      "& > div": {
        width: "80%",
        maxWidth: "85px",
        margin: "0 auto",
        padding: "8px",
        display: "block",
        border: "1px solid transparent",
        background: "transparent",
        borderRadius: "3px",
        opacity: ".8"
      },
      "& > div img": {
        borderRadius: "3px",
        width: "100%",
        height: "auto",
        textAlign: "center"
      }
    }
  }
};

function Example(props) {
  const { classes } = props;
  const images = [
    {
      original: product3,
      thumbnail: product3
    },
    {
      original: product4,
      thumbnail: product4
    },
    {
      original: product1,
      thumbnail: product1
    },
    {
      original: product2,
      thumbnail: product2
    }
  ];
  return (
    <div className={classes.productContainer}>
      <GridContainer>
        <GridItem md="6" sm="12">
          <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            startIndex={3}
            items={images}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
};

export default withStyles(styles)(Example);`;

function SwipeableViews(props) {
  const { classes } = props;
  const images = [
    {
      original: product3,
      thumbnail: product3
    },
    {
      original: product4,
      thumbnail: product4
    },
    {
      original: product1,
      thumbnail: product1
    },
    {
      original: product2,
      thumbnail: product2
    }
  ];
  return (
    <div>
      <h1>Image Gallery v0.8.7</h1>
      <p>
        React image gallery is a React component for building image galleries
        and carousels.
      </p>
      <p>
        Please refer to{" "}
        <a
          href="https://github.com/xiaolin/react-image-gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-image-gallery
        </a>{" "}
        for more information.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in
        <br />
        <code>
          src/assets/scss/material-kit-pro-react/plugins/_plugin-react-image-gallery.scss
        </code>.
      </p>
      <div className={classes.productContainer}>
        <GridContainer>
          <GridItem md="6" sm="12">
            <ImageGallery
              showFullscreenButton={false}
              showPlayButton={false}
              startIndex={3}
              items={images}
            />
          </GridItem>
        </GridContainer>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {exampleImageGallery}
      </SyntaxHighlighter>
    </div>
  );
}

export default withStyles(styles)(SwipeableViews);



// WEBPACK FOOTER //
// ./src/views/Documentation/Sections/ImageGallery.jsx