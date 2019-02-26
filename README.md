# Angular Compiler Issue

This project was generated to demonstrate an issue in Angular Compiler when you use libraries

For building this project it's necessary running the following steps:

* `npm install`
* `npm run build:lib-domain`
* `ng serve --prod`

## Project structure

This workspace is divided into two projects.

* main-app is an application that is responsible for running the library.
* domain is a library that has classes and utility methods.

## Problem

When the application "main-app" is built using production mode. The method `remap` inside `domain/base-functions.ts` doesn't work.

If the flag "optimization" in angular.json (main-app section) is changed to false or building the "main-app" in dev mode, the problem doesn't happen.

The problem only happens when you use arrow functions