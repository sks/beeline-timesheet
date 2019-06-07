FROM cypress/base:10

WORKDIR /code

COPY . .

RUN yarn install

ENTRYPOINT [ "yarn", "cy:run", "--", "--config", "fixturesFolder=/fixtures,videosFolder=/videos,screenshotsFolder=/screenshots"]