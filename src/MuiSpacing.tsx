import * as React from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    demo: {
    },
});

type PropsWithStyles = WithStyles<'root' | 'paper' | 'control' | 'demo'>
interface State {
    spacing: string
}

class GuttersGrid extends React.Component<PropsWithStyles, State> {
    constructor(props: PropsWithStyles) {
        super(props)
        this.state = { spacing: '16' }
    }
    handleChange(value: string) {
        this.setState({
            spacing: value,
        });
    }
    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        const spacingnum = Number(spacing) as GridSpacing
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={spacingnum}>
                        {[0, 1, 2].map(value => (
                            <Grid key={value} item>
                                <Paper className={classes.paper} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.control}>
                        <Grid container>
                            <Grid item>
                                <FormLabel>spacing</FormLabel>
                                <RadioGroup
                                    name="spacing"
                                    aria-label="spacing"
                                    value={spacing}
                                    onChange={(ev, value) => this.handleChange(value)}
                                    row
                                >
                                    <FormControlLabel value="0" control={<Radio />} label="0" />
                                    <FormControlLabel value="8" control={<Radio />} label="8" />
                                    <FormControlLabel value="16" control={<Radio />} label="16" />
                                    <FormControlLabel value="24" control={<Radio />} label="24" />
                                    <FormControlLabel value="32" control={<Radio />} label="32" />
                                    <FormControlLabel value="40" control={<Radio />} label="40" />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(GuttersGrid);
