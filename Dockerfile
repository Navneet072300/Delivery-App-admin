FROM node:20-alpine


WORKDIR /app


COPY package.json .


COPY package-lock.json .


COPY . .

COPY .env .env


RUN npm install


CMD ["npm", "run", "dev"]