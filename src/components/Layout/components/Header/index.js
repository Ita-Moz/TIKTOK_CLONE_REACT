import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown, faArrowAltCircleUp, faCircleCheck, faCircleXmark, faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="Tiktok" />
                <div className={cx('search')}>
                    <input type="text" placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                    <FontAwesomeIcon className={'clear'} icon={faCircleXmark} />
                    <FontAwesomeIcon className={'loading'} icon={faCircleCheck} />
                    <span></span>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <button className={cx('action-upload')}>
                        <FontAwesomeIcon icon={faPlus} />
                        Tải lên
                    </button>
                    <button className={cx('action-login')}>Đăng nhập</button>
                    <FontAwesomeIcon className={cx('action-menu')} icon={faSquareCaretDown} />
                </div>
            </div>
        </header>
    );
}

export default Header;
