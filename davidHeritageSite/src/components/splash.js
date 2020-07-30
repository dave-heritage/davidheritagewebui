import React from 'react'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import { makeStyles, createStyles, Theme, withStyles, Container } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '800px',
      position: 'absolute',
    },
    imageDiv: {
        display: 'flex',
        height: '980px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageNameText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '2em',

    },
    imageText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '1.5em',

    }
  })
)

const SplashImg = ({ alt }) => {
    const classes = useStyles()
    const data = useStaticQuery(graphql`
      query {
        desktop: file(relativePath: { eq: "kansasCityNight.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920, maxHeight: 980) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
  
    const imageData = data.desktop.childImageSharp.fluid
    return (
      <>
        <div>
            <BackgroundImage className={classes.root} fluid={imageData} backgroundColor={`#040e18`}>
                <div className={classes.imageDiv}>
                    <h2 className={classes.imageNameText}>david heritage</h2>
                    <h2 className={classes.imageText}>full stack developer</h2>
                    <h4 className={classes.imageText}> designer | innovator | Developer</h4>
                </div>
            </BackgroundImage>
        </div>
      </>
    )
  }
  
  SplashImg.defaultProps = {
    alt: `the splash image`,
  }
  
  export default SplashImg