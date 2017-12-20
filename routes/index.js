var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:time', function(req, res) {
  
  	var dateVal = req.params.time;

    //res.send(JSON.stringify(dateObj));
    // date format
    var dateFormat = {
    	year: "numeric",
    	month: "long",
    	day: 'numeric'
    };
    if (typeof(dateVal)=== 'undefined' || dateVal ===null || dateVal.length===0 || dateVal==="") {
    	let  dateDict =  { unix: null, natural: null };
    //dateDict =  { "unix": unix, "natural": natural };
    	res.json(dateDict);
  

    }else {
    	if(isNaN(dateVal)){
	    	let naturalDate = new Date(dateVal);
	    	naturalDate = naturalDate.toLocaleDateString('en-us', dateFormat);
	    	let unixDate = new Date(dateVal).getTime()/1000;
	    	let  dateDict =  { unix: unixDate, natural: naturalDate };
	    //dateDict =  { "unix": unix, "natural": natural };
	    	res.json(dateDict);
	    }
	    else {
	    	let unixDate = dateVal;
	    	let naturalDate = new Date(dateVal * 1000);
	    	naturalDate = naturalDate.toLocaleDateString('en-us', dateFormat);
	    	let  dateDict =  { unix: unixDate, natural: naturalDate };
	    //dateDict =  { "unix": unix, "natural": natural };
	    	res.json(dateDict);
	    }
    
    }

    
    
   
  


});

module.exports = router;
