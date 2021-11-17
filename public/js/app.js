async function getMemeData() {
  const response = await fetch("https://meme-api.herokuapp.com/gimme");
  const data = await response.json();
  return data;
}

getMemeData()
  .then((data) => {
    if (data.nsfw != true) {
      document.querySelector("#meme").src = data.url;
      document.querySelector("#small-title").innerHTML = data.author;
      document.querySelector("#top-text").innerHTML = data.title;
    } else {
      document.querySelector("#meme").src = "";
      document.querySelector("#small-title").innerHTML = "NSFW BLOCKED";
      document.querySelector("#top-text").innerHTML = "NSFW BLOCKED";
    }
  })
  .catch((err) => {
    console.log(err);
  });

/*
{postLink: 'https://redd.it/qv4hy2', subreddit: 'dankmemes', title: 'YEOWCHH', url: 'https://i.redd.it/1ulgw1z0lxz71.png', nsfw: false, …}
author: "DT775"
nsfw: false
postLink: "https://redd.it/qv4hy2"
preview: (4) ['https://preview.redd.it/1ulgw1z0lxz71.png?width=10…o=webp&s=d2a76f22e93f1eca477e28ef7bcfacec3e08779a', 'https://preview.redd.it/1ulgw1z0lxz71.png?width=21…o=webp&s=f123720371d43bed43ac946056a8c770eee91de3', 'https://preview.redd.it/1ulgw1z0lxz71.png?width=32…o=webp&s=e3305cd4f0e495a4da5bb608e619833328ce7e5a', 'https://preview.redd.it/1ulgw1z0lxz71.png?width=64…o=webp&s=9857c6cdb93bf114ecf59ec7fc8844ef28c47ae8']
spoiler: false
subreddit: "dankmemes"
title: "YEOWCHH"
ups: 1502
url: "https://i.redd.it/1ulgw1z0lxz71.png"
[[Prototype]]: Object
*/
