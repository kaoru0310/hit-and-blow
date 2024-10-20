# Use python:3.12 base image for the backend
FROM python:3.12

# Set the working directory
WORKDIR /app

# Copy backend code from backend directory to the Docker image
COPY backend /app/backend

# Install necessary dependencies using pip install
RUN pip install fastapi uvicorn

# Expose port 8000 for the backend application
EXPOSE 8000

# Set the command to start the FastAPI server using uvicorn
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
