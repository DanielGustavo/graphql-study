FROM node:14.16.0-alpine3.10

WORKDIR /graphql-study

COPY package.json .
COPY yarn.lock .

RUN yarn

EXPOSE 4001

COPY . .

CMD ["yarn", "dev"]
