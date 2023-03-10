import {
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Input,
  Box,
  styled,
} from '@mui/material'
import React from 'react'
import { VscAccount } from 'react-icons/vsc'
import { RiLockPasswordLine } from 'react-icons/ri'
import DivStyles from './Styles'

const LoginComp = () => {
  return (
    <>
      <DivStyles>
        <DivStyles>
          <Card
            sx={{
              container: 'container',
              width: '450px',
              height: '250px',
              padding: '10px',
              margin: '30px',
            }}
            style={{ border: "none", boxShadow: "none" }}
          >
            <Typography sx={{ textAlign: 'center' }}>Login Form</Typography>
            <CardContent>
              <Grid container spacing={6}>
                <Grid xs={12} item>
                  <Input
                    startAdornment={
                      <InputAdornment position='start'>
                        <VscAccount />
                      </InputAdornment>
                    }
                    variant='outlined'
                    type='text'
                    placeholder='Username'
                    fullWidth
                    required
                  ></Input>
                </Grid>
                <Grid xs={12} item>
                  <Input
                    startAdornment={
                      <InputAdornment position='start'>
                        <RiLockPasswordLine />
                      </InputAdornment>
                    }
                    variant='outlined'
                    type='text'
                    placeholder='Password'
                    fullWidth
                    required
                  ></Input>
                </Grid>
                <Grid xs={12} item>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </DivStyles>

        <div
          style={{
            width: '300px',
            height: '500px',
            padding: '10px',
            margin: '30px',
          }}
        >

        </div>
      </DivStyles>
    </>
  )
}

export default LoginComp
