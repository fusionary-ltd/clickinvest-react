FROM node:16-alpine
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY . .

# Build
RUN npm run build

# Run
CMD ["npm", "run", "serve"]