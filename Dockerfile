FROM node:16.15.0

WORKDIR /code
COPY entrypoint /code/entrypoint

#RUN npm i -g yarn@latest npm@latest

RUN echo  " node version:    $(node -v) \n" \
  "npm version:     $(npm -v) \n" \
  "yarn version:    $(yarn -v) \n"

RUN chown -R node:node /code

# Serve per avere l'owner dei file scritti dal container uguale all'utente Linux sull'host
USER node

ENTRYPOINT ["./entrypoint"]
