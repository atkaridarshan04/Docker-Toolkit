FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:22-slim 
WORKDIR /app
COPY --from=build /app .

EXPOSE 3000
ENTRYPOINT ["node", "server.js"]