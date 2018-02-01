import * as React from 'react';
import { render } from 'react-dom';
import { Button, Grid, Typography } from 'material-ui';
import { observable, action, computed } from 'mobx';
import { Provider, observer } from 'mobx-react';
import HomeStore from '../stores/HomeStore';



@observer
export class Home extends React.Component<{}> {
  data = new HomeStore();

  render() {
    return (
      <Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
            <Button onClick={() => this.data.increment()}>
            Click count = {this.data.clickedCount}
            </Button>
        </Grid>
      </Grid>

    );
  }
}

