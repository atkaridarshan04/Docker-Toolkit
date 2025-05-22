# ────────────── Stage 1: Build ──────────────
FROM node:20-alpine3.20 AS builder
WORKDIR /app
# Install dependencies 
COPY package.json package-lock.json ./
RUN npm ci
# Copy source files and build
COPY . .
RUN npm run build

# ────────────── Stage 2: Serve ──────────────
FROM nginx:stable-alpine
# Copy static files
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
# Run nginx in foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]