FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci
COPY _accessibility.js /app/node_modules/accessibility/dist/accessibility.js

# Copy source files
COPY . .
RUN rm _accessibility.js

ENV NODE_OPTIONS=--openssl-legacy-provider

# Build
RUN npm run build

# Run
CMD ["npm", "run", "serve"]