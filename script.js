

const paymentData = {
  url: "https://api.sandbox.volt.io/oauth",
  username: "%Ntg03f@$X4FC*96M&!l2JLq8Rj#1dh1@volt.io",
  password: "%Ntg03f@$X4FC*96M&!l2JLq8Rj#1dh1",
  grant_type: "%Ntg03f@$X4FC*96M&!l2JLq8Rj#1dh1",
  clientId: "00df623f-fb0c-4c5a-b2a7-88d469d08809",
  clientSecret: "57999661-a43b-4fde-bf76-3d11e61f4b16",
};

const paymentResponce = fetch(paymentData.url, {
  method: "POST",
  mode: "no-cors",
  credentials: "include",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: JSON.stringify({
    client_id: paymentData.clientId,
    client_secret: paymentData.clientSecret,
    username: paymentData.username,
    password: paymentData.password,
    grant_type: paymentData.password,
  }),
});

paymentResponce
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  });

const form = document.getElementById("payment-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;

  const webhookUrl =
    "https://webhook.site/138461a7-302f-42d3-9dda-4b27d290b6fe";
});
