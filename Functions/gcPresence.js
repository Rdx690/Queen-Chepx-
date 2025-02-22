module.exports = async (client, m, gcpresence) => {
    if (m.isGroup && gcpresence === 'true') {
        let Berarecordin = ['recording', 'composing'];
        let Berarecordinfinal = Berarecordin[Math.floor(Math.random() * Berarecordin.length)];
        await client.sendPresenceUpdate(Berarecordinfinal, m.chat);
    }
};
