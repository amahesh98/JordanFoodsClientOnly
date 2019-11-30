import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bealeImage from './images/beale.jpg';
import { CardContent, CardMedia, Card, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  loginBox: {
    width: '400px',
    background: 'rgb(242, 242, 242)',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px'
  },
  pageWrapper: {
  },
  inputStyle: {
    // display: 'block',
    width: '365px',
    // fontSize: '15pt'
  },
  headerText: {
    fontSize: '16pt',
    fontWeight: 'bold',
    margin:'0px',
    textAlign: 'center',
    color: 'rgb(145, 44, 44)'
    // marginTop: '10px'
  },
  media: {
    height: '110px'
  },
  buttonDivStyle: {
    textAlign: 'center',
    display: 'block',
    marginTop: '20px'
  },
  buttonStyle: {
    width: '100px'
  }
}));

function AdminLogin() {
  const styles = useStyles();

  return(
    <div className={styles.pageWrapper}>
      <Card className={styles.loginBox} raised>
      <CardMedia
          className={styles.media}
          image={bealeImage}
          title="Beale Street"
        />
        <CardContent>
          <p className={styles.headerText}>Admin Login</p>
          <TextField
          required
          id="outlined-required"
          label="Username"
          className={styles.inputStyle}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={styles.inputStyle}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <div className={styles.buttonDivStyle}>
        <Button variant="contained" color="primary" className={styles.buttonStyle}>
          Login
        </Button>
        </div>
        </CardContent>
      </Card>
      {/* <div className={styles.loginBox}>
        <p className={styles.headerText}>Admin Login</p>
        <input type='text' placeholder='username' className={styles.inputStyle}></input>
        <input type='password' placeholder='password' className={styles.inputStyle}></input>
        <button>LOGIN</button>
      </div> */}
    </div>
  )
}

export default AdminLogin;