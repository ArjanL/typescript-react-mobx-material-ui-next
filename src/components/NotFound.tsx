import * as React from 'react';
import { Paper } from 'material-ui';

export default class NotFound extends React.Component<any, any> {
    render() {
        return (
            <Paper className='page notfound'>
                404
            </Paper>
        );
    }
}