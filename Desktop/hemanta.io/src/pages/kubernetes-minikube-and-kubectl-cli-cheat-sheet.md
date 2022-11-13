---
title: "Kubernetes - Minikube & Kubectl CLI Cheat Sheet"
date: "2022-07-13"
excerpt: "Minikube & Kubectl Cheat Sheet"
categories: ["DevOps-Kubernetes"]
---

```toc

```

### Minikube

Start a local Kubernetes cluster

```sh {numberLines}
minikube start
```

Get the status of a local Kubernetes cluster

```sh {numberLines}
minikube status
```

Access the kubernetes dashboard running within the Minikube cluster

```sh {numberLines}
minikube dashboard
```

Return a URL to connect to a service.

```sh {numberLines}
minikube service <service_name>
```

### Kubectl

Get the list of deployments

```sh
kubectl get deployments or kubectl get deploy
```

View the nodes in the cluster

```sh
kubectl get nodes
```

Retrieve additional details about Nodes

```sh
kubectl describe node
```

Get the list of pods

```sh
kubectl get pods
```

Get additional details about pods

```sh
kubectl describe pods
```

Get the whole YAML definition of a pod

```sh
kubectl get pod <pod_name> -o yaml
```

Retrive the container log

```sh
kubectl logs <pod_name>
```

Retrive the container log, when the pod contains multiple containers

```sh
kubectl logs <pod_name> -c <container_name>
```

Retrieving the application log of a crashed container

```sh
kubectl logs <pod_name> --previous
```

Get the list of services

```sh
kubectl get services or kubectl get svc
```

Delete a deployment

```sh
kubectl delete deploy <deployment_name>
```

Create a Kubernetes object

```sh
kubectl apply -f=<file_name>.yaml
```

Update a kubernetes deployment using a new image

```sh {numberLines}
kubectl set image deployment/<deployment_name> <container_name>/<image_name>:<tag_name>
```
