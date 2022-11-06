import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { HomeIcon, LiveIcon, UseIGroupIcon } from '~/components/icons';
import config from '~/config';
import styles from './SideBar.module.scss';

import { Menu, MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userServices from '~/services/userServices';

const cx = classNames.bind(styles);
function SideBar() {
    const [suggested, setSuggested] = useState([]);
    useEffect(() => {
        userServices
            .getSuggested({ page: 1, perPage: 5 })
            // eslint-disable-next-line no-const-assign
            .then((data) => {
                setSuggested(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return ( 
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your " to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem
                    title="Following "
                    to={config.routes.following}
                    icon={<UseIGroupIcon />}
                />
                <MenuItem title="LIVE " to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" data={suggested} />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default SideBar;
