import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Divider } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import DavidImg from "../components/davidImg";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        paddingTop: "2em"
      },
      paper: {
        padding: Theme.spacing(2),
        // textAlign: 'center',
        color: Theme.palette.text.secondary,
      },
      flexContainer: {
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center',
      }
  })
)

const Summary = ({siteTitle}) => {
    const classes = useStyles();
  
    return (
    <>
    <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <div className={classes.flexContainer}>
                  <Grid item sm={6}>
                    <DavidImg alt={siteTitle} />
                  </Grid>
                  <Grid item sm={6}>
                      <Typography variant='h5' gutterBottom>About Me</Typography>
                      <Divider />
                      <Typography variant='subtitle2' gutterBottom>
                        I am a full stack developer that graduated from the University
                        of Missouri with a bachelors of science degree in computer
                        science. Since graduating from Mizzou in 2018 I have held 
                        development positions at various companies working with various
                        technologies.To learn more aobut me and my work feel free to 
                        visit my other development, social media pages found below.
                        </Typography>
                        <Divider />
                        <Typography variant='subtitle1' gutterBottom ><strong>Full Name</strong> David Heritage</Typography>
                        <Typography variant='subtitle1' gutterBottom ><strong>Location</strong> Kansas City, Missouri</Typography>
                        <Typography variant='subtitle1' gutterBottom ><strong>Email</strong> david.hudson.heritage@gmail.com</Typography>
                        <Link to="https://www.facebook.com/david.heritage.9/">
                            <FacebookIcon />
                        </Link>
                        <Link to="https://www.linkedin.com/in/david-heritage-bb5406139/">
                            <LinkedInIcon />
                        </Link>
                        <Link to="https://github.com/davidhudsonheritage">
                            <GitHubIcon />
                        </Link>

                  </Grid>
              </div>
          </Paper>
        </Grid>
    </div>
    </>
    )
  }
  
  export default Summary
  
