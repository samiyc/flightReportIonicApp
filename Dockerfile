# Use a specific version of Node.js
FROM node:14

# Create a directory for the app
WORKDIR /usr/src/app

# Install specific versions of npm, Ionic, and Angular CLI
RUN npm install -g npm@6.14.15 \
   && npm install -g @ionic/cli@6.17.1 \
   && npm install -g @angular/cli@12.2.0

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port 8100 for the Ionic app
EXPOSE 8100

# Start the Ionic server
CMD ["ionic", "serve", "--host", "0.0.0.0"]
