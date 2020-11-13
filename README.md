# Next.js + AWS DynamoDB

This is an example of a Next.js application using DynamoDB for creating, updating, and deleting documents.

## Getting Started

**Option 1: Use an existing table.**

Retrieve your existing access key, secret key, region and table name. Provide those values after clicking "Deploy" to automatically set the environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fleerob%2Fnextjs-aws-dynamodb&env=ACCESS_KEY,SECRET_KEY,REGION,TABLE_NAME&envDescription=AWS%20DynamoDB%20information%20and%20keys.)

**Option 2: Create a new table.**

1. Create a new [IAM role](https://aws.amazon.com/iam/) with permission for `AmazonDynamoDBFullAccess` and `AWSCloudFormationFullAccess`.
1. Save the access key and secret key.
1. Install the [AWS CLI](https://aws.amazon.com/cli/) and run `aws configure`.
1. Install the AWS CDK: `npm i -g aws-cdk`.
1. This will prompt you to enter the access key and secret key.
1. Create an `.env.local` file similar to `.env.local.example`.
1. Add the access key and secret key to `.env.local`.
1. Run `cdk deploy` to create a new table `Items`.
1. View the newly created table and copy the name to `.env.local`.
1. Run `yarn dev` to start the Next app at `localhost:3000`.

## Testing

```bash
// Create
$ curl -X PUT http://localhost:3000/api/item -d '{"content": "test"}' -H "Content-type: application/json"
// Read
$ curl http://localhost:3000/api/item\?id\=bdc38386-2b35-47a3-bdfc-8ee29bd0686f
// Update
$ curl -X POST http://localhost:3000/api/item -d '{"content": "updated", "id": "bdc38386-2b35-47a3-bdfc-8ee29bd0686f"}' -H "Content-type: application/json"
// Delete
$ curl -X DELETE http://localhost:3000/api/item\?id\=bdc38386-2b35-47a3-bdfc-8ee29bd0686f
```

## Commands

- `yarn dev` – Starts the Next.js app at `localhost:3000`.
- `cdk deploy` – Deploy this stack to your default AWS account/region
- `cdk diff` – Compare deployed stack with current state
- `cdk synth` – Emits the synthesized CloudFormation template
