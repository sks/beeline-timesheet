FROM cypress/base:10

WORKDIR /code

COPY . .

RUN yarn install
