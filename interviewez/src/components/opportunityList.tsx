"use client"

import OpportunityPreview from "./opportunityPreview"
import styles from '../app/page.module.css'

export default function OpportunityList() {
  return (
    <div className={styles.opportunityList}>
        <OpportunityPreview />
        <OpportunityPreview />
        <OpportunityPreview />
        <OpportunityPreview />
        <OpportunityPreview />
        <OpportunityPreview />
        <OpportunityPreview />
        <OpportunityPreview />
    </div>
  )
}