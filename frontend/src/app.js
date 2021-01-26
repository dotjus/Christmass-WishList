import React from 'react'
import Form from './components/form/form.js'
import Posts from './components/posts/posts.js'

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import useStyles from './styles';

import pud from './images/pud.jpeg'

const App = () => {
    const classes = useStyles()
    return (
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">pud</Typography>
            <img className={classes.image} src={pud} alt="pud" height="60" />
          </AppBar>
          <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
            </Grow>
        </Container>
      )
}

export default App