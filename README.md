# Warbler

### Server Local Setup

The server lives in the warbler-server directory of this repo

```bash
$ cd warbler-server
```

Make a copy of the `sample.env`

```bash
$ cp sample.env .env
```

Now fill in the `.env` file with your secrets

Install the dependencies

```bash
$ npm install
```
Ensure Mongodb is install and running.

Start server

```bash
$ node index.js
```

Front end
```bash
$ create-react-app warbler-client
```
Install dependecies
```bash
$ npm install axios jwt-decode moment react-moment react-redux react-router-dom redux redux-thunk
```
