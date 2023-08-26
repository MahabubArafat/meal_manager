const mongoose = require("mongoose");

async function dropCollection() {
  const connectionString =
    "mongodb+srv://joshephmalorie:joshephmalorie1234@mealmanager.qxvxyxl.mongodb.net/"; // Replace with your database connection string

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const collectionName = "manager"; // Replace with the name of the collection you want to drop
    const collection = mongoose.connection.collection(collectionName);

    await collection.drop();
    console.log("Collection dropped successfully.");
  } catch (error) {
    console.error("Error dropping collection:", error);
  } finally {
    mongoose.connection.close();
  }
}

// dropCollection();

// run : node dropCollection.js ,on terminal
