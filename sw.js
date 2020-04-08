// sed -i '' "s/var VERSION/const VERSION = '`git rev-parse HEAD`'/" sw.js
var VERSION;
var version = VERSION ? VERSION : mockTenMinuteVersion();

function mockTenMinuteVersion() {
  var d = new Date();
  var year = d.getFullYear().toString();
  var month = (d.getMonth() + 1).toString();
  var date = d.getDate().toString();
  var mins = new Date().getMinutes();
  mins = Math.floor(mins/10).toString();
  return year + '.' + zeroPad(month) + '.' + zeroPad(date) + '-' + zeroPad(mins);
  function zeroPad(num,n = 2) {
    num = num.toString();
    while (num.length < n) {
      num = '0' + num;
    }
    return num;
  }
}

console.log(version);
