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
