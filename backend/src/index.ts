import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnosis';
import patientsRouter from './routes/patient';

const app = express();

app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    res.send('pong')
})

app.use('/api/diagnosis',diagnosisRouter)
app.use('/api/patients',patientsRouter)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});