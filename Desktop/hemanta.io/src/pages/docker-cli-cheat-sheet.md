---
title: "Docker CLI Cheat Sheet"
date: "2022-07-10"
excerpt: "Docker containers"
categories: ["DevOps-Docker"]
---

```toc

```

### Containers

Create and run a container from an image, with a custom name:

```sh
docker run --name <container_name> <image_name>
```

Run a container with and publish a container’s port(s) to the host.

```sh
docker run -p <host_port>:<container_port> <image_name>
```

Run a container in the background

```sh
docker run -d <image_name>
```

Start or stop an existing container:

```sh
docker start|stop <container_name>
```

Restart a stopped container

```sh
docker restart <container_name>
```

Remove a stopped container:

```sh
docker rm <container_name>
```

Remove all stopped containers:

```sh
docker container prune>
```

Stop & remove a container in one command

```sh
docker stop <container_name> | xargs docker rm
```

Open a shell inside a running container:

```sh
docker exec -it <container_name> sh
```

Fetch and follow the logs of a container:

```sh
docker logs -f <container_name>
```

To inspect a running container:

```sh
docker inspect <container_name>
```

To list currently running containers:

```sh
docker ps
```

List all docker containers (running and stopped):

```sh
docker ps --a
```

View resource usage stats

```sh
docker container stats
```

List all running processes inside a container

```sh
docker top <container_name>
```

### Images

Build an Image From a Docker File

```sh
docker build -t <image_name>
```

List local images

```sh
docker images
```

Delete an image

```sh
docker rmi <image_name>
```

Create a new reference for a Docker image.

```sh
docker image tag <image_name> <Docker_Hub_Username>/<image_name>
```

Push an image to Docker Hub.

```sh
docker image push <Docker_Hub_Username>/<image_name>
```

### Docker System Information

```sh
docker system info
```

### Docker Hub

Login to Docker Hub

```sh
docker login -u <user_name> -p <password>
```
