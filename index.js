const fs = require('fs')

const message = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf8')
  .split(/\r?\n/)
  .filter(s => s && s.trim()[0] !== '#')
  .join('')

assert(message.length <= 120, 'commit message must be 120 symbols or less')
assert(!message.match(/^\s+/), 'message must not start with whitespace')
assert(!message.match(/\s+$/), 'message must not end with whitespace')
assert(!message.match(/\s{2,}/), 'long whitespace (more than one) are not allowed')
assert(message.match(/#\d+/), 'message must have issue number in GitHub format (#<issue number>)')

function assert (feature, description) {
  if (!feature) {
    console.error('%s: %s', description, message)
    process.exit(1)
  }
}

process.exit(0)
