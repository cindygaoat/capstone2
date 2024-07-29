const url =
  "http://ec2-13-59-17-101.us-east-2.compute.amazonaws.com/b6/products/active";

fetch(url, {
  mode: "no-cors",
})
  .then((response) => {
    // Handle the response
    console.log("Response:", response);
  })
  .catch((error) => {
    // Handle errors here
    console.error("Error fetching data:", error);
  });