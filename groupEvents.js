const events = process.env.EVENTS || 'false';
const botname = process.env.BOTNAME || 'BERA-MD';

const Events = async (client, bruce) => {
    const Myself = await client.decodeJid(client.user.id);

    try {
        let metadata = await client.groupMetadata(bruce.id);
        let participants = bruce.participants;
        let desc = metadata.desc || "No Description";

        for (let num of participants) {
            let dpuser;

            try {
                dpuser = await client.profilePictureUrl(num, "image");
            } catch {
                dpuser = "https://i.imgur.com/iEWHnOH.jpeg";
            }

            if (bruce.action == "add") {
                let userName = num;

                let Welcometext = ` Hey  @${userName.split("@")[0]} 👋\n\nWelcome to ${metadata.subject}.\n\nyou may read the group Description to avoid being removed  ${desc}\n\n*Regards BruceBera*.\n\nPowered by ${botname} .`;
                if (events === 'true') {
                    await client.sendMessage(bruce.id, {
                        image: { url: dpuser },
                        caption: Welcometext,
                        mentions: [num],
                    });
                }
            } else if (bruce.action == "remove") {
                let userName2 = num;

                let Lefttext = `
          Goodbye to this idiot @${userName2.split("@")[0]} you will be highly remembered comrade`;
                if (events === 'true') {
                    await client.sendMessage(keizzah.id, {
                        image: { url: dpuser },
                        caption: Lefttext,
                        mentions: [num],
                    });
                }
            } else if (bruce.action == "demote" && events === 'true') {
                await client.sendMessage(
                    bruce.id,
                    {
                        text: `@${(bruce.author).split("@")[0]}, has demoted @${(bruce.participants[0]).split("@")[0]} from admin 👀`,
                        mentions: [bruce.author, bruce.participants[0]]
                    }
                );
            } else if (bruce.action == "promote" && events === 'true') {
                await client.sendMessage(
                    bruce.id,
                    {
                        text: `@${(bruce.author).split("@")[0]} has promoted @${(bruce.participants[0]).split("@")[0]} to admin. 👀`,
                        mentions: [bruce.author, bruce.participants[0]]
                    }
                );
            }
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = Events;
