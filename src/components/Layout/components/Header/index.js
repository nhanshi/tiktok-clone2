import classNames from 'classnames/bind';
// Vì Header.module.scss là 1 module chuyên biệt nên
import styles from './Header.module.scss';
// import image Logo vào
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// bind giúp bind Object styles vào và trả ra 1 function cx
const cx = classNames.bind(styles);

function Header() {
    // bất cứ thằng nào là thẻ cha thì cứ đặt wrapper
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo TikTok */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* Search */}
                <div className={cx('search')}>
                    {/* Input field */}
                    <input placeholder="Search accounts and Videos" spellCheck="false" />
                    {/* Clear button */}
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* Loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    {/* Search */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                {/* Actions */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
