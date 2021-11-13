import levelup from 'levelup'
import encode from 'encoding-down'
import charwise from 'charwise'

export default (location, options, down) =>
  new Promise((resolve, reject) =>
    levelup(encode(down(location)), options, (err, db) =>
      err ? reject(err) : resolve(db)
    )
  )
