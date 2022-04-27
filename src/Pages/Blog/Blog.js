import React from 'react';

const Blog = () => {
  return (
    <div>
      <h1>Q: Difference between authorization and authentication</h1>
      <h5>A: authentication is the process for user to login. authorization is if the user has special access to private files and folder.</h5>

      <h1>
        Q: Why are you using firebase? What other options do you have to
        implement authentication?
      </h1>
      <h5>
        A: I am using firebase because it's simple to apply and google server
        are more protected. Other options are Cloudera Enterprise Data Hub , IBM
        DB2 ,MarkLogic,Couchbase Server
      </h5>

      <h1>
        Q: What other services does firebase provide other than authentication
      </h1>
      <h5>A: Hosting, Cloud Storage, Cloud Firestore, Cloud Functions.</h5>
    </div>
  );
};

export default Blog;
