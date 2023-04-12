const router = require("express").Router();
const { spawn }=require("child_process");


var data;

router.post("/", (req, res) => {
    // res.json({mag : "computer"});
    data = req.body;
    // console.log(data);
    // var obj=JSON.parse(data);
    // var val=Object.values(obj);
    // console.log(val);
    let values = []
    JSON.parse(JSON.stringify(data), (key,value)=>{ values.push(value) })
    // console.log(values);
    const childpython=spawn('python',['careerPredictionModel.py',values]);
    console.log(data);
    let ans=null;
    childpython.stdout.on('data',async (data)=>{
        console.log(data.toString()+"hh");
        ans=await data.toString();
        // console.log(ans);
        res.json({mag : ans});
       
    });
    
    
})


module.exports = router;
