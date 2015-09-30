//var socket = io.connect();
var myid = socket.id;


/*socket.ioによるステータス操作*/

//statusEmit();

socket.json.emit('status_from_client', {
  type: 'trans',
  sampleRate: sampleRate,
  emitMode: emitMode,
  receiveMode: receiveMode,
  playMode: playMode,
  serverMode: false,
  scrnMode: scrnMode,
  BPMMode: seqBPM
});

socket.on('status_from_server_id', function(data) {
  myid = data;
});

socket.on('emitCtrl_from_server', function(data) {
//  alert(data);
  emitMode = data;
  $('#emitmode').val(emitMode);
  if(data === "no_emit"){
    emit_flag = false;
  } else {
    emit_flag = true;
  }
});

socket.on('receiveCtrl_from_server', function(data) {
  receiveMode = data;
  
  if(receiveMode === false) {
    streamBuffer = [];
    videoBuffer = [];
  }
    
});
socket.on('playCtrl_from_server', function(data) {
  playMode = data;
  if(seqBPM > 0){
    if(data){
      startSeq(seqBPM);
    } else {
      stopSeq();
    }
  }
});
socket.on('serverCtrl_from_server',function(data) {
  serverMode = data;
});

socket.on('rateCtrl_from_server', function(data) {
  sampleRate = data;
  decay = Math.floor((1000*bufferSize)/sampleRate);
});
socket.on('buffCtrl_from_server', function(data) {
  bufferSize = data;
  decay = Math.floor((1000*bufferSize)/sampleRate);
});

socket.on('stream_from_server',function(data) {
  if(receiveMode) {
    streamBuffer.push(data.stream);
    videoBuffer.push(data.video);
  }
  //if(data.video != "none") {
  //}
});

socket.on('clear_from_server', function(data) {
  if(data.type === "all"){
    streamBuffer=  [];
    emit_flag = false;
    receiveMode = false;
    playMode = false;
  } else if(data.type === "buff") {
    streamBuffer = [];
  }
  socket.json.emit('debugCtrl_from_client', {
    type: "result",
    id: myid,
    result: data.type
  });
});

socket.on('oneshotCtrl_from_server', function(data) {
  if(data.type === 'load') {
    oneshotBuff = data.loadBuff;
    socket.emit('oneshotCtrl_from_client', {
      type: "notice_load"
    });
  } else if(data.type === 'trig') {
    shot = oneshotBuff.shift();
    playAudioStream(shot);
    oneshotBuff.push(shot);
  }
});
function emitStream(bufferData, emitMode, video) {
  //$("#print").html(emitMode);
  socket.json.emit('stream_from_client',{
    stream: bufferData,
    emitMode: emitMode,
    video: video
  });
}

socket.on('scrnCtrl_from_server', function(data) {
  videoBuffer = [];
  scrnMode = data;
});

socket.on('BPMCtrl_from_server', function(data){
  console.log(data);
  if(playMode){
    if(seqBPM>0)
      stopSeq();
    if(data>0){
      startSeq(data);
    } else {
      stopSeq();
    }
  }
  seqBPM = data;
});