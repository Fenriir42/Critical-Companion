import db_execute from '../../config/db'
import { DBCallback } from '../../type'

const GET_ALL_CANDIDATE_QUERY = `
  SELECT id, mail, password, created_at
  FROM critical_companion.User
`

const UPDATE_USER_QUERY = `
  UPDATE critical_companion.User
  SET
    mail = ?,
    password = ?,
  WHERE id = ?
`

const DELETE_CANDIDATE_QUERY = `
  DELETE FROM critical_companion.User
  WHERE id = ?
`

const IS_USER_QUERY = `
  SELECT id FROM critical_companion.User WHERE mail = ?
`

const GET_USER_QUERY = `
  SELECT
    id, mail, password, created_at
  FROM critical_companion.User
  WHERE id = ? or mail = ?
`

const CREATE_USER_QUERY = `
  INSERT INTO critical_companion.User
  (mail, password)
  VALUES (?, ?)
`

const GET_HASH_QUERY = `SELECT password FROM critical_companion.User WHERE mail = ?`

function check_user_id(mail: any, callback: DBCallback) {
  db_execute(IS_USER_QUERY, [mail], callback);
}

function create_user(fields: any, callback: DBCallback) {
  db_execute(CREATE_USER_QUERY, fields, callback)
}

function get_user(id_or_mail: any, callback: DBCallback) {
  db_execute(GET_USER_QUERY, [id_or_mail, id_or_mail], callback)
}

function retrieve_user_hash(mail: any, callback: DBCallback) {
  db_execute(GET_HASH_QUERY, [mail], callback)
}

function delete_user(id: any, callback: DBCallback) {
  db_execute(DELETE_CANDIDATE_QUERY, [id], callback)
}

function update_user(id: any, fields: any[], callback: DBCallback) {
  db_execute(UPDATE_USER_QUERY, [...fields, id], callback)
}

function get_all_users(id: any, callback: DBCallback) {
  db_execute(GET_ALL_CANDIDATE_QUERY, id, callback)
}

export default {
  Exists: check_user_id,
  Create: create_user,
  List: get_all_users,
  Get: get_user,
  GetHash: retrieve_user_hash,
  Delete: delete_user,
  Update: update_user
}
