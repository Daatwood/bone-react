# Basic Bones Starting point for React 
A good way to get started.

## Stack
- React
- Bulma
- AWS

## Requirements
- Docker

## Installation and Setup
Copy `env.sample` to `.env` and fill in variables

```bash
mv env.sample .env
```

## Run Locally
- Requires Docker
Run _(bin/start.sh)_

Manually
```bash
$ docker-compose up
```

## Development

Accessing the container

```bash
$ docker exec -it app sh
```

## Deployment

The project is assumed to be hosted on a s3 and behind a cloudfront instance. Update the `.env` file with correct values

Bash into container
```bash
$ npm run deploy
```
