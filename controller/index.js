const profileModel = require("../model/profile.model");
const { v4: uuidv4 } = require("uuid");

const getAllProfile = async (req, res, next) => {
  try {
    let blogs = await profileModel.find({}, { _id: 0, __v: 0, _createdDate: 0 });
    res.status(200).json({
      error: false,
      messages: "Profile fetched successfully",
      data: blogs,
    });
  } catch (err) {
    next(err);
  }
};
const saveProfile = async (req, res, next) => {
  try {
    let currentcreatedDate = Date.now();

    let { name, email,phone_no,profile_id,company,linkedin_url,skills,location } = req.body;

    profileModel.find({email:email}).then(async (model) => {

        if (model.length > 0) {
          await profileModel.updateOne({
              email:email
          }, { email,phone_no,profile_id,company,linkedin_url,skills,location,updatedDate: currentcreatedDate
           }, { upsert: true });

          res.status(200).json({
          error: false,
            messages: "Profile updated successfully",
          });
        }else{

        await profileModel({
          id: uuidv4(),
          name,email,phone_no,profile_id,company,linkedin_url,
          skills,location,createdDate: currentcreatedDate,
        }).save();
        res.status(200).json({
          error: false,
          messages: "Profile saved successfully",
        });
        console.log("BBBBBB")
        }
    }).catch((err) => {
        res.send(err);
    });



  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProfile,
  saveProfile,
};
