# Autogit Command - Readme Autocommit

A command for autocommitting changes to the readme.

## Install

```sh
npm install --save autogit-command-readme-autocommit
```

## Usage

#### Options

This command uses the following options object:

```js
{
  remote: 'origin', // The remote to push to
  branch: '' // The branch to push to, if not set the current branch will be used
  message: 'Readme: update', // Commit message
  paths: ['README.md', 'Readme.md', 'readme.md', 'README', 'Readme', 'readme'] // When these paths change a commit will be made
}
```

#### Configuration

Add this command to your configuration:

```js
const readmeAutocommit = require ( 'autogit-command-readme-autocommit' );

module.exports = {
  commands: {
    'readme-autocommit': readmeAutocommit 
  }
}
```

#### CLI

Call it from the CLI with:

```sh
autogit readme-autocommit
```

## License

MIT © Fabio Spampinato
