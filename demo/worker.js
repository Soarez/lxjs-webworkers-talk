self.onmessage = function(event) {
  var a = event.data;
  
  for (var i=0; i<200000000; ++i)
    a = a / a * a ;

  self.postMessage(a);
}