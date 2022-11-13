---
title: "Understanding Semantic Versioning (SemVer)"
date: "2021-06-10"
excerpt: "Demystifying symantic versioning."
---

```toc

```

Semantic Versioning is a set of rules and requirements that dictate how version numbers of packages are assigned and incremented. Under this scheme, version numbers and the way they change convey meaning about the underlying code and what has been modified from one version to the next.

Consider a version format of X.Y.Z (Major.Minor.Patch)

- Increment the PATCH version when you make backward compatible bug fixes.
- Increase the MINOR version when you add functionality in a backward compatibility manner.
- Increase the MAJOR version when you make incompatible API changes.

In semantic versioning, the version of a node package has three components as shown below:

```sh
“gsap” : “^3.6.1” // equivalent to 3.x
```

The first number (3) is known as the major version. The second number (6) is known as the minor version. The minor version is used to add features that don’t break the existing API. The third number (1) is known as the patch version, which is used for bug fixes.

For example, if ~~gsap~~ developers find a bug in the current version, they will fix the bug and release a new version 3.6.2., by increasing the patch version number.

If ~~gsap~~ developers add a new feature, they will release a new version 3.7.0. Note that the patch version is 0, because they haven’t found any bug yet.

If they release a new feature that could break the applications that depend upon the existing version of gsap, then they will increase the major version. The major version will be 4.0.0.

The ~~^~~ (caret) character tells npm that we are interested in any version of ~~gsap~~ as long as the major version is 3. Let’s say we store our app that uses ~~gsap~~ version ^3.6.1 in GitHub. Six months later, let’s say that ~~gsap~~ has released a new version ^3.7.2. If we clone that directory and npm install the packages, gsap version ^3.7.2 will be installed in our system.

Sometimes, instead of ~~^~~, we might come across ~ (tilde). “~3.6.1” means that we are interested in any version of ~~gsap~~ as long as the major version is 3 and the minor version is 6. The alternative syntax is 3.6.x.

If you want the exact version, you remove the ~~^~~ or ~ character. So, six months later, if you check out the directory from GitHub and install the packages, you will install the exact version used during the app development six months before.

## Listing the installed packages

If you want to find out the list of installed dependencies and their exact version, you can simply run the following command:

```sh
npm list
```

If you want to see only the dependencies of your application(_not their dependencies_), you can supply the depth flag to the ~~npm list~~ command as shown below.

```sh
npm list --depth=0
```

## Viewing registry info for a package

If you want to find out all the meta data about let’s say ~~gsap~~, you can use the following command.

```sh
npm view gsap
```

## See all the versions of a package

If you want to see all the versions of the ~~gsap~~ package released so far, you can use the following command.

```sh
npm view gsap versions
```

## Upgrading an outdated package

If you want to find out the outdated packages in your application and their newer versions, you can use the following command:

```sh
npm outdated
```

If you use the command npm ~~update~~, only the minor and patch versions will be updated.

If you want to update to the latest version however, you have to first install the following package.

```sh
npm i -g npm-check-updates
```

Now, if you run ~~npm-check-updates~~ on the terminal, all the packages will be updated to their latest release. Next, you can update the ~~package.json~~ file using the following command:

```sh
npm-check-updates -u
```

But you have not installed the package yet. You have just updated the version in ~~package.json~~. To install the package, run the following command:

```sh
npm i
```

## Development dependencies

Development dependencies are dependencies that should not go to production environments.

Supply the following flag to install a package as a development dependency.

```sh
--save-dev
```

## Uninstalling a package

If you want to uninstall a package, let's say ~~gsap~~, you can use the following command:

```sh
npm uninstall gsap or npm un gsap
```

This will remove gsap from both the ~~package.json~~ file and the ~~node_modules~~ folder.
