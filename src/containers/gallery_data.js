var robocar_payload = {
  title: "Robocar",
  desc:
    "This is a car Antonine and I made for a class at UCR. We ended up having a ton of fun creating and playing with it after we were finished.",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/robocar/",
  count: 9
};

var sensor_payload = {
  title: "Mosquito Classifier",
  desc:
    "These are pictures of my work while researching Mosquito classification at UCR. Specifically we implemented machine learning algorithms to identify different sexes and species of mosquitos. The gallery shows the sensor from initial design to finally experiments at the CDC. ",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/sensor/",
  count: 28
};

var wedding_payload = {
  title: "Wedding website",
  desc:
    "This is the wedding website I made for my wedding! Implemented Using: ReactJS, Ruby on Rails 5 API, Mapbox",
  link: "http://lena.kenleyar.ai/",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/wedding/0.jpg"
};

var serial_payload = {
  title: "Serial Face",
  desc:
    "This was a box Antoine and I made. What makes it special is that it uses facial recognition to unlock the box. Implemented Using: Python, CV2, Machine Learning, Raspberry Pi Nano, Serial Signal",
  link: "https://github.com/KenleyArai/SerialFace",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/serial-face/0.jpg"
};

const album_payload = {
  single_projects: [wedding_payload, serial_payload],
  albums: [robocar_payload, sensor_payload]
};

export default album_payload;
