const mongoose = require("mongoose");

const app = require("./app");

const PORT=5000
const MONGODB_URL="mongodb+srv://sb262202:sb262202@pgms.smlj0fw.mongodb.net/patient?retryWrites=true&w=majority"

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB at", MONGODB_URL);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
