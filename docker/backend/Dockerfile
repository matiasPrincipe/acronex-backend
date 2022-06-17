FROM node:14.19.0-stretch

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3006
CMD ["npm", "start"]
