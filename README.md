# Payload Blank Template

This template provides a blank slate to get started with [Payload CMS](https://payloadcms.com). It comes configured with the bare minimum you need to build a website or application.

## Getting Started

There are two ways to run this project locally:

### 1. Standard Setup (Recommended)

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>
    ```
2.  **Set up environment variables:**
    Copy the example `.env` file and add your database connection string.
    ```bash
    cp .env.example .env
    ```
    Then, edit `.env` and set your `MONGODB_URI`.

3.  **Install dependencies and run:**
    ```bash
    pnpm install
    pnpm dev
    ```
4.  **Open the app:**
    Navigate to http://localhost:3000. Follow the on-screen instructions to create your first admin user.

### 2. Docker Setup (Optional)

If you prefer to use Docker to manage your database:

1.  Ensure you have Docker and Docker Compose installed.
2.  In your `.env` file, set `MONGODB_URI=mongodb://127.0.0.1/payload-starter`.
3.  Run `docker-compose up -d` to start the MongoDB container in the background.
4.  Follow steps 3 and 4 from the **Standard Setup** above.

## Project Structure

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the `uploads` enabled collection. It features pre-configured image sizes, focal point control, and manual resizing to help you manage your media.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
