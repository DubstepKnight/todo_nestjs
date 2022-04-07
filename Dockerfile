FROM --platform=amd64 node:16-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g glob rimraf

RUN npm install --include=dev

COPY . .

RUN npm run build

CMD ["npm", "run", "start:dev"]

FROM --platform=amd64 node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV STAGE=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

RUN mkdir /usr/src/data

CMD ["node", "dist/main"]