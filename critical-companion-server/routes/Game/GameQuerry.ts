import db_execute from '../../config/db'
import { DBCallback } from '../../type'

const LIST_CAMPAIGN = `
  SELECT id, name, created_at
  FROM critical_companion.Game
`

const LIST_USER_CAMPAIGN = `
    SELECT id, name, created_at
    FROM critical_companion.Game
    WHERE user_id = ?
`

const UPDATE_CAMPAIGN = `
  UPDATE critical_companion.Game
  SET
    name = ?
  WHERE id = ? AND user_id = ?
`

const DELETE_CAMPAIGN = `
  DELETE FROM critical_companion.Game
  WHERE id = ? AND user_id = ?
`

const GET_CAMPAIGN = `
  SELECT
    id, name, created_at
  FROM critical_companion.Game
  WHERE id = ?
`

const CREATE_GAME_QUERY = `
  INSERT INTO critical_companion.Game
  (name, user_id)
  VALUES (?, ?)
`

function create_game(fields: any, callback: DBCallback) {
  db_execute(CREATE_GAME_QUERY, fields, callback)
}

function get_game(id_or_mail: any, callback: DBCallback) {
  db_execute(GET_CAMPAIGN, [id_or_mail, id_or_mail], callback)
}


function delete_game(id: any, callback: DBCallback) {
  db_execute(DELETE_CAMPAIGN, [id], callback)
}

function update_game(id: any, fields: any[], callback: DBCallback) {
  db_execute(UPDATE_CAMPAIGN, [...fields, id], callback)
}

function get_all_games(id: any, callback: DBCallback) {
  db_execute(LIST_CAMPAIGN, id, callback)
}

function get_user_games(id: any, callback: DBCallback) {
  db_execute(LIST_USER_CAMPAIGN, id, callback)
}

export default {
  Create: create_game,
  List: get_all_games,
  Get: get_game,
  Delete: delete_game,
  Update: update_game,
  GetUserGames: get_user_games
}
