# react-host-mfe

React host that consumes the Angular remote (`angular-remote-mfe`) and injects content into its 4th tab via a named slot.

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
