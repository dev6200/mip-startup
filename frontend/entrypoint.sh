#!/bin/sh

# Default to production if NODE_ENV is not set
NODE_ENV=${NODE_ENV:-production}

echo "Running in $NODE_ENV mode..."

echo "Starting in development mode..."
npm install
npm run dev

# if [ "$NODE_ENV" = "development" ]; then
#   echo "Starting in development mode..."
#   npm install
#   npm run dev
# else
#   echo "Starting in production mode..."
#   npm run build
#   npm start
# fi
