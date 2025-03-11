#!/bin/bash
# This script acts as a wrapper to connect to Cloud SQL

# Start the Cloud SQL proxy in the background
/cloud-sql-proxy --port=3306 &
PROXY_PID=$!

# Start the main container process
exec "$@" &
MAIN_PID=$!

# Handle graceful shutdown
function shutdown() {
  # Kill the Cloud SQL proxy
  kill -TERM $PROXY_PID
  # Kill the main process
  kill -TERM $MAIN_PID
  # Wait for them to terminate
  wait $PROXY_PID
  wait $MAIN_PID
}

# Set up the signal handling
trap shutdown SIGTERM SIGINT

# Wait for either process to exit
wait -n $PROXY_PID $MAIN_PID
shutdown