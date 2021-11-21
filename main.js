/* Checks if Web Worker feature is available */
if (window.Worker) {
    /* Loads the dedicated script into a new thread */
    let myWorker = new Worker('worker.js');
    
    myWorker.onmessage = function(e) {
        console.log('Message received from worker:',e.data);
    }
      
      /* To pass data/instructions to the worker, simply do */
      myWorker.postMessage("do_something");

    //   myWorker.terminate();


} else {
    alert("Web Worker not available");
}
