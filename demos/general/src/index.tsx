import {render} from 'inferno';
import {MDCButton} from 'material-components-web-inferno';

import '@material/button/mdc-button.scss';

const Component = () => <div>
  <div>
    <MDCButton>Test!</MDCButton>
    <MDCButton raised={true}>Test!</MDCButton>
    <MDCButton unelevated={true}>Test!</MDCButton>
    <MDCButton outlined={true}>Test!</MDCButton>
  </div>
  <div>
    <MDCButton.Anchor href={'https://google.com'} target={'blank'}>Test!</MDCButton.Anchor>
    <MDCButton.Anchor raised={true} href={'https://google.com'} target={'blank'}>Test!</MDCButton.Anchor>
    <MDCButton.Anchor unelevated={true} href={'https://google.com'} target={'blank'}>Test!</MDCButton.Anchor>
    <MDCButton.Anchor outlined={true} href={'https://google.com'} target={'blank'}>Test!</MDCButton.Anchor>
  </div>
</div>;

render(<Component/>, document.getElementById('app'));
