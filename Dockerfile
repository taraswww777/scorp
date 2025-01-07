# Используем официальный образ Node.js
FROM node:22

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

RUN mkdir fe be

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./fe/package*.json ./fe
COPY ./be/package*.json ./be

# Устанавливаем зависимости
RUN npm ci

# Копируем все файлы приложения
COPY . .

# Пока проект меньше 100К строк кода, разници нет
# RUN npm run be:build
RUN npm run fe:build

# TODO: ISSUE-20 - https://github.com/taraswww777/scorp/issues/20
# Открываем порт, на котором будет работать приложение
EXPOSE 8080

EXPOSE 3000
