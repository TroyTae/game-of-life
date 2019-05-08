import classnames from 'classnames';
import {Component, Fragment} from 'inferno';

import {CSS_CLASSES} from './constant';

interface MDCButtonProps {
  raised?: boolean;
  unelevated?: boolean;
}

export default abstract class AbstractMDCButton<A, E> extends Component<MDCButtonProps & DetailedHTMLProps<A, E>> {
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
