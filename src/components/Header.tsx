import styles from '@/styles/components/header.module.scss';
import { FaBars, FaCog, FaCrown, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className="logo"></div>
      <div className={styles.search}>
        <input type="text" placeholder="Search for a place" />
        <div className={styles.profile}>
          <img src="/person.webp" alt="person" />
          <div>
            <div>
              <h5>João Guilherme</h5>
              <div>
                <FaCrown />
                <h6>Premium</h6>
              </div>
            </div>
            <ul>
              <li>
                <FaCog />
                Settings
              </li>
              <li>
                <FaSignOutAlt />
                Log out
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bars}>
        <FaBars size={37.5} />
      </div>
    </div>
  )
}

export default Header;