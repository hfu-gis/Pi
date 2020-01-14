window.onload = function() {
  var player1 = document.getElementById("player1");
  player1.addEventListener("play", waveform, false);

  var player2 = document.getElementById("player2");
  player2.addEventListener("play", waveform, false);

  var player3 = document.getElementById("player3");
  player3.addEventListener("play", waveform, false);

  var player4 = document.getElementById("player4");
  player4.addEventListener("play", waveform, false);

  function waveform() {
    var context = new AudioContext();
    var src = context.createMediaElementSource(this);
    var analyser = context.createAnalyser();

    var canvas = this.previousElementSibling;
    canvas.width = 1240;
    canvas.height = 120;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength);
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#212529";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2.5;

        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(0,153,153)";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
    renderFrame();
  };
};
