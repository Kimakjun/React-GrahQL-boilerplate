/* eslint-disable no-plusplus */
import cluster from 'cluster';
import os from 'os';
import db from '@model/.';
import app from './app';

const cpuNums = os.cpus().length;

db();

if (cluster.isMaster) {
  console.log('Master is running!');

  for (let i = 0; i < cpuNums; i++) {
    console.log('cluster fork!');
    cluster.fork();
  }

  cluster.on('exit', function (worker, code, signal) {
    if (code === 200) {
      cluster.fork();
    }
  });
} else {
  app.server.listen(8000, () => console.log('server started at PORT:8000'));
}
