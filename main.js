// NOTE: The variable "shirts" is defined in the shirts.js file as the full list of shirt offerings
//       You can access this variable here, and should use this variable here to build your webpages

let initProducts = () => {
  // To see the shirts object, run:
  // console.log(shirts);
  // Your Code Here
  document.getElementById('img1').src = shirts[0].colors.white.front;
  document.getElementById('name1').innerHTML = shirts[0].name;

  document.getElementById('img2').src = shirts[1].colors.white.front;
  document.getElementById('name2').innerHTML = shirts[1].name;

  document.getElementById('img3').src = shirts[2].colors.white.front;
  document.getElementById('name3').innerHTML = shirts[2].name;

  document.getElementById('img4').src = shirts[3].colors.white.front;
  document.getElementById('name4').innerHTML = shirts[3].name;
  
};

const name1 = document.createElement('h2');
name1.className = "name";
name1.innerHTML = shirts[0].name;
const image1 = document.createElement('img')
const cost = document.createElement('h2')
cost.className = 'cost'
cost.innerHTML = shirts[0].price;
image1.src = shirts[0].colors.white.front;
document.querySelector('.details').appendChild(image1);
document.querySelector('.details').appendChild(cost);
document.querySelector('.details').appendChild(name1);
n=0;
Change(n);

function Change(n){
    if(n==1){
        image1.src = shirts[0].colors.white.front;
    }
    if(n==2){
        image1.src = shirts[0].colors.blue.front;
    }
    if(n==3){
        image1.src = shirts[0].colors.red.front;
    }
    if(n==4){
        image1.src = shirts[0].colors.pink.front;
    }
    if(n==5){
      image1.src = shirts[0].colors.white.back;
  }
}

