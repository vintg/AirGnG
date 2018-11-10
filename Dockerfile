FROM node:alpine
WORKDIR /app
RUN npm install -g nodemon
COPY package*.json ./
RUN npm install --only=production
COPY . /app
EXPOSE 1337
CMD npm run web





