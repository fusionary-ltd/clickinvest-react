FROM node:16-alpine
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci
COPY _accessibilty.js /app/node_modules/accessibilty/dist/accessibilty.js

# Copy source files
COPY . .
RUN rm _accessibilty.js

# Build
RUN npm run build

EXPOSE 3000

# Run
CMD ["npm", "run", "serve"]