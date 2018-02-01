import * as React from 'react';
import { render } from 'react-dom';
import { Button, Grid, Typography, Input, InputLabel } from 'material-ui';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import HomeStore from '../stores/HomeStore';



@observer
export class ContactForm extends React.Component<{}> {
  data = new HomeStore();
  render() {
    return (
      <Grid>
        <Grid item xs={6}>
          <InputLabel>Testinputlabel</InputLabel>
          <Input />

        </Grid>
        <Grid item xs={6}>
            <Button onClick={() => this.data.increment()}>
            Send{this.data.clickedCount}
            </Button>
        </Grid>
      </Grid>

    );
  }
}