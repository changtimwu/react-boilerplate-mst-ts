import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { withStyles, WithStyles, StyledComponentProps } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: red[800],
        },
    },
});

type Props = {

};
type PropsWithStyles = Props & WithStyles<'root' | 'icon' | 'iconHover'>

const HomeIcon: React.SFC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
const SvgIcons: React.SFC<PropsWithStyles> = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <HomeIcon className={classes.icon} />
            <HomeIcon className={classes.icon} color="primary" />
            <HomeIcon className={classes.icon} color="secondary" />
            <HomeIcon className={classes.icon} color="action" />
            <HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
            <HomeIcon color="disabled" className={classes.icon} style={{ fontSize: 36 }} />
        </div>
    );

}
export default withStyles(styles)<Props>(SvgIcons)
