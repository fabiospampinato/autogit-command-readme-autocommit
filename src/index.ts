
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

function readmeAutocommit ( customOptions?: Partial<typeof defaultOptions> ) {

  const options = Object.assign ( {}, defaultOptions, customOptions );

  return {
    description: 'Autocommit changes to the readme',
    plugins: [
      autocommit ({ message: options.message, paths: options.paths }),
      push ({ remote: options.remote, branch: options.branch })
    ]
  };

}

/* EXPORT */

export default readmeAutocommit;
