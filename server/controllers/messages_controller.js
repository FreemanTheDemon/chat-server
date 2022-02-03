let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const {text} = req.body;
        const idToUpdate = req.params.id;
        const indexToUpdate = messages.findIndex(message => message.id == idToUpdate);
        let foundMessage = messages[indexToUpdate];

        messages[indexToUpdate] = {
            id: foundMessage.id,
            text: text || foundMessage.text,
            time: foundMessage.time
        }

        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const idToDelete = req.params.id;
        const indexToDelete = messages.findIndex(message => message.id == idToDelete);
        messages.splice(indexToDelete, 1);
        res.status(200).send(messages);
    }
}