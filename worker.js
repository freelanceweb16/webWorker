onmessage = function(e) {
    console.log('Message received from main script:', e.data);
}
  
/* Following message will be sent as soon as the worker is started */
postMessage("worker_initialized");