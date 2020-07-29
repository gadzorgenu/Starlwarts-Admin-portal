This project contains both the client and server side of the application

## Client 

This module is made up of a src directory which contains other subdirectories representing modules of the application. Some of the subdirectories are: 

1. actions
2. components
3. reducers

### Actions

The actions subdirectory contains files with methods that dispatches an action after a request has been successfully created to the server

### Components

This subdirectory contains all the various components(pages) in the application 

## Server

This module is made up of directories representing modules of the API. Some of the subdirectories are:

1. classes
2. config
3. database
4. mail
5. models
6. routes


### Classes

The classes sub directory deals with the main operations of application. It contains operations 
like retrieving customers and orders

### Config

The configuration sub directory contain various configuration files for the application. It contains application wide configuration such as logging, debugging and reading of configuration parameters from .env file based on application environment. The configuration module (config.js) is ***injected*** into other modules that require it.

### Database

The data to the project is found in this sub directory

### Models

This subdirectory contains files that models the various entities in the application. The entities are modeled with Mongoose and are representations of objects in the MongoDB. As with the other modules, any file included in this module must be registered through the **index.js** file

### Routes

All routes to the endpoints are registered here. Reference is made to the various controllers for the registration of the various endpoints


## server.js

This file is the entry point of the aplication where it gets started. The entire application makes use of hilaryjs for dependency injection. All modules of the application are registered in this file. Any newly introduced module should be registered in this file


Things todo before running the application:

1. Create a **.env** file and provide values for all the configuration parameters in the **.env** file.
2. A MongoDB instance is required for running the application locally. Make sure you have a running  MongoDB instance either locally or in the cloud and provide the URL.
3. Make sure you have the npm package manager installed and execute `npm install` to execute all required packages
4. Execture `npm run dev` to execute the application
5. You can then access the application on [localhost:3000]

## Built with 
JS with React 

## Authors and Acknowledgment
All the members of Group One(1)
