import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';

import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-start"
            render={(atrrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...atrrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <Header title="Language"/>
                        {renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
