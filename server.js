const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

app.use(express.static(PUBLIC));

// 404 → servir 404.html
app.use((req, res) => {
  res.status(404).sendFile(path.join(PUBLIC, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});