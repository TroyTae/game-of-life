import {render} from "inferno";
import {MDCButton} from 'material-components-web-inferno';

import '@material/button/mdc-button.scss';

render(<MDCButton>Test!</MDCButton>, document.getElementById('app'));
