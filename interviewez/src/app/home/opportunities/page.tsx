"use client"

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import styles from '../../page.module.css'
import OpportunityList from '@/components/opportunityList'
import OpportunityFull from '@/components/opportunityFull'

export default function Opportunities() {
  return (
      <Grid container className={styles.main}>
        <Grid item xs={5} className={styles.griditem}>
          <Paper elevation={3} className={styles.columnCard}>
            <OpportunityList />
          </Paper>
        </Grid>
        <Grid item xs={7} className={styles.griditem}>
          <Paper elevation={3} className={styles.columnCard}>
            <OpportunityFull />
          </Paper>
        </Grid>
      </Grid>

  )
}
