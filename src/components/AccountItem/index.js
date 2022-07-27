import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';
import Image from '../image';
const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={images.account} alt="avatar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>VanManhUta</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>vanmanh</span>
            </div>
        </div>
    );
}

export default AccountItem;
