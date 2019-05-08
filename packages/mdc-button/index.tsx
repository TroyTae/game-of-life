import {Component, Fragment} from 'inferno';

import {CSS_CLASSES} from './constant';

interface MDCButtonProps {}

abstract class AbstractMDCButton<A, E> extends Component<MDCButtonProps & DetailedHTMLProps<A, E>> {
  internalRender(props) {
    const {
      children
    } = props;

    return <Fragment>
      <span className={CSS_CLASSES.LABEL}>{children}</span>
    </Fragment>;
  }
}

export default class MDCButton extends AbstractMDCButton<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  render() {
    const {
      ...otherProps
    } = this.props;

    return <button className={CSS_CLASSES.ROOT} {...otherProps}>
      {this.internalRender(this.props)}
    </button>;
  }

  static Anchor = class extends AbstractMDCButton<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    render() {
      const {
        ...otherProps
      } = this.props;

      return <a className={CSS_CLASSES.ROOT} {...otherProps}>
        {this.internalRender(this.props)}
      </a>;
    }
  }
}
