const fs = require('fs')
const lib = require('./')

try {
  lib.validate(process.argv[2] || fs.readFileSync('.git/COMMIT_EDITMSG', 'utf8'))
  process.exit(0)
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
