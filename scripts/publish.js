import fs from 'fs'

export const convert = (fileName, property, value) => {
    console.log('Start building: publish')
    
    const content = fs.readFileSync(fileName, {
        encoding: 'utf-8'
    })

    let contentJSON = JSON.parse(content)
    contentJSON[property] = value
    
    fs.writeFileSync(fileName, JSON.stringify(contentJSON), {
        encoding: 'utf-8',
    })
    
    console.log('End building: publish-to-npm')
}
