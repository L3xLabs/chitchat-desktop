# ChitChat Client Setup

This guide will help you set up and run the ChitChat web client.

## Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Steps to Set Up the Client

1. **Clone the repository**:

   ```bash
   git clone https://github.com/L3xLabs/chitchat-web-client.git
   git clone https://github.com/L3xLabs/chitchat-react-sdk.git
   ```

2. **Set up the `matrix-js-sdk`**:

   ```bash
   pushd matrix-js-sdk
   yarn link
   yarn install
   popd
   ```

3. **Set up the `matrix-react-sdk`**:

   ```bash
   pushd matrix-react-sdk
   yarn link
   yarn link matrix-js-sdk
   yarn install
   popd
   ```

4. **Set up the ChitChat web client**:

   ```bash
   cd chitchat-web-client
   yarn link matrix-js-sdk
   yarn link matrix-react-sdk
   yarn install
   ```

5. **Start the application**:
   ```bash
   yarn start
   ```

The application should now be running locally. You can access it via your browser.

## Troubleshooting

If you encounter any issues, please refer to the [official documentation](https://github.com/L3xLabs/ChitChat) or create an issue in the GitHub repository.
