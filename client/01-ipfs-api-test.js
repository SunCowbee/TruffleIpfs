const ipfsClient = require('ipfs-http-client')
// connect to ipfs daemon API server
const ipfs = ipfsClient('localhost', '5001', { protocol: 'http' })

let ipfsTest = async () => {
    let content = Buffer.from('ABC');
    let results = await ipfs.add(content);
    let hash = results[0].hash; // "Qm...WW"

    console.log('results :', results)
    console.log('hash  :', hash)


    let info = await ipfs.cat(hash)
    console.log('info :', info.toString())

    let files = await ipfs.ls('QmNz1UBzpdd4HfZ3qir3aPiRdX5a93XwTuDNyXRc6PKhWW')

    files.forEach(file => {
        console.log('file :', file)
    })

}

ipfsTest()
