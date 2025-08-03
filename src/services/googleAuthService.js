const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const CREDENTIALS_PATH = path.join(__dirname, '../../data/credentials.json');
const TOKEN_PATH = path.join(__dirname, '../../data/token.json');

const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
const { client_id, client_secret, redirect_uris } = credentials.web;

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// Carrega token, se existir
function loadSavedCredentials() {
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);
    console.log('✅ Token carregado de token.json');
  } else {
    console.log('⚠️ Token não encontrado. Acesse /auth para autenticar.');
  }
}

function saveCredentials(tokens) {
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
}

module.exports = {
  oAuth2Client,
  loadSavedCredentials,
  saveCredentials,
};
