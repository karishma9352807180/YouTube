let aside_hide_show = document.getElementById("aside-subscription-main-div2");
let aside_show_more_child1 = document.getElementById("aside-show-more-child1");
let aside_show_more_child2 = document.getElementById("aside-show-more-child2");
let aside_show_more = document.getElementById("aside-show-more");
let aside_show_svg =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M18.4 14.6 12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z"></path></svg>';
let aside_hide_svg =
  ' <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style=" pointer-events: none display: inherit;   width: 100%;   height: 100%;" > <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z" ></path></svg>';

aside_show_more.addEventListener("click", show_aside);

function show_aside() {
  if (aside_show_more_child2.innerText === "Show more") {
    aside_hide_show.style.display = "block";
    aside_show_more_child2.innerText = "Show Less";
    aside_show_more_child2.style.color = "white";
    aside_show_more_child1.innerHTML = aside_show_svg;
  } else {
    aside_hide_show.style.display = "none";
    aside_show_more_child2.innerText = "Show more";
    aside_show_more_child1.style.color = "white";
    aside_show_more_child1.innerHTML = aside_hide_svg;
  }
}

let nav_bottom_right = document.getElementById("nav-bottom-right-button");
let nav_bottom_left = document.getElementById("nav-bottom-left-icon");
let nav_bottom_contents = document.getElementById("nav-bottom-contents");

nav_bottom_right.addEventListener("click", nav_bottom_right_button);
nav_bottom_left.addEventListener('click', nav_bottom_left_button)
nav_bottom_contents.addEventListener('scroll', nav_bottom_button_control)


function nav_bottom_right_button() {
  nav_bottom_contents.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  });
  nav_bottom_left.style.display = 'block'
}

function nav_bottom_button_control(){
  if(nav_bottom_contents.scrollLeft >= 20){
    nav_bottom_left.style.display = 'block'
  } else{
    nav_bottom_left.style.display = 'none'
  }

  let nav_bottom_contents_width = nav_bottom_contents.scrollWidth - nav_bottom_contents.clientWidth

  if(nav_bottom_contents.scrollLeft >= nav_bottom_contents_width){
    nav_bottom_right.style.display = 'none'
  } else{
    nav_bottom_right.style.display = 'flex'
  }
} 
  console.log(nav_bottom_button_control)
  

function nav_bottom_left_button() {
  nav_bottom_contents.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  });
  nav_bottom_left.style.display = 'block'

}



