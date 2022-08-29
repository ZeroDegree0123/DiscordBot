
# Discord Music Bot (DJmeeseeks)

A bot that can play music through discord channels and run the essential
commands for navigating through all your musical needs. 

## Screenshots

![](https://imgur.com/te8E8M1.png)
![](https://imgur.com/AwuQ0ts.png)
![](https://imgur.com/yTeCUfN.png)
![](https://imgur.com/C9HQT4A.png)

## Technologies Used

- Javascript
- NodeJs
- DiscordAPI

## Getting Started

1. Fork the Repo & Clone it to your machine

2. Log into the [Discord Developer Portal](https://discord.com/developers/docs/intro)

3. Under the Application Page, you will be able to start your very own app ![New App](https://imgur.com/6DjjRTQ.png)

4. Just give the app a name and click "Create"

5. Next go to the bot tab and click "Add Bot" and "Yes, Do It" to proceed

6. **IMPORTANT**, in the bot tab there will be a token generated, save the token somewhere we will be using it later ![token](https://imgur.com/pmt1Cax.png)

7. Lastly under the OAuth2 tab in general, there will be a client ID, save that as well ![clientId](https://imgur.com/vkvnPIC.png)

## Adding The Bot To Your Server

1. Head to the OAuth2 tab and then to URL Generator

2. From here under "SCOPES" select bot and then give it any permissions you want, If your not sure which permissions to add... go ahead and give it Administrator

3. A url will be generated at the bottom, copy and paste the url into your browser and then follow the prompts to add it to your server.

## Setting Up The Bot

1. You will need to download a few things
    - **First** you will need to download [FFmpeg](https://www.ffmpeg.org/download.html)
        - Download the right one for your operating system
        - You will need FFmpeg, FFplay, and FFprobe
    - **Second** you will need to download [Node](https://nodejs.org/en/download/) on your machine
    - **Finally** npm install the following
        - npm init (node)
        - npm i FFmpeg (for playing songs)
        - npm i discord.js (discord api)
        - npm i dotenv (for storing tokens/secrets)
        - The following are from and for discord
            - npm i discord-player
            - npm i discord-api-types 
            - npm i discordjs/voice
            - npm i discordjs/rest
            - npm i discordjs/opus
            - npm i discordjs/builders

2. Next you will want to create your own .env file, this is where you'll store your 
tokens and secrets. A good way to protect your files :).

3. Inside the .env create 2 variables 
    - TOKEN
    - CLIENT_ID

4. Copy and paste the token and clientID you saved earlier in the .env file
    - It should look like this:
        - TOKEN=THETOKENYOUCOPIED(no spaces) 
        - same with CLIENT_ID
        
5. Run this line in the terminal to start the bot
    - node . (dont forget the period)

6. Congrats! your good to go, just head over to your server and start typing commands

7. Note, the command responses are written as if a mr.meeseeks were talking. If you want to change them go into each command file and change the "interaction.reply"s to how you want them :)
##  Command List

1. /play

    - subcommands
        - song (plays single song)
        - playlist (plays a playlist)
2. /exit (removes bot from channel)
3. /pause (pauses song)
4. /skip (skips current song)
5. /queue (lists queue, first 10 songs)
6. /resumem (resumes song if paused)


