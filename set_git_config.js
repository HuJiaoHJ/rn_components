const fs = require('fs')
const path = require('path')

const gitLocalConfig = path.resolve(__dirname, '.git/config')
const configContent = fs.readFileSync(gitLocalConfig, { encoding: 'utf8' })

if (configContent.includes('[commit]')){
    return
}

const templateConfig = `[commit]
        template = ./.gitmessage
`

fs.writeFileSync(gitLocalConfig, templateConfig, { flag: 'a' })