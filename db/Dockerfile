FROM postgres:latest

COPY . /fixtures
COPY ./setup.sh /docker-entrypoint-initdb.d

RUN chmod +x /docker-entrypoint-initdb.d/*
