# FHIR research consent mapping

## Objective

Develop an application designed to facilitate the mapping between Research Studies and FHIR Consent resources. Deploy the application to a Amazon Web Services (AWS) environment.

## Development Guiding Principles

- **Efficiency through libraries**: Minimize custom code by leveraging existing libraries wherever applicable.
- **Type Safety and Robustness**: Utilize TypeScript to establish shared type definitions across both ends, ensuring consistent data structures, enhanced reliability, and a unified development experience.
- **Clean Codebase**: Prioritize a well-organized folder structure to facilitate easy navigation and maintenance and
  ensure concise individual files to enhance readability and manageability.
- **Easy to Use**:
  - **Good Frontend Performance**: Implement optimization techniques to reduce the amount of JS code that needs to be downloaded, ensuring a swift and responsive user experience.

## Questions to be answered

### infrastructure

1. Among the various AWS services, which ones are best suited for the application's needs?

   - **AWS Lambda**: Serverless compute service that allows running code without provisioning or managing servers. It is a good fit for the application's backend, as it is cost-effective, scalable, and easy to maintain.
   - **AWS API Gateway**: Fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. It is a good fit for the application's backend, as it allows to create a REST API that can be consumed by the frontend.
   - **AWS S3**: Object storage service that offers industry-leading scalability, data availability, security, and performance. It is a good fit for the application's frontend, as it allows to host a static website.
   - **AWS DynamoDB**: Fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It is a good fit for the application's backend, as it allows to store and retrieve data in a flexible, non-relational manner.
   - **AWS CloudFormation**: Infrastructure as Code service that allows to model and provision all the AWS and third-party resources needed for the application. It is a good fit for the application's backend, as it allows to create and manage the AWS resources in a safe, predictable, and repeatable way.

2. How should the application be deployed to AWS? Which infrastructure as code tool should be used?

   - **SST**: Serverless Stack Toolkit (SST) is a framework that makes it easy to build serverless applications on AWS. It is a good fit for the application's backend, as it allows to define and deploy the AWS resources in a safe, predictable, and repeatable way. Compared to terraform, it is more specialized for serverless applications, and it is easier to use. It is based on CDK, which makes it extensible and future-proof.

3. Are there any scenarios where long running tasks are required? If so, how should they be implemented?

4. Are there any scenarios where scheduled tasks are required? If so, how should they be implemented?

5. Are there any scenarios where message queues are required? If so, how should they be implemented?

### Backend

1. What requests are possibly sent from frontend to backend?
   - Authenicating a user
   - Data Retrieval
     - Fetch a specific patient
     - ...
   - Data Manipulation
     - Create a new consent
     - ...
2. Which tables are required, and what are the respective key attributes?
   - **Consent**:
     - primaryIndex: `patientId` (partitionKey), `consentId` (sortKey)
   - **Patient**:
   - **Organization**
   - **Practitioner**
   - **Questionnaire**
   - **QuestionnaireResponse**
   - **RelatedPerson**
3. What dynamoDB stream events requires a lambda function to be triggered?
4. What S3 buckets are required?
   - **consentPdfUploaded**
5. What S3 bucket events requires a lambda function to be triggered?
6. Are there any scenarios where websocket connections are required?
7. What is the expected complexity of our data models and relationships in DynamoDB that might warrant the use of any ORM?
   - **Dynamoosejs**: Dynamoose is a modeling tool for Amazon's DynamoDB (inspired by Mongoose). It is a good fit for the application's backend, as it allows to define the data models in a safe, predictable, and repeatable way. Compared to AWS Amplify, it is more specialized for DynamoDB, and it is easier to use. It is based on CDK, which makes it extensible and future-proof.
8. What tools to use to build HTTP APIs?
   - **tRPC**: tRPC is a TypeScript-first RPC framework. It is a good fit for the application's backend, as it allows to define the HTTP APIs in a safe, predictable, and repeatable way. Compared with GraphQL, trpc offers end-to-end type safety and better performance.

### Frontend

1. What frontend framework should be used?

   - **Astrojs**: Astro is a new kind of frontend framework that delivers lightning-fast performance with modern tooling. It can work with components from any JavaScript framework, including React.

2. What css framework should be used?

   - **Tailwind**: Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Compared with Bootstrap, it is more flexible and customizable.

3. What form rendering library should be used? Do we have any alternatives to LHC-Forms?

   - **LHC-Forms**: LHC-Forms is a JavaScript library for rendering forms based on the [Logical Observation Identifiers Names and Codes (LOINC)](https://loinc.org/) standard. It is a good fit for the application's frontend, as it allows to render forms based on the FHIR Questionnaire resource.
   - **refero**: Refero is a JavaScript library for rendering forms based on the [FHIR Questionnaire](https://www.hl7.org/fhir/questionnaire.html) resource. It is a good fit for the application's frontend, as it allows to render forms based on the FHIR Questionnaire resource.

4. What device apis can be used to enhance the user experience? What tools should be used to access them?

   - **capacitor**: Capacitor is a cross-platform app runtime that makes it easy to build web apps that run natively on iOS, Android, Electron, and the web. It is a good fit for the application's frontend, as it allows to access native device features such as camera, geolocation, and storage.

5. Are we going to make the app support multiple languages?

6. Are we going to make the app comply with any accessibility standards?

### Authentication

1. What authentication mechanism should be used?

   - **Amazon Cognito**: Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. It is a good fit for the application's backend, as it allows to authenticate users and manage user pools.
   - **SST Auth**: SST Auth is a library that makes it easy to add authentication to your serverless application. It is a good fit for the application's backend, as it allows to authenticate users and manage user pools.

2. Are there any specific identity providers(like Google or Facebook) that need to be supported with Amazon Cognito?

3. How will we handle password recovery, multi-factor authentication, and other security features?

### CI/CD

1. What CI/CD tool should be used?

   - **GitHub Actions**: GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. It is a good fit for the application's backend, as it allows to automate the build, test, and deployment of the application.

2. How often do we intend to run our CI processes?

   - **On every push to the main branch**: This ensures that the main branch is always in a deployable state.

3. What are the steps that need to be executed in our CI process?

   - **Build**: Build the application.
   - **Test**: Run the tests.
   - **Deploy**: Deploy the application.

### Testing
