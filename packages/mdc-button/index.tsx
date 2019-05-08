import classnames from 'classnames';
import {Component, Fragment} from 'inferno';

import {CSS_CLASSES} from './constant';

interface MDCButtonProps {
  raised?: boolean;
  unelevated?: boolean;
}

abstract class AbstractMDCButton<A, E> extends Component<MDCButtonProps & DetailedHTMLProps<A, E>> {
  cssClasses(className) {
    const {
      raised,
      unelevated,
    } = this.props;

    return classnames(className, CSS_CLASSES.ROOT, {
      [CSS_CLASSES.RAISED]: raised,
      [CSS_CLASSES.UNELEVATED]: unelevated,
    });
  }

  internalRender() {
    const {
      children
    } = this.props;

    return <Fragment>
      <span className={CSS_CLASSES.LABEL}>{children}</span>
    </Fragment>;
  }
}

export default class MDCButton extends AbstractMDCButton<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  render() {
    const {
      className,
      ...otherProps
    } = this.props;

    return <button className={this.cssClasses(className)} {...otherProps}>
      {this.internalRender()}
    </button>;
  }

  static Anchor = class extends AbstractMDCButton<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    render() {
      const {
        className,
        ...otherProps
      } = this.props;

      return <a className={this.cssClasses(className)} {...otherProps}>
        {this.internalRender()}
      </a>;
    }
  }
}
