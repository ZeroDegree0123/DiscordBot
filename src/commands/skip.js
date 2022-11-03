const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("Skips the current song"),

	execute: async ({ client, interaction }) => {
        // Get the queue for the server
		const queue = client.player.getQueue(interaction.guildId)
        // If there is no queue, return
		if (!queue) {
            await interaction.reply("I'm Mr.Meeseeks, Look at me! There are no songs in the queue");
            return;
        }
        const currentSong = queue.current
        // Skip the current song
		queue.skip()
        // Return an embed to the user saying the song has been skipped
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`I'm Mr.Meeseeks, Look at me! ${currentSong.title} has been skipped!... 'POOF'`)
                    .setThumbnail(currentSong.thumbnail)
            ]
        })
	},
}