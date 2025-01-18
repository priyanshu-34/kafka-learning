const { kafka } = require("./client");



async function init() {
    const admin = kafka.admin();
    console.log("Connecting to Admin...");
    await admin.connect();
    console.log("Connected to Admin");


    console.log("Creating Topic Rider Updates...");
    await admin.createTopics({
      topics: [
        {
          topic: "Rider_updates",
          numPartitions: 2,
        },
      ],
    });

    console.log("Rider updates topic created");

    console.log("Disconnecting Admin....");
    admin.disconnect();
}

init().catch(console.error);