# Timesheet Autofiller

A cypress automation that would fill in the beeline timesheets

## Usage

The test suite is driven by the [cypress/fixtures/config.json](cypress/fixtures/config.json) file.

### From source code

```sh
# Copy the cypress/fixtures/config.json to my_fixtures/config.json and make necessary edits.

yarn cy:run -- --config fixturesFolder=my_fixtures/
```

### Using Docker

```sh
docker run --rm \
    -v $PWD/my_fixtures:/fixtures \
    -v $PWD/videos:/videos \
    -v $PWD/screenshots:/screenshots \
    sabithksme/timesheet:beeline
```
