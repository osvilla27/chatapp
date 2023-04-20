#!/bin/bash

# Exit on error
set -o errexit

npm clean cache --force

npm run build