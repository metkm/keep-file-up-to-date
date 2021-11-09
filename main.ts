
import {
  watchFile,
  Stats,
  openSync,
  readSync,
  readFileSync,
  writeFileSync,
  appendFileSync,
} from "fs";


const handleChange = (curr: Stats, prev: Stats) => {
  var bytesToRead = curr.size - prev.size;
  var position = curr.size - bytesToRead;
  
  const buffer = Buffer.alloc(bytesToRead);
  const downloadFD = openSync("Qk6-T5_my6o.mp4", "r");
  readSync(downloadFD, buffer, 0, bytesToRead, position);

  appendFileSync("video.mp4", buffer)
}


// const url = "https://www.youtube.com/watch?v=Qk6-T5_my6o";
const main = async () => {
  const data = readFileSync("Qk6-T5_my6o.mp4");
  writeFileSync("video.mp4", data);
  
  watchFile("Qk6-T5_my6o.mp4", handleChange);
}

main();
