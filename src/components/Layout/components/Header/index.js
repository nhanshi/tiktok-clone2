import classNames from 'classnames/bind';
// Vì Header.module.scss là 1 module chuyên biệt nên
import styles from './Header.module.scss';
// bind giúp bind Object styles vào và trả ra 1 function cx
const cx = classNames.bind(styles);

function Header() {
    // bất cứ thằng nào là thẻ cha thì cứ đặt wrapper
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search */}
            </div>
        </header>
    );
}

export default Header;
