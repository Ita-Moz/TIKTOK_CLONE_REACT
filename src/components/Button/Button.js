import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    children,
    primary,
    className,
    rounder,
    disabled,
    small,
    outline,
    large,
    href,
    leftIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        [className]: className,
        leftIcon,
        primary,
        outline,
        large,
        small,
        rounder,
        disabled,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string,
    primary: PropTypes.bool,
    className: PropTypes.string,
    rounder: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    outline: PropTypes.bool,
    large: PropTypes.bool,
    href: PropTypes.string,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
