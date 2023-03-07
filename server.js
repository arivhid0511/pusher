// First, run 'npm install pusher'
const Pusher = require("pusher");
const pusher = new Pusher({
  appId: "1564020", // Replace with 'app_id' from dashboard
  key: "0280681bb5800afb2ab5", // Replace with 'key' from dashboard
  secret: "66d5b6644fc3b09f7b51", // Replace with 'secret' from dashboard
  cluster: "eu", // Replace with 'cluster' from dashboard
  useTLS: true,
});
// Trigger a new random event every second. In your application,
// you should trigger the event based on real-world changes!
setInterval(() => {
  pusher.trigger("price-btcusd", "new-price", {
    value: Math.random() * 5000,
  });
}, 1000);
