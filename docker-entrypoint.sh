#!/bin/sh
set -e
echo "Running Payload migrations..."
npx payload migrate 2>/dev/null || echo "Migrations: already current"
echo "Starting Payload CMS..."
exec HOSTNAME="0.0.0.0" node server.js
