This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), using [Apollo](https://www.apollographql.com/) as GraphQL client to fetch data from a [Hasura](https://hasura.io/) API.

## Getting Started

### 1. Clone the project

```zsh
git clone https://github.com/hubiwan/next-apollo-hasura.git

# remove .git and re-initialize
rm -rf .git
git init
```

### 2. Install project dependencies

```zsh
yarn
# or
npm install
```

### 3. Set environment variables

Set development environment variables:

```zsh
cp .env.local.example .env.local
```

Set production environment variables (used for Hasura metadata and migration deployment):

```zsh
cp .env.production.local.example .env.production.local
```

**Don't forget to set other necessary production environment variables directly on respective platforms when deploying (e.g. on Vercel or Hasura)**

### 4. Apply metadata and migration files (e.g. User schema for authentication)

```zsh
# Apply metadata
hasura metadata apply --envfile ../.env.local

# Apply migration
hasura migrate apply --database-name default --envfile ../.env.local

# Reload metadata
hasura metadata reload --envfile ../.env.local
```

### 5. Launch dev mode

```zsh
# Hasura GraphQL dev mode
cd hasura && docker-compose --env-file ../.env.local up -d && hasura console --envfile ../.env.local
```

```zsh
# Next.js app dev mode
yarn dev
# or
npm run dev
```

### 6. Stop dev mode (and commit changes)

```zsh
cd hasura && docker-compose --env-file ../.env.local down
```
