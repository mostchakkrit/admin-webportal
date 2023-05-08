FROM node:18

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY public ./public
COPY .next ./.next
COPY .env .env.production next.config.js ./

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

CMD npm run start
