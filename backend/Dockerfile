FROM node

WORKDIR /usr/app
COPY package*.json ./

COPY prisma ./

COPY .env ./

COPY tsconfig.json ./

RUN yarn

COPY . .

EXPOSE 3000
CMD ["yarn", "dev"]