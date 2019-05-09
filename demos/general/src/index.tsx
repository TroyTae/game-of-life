import {render} from 'inferno';
import {MDCButton} from 'material-components-web-inferno';

import '@material/button/mdc-button.scss';

import './index.scss';

const Component = () => <div className='container'>
  <div className='wrapper'>
    <MDCButton className='component'>Test!</MDCButton>
    <MDCButton className='component' raised={true}>Test!</MDCButton>
    <MDCButton className='component' unelevated={true}>Test!</MDCButton>
    <MDCButton className='component' outlined={true}>Test!</MDCButton>
  </div>
  <div className='wrapper'>
    <MDCButton.Anchor className='component' href={'https://google.com'} target={'blank'}>Test!</MDCButton.Anchor>
    <MDCButton.Anchor className='component' raised={true} href={'https://google.com'} target={'blank'}>Test!</MDCButton.Anchor>
    <MDCButton.Anchor className='component' unelevated={true} href={'https://google.com'} target={'blank'}>Test!</MDCButton.Anchor>
    <MDCButton.Anchor className='component' outlined={true} href={'https://google.com'} target={'blank'}>Test!</MDCButton.Anchor>
  </div>
</div>;

render(<Component/>, document.getElementById('app'));
