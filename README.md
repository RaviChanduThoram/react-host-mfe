# react-host-mfe

React host that consumes the Angular remote (`angular-remote-mfe`) and injects content into its 4th tab via a named slot.

This project is set up as an [Nx](https://nx.dev) workspace.

## Run
```bash
# Ensure the Angular remote is running (see its README)
npm install
npm run start
```
Runs at http://localhost:4200 and loads the remote from http://localhost:4201/remoteEntry.js by default.
To change the remote URL:
```bash
ANGULAR_REMOTE_URL=http://localhost:5001/remoteEntry.js npm run start
```

## Nx Commands

```bash
# Serve the app (development)
npx nx serve react-host-mfe

# Build the app
npx nx build react-host-mfe

# Clean the build output
npx nx clean react-host-mfe

# View the project graph
npx nx graph
```

## Project Structure

```
apps/
  react-host-mfe/       # React host MFE application
    src/
      app/              # App root component
      components/       # Reusable components
      types/            # TypeScript declarations
    webpack.config.js   # Webpack + Module Federation config
    tsconfig.json       # TypeScript config
    project.json        # Nx project targets
nx.json                 # Nx workspace config
tsconfig.base.json      # Base TypeScript config
```

