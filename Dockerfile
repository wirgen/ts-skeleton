FROM node:22 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install && yarn cache clean

COPY . ./

RUN yarn build


FROM node:22-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production && yarn cache clean --all && rm -rf /tmp/*

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/index.js"]