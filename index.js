const testimonials = [
    {
        name: "Behnam F",
        photoUrl:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },
    {
        name: "Younes F",
        photoUrl:"https://media.licdn.com/dms/image/v2/D4E03AQEJt_hFASum_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719982184420?e=2147483647&v=beta&t=BTv-oVEGZyxgzn6KZhLYsfPvea0aSsFEaXuVL_cRbbc",
        text: "come to my world  I am the best Marketinger."
    },
    {
        name: "Koss Bazee Jahan",
        photoUrl:"https://i.ytimg.com/vi/20PVezLzQfk/hqdefault.jpg",
        text: "kasi ke zane mame gonde dare donya barash beheshte ."
    },

]; 
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const{name, photoUrl, text} = 
    testimonials[idx];
    imgEl.src= photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() => {
         updateTestimonial()
    }, 10000);
}