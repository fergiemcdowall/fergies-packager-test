import fpt from '../src/node.js'
import tape from 'tape'

tape('basic test', async t => {
  t.ok('good')
  const db = await fpt('test/sandbox/db')
  await db.put('foo', 'bar')
  console.log(await db.get('foo'))
})
