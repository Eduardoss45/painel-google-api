const { google } = require('googleapis');

const getEvents = async (req, res) => {
  const oAuth2Client = req.app.locals.oAuth2Client;
  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  try {
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items || [];
    res.json(events);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    res.status(500).send('Erro ao buscar eventos do Google Calendar');
  }
};

module.exports = {
  getEvents,
};
