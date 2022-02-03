const express = require('express')
const app = express();
const port = 3001;
const ctrl = require('./controllers/messages_controller.js');
app.use(express.json());

app.post('/api/messages', ctrl.create)
app.get('/api/messages', ctrl.read)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)

app.listen(port, () => console.log(`...what's his power level? It's over ${port}!!!`));