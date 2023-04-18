import PropTypes from 'prop-types';
import cx from 'classnames';
import modsClasses from '../../../utils/modsClasses';
import s from './Text.module.scss';
const Text = ({ className, children, size }) => {
  const mods = modsClasses(s, { size });
  return <div className={cx(s.root, className, mods)}>{children}</div>;
};
Text.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'small', 'big', 'normal']),
};
Text.defaultProps = {
  size: 'normal',
};
export default Text;
