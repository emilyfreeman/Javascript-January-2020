module.exports = async function(context, commands) {
   await commands.measure.start('javascript-january'); //alias is now changed to text
   await commands.navigate('https://www.javascriptjanuary.com/blog/choosing-a-style-library-for-your-react-project');
   
   //use commands.js.run to return the element using pure javascript
   const element = await commands.js.run('return(document.getElementsByClassName("comment-count")[0].innerText)'); 
   
   //parse out just the number of comments
   var elementMetric = element.match(/\d/)[0];
  
   // need to stop the measurement before you can add it as a metric
   await commands.measure.stop();
   
   // metric will now be added to the html and outpout to graphite/influx if you're using it
   await commands.measure.add('commentsCount', elementMetric);
 
};