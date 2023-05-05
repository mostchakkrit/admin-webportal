#!/bin/bash

export SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $SCRIPT_DIR

set -ex


TARGET=ubuntu@209.15.98.11
LOCAL_IMAGE=aaa/doh_new_webportal_admin:latest
REMOTE_IMAGE=209.15.98.11:5000/aaa/doh_new_webportal_admin:latest

docker tag $LOCAL_IMAGE $REMOTE_IMAGE

docker push $REMOTE_IMAGE

rsync -avzP \
  ./compose.yml \
  $TARGET:~/doh-new-webportal-admin/

ssh $TARGET <<EOF
cd ~/doh-new-webportal-admin
docker compose pull
docker compose up -d
EOF
