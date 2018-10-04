# Build container
FROM node:alpine AS build

WORKDIR /service
COPY . .

RUN npm install
RUN npm run build


# Production container
FROM node:alpine

WORKDIR /app
COPY --from=build /service/dist .
COPY --from=build /service/node_modules node_modules

CMD ["node", "index.js"]