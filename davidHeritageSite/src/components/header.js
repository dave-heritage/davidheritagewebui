import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../components/logo'

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    header: {
      backgroundColor: 'black',
      height: 'auto',
      opacity: '89%'
    },
    appBar: {
      flex: '0 0 auto',
      transition: Theme.transitions.create(['margin', 'width'], {
        easing: Theme.transitions.easing.sharp,
        duration: Theme.transitions.duration.leavingScreen,
      }),
    },
  })
)

const Header = ({siteTitle}) => {
  const classes = useStyles();

  return (
  <>
  <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link to="/">
            <Logo alt={siteTitle} />
          </Link>
        </Toolbar>
      </AppBar>

  </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
