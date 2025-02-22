module.exports = async (client, m, antionce) => {
    if (m.mtype == 'viewOnceMessageV2' && antionce === 'true') {
        if (m.fromMe) return;

        let bruce = { ...m };
        let msg = bruce.message?.viewOnceMessage?.message || bruce.message?.viewOnceMessageV2?.message;
        delete msg[Object.keys(msg)[0]].viewOnce;
        bruce.message = msg;

        await client.sendMessage(client.user.id, { forward: bruce }, { quoted: m });
    }
};


            
