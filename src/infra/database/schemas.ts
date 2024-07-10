export const userSchema = `
  CREATE TABLE IF NOT EXISTS User (
    id VARCHAR(36) UNIQUE NOT NULL,
    name VARCHAR(255),
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );
`

export const projectSchema = `
  CREATE TABLE IF NOT EXISTS Project (
    id VARCHAR(36) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    tags TEXT,
    startAt TEXT,
    deadline TEXT,
    PRIMARY KEY (id)
  );
`

export const taskSchema = `
  CREATE TABLE IF NOT EXISTS Task (
    id VARCHAR(36) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULl,
    description TEXT,
    status VARCHAR(255) NOT NULL,
    priorityLevel INTEGER NOT NULL,
    startAt TEXT NOT NULL,
    endAt TEXT NOT NULL,
    PRIMARY KEY (id)
  );
`

export const sprintSchema = `
  CREATE TABLE IF NOT EXISTS Sprint (
    id VARCHAR(36) UNIQUE NOT NULL,
    title VARCHAR(255),
    startAt TEXT NOT NULL,
    endAt TEXT NOT NULL,
    PRIMARY KEY (id)
  );
`
