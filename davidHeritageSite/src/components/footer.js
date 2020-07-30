import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../components/logo'
import { FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      height: 'auto',
      opacity: '89%'
    },
  })
)

const Footer = ({siteTitle}) => {
  const classes = useStyles();

  return (
  <>
    <Toolbar className={classes.footer}>
        <Link to="/">
        <Logo alt={siteTitle} />
        </Link>
    </Toolbar>
  </>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

FormControlLabel.defaultProps = {
  siteTitle: ``,
}

export default Footer
