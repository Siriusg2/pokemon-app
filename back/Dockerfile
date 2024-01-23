FROM node:latest
RUN npm install -g pnpm
WORKDIR /app
COPY package*.json ./
RUN pnpm i
RUN npm install -g prisma
COPY . .    
EXPOSE 3001
RUN npx prisma generate

CMD ["sh", "-c", "echo 'Waiting for 5 seconds for db container...' && sleep 5 && npx prisma migrate dev --name init && pnpm run dev"]
