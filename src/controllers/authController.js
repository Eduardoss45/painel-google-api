const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
require('dotenv').config();
const TOKEN_PATH = path.join(__dirname, '../../data/token.json');
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
const scopes = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/calendar.readonly',
];

const getLogin = (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: scopes,
  });
  res.redirect(url);
};

const getRedirect = async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
  res.send('Autenticado com sucesso! Token salvo na memória.');
};

module.exports = {
  getLogin,
  getRedirect,
};
