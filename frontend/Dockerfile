# Use node:14 base image for the frontend
FROM node:14

# Set the working directory
WORKDIR /app

# Copy frontend code from pages directory to the Docker image
COPY pages /app/pages

# Install necessary dependencies using npm install
RUN npm install

# Expose port 3000 for the frontend application
EXPOSE 3000

# Set the command to start the Next.js development server using npm run dev
CMD ["npm", "run", "dev"]
