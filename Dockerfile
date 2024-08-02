# Используем официальный образ Node.js в качестве базового
FROM node:16-alpine AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код в рабочую директорию
COPY . .

# Собираем приложение для продакшн
RUN npm run build

# Используем официальный образ Nginx для запуска приложения
FROM nginx:alpine

# Копируем файлы сборки в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем кастомный файл конфигурации Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Указываем порт, который будет использовать контейнер
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
