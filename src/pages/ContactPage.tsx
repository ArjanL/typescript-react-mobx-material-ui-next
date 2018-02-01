import * as React from 'react';
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import ContactFormStore from '../stores/ContactFormStore';

@observer
export default class ContactPage extends React.Component<ContactFormStore>{
    render(){
        return (
            <div></div>
        );
    }
}