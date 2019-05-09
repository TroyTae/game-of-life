import AbstractMDCButton from './base';

export default class MDCButton extends AbstractMDCButton<JSXButton> {
  render() {
    const {
      className,
      disabled,
      ...otherProps
    } = this.otherProps;

    return <button
      disabled={disabled}
      className={super.cssClasses(className)}
      {...otherProps}>
      {super.internalRender()}
    </button>;
  }

  static Anchor = class extends AbstractMDCButton<JSXAnchor> {
    render() {
      const {
        className,
        href,
        disabled,
        ...otherProps
      } = this.otherProps;

      return <a
        className={super.cssClasses(className)}
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        {...otherProps}>
        {super.internalRender()}
      </a>;
    }
  }
}
