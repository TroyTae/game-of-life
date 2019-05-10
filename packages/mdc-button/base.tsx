import classnames from 'classnames';
import {Component, Fragment, VNode, InfernoNode} from 'inferno';
import {cloneVNode} from 'inferno-clone-vnode';

import {CSS_CLASSES} from './constant';

interface MDCButtonProps {
  raised?: boolean;
  unelevated?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  icon?: InfernoNode;
  iconTrailing?: boolean;
}

export default abstract class AbstractMDCButton<T> extends Component<MDCButtonProps & T> {
  get otherProps() {
    const {
      raised,
      unelevated,
      outlined,
      icon,
      iconTrailing,
      children,
      ...otherProps
    } = this.props;

    return otherProps;
  }

  cssClasses(className: string = ''): string {
    const {
      raised,
      unelevated,
      outlined,
    } = this.props;

    return classnames(className, CSS_CLASSES.ROOT, {
      [CSS_CLASSES.RAISED]: raised,
      [CSS_CLASSES.UNELEVATED]: unelevated,
      [CSS_CLASSES.OUTLINED]: outlined,
    });
  }

  renderIcon(icon: VNode) {
    return cloneVNode(icon, {
      ['aria-hidden']: true,
      className: classnames(icon.className, CSS_CLASSES.ICON),
    });
  }

  internalRender() {
    const {
      children,
      icon,
      iconTrailing,
    } = this.props;

    return <Fragment>
      {icon && !iconTrailing && this.renderIcon(icon as VNode)}
      <span className={CSS_CLASSES.LABEL}>{children}</span>
      {icon && iconTrailing && this.renderIcon(icon as VNode)}
    </Fragment>;
  }
}
