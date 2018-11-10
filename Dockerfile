FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . /app
PORT 1337
CMD npm run web





