import classNames from 'classnames/bind';
import { HomeIcon, LiveIcon, UseIGroupIcon } from '~/components/icons';
import config from '~/config';
import { Menu, MenuItem } from './Menu';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your " to={config.routes.home} icon={<HomeIcon/>} />
                <MenuItem title="Following " to={config.routes.following} icon={<UseIGroupIcon/>} />
                <MenuItem title="LIVE " to={config.routes.live} icon={<LiveIcon/>} />
            </Menu>
        </aside>
    );
}

export default SideBar;
