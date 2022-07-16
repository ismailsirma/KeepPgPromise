import pgpromise from 'pg-promise'

const pgp = pgpromise({})
const db = pgp('postgres://metavest:secret@localhost:5432/metavest')

export default db