## CMS - Portal

## Getting started

Prerequisites:

- Node (> v12)
- npm

Install dependencies:

```bash
npm install
```

## DB setup

- Download the mongodb data tools
  Ref link - https://www.mongodb.com/docs/database-tools/installation/installation-windows/#installation

- mongodb restore for local

Unzip mongo-backup.zip folder

```bash
mongorestore -d cms ./mongo-backup/test
```

## Run the development server

```bash
npm start
```

## Run test case

```bash
npm test -- --coverage
```
