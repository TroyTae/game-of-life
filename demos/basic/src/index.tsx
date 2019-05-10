import {render} from 'inferno';
import {MDCButton} from 'material-components-web-inferno';

import '@material/button/mdc-button.scss';

import './index.scss';

const Component = () => <div className='container'>
  <h1>Button</h1>
  <div className='wrapper'>
    <MDCButton className='component'>BUTTON</MDCButton>
    <MDCButton className='component' raised={true}>BUTTON</MDCButton>
    <MDCButton className='component' unelevated={true}>BUTTON</MDCButton>
    <MDCButton className='component' outlined={true}>BUTTON</MDCButton>
    <MDCButton className='component' disabled={true}>BUTTON</MDCButton>
    <MDCButton className='component' icon={<i className='i'/>}>BUTTON</MDCButton>
  </div>
  <div className='wrapper'>
    <MDCButton.Anchor className='component' href={'https://google.com'} target={'blank'}>ANCHOR</MDCButton.Anchor>
    <MDCButton.Anchor className='component' raised={true} href={'https://google.com'} target={'blank'}>ANCHOR</MDCButton.Anchor>
    <MDCButton.Anchor className='component' unelevated={true} href={'https://google.com'} target={'blank'}>ANCHOR</MDCButton.Anchor>
    <MDCButton.Anchor className='component' outlined={true} href={'https://google.com'} target={'blank'}>ANCHOR</MDCButton.Anchor>
    <MDCButton.Anchor className='component' disabled={true} href={'https://google.com'} target={'blank'}>ANCHOR</MDCButton.Anchor>
    <MDCButton.Anchor className='component' icon={<svg className='svg'/>} href={'https://google.com'} target={'blank'}>ANCHOR</MDCButton.Anchor>
  </div>
</div>;

render(<Component/>, document.getElementById('app'));
