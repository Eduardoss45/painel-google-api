const { google } = require('googleapis');

const getEmails = async (req, res) => {
  const oAuth2Client = req.app.locals.oAuth2Client;

  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

  try {
    const response = await gmail.users.messages.list({
      userId: 'me',
      labelIds: ['INBOX'],
      maxResults: 5,
    });

    const messages = response.data.messages || [];

    const fullMessages = await Promise.all(
      messages.map(async msg => {
        const detail = await gmail.users.messages.get({
          userId: 'me',
          id: msg.id || 'sem_id',
        });

        const snippet = detail.data.snippet;
        const subjectHeader = detail.data.payload?.headers?.find(h => h.name === 'Subject');
        const subject = subjectHeader?.value || 'Sem assunto';

        return { id: msg.id, subject, snippet };
      })
    );

    res.json(fullMessages);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar e-mails');
  }
};

module.exports = {
  getEmails,
};
