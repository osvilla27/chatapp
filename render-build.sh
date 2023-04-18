
#!/bin/bash

# Exit on error
set -o errexit

rm -rf node_modules

yarn cache clean

yarn

yarn start

yarn build