const Profile = require("../models/profile");

//# get
//-> get profile data
const getProfileData = async (req, res) => {
  const user_id = req.user._id.toString();
  const profileData = await Profile.findOne({ user_id }).sort({
    createdAt: -1,
  });

  res.status(200).json(profileData);
};

//# post
//-> create/post Profile data of a user
const postProfileData = async (req, res) => {
  const { name, sector, agreeToTerms } = req.body;
  const agree = agreeToTerms === "true";

  // check if the user have entered all the required data
  const emptyFields = [];
  if (!name) emptyFields.push("name");
  if (!sector) emptyFields.push("sector");
  if (!agreeToTerms) emptyFields.push("agreeToTerms");
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add new document(Profile data) to db under the collection "profiles"
  try {
    const user_id = req.user._id;
    const profileData = await Profile.create({
      name,
      sector,
      agreeToTerms,
      user_id,
    });

    res.status(200).json(profileData);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//# put, patch
//-> update a profile data
const updateProfileData = async (req, res) => {
  const { user_id } = req.body;

  const updatedData = await Profile.findOneAndUpdate(
    { user_id },
    {
      ...req.body,
    },
    { new: true }
  );

  if (!updatedData) {
    return res.status(400).json({ error: "Profile data not found" });
  }

  res.status(200).json(updatedData);
};

module.exports = {
  getProfileData,
  postProfileData,
  updateProfileData,
};
