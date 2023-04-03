# Base image
FROM node:19-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock to container
COPY package.json yarn.lock ./

# Install dependencies with yarn
RUN yarn install --frozen-lockfile --production=false

# Copy app files to container
COPY . /app

# Build React app
RUN yarn build

# Set environment variables
ENV PORT=3000
ENV NODE_ENV=production

# Expose port
EXPOSE $PORT

# Start app
CMD [ "yarn", "start" ]
# CMD ["node", "server.js"]

