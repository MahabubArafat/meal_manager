const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

const adminMiddleWare = require("../../middleware/adminMiddleware");
const StudentProfile = require("../../models/StudentProfile");
const Admin = require("../../models/Admin");

const router = express.Router();

// @route       GET api/admin/
// @description Admin Page Login
// @access      Private
//TODO protect this route with middleware jwt token, password, not pin
router.get("/", adminMiddleWare, async (req, res) => {
  try {
    res.json({ msg: "welcome to admin page" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       GET api/admin/all_student
// @description get all the student profiles
// @access      Private
//TODO protect this route with middleware jwt token, password, not pin
router.get("/all_profile", adminMiddleWare, async (req, res) => {
  try {
    const profiles = await StudentProfile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/admin/
// @description Login as admin
// @access      Private

// @route       POST api/admin/register
// @description Register as admin
// @access      Private
//TODO in future add NID card
router.post(
  "/register",
  [
    check("name", "Full Legal Name").not().isEmpty(),
    check("email", "Provide Your Email").isEmail(),
    check("phoneNumber", "Phone Number is required").not().isEmpty(),
    check("address", "Provide Legal Address").not().isEmpty(),
    check("password", "Please Provide a strong Password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phoneNumber, address, password } = req.body;

    try {
      let admin = await Admin.findOne({ email });

      if (admin) {
        return res
          .status(400)
          .json({ msg: "An admin with same credentails already there" });
      }

      admin = new Admin({
        name,
        email,
        phoneNumber,
        address,
        password,
      });

      const salt = bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);

      await admin.save();

      const payload = {
        admin: {
          id: admin.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtAdminSecretToken"),
        { expiresIn: 3600 },
        (token, error) => {
          if (error) throw error;
          res.json(token);
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
