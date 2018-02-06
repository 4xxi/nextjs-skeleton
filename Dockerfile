FROM node:8

WORKDIR /app

ADD . /app

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 3000
