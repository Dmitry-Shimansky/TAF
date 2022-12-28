FROM node:14.19.0
# Create app directory
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "api" ]
EXPOSE 8080
