FROM node:16-alpine
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci
COPY _accessibility.js /app/node_modules/accessibility/dist/accessibility.js

# Copy source files
COPY . .
RUN rm _accessibility.js

# Build
RUN npm run build

EXPOSE 3000

# Run
CMD ["npm", "run", "serve"]