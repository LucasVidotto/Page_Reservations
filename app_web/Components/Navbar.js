import Link from 'next/link'
import styles from '../styles/Nav.module.css'
export default function Navbar() {
  return (

    <nav className={styles.nav}>
    <ul className={styles.ul}>
      <li><a href="/">Home</a></li>
      <li><a href="Services/service">About</a></li>
      <li>
        <a href="/home">Clients</a>
        <ul className={styles.ul}>
          <li><a href="/Assessments/assessments">Assessments</a></li>
          <li><a href="#0">Southwest Airlines</a></li>
          <li><a href="#0">Levi Strauss</a></li>
        </ul>
      </li>
      <li>
        <a href="/rules">Rules</a>
        <ul>
          <li><a href="#0">Print Design</a></li>
          <li><a href="#0">Web Design</a></li>
          <li><a href="#0">Mobile App Development</a></li>
        </ul>
      </li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  )
}
