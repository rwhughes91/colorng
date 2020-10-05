import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('gradients.db');

export const init = () => {
  return new Promise((res, rej) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS gradients (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, likes INTEGER DEFAULT 0, description TEXT);',
        [],
        () => {
          res();
        },
        (_, err) => {
          rej(err);
          return true;
        }
      );
    });
  });
};

export const insertGradient = (name: string, likes: number, description: string) => {
  return new Promise((res, rej) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO gradients (name, likes, description) VALUES (?, ?, ?)',
        [name, likes, description],
        (_, result) => {
          res(result);
        },
        (_, err) => {
          rej(err);
          return true;
        }
      );
    });
  });
};

export const fetchGradients = () => {
  return new Promise((res, rej) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM gradients',
        [],
        (_, result) => {
          res(result);
        },
        (_, err) => {
          rej(err);
          return true;
        }
      );
    });
  });
};
