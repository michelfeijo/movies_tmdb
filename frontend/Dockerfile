# 1. For build React app
FROM node:20-alpine AS development

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code
COPY . .

ENV CI=true
ENV PORT=3000

# Start the application
CMD [ "npm", "start" ]

# Build the application
FROM development AS build

RUN npm run build

# Setup development environment
FROM node:20-alpine AS dev-envs

WORKDIR /app

RUN apk update && apk add --no-cache git
RUN adduser -D -s /bin/bash vscode && \
    addgroup docker && \
    adduser vscode docker

# Copy the application code and build files
COPY --from=development /app /app

# Copy Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD [ "npm", "start" ]

# 2. For Nginx setup
FROM nginx:alpine

# Copy nginx configuration file
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from build stage
COPY --from=build /app/dist .

# Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]