
/* IMPORT */

import autocommit from 'autogit-plugin-autocommit';
import push from 'autogit-plugin-push';

/* README AUTOCOMMIT */

const defaultOptions = {
  remote: 'origin',
  branch: '',
  message: 'Readme: update',
  paths: ['README.md', 'Readme.md', 'readme.md', 'README', 'Readme', 'readme']
};

function readmeAutocommit ( options? ) {

  options = Object.assign ( {}, defaultOptions, options );

  return {
    description: 'Autocommit changes to the readme',
    plugins: [
      autocommit ({ message: options.message, paths: options.paths }),
      push ({ remote: options.remote, branch: options.branch })
    ]
  };

}

/* EXPORT */

export = Object.assign ( readmeAutocommit, { default: readmeAutocommit } );
