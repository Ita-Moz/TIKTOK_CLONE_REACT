import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchServices from '~/services/searchServices';
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
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearch([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearch(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const handleChange = (e) => {
        let searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        // fix warnning Tippy
        <div>
            <TippyHeadless
                appendTo={document.body}
                interactive
                visible={showResult && search.length > 0}
                onClickOutside={() => {
                    setShowResult(false);
                }}
                render={(atrrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...atrrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {search.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
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
                        onChange={handleChange}
                    />
                    {!!searchValue && !loading && (
                        <FontAwesomeIcon
                            className={cx('clear')}
                            icon={faCircleXmark}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        />
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <span></span>
                    <button className={cx('search-btn')}>
                        <SearchIcon className={cx('icon-search')} />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
