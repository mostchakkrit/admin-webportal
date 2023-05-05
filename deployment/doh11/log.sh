#!/bin/bash

export SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $SCRIPT_DIR

set -ex


TARGET=ubuntu@209.15.98.11

ssh $TARGET <<EOF
cd ~/doh-new-webportal-admin
docker compose logs --tail 20 -f
EOF
