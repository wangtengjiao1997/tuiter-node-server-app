import posts from "./tuits.js";
let tuits = posts;

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
const findTuits = (req, res) =>
    res.json(tuits);
const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = parseInt((new Date()).getTime()+'');
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id ===  parseInt(tuitdIdToUpdate))
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.json(tuits);
}
const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) => t._id !== parseInt(tuitdIdToDelete));
    res.sendStatus(200);
}