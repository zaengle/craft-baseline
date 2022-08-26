## Using DDEV

A config is provided for [DDEv](https://ddev.com/get-started/). The advantage of using DDEV is that all local dependency versions can be matched to production, and to all other team members working on the project.

[Read the Full DDEV docs](https://ddev.readthedocs.io/en/) or start by [installing DDEV](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/) if you don't have it already:




One time setup:
```shell
brew install pre-commit
pre-commit install
# Not required if you already have docker / docker desktop
brew install docker
# alternate, lighterweight container management
brew install colima
brew tap drud/ddev && brew install ddev
ddev config global --mutagen-enabled
# list commands
ddev -h
```

Once per host machine (re)start
```shell
colima start
```


Daily drive:
```shell
# start the project's containers
ddev start
# composer
ddev composer install
# run a Craft command
bin/craft help
```

## Useful commands


- `ddev craft <command>` run a `craft` CLI command
- `ddev npm <command>` run a `npm` CLI command, e.g. `ddev npm run dev`
- `ddev config` configures a project's type and docroot.
- `ddev start` starts up a project.
- `ddev launch` opens a web browser showing the project.
- `ddev list` shows current projects and their state.
- `ddev describe` gives all the info about the current project.
- `ddev ssh` takes you into the web container.
- `ddev exec <command>` lets you execute any command inside the web container.
- `ddev stop` stops a project and removes its memory usage (but does not throw away any data).
- `ddev poweroff` stops all resources that DDEV is using.
- `ddev delete` will destroy the database and DDEV's knowledge of the project, but does nothing to your code.


## And less frequently...

- `ddev mysql` gives direct access to the mysql client
- `ddev sequelpro`, `ddev sequelace`, and `ddev tableplus` (macOS only, if the app is installed) give access to the Sequel Pro, Sequel Ace, or TablePlus database browser GUIs.
- `ddev import-db` and `ddev export-db` let you import or export a sql or compressed sql file.
- `ddev composer` lets you run composer (inside the container), for example `ddev composer install` will do a full `composer install` for you without even needing composer on your computer. See developer tools.
- `ddev snapshot` makes a very fast snapshot of your database that can be easily and quickly restored with `ddev snapshot restore`.
- `ddev share` requires `ngrok` and at least a free account on ngrok.com so you can let someone in the next office or on the other side of the planet see your project and what you're working on. `ddev share -h` gives more info about how to set up ngrok.
- `ddev xdebug` enables xdebug, `ddev xdebug off` disables it, `ddev xdebug status` shows status
- `ddev xhprof` enables xhprof, `ddev xhprof off` disables it, `ddev xhprof status` shows status
- `ddev yarn` and `ddev npm` give direct access to the yarn/npm CLIs
