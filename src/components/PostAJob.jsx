import React from "react";
import { useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

import PostAJobForm from "./PostAJobForm";

const PostAJob = () => {
  const firestore = useFirestore();
  const history = useHistory();

  const onSubmit = async (args) => {
    const formData = {
      ...args,
      category: "FrontEnd",
      contractLength: "SixToTwelve",
      created: new Date(),
      currency: "GBP",
      experienceRequired: "SixToTwelve",
      expires: new Date(new Date().setMonth(new Date().getMonth() + 8)),
      frequency: "Day",
      headOfficeLocation: "Some random place",
      jobIs: "remote",
      rateFrom: +args.rateFrom,
      rateTo: +args.rateTo,
      skills: [{ display: "JavaScript", id: 13, itemName: "JavaScript" }],
      jobDescription: `<p>A client of mine are currently looking for a full stack developer to help them through this tough period and complete a specific project. Require someone with experience of .Net (.Net Core) and React.js.</p><p><strong>Essential Skills:</strong></p><ul><li><strong>C#/.Net</strong></li><li><strong>React.js experience</strong></li><li><strong>.Net Core</strong></li><li><strong>Rest APIs</strong></li><li><strong>SQL Server</strong></li></ul><p>Please submit CVs and daily rates ASAP to be considered.&nbsp;If you know anybody else that maybe of interest, then please do feel free to share this.</p>`,
    };

    await firestore.collection("jobs").add(formData);
    history.push("/jobs");
  };

  return (
    <section className="pt-5 pt-md-11">
      <PostAJobForm onSubmit={onSubmit} />
    </section>
  );
};

export default PostAJob;
