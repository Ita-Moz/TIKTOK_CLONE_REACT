import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faPlus,
    faSpinner,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faUser,
    faCoins,
    faGears,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import AccountItem from '~/components/AccountItem';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import images3 from '~/assets/images';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [search, setSearch] = useState([]);
    let currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearch([1, 2, 3]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGears} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="Tiktok" />
                <TippyHeadless
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
                        <input
                            type="text"
                            placeholder="Tìm kiếm tài khoản và video"
                            spellCheck={false}
                        />
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <span></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                        </button>
                    </div>
                </TippyHeadless>

                {/* Xử lí hiển thị giao diện khi user login */}
                <div className={cx('wrapper-action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="UpLoad Video" placement="bottom">
                                <button className={cx('action-btn', 'btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn', 'btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <div className={cx('actions')}>
                            <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Button primary>Đăng Nhập</Button>
                        </div>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src={images3.account}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('btn', 'more-btn')}>
                                <FontAwesomeIcon
                                    className={cx('action-menu')}
                                    icon={faEllipsisVertical}
                                />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
