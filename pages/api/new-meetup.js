async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    console.log(data);

    // TODO: Send request data to a database
    await new Promise(resolve => setTimeout(() => resolve(), 3000));

    res.status(201).json({ message: 'Meetup added.' });
  }
}

export default handler;
