FROM node:8-alpine AS build
RUN apk add --no-cache php7 php7-phar php7-iconv php7-mbstring php7-openssl php7-json php7-ctype git zip curl ca-certificates openssl python2 python2-dev build-base
RUN curl --silent --show-error https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
# 'phantomjs-prebuilt' won't work on plain alpine! See https://github.com/dustinblackman/phantomized
RUN wget -qO- "https://github.com/dustinblackman/phantomized/releases/download/2.1.1/dockerized-phantomjs.tar.gz" | tar xzv -C /
ADD ./package.json /src/
ADD ./apps/pl/pattern-lab/composer.* /src/apps/pl/pattern-lab/
WORKDIR /src
RUN npm --no-color install && npm --no-color run setup
ADD . /src

# RUN npm --no-color test
# RUN npm --no-color start compile:pl
CMD npm --no-color start
EXPOSE 8080

## TODO build static styleguide
# FROM nginx:alpine
# COPY --from=build /src/dist/ /usr/share/nginx/html
# EXPOSE 80
