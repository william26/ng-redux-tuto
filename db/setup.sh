#!/bin/bash

set -e

PGPASSWORD=somepassword psql -f /fixtures/db-schema.sql -d dbuser -U dbuser
