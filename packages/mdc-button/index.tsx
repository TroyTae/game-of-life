import AbstractMDCButton from './base';

export default class MDCButton extends AbstractMDCButton<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  render() {
    const {
      className,
      ...otherProps
    } = super.getOtherProps();

    return <button className={super.cssClasses(className)} {...otherProps}>
      {super.internalRender()}
    </button>;
  }

  static Anchor = class extends AbstractMDCButton<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    render() {
      const {
        className,
        ...otherProps
      } = super.getOtherProps();

      return <a className={super.cssClasses(className)} {...otherProps}>
        {super.internalRender()}
      </a>;
    }
  }
}
