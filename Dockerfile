FROM node:20

WORKDIR /app

# Устанавливаем зависимости с явным указанием архитектуры
ENV npm_config_platform=linux
ENV npm_config_arch=x64

COPY package*.json ./
RUN npm install --omit=optional

COPY . .

CMD ["npm", "run", "dev"]