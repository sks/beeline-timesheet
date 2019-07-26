# Timesheet Autofiller

[![Build Status](https://travis-ci.org/sks/timesheet.svg?branch=master)](https://travis-ci.org/sks/timesheet)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsks%2Ftimesheet.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsks%2Ftimesheet?ref=badge_shield)

A cypress automation that would fill in the [beeline](https://www.beeline.com/) / [fieldglass](https://www.fieldglass.net) timesheets.

## Usage

The test suite is driven by the [beeline config](cypress/fixtures/config.json) / [fieldglass config](./cypress/fixtures/fieldglass_config.json) file.

### From source code

```sh
# Copy the cypress/fixtures/config.json to my_fixtures/config.json and make necessary edits.

export TIMESHEET="fieldglass" # or beeline
yarn ${TIMESHEET} -- --config fixturesFolder=my_fixtures/

```

### Using Docker

```sh


export TIMESHEET="fieldglass" # or beeline

## Create the config files in my_fixtures folder

## Beeline timesheet
docker run --rm \
    -v $PWD/my_fixtures:/fixtures \
    -v $PWD/videos:/videos \
    -v $PWD/screenshots:/screenshots \
    sabithksme/timesheet:latest yarn ${TIMESHEET} --config "fixturesFolder=/fixtures,videosFolder=/videos,screenshotsFolder=/screenshots"
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsks%2Ftimesheet.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsks%2Ftimesheet?ref=badge_large)