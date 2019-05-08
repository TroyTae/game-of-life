import AbstractMDCButton from './base';

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
