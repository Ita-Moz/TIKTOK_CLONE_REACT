import { useEffect, useRef, useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [search, setSearch] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearch([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <TippyHeadless
            interactive
            visible={showResult && search.length > 0}
            onClickOutside={() => {
                setShowResult(false);
            }}
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
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
                {searchValue.length > 0 && (
                    <FontAwesomeIcon
                        className={cx('clear')}
                        icon={faCircleXmark}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    />
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <span></span>
                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('icon-search')} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
