import {render} from "inferno";
import {MDCButton} from 'material-components-web-inferno';

import '@material/button/mdc-button.scss';

render(<div>
  <MDCButton>Test!</MDCButton>
  <MDCButton.Anchor href={'https://google.com'} target={'blank'}>Test!</MDCButton.Anchor>
</div>, document.getElementById('app'));
