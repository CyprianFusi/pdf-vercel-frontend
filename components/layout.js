import styles from '../styles/layout.module.css'
import Image from 'next/image';

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>Chat With Your PDF Documents</h1>
      <div align="center">
      <Image src="/binati_logo.png" width="50" height="50"/>
      </div>
      <p className={styles.subtitle}>By <a href="https://aiaccelera.com/" target="_blank">AI Accelera</a> and <a href="https://binatiai.com/" target="_blank">Binati AI</a></p>
      {props.children}
    </div>
  )
}