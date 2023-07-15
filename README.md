# Threads Feed Bot

<img src="https://i.ibb.co/vQcfj2z/xxxxx.jpg">

Auto Like, Reply, and Follow by timeline threads.net

Crafted By viloid (github.com/vsec7)

> *** NOTE : USE AT YOUR OWN RISK! ***

```bash
 ▶ node index.js -h      
  Usage: index.js [options] [command]

  Commands:
    help     Display help
    version  Display version

  Options:
    -d, --delay <n>  Delay (defaults to 120)
    -f, --follow     Follow (disabled by default)
    -h, --help       Output usage information
    -l, --like       Like (disabled by default)
    -r, --reply      Reply (disabled by default)
    -v, --version    Output the version number

```

## Features
- Auto Like, Reply, Follow on timeline feed

## • Installation
```bash
git clone https://github.com/vsec7/threadsfeed.git
npm i
```

## Credentials
Rename .env.example to .env
```env
UNAME    = 'YOUR_INSTAGRAM_USERNAME'
PASSW    = 'YOUR_INSTAGRAM_PASSWORD'

```

## Run
```bash
# like only
node index.js --like

# like + follow
node index.js --like --follow

# sorten cmd to use all
node index.js -l -r -f
```

* if you used reply, edit reply.txt with your custom text.

## Unofficial Threads API Wrapper
https://github.com/junhoyeo/threads-api

## Support Me
EVM Address : viloid.bnb | viloid.arb

SOL Address : viloid.sol
