var robocar_payload = {
  title: "Robocar",
  desc: "This is a car Antonine and I made for a class at UCR. We ended up having a ton of fun creating and playing with it after we were finished.",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/robocar/",
  count: 9
};

var sensor_payload = {
  title: "Mosquito Classifier",
  desc: "These are pictures of my work while researching Mosquito classification at UCR. Specifically we implemented machine learning algorithms to identify different sexes and species of mosquitos. The gallery shows the sensor from initial design to finally experiments at the CDC. ",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/sensor/",
  count: 28
};

var wedding_album1_payload = {
  title: "Wedding Ceremony",
  desc: "",
  link: "https://photos.app.goo.gl/65zLBfArNBZcpY5P8",
  url: "https://lh3.googleusercontent.com/hy0PNDDol7emf2aVAyUPa4B_DvfsQp0E_pnl4BU16fotmuWhdUKmjjeQkHtuy3FAPGT9ttsjo7NYByqDLmVfaREfQt2tLTkRdJciW2SE00NOc4HpD-xE67IH-XUrqVslH42JPzqBSg=w2400"
};

var wedding_album2_payload = {
  title: "Wedding Reception",
  desc: "Time to party!",
  link: "https://photos.app.goo.gl/5574bhTegNIk5zMi1",
  url: "https://lh3.googleusercontent.com/IxJUg4pJ_TZoKiNYKWiN2dJ-pNgiRgXTc2yHa2NNlTFkb_R1vGVnHzxg79aGz5lBJ70wQPwZBm4LIRa2dBScKib8t566MLC4e3E2px7ED3BxAnbQ4eK5jtW7wCf8OGuh8LJagH28eA=w2400"
};

var inu_album = {
  title: "Inu",
  desc: "The monster!",
  link: "https://photos.app.goo.gl/iatbAiv0mEMoheQf2",
  url: "https://lh3.googleusercontent.com/NLSN6zqun9nJAijzerzHGh7ZZtAQvXS2_s1yD-wMmHziHuQxgGyFTAFaaiP0naVrwhveVYSc6ae_JxsIr4RdqfFYbFGvsOWioth7Ja3XCk22NcPrjt53KMnsUjfbqrvwZeyfdPjZQg=w2400"
};

var wedding_payload = {
  title: "Wedding website",
  desc: "This is the wedding website I made for my wedding! Implemented Using: ReactJS, Ruby on Rails 5 API, Mapbox",
  link: "http://lena.kenleyar.ai/",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/wedding/0.jpg"
};

var serial_payload = {
  title: "Serial Face",
  desc: "This was a box Antoine and I made. What makes it special is that it uses facial recognition to unlock the box. Implemented Using: Python, CV2, Machine Learning, Raspberry Pi Nano, Serial Signal",
  link: "https://github.com/KenleyArai/SerialFace",
  url: "https://kenley.nyc3.digitaloceanspaces.com/images/serial-face/0.jpg"
};

const album_payload = {
  single_projects: [wedding_payload, serial_payload],
  albums: [robocar_payload, sensor_payload],
  personal: [wedding_album1_payload, wedding_album2_payload, inu_album]
};

export default album_payload;