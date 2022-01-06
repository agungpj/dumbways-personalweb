let blogs = [];
function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);
  //   console.log(image);

  let blog = {
    title: title,
    content: content,
    image: image,
    author: "Agung",
    postAt: new Date(),
  };

  blogs.push(blog);
  console.log(blogs);

  renderBlog();
}

function renderBlog() {
  let content = document.getElementById("contents");
  content.innerHTML = "";

  for (let i = 0; i < blogs.length; i++) {
    console.log(blogs[i]);
    content.innerHTML += `<div id="contents" class="blog-list">
    <!-- dynamic content would be here -->
    <div class="blog-list-item">
      <div class="blog-image">
        <img src="${blogs[i].image}" alt="" />
      </div>
      <div class="blog-content">
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
        <h1>
          <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
        </h1>
        <div class="detail-blog-content">
          ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
        </div>
        <p>
         ${blogs[i].content}
        </p>
        <div style="text-align: right;">
        <span style="font-size: 1rem; color: coral;">${getDistanceTime(
          blogs[i].postAt
        )}</span>
      </div>
      </div>
    </div>
  </div>
</div>`;
  }
}

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getFullTime(time) {
  console.log(time);
  let date = time.getDate();
  console.log(date);

  let monthIndex = time.getMonth();

  let year = time.getFullYear();
  console.log(year);

  function getFullHours() {
    let hours = time.getHours();

    if (hours < 10) {
      return `0${hours}`;
    } else {
      return `${hours}`;
    }
  }

  function getFullMinutes() {
    let minutes = time.getMinutes();
    if (minutes < 10) {
      return `0${minutes}`;
    } else {
      return `${minutes}`;
    }
  }

  let fullHours = getFullHours();
  let fullMinutes = getFullMinutes();

  let fullTime = `${date} ${month[monthIndex]} ${year} ${fullHours}:${fullMinutes} WIB`;
  return fullTime;
}

function getDistanceTime(time) {
  let timePost = time;

  let timeNow = new Date();

  let distance = timeNow - timePost;

  let milisecond = 1000;
  let secondInHours = 3600;
  let hoursInDay = 23;

  let minutes = 60;
  let seconds = 60;

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDay)
  );
  let distanceHours = Math.floor(distance / (milisecond * minutes * seconds));
  let distanceMinutes = Math.floor(distance / (milisecond * seconds));
  let distanceSeconds = Math.floor(distance / milisecond);

  //   console.log(distanceDay + " days ago.");
  if (distanceDay >= 1) {
    return `${distanceDay} days ago.`;
  } else if (distanceHours >= 1) {
    return `${distanceHours} hours ago.`;
  } else if (distanceMinutes >= 1) {
    return `${distanceMinutes} minutes ago.`;
  } else {
    return `${distanceSeconds} seconds ago.`;
  }
}

setInterval(() => {
  renderBlog();
}, 3000);
