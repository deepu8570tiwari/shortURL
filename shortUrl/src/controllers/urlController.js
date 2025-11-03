const Urls=require("../models/urlModels");
const createShorts = async (req, res) => {
  try {
    const { nanoid } = await import("nanoid"); // dynamic import
    let { url } = req.body; 

    if (!url) {
      return res.status(400).json({ message: "Missing URL" });
    }

    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    const shortId = nanoid(8);

    const newUrls = await Urls.create({
      shortId,
      redirectURL: url,
      visitHistory: [],
    });

    return res
      .status(200)
      .json({ message: "Short URL created successfully", data: newUrls });
  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const redirectTolongUrl = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await Urls.findOneAndUpdate(
      { shortId: shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true } // return updated document
    );
    if (!entry) {
      return res.status(404).json({ message: "Short URL not found" });
    }
    return res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("Redirect Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const getAnalystics=async(req,res)=>{
    const shortId = req.params.shortId;
    try {
        const result=await Urls.findOne({shortId});
        return res.json({totalClicks: result.visitHistory.length,analytcis:result.visitHistory})
    } catch (error) {
        console.error("Redirect Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports={createShorts, redirectTolongUrl,getAnalystics}