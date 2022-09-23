FROM node:16.17.0 as build

WORKDIR /build

COPY . .

RUN npm install && npm run build

FROM alpine
ENV NODE_ENV=production
RUN apk add --update nodejs npm
WORKDIR /app
COPY --from=build /build/build /app
COPY package*.json ./
RUN npm ci
COPY . .

CMD ["node", "index.js"]