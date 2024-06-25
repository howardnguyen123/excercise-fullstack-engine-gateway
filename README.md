# Excercise for Fullstack engineer

Short description or introduction of your project.

## Requirements

- Docker
## Environment Variables

Create a `.env` file in the root directory of your project. Add the following environment variables:
  ```
  NODE_ENV=development
  APP_PORT=8000
  GRPC_EMPLOYEE_HOST=excercise-service-employee
  GRPC_EMPLOYEE_PORT=50051
  NETWORK_NAME=excercise-fullstack-engine
  ```
  ### Explanation:

  - `NODE_ENV`: Specifies the environment mode of the application, set to `development`.
  - `APP_PORT`: Specifies the port on which the application will run, set to `8000`.
  - `GRPC_EMPLOYEE_HOST`: Specifies the host address of the gRPC server for employees, set to `excercise-service-employee`.
  - `GRPC_EMPLOYEE_PORT`: Specifies the port of the gRPC server for employees, set to `50051`.
  - `NETWORK_NAME`: Specifies the network name, set to `excercise-fullstack-engine`.

  Make sure to adjust these values according to your specific environment configuration.
## Getting Started
Follow these steps to get started with the project:

1. Clone the repository:

   ```bash
   git clone git@github.com:howardnguyen123/howardnguyen123-excercise-fullstack-engine-gateway.git
   cd excercise-fullstack-engine-gateway
   ```
2. Create a .env file and configure environment variables as shown above.
3. Start the application using Docker Compose:
    ```bash
    docker-compose up
    ```
    This command will build and start the Docker containers for development environment.

4. Access the application:
  Open your web browser and go to http://localhost:8000.

## Commands
  - `docker-compose up`: Start the application in development mode.
  - `docker-compose up --build -d`: Build and start the application in production mode.
  - `docker-compose down`: Stop and remove Docker containers.

## Additional Notes
  - Replace `git@github.com:howardnguyen123/howardnguyen123-excercise-fullstack-engine-gateway.git` and `excercise-fullstack-engine-gateway` with your actual Git repository URL and project folder name.
  - Modify `.env.example` to suit your environment variables and rename it to `.env`.
  - Customize Dockerfile, docker-compose.yml, and npm scripts (`package.json`) based on your project's specific requirements.
