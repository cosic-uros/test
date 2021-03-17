module.exports = {
    serverError: (response, message) => response.status(500).json({ err: message }),
    clientError: (response) => response.status(400).json({ err: 'Bad request' }),
    statusError: (response, status, message) => response.status(status).json({ err: message })
}