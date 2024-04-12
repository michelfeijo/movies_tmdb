FROM node:19-bullseye-slim

# Navega para a pasta de instalação do Oracle Instant Client
WORKDIR /opt/oracle

# Atualiza e instala o WGET
RUN apt-get update && \
    apt-get install -y libaio1 unzip wget

# Baixa e instala o Oracle Instant Client utilizando o WGET
RUN wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip && \
    unzip instantclient-basiclite-linuxx64.zip && \
    rm -f instantclient-basiclite-linuxx64.zip && \
    cd instantclient* && \
    rm -f *jdbc* *occi* *mysql* *jar uidrvci genezi adrci && \
    echo /opt/oracle/instantclient* > /etc/ld.so.conf.d/oracle-instantclient.conf && \
    ldconfig

WORKDIR /backend

COPY . .

RUN npm install

RUN ls -a

ENV TZ=America/Sao_Paulo \
    DEBIAN_FRONTEND=noninteractive

EXPOSE 5000

CMD ["npm", "start"]