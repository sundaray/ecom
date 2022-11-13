---
title: "Install eksctl on Mac"
date: "2022-07-17"
excerpt: "eksctl"
categories: ["DevOps"]
---

~~eksctl~~ is a command line tool for working with EKS clusters that automates many individual tasks.

### Install the Weaveworks Homebrew tap

```sh {numberLines}
brew tap weaveworks/tap
```

![Brew Tap](../images/eksctl/brew-tap.png)

### Install eksctl

```sh {numberLines}
brew install weaveworks/tap/eksctl
```

![eksctl Install](../images/eksctl/brew-install.png)

If ~~eksctl~~ is already installed, run the following command to upgrade:

```sh {numberLines}
brew upgrade eksctl && brew link –overwrite eksctl
```

### Check ekctl version

```sh {numberLines}
ekctl version
```

![eksctl Version](../images/eksctl/eksctl-version.png)
