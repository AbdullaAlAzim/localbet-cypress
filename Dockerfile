# Use the official Cypress image with Node.js and browsers installed
FROM cypress/included:12.6.0

# Set the working directory in the container
WORKDIR /e2e

# Copy package.json and package-lock.json for npm install
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the remaining project files
COPY . .

# Entry point to run Cypress tests
ENTRYPOINT ["npx", "cypress", "run"]
