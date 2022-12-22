FROM node:18.12
# Create app directory
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "api" ]
EXPOSE 8080
