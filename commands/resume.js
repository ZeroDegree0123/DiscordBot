const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("resume")
        .setDescription("Resumes the current song."),
        
    execute: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guild);
        if (!queue) {
            await interaction.reply("Hi I'm Mr.Meeseeks, Look at me! There is no song playing.")
            return;
        }
        queue.setPaused(false);
        await interaction.reply("Hi I'm Mr.Meeseeks, Look at me! I resumed playing the song")
    }
}