# Build stage
FROM node:18.16.1-bullseye-slim as build-server

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Final stage
FROM node:18.16.1-bullseye-slim

# Set working directory for Oracle Instant Client installation
WORKDIR /opt/oracle

# Update and install required packages
RUN apt-get update && \
    apt-get install -y libaio1 unzip wget

# Download and install Oracle Instant Client
RUN wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip && \
    unzip instantclient-basiclite-linuxx64.zip && \
    rm -f instantclient-basiclite-linuxx64.zip && \
    cd instantclient* && \
    rm -f *jdbc* *occi* *mysql* *jar uidrvci genezi adrci && \
    echo /opt/oracle/instantclient* > /etc/ld.so.conf.d/oracle-instantclient.conf && \
    ldconfig

# Set working directory for the application
WORKDIR /app

# Copy application files from the build stage
COPY --from=build-server /app /app

# Set environment variables
ENV TZ=America/Sao_Paulo \
    DEBIAN_FRONTEND=noninteractive

# Expose port
EXPOSE 3010

# Command to run the application
CMD ["node", "./src/index.js"]
