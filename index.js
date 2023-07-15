#!/usr/bin/env node
// Crafted by github.com/vsec7

const { ThreadsAPI } = require("threads-api");
require("dotenv").config();
const args = require('args')
const fs = require("fs");

args.option('like', 'Like', false)
    .option('reply', 'Reply', false)
    .option('follow', 'Follow', false)
    .option('delay', 'Delay', 120)

const flags = args.parse(process.argv)

const threadsAPI = new ThreadsAPI({
  username: process.env.UNAME,
  password: process.env.PASSW,
});

const timeline = async () => {
    const { items: threads, next_max_id: cursor } = await threadsAPI.getTimeline();
    return threads;
}

const like = async (id) => {
    try {
        await threadsAPI.like(id); 
        console.log(`[LIKE] ${id}`);
    } catch (error) {
        console.log(`[ERROR] ${error}`);
    }
};

const reply = async (id, txt) => {
    try {
        await threadsAPI.publish({
            text: txt,
            parentPostID: id,
        }); 
        console.log(`[REPLY] ${id} | ${txt}`);
    } catch (error) {
        console.log(`[ERROR] ${error}`);
    }
};

const follow = async (uid) => {
    try {
        await threadsAPI.follow(uid); 
        console.log(`[FOLLOW] ${uid}`);
    } catch (error) {
        console.log(`[ERROR] ${error}`);
    }
};

const RandomText = () => {
    const txt = fs.readFileSync("reply.txt", "utf8").split("\n");
    const rnd = Math.floor(Math.random() * txt.length);  
    return txt[rnd];
};

(async () => {

    console.log(`[?] Logged-in As ${process.env.UNAME}`)

    while (true) {
        const getfeeds = await timeline()
        for (const feed of getfeeds) {
            const id = feed.thread_items[0].post.id
            
            if(flags.like) {
                await like(id)
            }
        
            if(flags.reply) {
                const mid = id.split("_")[0]
                const txt = RandomText()
                await reply(mid, txt)
            }
        
            if(flags.follow) {
                const uid = id.split("_")[1]
                await follow(uid)
            }
        }

        console.log(`--------[ Delay for ${flags.delay} Seconds ]--------`)

        await new Promise((resolve) =>
            setTimeout(resolve, flags.delay * 1000)
        );
    }

})();
