---
title: "Implement Google Sign In Using the OAuth 2.0 API in an Express + React Application - Part-2"
date: "2021-10-30"
excerpt: "Obtaining client ID and client secret."
categories: ["User Authentication & Authorization"]
---

###### This blog post is part of a series. You should complete [part-1](https://hemanta.io/implement-google-sign-in-using-oauth2.0-api-in-an-express-and-react-application-part-1/) before continuing here.

```toc

```

Google APIs use the OAuth 2.0 protocol for authentication and authorization. Therefore we must obtain OAuth 2.0 client credentials from the Google API console.

### Step-1

Go to Google project dashboard at the following link:

https://console.cloud.google.com

![Home Page](../images/googleOauth/home.png)

### Step-2

Click on ~~NEW PROJECT~~.

![New Project](../images/googleOauth/newProject.png)

### Step-3

Name the project and click the ~~CREATE~~ button.

![Create Project](../images/googleOauth/create.png)

### Step-4

Select ~~APIs and services~~, then ~~OAuth consent screen~~.

![API Services](../images/googleOauth/apisServices.png)

### Step-5

Select ~~External~~ and click the ~~CREATE~~ button.

![External](../images/googleOauth/external.png)

### Step-6

Fill out the application name, scroll to the bottom and click the ~~SAVE & CONTINUE~~ button. No other info should be filled out in the consent screen at this time.

![OAuth](../images/googleOauth/OAuth.png)

![OAuth](../images/googleOauth/OAuthSave.png)

### Step-7

Click ~~Credentials~~ in the sidebar and click on the ~~+ CREATE CREDENTIALS~~ button.

![Create Credentials](../images/googleOauth/createCredentials.png)

### Step-8

Select ~~OAuth client ID~~.

![OAuth Client ID](../images/googleOauth/oAuthClientID.png)

### Step-9

Select ~~Web application~~.

![Web Application](../images/googleOauth/webApp.png)

Also, fill out ~~Authorized JavaScript origins~~ and ~~Authorised redirect URIs~~.

![Redirect UIs](../images/googleOauth/redirectUIs.png)

### Step-10

Copy your ~~Client ID~~ & ~~Client secret~~ in a safe place.

Note that ~~Client ID~~ is a public token. This means that we won't have any issues if anybody gets access to this ID. The ~~Client secret~~, on the other hand, is a private token. We don't want anybody to get access to this.

![Client ID & Client Secret](../images/googleOauth/clientIDSecret.png)

![Client ID & Client Secret](../images/googleOauth/clientIDSecretActual.png)

Continue to [part-3](https://hemanta.io/implement-google-sign-in-using-the-oauth2.0-api-in-an-express-and-react-application-part-3/).
