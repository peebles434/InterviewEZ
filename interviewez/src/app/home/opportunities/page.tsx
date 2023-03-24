"use client"

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import styles from '../../page.module.css'

export default function Dashboard() {
  return (
      <Grid container className={styles.main}>
        <Grid item xs={5} className={styles.griditem}>
          <Paper elevation={3} className={styles.columnCard} />
        </Grid>
        <Grid item xs={7} className={styles.griditem}>
          <Paper elevation={3} className={styles.columnCard} />
        </Grid>
      </Grid>

  )
}
