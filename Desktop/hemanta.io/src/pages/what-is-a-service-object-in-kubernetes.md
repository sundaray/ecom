---
title: "What is a Service Object in Kubernetes?"
date: "2022-07-14"
excerpt: "port, targetPort, nodePort"
categories: ["DevOps-Kubernetes"]
---

Before we understand what a Service object is and why we need it, we must understand a key detail about pods.

Kubernetes pods are non-permanent resources. They get created and destroyed to match the desired state of the cluster.

Each Pod has its own unique IP address, which is internal and is not accessible from outside the cluster. However in a Deployment, the set of pods running in one moment in time could be different from the set of Pods running that application a moment later.

If an external client needs to access the application, how do we find out and keep track of which IP address to connect to?

This is where Services come into the picture - to solve the problem of ever-changing IP addresses of pods.

A Service in Kubernetes is an abstraction that defines a logical set of Pods and a policy by which to access them. It represents a static location for a group of one or more pods that all provide the same service.

When a Service is created, it gets a static IP, which never changes during the lifetime of the Service. Instead of connecting directly to pods, clients connect to the service through its IP address. The service makes sure one of the Pods receives the connection, regardless of where the Pod is running and what its IP address is.

We can create a Service object using a service configuration ~~.yaml~~ file, as shown below:

```yml {numberLines}
apiVersion: v1
kind: Service
metadata:
  name: node-web-server-http
spec:
  type: NodePort
  ports:
    - port: 3050
      targetPort: 8000
      nodePort: 31515
  selector:
    App: node-server
```

The specification creates a new Service object named "node-web-server-http" which will accept connections on port 3050 and will route each connection to port 8000 of one of the pods matching the ~~App:node-server~~ label selector.

- ~~selector~~: Refers to the set of Pods with the ~~App:node-server~~ label.
- ~~port~~: The port this Service will be available on.
- ~~targetPort~~: Refers to the port where the app is exposed inside the container. This is the port the container will accept traffic on. Our application must be listening for requests on this port number for the Service to work.
- ~~nodePort~~: This setting makes the Service visible outside the Kubernetes cluster by the Node’s IP address and the port number declared in this property. Specifying a ~~nodePort is not mandatory; Kubernetes will choose a random port if you omit it.
