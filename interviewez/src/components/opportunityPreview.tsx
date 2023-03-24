"use client"

import * as React from 'react';
import Card from '@mui/material/Card'
import styles from '../app/page.module.css'
import { CardContent, Typography } from '@mui/material';

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant='h6' component='div'>
                COMPANY - ROLE
            </Typography>
            <Typography variant='body2' component='div'>
                STATUS
            </Typography>
            <Typography variant='body2' component='div'>
                LOCATION
            </Typography>
            <Typography variant='body2' component='div'>
                RECRUITER
            </Typography>
            <Typography variant='body2' component='div'>
                NEXT INTERVIEW DATE
            </Typography>
        </CardContent>
    </React.Fragment>
)

export default function OpportunityPreview() {
  return (
    <Card elevation={3} className={styles.opportunityCard}>{card}</Card>
  )
}