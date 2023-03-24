"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { CardContent, Typography } from '@mui/material';

import styles from '../app/page.module.css'

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant='body1' component='div'>
                CONTACT NAME
            </Typography>
            <Typography variant='body2' component='div'>
                PHONE NUMBER
            </Typography>
            <Typography variant='body2' component='div'>
                EMAIL
            </Typography>
            <Typography variant='body2' component='div'>
                LINKEDIN URL
            </Typography>
        </CardContent>
    </React.Fragment>
)

export default function OpportunityFull() {
  return (
    <div className={styles.opportunityFull}>
        <h1>ROLE</h1>
        <h4>COMPANY COMPANY COMPANY</h4>
        <div>
            <TextField id="standard-basic" label="Location" variant="standard" />
        </div>
        <div>
            <TextField id="standard-basic" label="Ad URL" variant="standard" />
        </div>
        <div className={styles.pocCardContainer}>
            <Card variant='outlined' className={styles.pocCard}>{card}</Card>
            <Card variant='outlined' className={styles.pocCard}>{card}</Card>
            <Card variant='outlined' className={styles.pocCard}>{card}</Card>
        </div>
    </div>
  )
}