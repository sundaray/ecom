---
title: "Create a Cluster on Amazon EKS"
date: "2022-07-16"
excerpt: "Create a Kubernetes cluster"
categories: ["DevOps-Kubernetes"]
---

```toc

```

We will create the cluster using ~~Fargate Linux~~ node type. Fargate is a serverless compute engine that will let us deploy Kubernetes pods without managing Amazon EC2 instances.

### Creating the cluster

We will create our Amazon EKS cluster using the ~~eksctl create cluster~~ command.

```sh {numberLines}
eksctl create cluster --name node-web-app --region ap-south-1 --fargate
```

![EKS Cluster](../images/eks-cluster/create-cluster.png)

> Note that the cluster name can only contain alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can’t be longer than 128 characters. Replace ~~region_code~~ with any AWS region that is supported by Amazon EKS.

Cluster creation takes several minutes. During creation, you will see several lines of output. The last line of output is similar to the following:

![EKS Cluster](../images/eks-cluster/create-cluster-complete.png)

### View Kubernetes Resources

View your cluster nodes:

```sh {numberLines}
kubectl get nodes -o wide
```

![Cluster Nodes](../images/eks-cluster/cluster-nodes.png)

View the workloads running on your cluster:

```sh {numberLines}
kubectl get pods -A -o wide
```

![Cluster Pods](../images/eks-cluster/cluster-pods.png)

### Delete Your Cluster & Nodes

We can delete the cluster and the nodes with the following command:

```sh {numberLines}
eksctl delete cluster –name node-web-app –region ap-south-1
```

![Cluster Deletion](../images/eks-cluster/delete-cluster.png)
