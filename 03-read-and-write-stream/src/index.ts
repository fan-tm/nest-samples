import fs from 'fs'
import readline from 'readline'

const readStream = fs.createReadStream(__dirname + '/mci2.sql.csv')
const writeSteam = fs.createWriteStream(__dirname + '/sample.out.txt')

const rl = readline.createInterface({
  input: readStream,
})

//'28-10-1953'
rl.on('line', line => {
  const data = line.split(',')
  try {
    let t1 = data[0]
    let t2 = data[4]
    t1 = t1.substring(1, t1.length - 1)
    t2 = t2.substring(7, 11) + t2.substring(4, 6) + t2.substring(1, 3)

    data[0] = t1
    data[4] = t2
  } catch (e) {
    console.log('error line:', line)
  }
  writeSteam.write(data.join(',') + '\n')
  //   if (!line) rl.close()
})

// close事件监听
rl.on('close', function() {
  // 结束程序
  process.exit(0)
})
