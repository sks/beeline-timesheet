# Timesheet Autofiller

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

## Beeline timesheet
docker run --rm \
    -v $PWD/my_fixtures:/fixtures \
    -v $PWD/videos:/videos \
    -v $PWD/screenshots:/screenshots \
    sabithksme/timesheet:latest yarn ${TIMESHEET} --config "fixturesFolder=/fixtures,videosFolder=/videos,screenshotsFolder=/screenshots"
```
