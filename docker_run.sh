#!/bin/bash
DIR="$( cd "$( dirname "$0" )" && pwd -P )"
cd ./apps/back && yarn install && yarn build 
cd $DIR && docker-compose build && docker-compose up