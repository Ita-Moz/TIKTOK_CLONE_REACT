import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faSpinner, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '../../Popper';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);

function Header() {
    const [search, setSearch] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearch([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={search.length > 0}
                    render={(atrrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...atrrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <span></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPlus}/>} >Tải lên</Button>
                    <Button primary>Đăng Nhập</Button>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon className={cx('action-menu')} icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
