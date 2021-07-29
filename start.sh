#! /usr/bin/env bash

DOCKER_NAME="yubot"

git pull --force

echo remove docker container
docker rm -f $DOCKER_NAME
echo remove docker image
docker rmi -f $DOCKER_NAME

echo build docker image
docker build -t $DOCKER_NAME .
echo run docker container
docker run -d \
    --name $DOCKER_NAME \
    $DOCKER_NAME