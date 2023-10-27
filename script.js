"using strict";

// stories.....

var arr = [
  {
    logo: "https://images.unsplash.com/photo-1595882410987-ece12feabef2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVwb2xlfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1633433342568-8d98ca5c8e82?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1608876537010-ac56d8731614?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1583415303571-20185869c4bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1632852898671-172d93b46b61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1630945386735-372fbe731e3f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1595882410987-ece12feabef2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVwb2xlfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1633433342568-8d98ca5c8e82?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1608876537010-ac56d8731614?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1583415303571-20185869c4bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1632852898671-172d93b46b61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1630945386735-372fbe731e3f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1595882410987-ece12feabef2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVwb2xlfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1633433342568-8d98ca5c8e82?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1608876537010-ac56d8731614?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1583415303571-20185869c4bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    logo: "https://images.unsplash.com/photo-1632852898671-172d93b46b61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1630945386735-372fbe731e3f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

var stories = "";
let currentindex = 0;
arr.forEach(function (elem, idx) {
  stories += ` <div class="story">
    <img id=${idx} src=${elem.logo} alt="">
</div>`;
});
const storiesContainer = document.querySelector(".stories");

const storyView = document.querySelector(".story-view");
const storyViewImg = document.querySelector(".story-view img");

storiesContainer.innerHTML = stories;
storiesContainer.addEventListener("click", function (dets) {
  currentindex = 0;
  currentindex = Number(dets.target.id);
  if (dets.target.id) {
    mainbody.style.display = "none";
    storyView.style.display = "flex";
    storyViewImg.setAttribute("src", `${arr[dets.target.id].story}`);
    let interval = setInterval(nxtstory, 5000);

    closebtn.addEventListener("click", function () {
      storyView.style.display = "none";
      clearInterval(interval);
      mainbody.style.display = "block";
    });
    // setTimeout(function(){
    //     storyView.style.display="none";
    // },3000);
  }
});

const leftarrow = document.querySelector(".fa-chevron-left");
const rightarrow = document.querySelector(".fa-chevron-right");
const closebtn = document.querySelector(".fa-xmark");

function nxtstory() {
  if (currentindex < arr.length) {
    currentindex += 1;
    storyView.style.display = "flex";
    storyViewImg.setAttribute("src", arr[currentindex].story);
  } else if (currentindex >= 0) {
    currentindex -= 1;
    storyView.style.display = "flex";
    storyViewImg.setAttribute("src", arr[currentindex].story);
  } else if (!currentindex) {
    storyView.style.display = "none";
  }
}

rightarrow.addEventListener("click", function () {
  // if(currentindex<=arr.length)
  // {
  //     currentindex+=1;
  //     storyView.style.display="flex";
  //     storyViewImg.setAttribute('src',arr[currentindex].story);
  // }
  nxtstory();
});
leftarrow.addEventListener("click", () => {
  // if(currentindex>=0)
  // {
  //     currentindex-=1;
  //     storyView.style.display="flex";
  //     storyViewImg.setAttribute('src',arr[currentindex].story);
  // }
  // if(!currentindex)
  // {
  //     storyView.style.display="none";
  // }
  nxtstory();
});

// xxx--xxx//

// main-content......

var arr2 = [
  {
    profile:
      "https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNreXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Roopesh_jsp",
    post: "https://plus.unsplash.com/premium_photo-1696273222723-e5473382eee3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D",
    title: "good morning people",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Raghava_reedy",
    post: "https://images.unsplash.com/photo-1698082241818-2ba62cb4db88?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    title: "Good vibes",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1585824151239-8062a14657ba?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "king_of_life",
    post: "https://images.unsplash.com/photo-1698169275384-f405e0acc8d3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    title: "Nature Love",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1686613616585-47f4f74c6ca1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "she_call_me_chinnu",
    post: "https://images.unsplash.com/photo-1696341062859-4b35812b50b0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
    title: "Love you",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1698082860600-3d19b062f04b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    name: "rockstar_ravi",
    post: "https://images.unsplash.com/photo-1595882410987-ece12feabef2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "good morning people",
  },
  {
    profile:
      "https://plus.unsplash.com/premium_photo-1696401013442-40b91916cec0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
    name: "bezawada_roy",
    post: "https://images.unsplash.com/photo-1697639171123-0fd9f3a4e1b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    title: "Lol ..",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNreXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Roopesh_jsp",
    post: "https://plus.unsplash.com/premium_photo-1696273222723-e5473382eee3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D",
    title: "Marine life is love",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNreXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Roopesh_jsp",
    post: "https://images.unsplash.com/photo-1682687982107-14492010e05e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTZ8fHxlbnwwfHx8fHw%3D",
    title: "that water feels so good....",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1697541283989-bbefb5982de9?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ur_sunshine",
    post: "https://images.unsplash.com/photo-1695479626917-e0fb0fc76ec4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDJ8fHxlbnwwfHx8fHw%3D",
    title: "good morning people",
  },
  {
    profile:
      "https://plus.unsplash.com/premium_photo-1696273222723-e5473382eee3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D",
    name: "Traveller",
    post: "https://images.unsplash.com/photo-1655492411306-30ec0257c11b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTR8fHxlbnwwfHx8fHw%3D",
    title: "Nigths",
  },
  {
    profile:
      "https://plus.unsplash.com/premium_photo-1669814666084-36dbf86ab6cd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mark",
    post: "https://plus.unsplash.com/premium_photo-1663839014860-382ee7152d43?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTd8fHxlbnwwfHx8fHw%3D",
    title: "happy life",
  },
];

var postbody = "";
arr2.forEach((elem) => {
  postbody += ` <div class="card">
            <div class="card-head">
            <div class="name">
                <div class="nav-profile-pic">
                    <img src=${elem.profile} alt="">
                </div>
                
                <p>  
                 ${elem.name}
                </p>
                 
            </div>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div class="card-img">
            <img src=${elem.post} alt="">
        </div>
        <div class="card-icons">
            <div class="card-foot-left">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="card-foot-right">
                <i class="fa-regular fa-bookmark"></i>
            </div>
        </div>
        <div class="card-title">
            <p>${elem.title}</p>
        </div> 
        </div>`;
});

const mainbody = document.querySelector(".main");
mainbody.innerHTML = postbody;

const heart = document.querySelectorAll(".card-foot-left .fa-heart");
// heart.forEach(function(elem){
//     elem.addEventListener('click',function(){

//         if(elem.classList.contains("fa-regular"))
//         {
//             elem.classList.replace("fa-regular","fa-solid");
//         }
//         else{
//             elem.classList.replace("fa-solid","fa-regular");
//         }

//     });

// });
const star = document.querySelectorAll(".card-foot-left .fa-star");
const bookmark = document.querySelectorAll(".card-foot-right .fa-bookmark");

function fill(x) {
  x.forEach(function (elem) {
    elem.addEventListener("click", function () {
      if (elem.classList.contains("fa-regular")) {
        elem.classList.replace("fa-regular", "fa-solid");
      } else {
        elem.classList.replace("fa-solid", "fa-regular");
      }
    });
  });
}
fill(heart);
fill(star);
fill(bookmark);

//  xx---xx

// sidebar

let arr3 = [
  {
    img: "https://plus.unsplash.com/premium_photo-1669814666084-36dbf86ab6cd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
    name: "steve sinran",
    followers: "steve,max",
  },
  {
    img: "https://images.unsplash.com/photo-1697637601495-ecf5e16da56f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D",
    name: "Alexander_k",
    followers: "steve,max",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1674086619163-54bd6379f538?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D",
    name: "Nathaniell",
    followers: "steve,max",
  },
  {
    img: "https://images.unsplash.com/photo-1682687981603-ae874bf432f2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D",
    name: "Kingstons",
    followers: "steve,max",
  },
];

let seidecont = "";
arr3.forEach(function (elem) {
  seidecont += `<div class="static xusers">
    <div class="pic">
        <img src=${elem.img} alt="">
    </div>
    <div class="users">
        <p class="bill">${elem.name}</p>
        
    </div>
    <p class="switchbtn followbtn">Follow</p>
</div>`;
});

let sidebody = document.querySelector(".dynamic");
sidebody.innerHTML = seidecont;

// xx--xxx

// mediaquries

// let navadjust = window.matchMedia("(max-width:900px)");
// if (navadjust.matches) {
// }

// last scripts
var flag = 0;
const followbtn = document.querySelectorAll(".followbtn");

followbtn.forEach(function (i) {
  i.addEventListener("click", function (x) {
    if (flag == 0) {
      i.innerHTML = "UnFollow";
      i.style.color = "#262626";
      flag = 1;
    } else {
      i.innerHTML = "Follow";
      i.style.color = " #0095f6";
      flag = 0;
    }
  });
});

// elem.addEventListener("click", function () {
//
//   });
