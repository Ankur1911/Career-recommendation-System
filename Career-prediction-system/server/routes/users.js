const router = require("express").Router();
const { User, validate } = require("../models/userSchema");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    // const { error } = validate(req.body);
    // console.log(req.body);
    // if (error)
    //   return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
    
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;
    // save user to database
    const resf = new User(req.body)
    await resf.save();
    console.log("222");


    // await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send(resf);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
