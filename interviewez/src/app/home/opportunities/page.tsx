"use client"

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import styles from '../../page.module.css'

export default function Dashboard() {
  return (
      <Grid container className={styles.main}>
        <Grid item xs={6} className={styles.griditem}>
          <Paper elevation={3} className={styles.leftCard} />
        </Grid>
        <Grid item xs={6} className={styles.griditem}>
          <Paper elevation={3} className={styles.rightCard} />
        </Grid>
      </Grid>

  )
}
