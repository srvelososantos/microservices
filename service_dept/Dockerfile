# Dockerfile
# Usa uma imagem leve do Node
FROM node:18-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o resto do código fonte
COPY . .

# Compila o NestJS (cria a pasta dist)
RUN npm run build

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]