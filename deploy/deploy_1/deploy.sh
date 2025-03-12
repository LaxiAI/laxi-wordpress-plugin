#!/bin/bash
set -e

# Configuration variables
PROJECT_ID="adept-rock-414315"
REGION="us-central1"
SERVICE_NAME="wordpress-woocommerce"
SQL_INSTANCE_NAME="wordpress-db"
DB_USER="wordpress"
DB_PASSWORD="wordpress_password"
DB_NAME="wordpress"
DOMAIN="demo.laxi.ai"

# Build the Docker image
echo "Building Docker image..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME

# Get the SQL connection name
SQL_CONNECTION_NAME="$PROJECT_ID:$REGION:$SQL_INSTANCE_NAME"
echo "SQL Connection Name: $SQL_CONNECTION_NAME"

# Deploy to Cloud Run
echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --add-cloudsql-instances $SQL_CONNECTION_NAME \
  --set-env-vars="WORDPRESS_DB_USER=$DB_USER,WORDPRESS_DB_PASSWORD=$DB_PASSWORD,WORDPRESS_DB_NAME=$DB_NAME,WORDPRESS_DB_HOST=:/cloudsql/$SQL_CONNECTION_NAME,WORDPRESS_AUTH_KEY=$(openssl rand -base64 48),WORDPRESS_SECURE_AUTH_KEY=$(openssl rand -base64 48),WORDPRESS_LOGGED_IN_KEY=$(openssl rand -base64 48),WORDPRESS_NONCE_KEY=$(openssl rand -base64 48),WORDPRESS_AUTH_SALT=$(openssl rand -base64 48),WORDPRESS_SECURE_AUTH_SALT=$(openssl rand -base64 48),WORDPRESS_LOGGED_IN_SALT=$(openssl rand -base64 48),WORDPRESS_NONCE_SALT=$(openssl rand -base64 48)" \
  --cpu=1 \
  --memory=1Gi \
  --timeout=300s \
  --min-instances=1 \
  --max-instances=3

# Get the service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format="value(status.url)")
echo "WordPress deployed to: $SERVICE_URL"

# Map the custom domain
echo "Mapping custom domain $DOMAIN to the service..."
gcloud beta run domain-mappings create \
  --service $SERVICE_NAME \
  --domain $DOMAIN \
  --region $REGION

echo "Domain mapping created. DNS records need to be configured for $DOMAIN to point to Cloud Run."
echo "Deployment completed!"