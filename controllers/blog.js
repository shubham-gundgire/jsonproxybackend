const axios = require("axios");
const allPosts = async (req, res) => {
  try {
    const userId = req.query.userid;

    if (userId) {
      console.log(userId);
      const data = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        {
          headers: {
            "x-codedamn-project": "jsonproxyholder",
          },
        }
      ).then(({ data }) => data);
      return res.status(200).json({ status: "sucess", data });
    }
    const data = await axios("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "x-codedamn-project": "jsonproxyholder",
      },
    }).then(({ data }) => data);
    return res.status(200).json({ status: "sucess", data });
  } catch (error) {
    return res.status(500).json({ status: "error", error });
  }
};

const singlePost = async (req, res) => {
  try {
    const postid = req.params.id;
    const data = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postid}`,
      {
        headers: {
          "x-codedamn-project": "jsonproxyholder",
        },
      }
    ).then(({ data }) => data);
    return res.status(200).json({ status: "sucess", data });
  } catch (error) {
        return res.status(500).json({ status: "error", error });
  }
};

const postComments = async(req, res) => {
 try {
      const postid = req.params.id;
      const data = await axios(
          `https://jsonplaceholder.typicode.com/posts/${postid}/comments`, {
              headers: {
               "x-codedamn-project": "jsonproxyholder",

            }
        }
      ).then(({ data }) => data);
      return res.status(200).json({ status: "sucess", data });
 } catch (error) {
     return res.status(500).json({ status: "error", error });
 }
};
module.exports = { allPosts, singlePost, postComments };
