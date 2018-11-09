FROM node:alpine
WORKDIR /app
RUN npm install -g nodemon
COPY package*.json ./
RUN npm install
COPY . /app
EXPOSE 1337
CMD npm run web





