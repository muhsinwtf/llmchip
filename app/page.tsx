import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <h1>llmchips.com is Available for Sale!</h1>
        <p>After reading Y Combinator&apos;s blog post about LLMs for chip design, I discovered this domain was available. I registered it, and now it&apos;s up for grabs!</p>
        <p>If you&apos;re interested, feel free to contact me on <a href="https://x.com/muhsinbashirr" target="_blank" rel="noopener noreferrer">@muhsinbashirr</a>.</p>
      </div>
    </div>
  )
} 