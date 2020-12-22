import db from '@model/.';
import app from './app';

db();

app.server.listen(8000, () => console.log('server started at PORT:8000'));
