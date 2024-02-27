# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Expose port 5000 for Gunicorn
EXPOSE 5000

# Specify Gunicorn as the entry point
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
