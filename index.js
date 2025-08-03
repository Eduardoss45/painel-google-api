const express = require('express');
const { oAuth2Client, loadSavedCredentials } = require('./src/services/googleAuthService');

const authRoutes = require('./src/routes/auth');
const getEmails = require('./src/routes/emails');
const getEvents = require('./src/routes/events');

const app = express();
const port = 3000;

loadSavedCredentials();

app.locals.oAuth2Client = oAuth2Client;

app.use('/auth', authRoutes);
app.use('/', getEmails, getEvents);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
