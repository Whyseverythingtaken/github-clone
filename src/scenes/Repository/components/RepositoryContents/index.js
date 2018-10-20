/**
 * RepositoryContents
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// Icons
import IconFile from './IconFile';
import IconFolder from './IconFolder';

// Styles
import styles from './styles';

// Selectors
import { selectRepositoryContents } from '../../../../services/repositoryContents/selectors';

class RepositoryContents extends React.PureComponent {
  render() {
    const { contents, classes } = this.props;
    return (
      <Table className={classes.table}>
        <TableBody>
          {contents.map((file, idx) => {
            return (
              <TableRow key={idx} hover>
                <TableCell className={classes.icon}>
                  {file.type === 'file' ? <IconFile /> : <IconFolder />}
                </TableCell>
                <TableCell className={classes.spacing}>
                  <a
                    href={file.html_url}
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    {file.name}
                  </a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  contents: selectRepositoryContents
});

const styledRepositoryContents = withStyles(styles)(RepositoryContents);

export default connect(mapStateToProps)(styledRepositoryContents);