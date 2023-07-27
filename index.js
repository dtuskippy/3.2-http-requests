import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>Gizmo the Great!</h1><p>Gizmo is a lounge lizard from Minnesota!</p>")
})
// important to NOTE -- that (req, res) => IS an anonymous function!!! just like in app.listen below EXCEPT it takes the 2 parameters req and res

app.get('/niko', (req, res) => {
  res.send("<h1>Niko the Chico!</h1><p>Niko is a happy furry creature living in a tree!</p>");
})

app.get('/quinn', (req, res) => {
  res.send("<h1>Quinn the Bin!</h1><p>Quinn is a sugar bear eating honey from a furry bowl!</p>");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

