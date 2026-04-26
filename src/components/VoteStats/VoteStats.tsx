import React from 'react'
import styles from "./VoteStats.module.css"

interface VoteStatsProps{
    votes:{good: number, neutral: number, bad: number}
    totalVotes: number
    positiveRate: number
}


const VoteStats = ({votes, totalVotes, positiveRate}: VoteStatsProps) => {
    totalVotes = votes.good + votes.neutral + votes.bad;
     positiveRate = totalVotes > 0 
        ? Math.round((votes.good / totalVotes) * 100) 
        : 0;
  return (
    <div className={styles.container}>
  <p className={styles.stat}>Good: <strong>{votes.good}</strong></p>
  <p className={styles.stat}>Neutral: <strong>{votes.neutral}</strong></p>
  <p className={styles.stat}>Bad: <strong>{votes.bad}</strong></p>
  <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
  <p className={styles.stat}>Positive: <strong>{positiveRate}%</strong></p>
</div>

  )
}

export default VoteStats
