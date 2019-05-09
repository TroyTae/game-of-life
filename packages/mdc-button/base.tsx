import classnames from 'classnames';
import {Component, Fragment} from 'inferno';

import {CSS_CLASSES} from './constant';

interface MDCButtonProps {
  raised?: boolean;
  unelevated?: boolean;
  outlined?: boolean;
  disabled?: boolean;
}

export default abstract class AbstractMDCButton<A, E> extends Component<MDCButtonProps & DetailedHTMLProps<A, E>> {
  get otherProps() {
    const {
      raised,
      unelevated,
      outlined,
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

  internalRender() {
    const {
      children,
    } = this.props;

    return <Fragment>
      <span className={CSS_CLASSES.LABEL}>{children}</span>
    </Fragment>;
  }
}
