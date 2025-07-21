// const btn = document.querySelector('#getStarted');
// const planButtons = document.querySelectorAll('.selectPlan');

// btn?.addEventListener('click', () => {
//   alert('Thanks for your interest! Please visit our Pricing page.');
// });

// planButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const plan = btn.dataset.plan;
//     alert(`You selected the ${plan} plan.`);
//   });
// });




const mobileMenu = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

if (mobileMenu && mainNav) {
  mobileMenu.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenu.innerHTML = mainNav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  })
}


//FAQ
const faqItems = document.querySelectorAll('.faq-item h3')

faqItems.forEach(item => {
  item.addEventListener('click' , ()=> {
    const parent = item.parentElement;
    parent.classList.toggle('active');  //faq-item : parentElemennt

    //close others
    faqItems.forEach(otherItem => {
      const otherParent = otherItem.parentElement;
      if (otherItem !== item && otherParent.classList.contains('active')) {
        otherParent.classList.remove('active');
      }
    })
  })
});


//Pricing
const billingToggle = document.getElementById('billingToggle')
const monthlyPrice = [2000,4000,8000]
const yearlyPrice = monthlyPrice.map(price => Math.floor(price*12*0.8)) //20% discount


if (billingToggle) {
  billingToggle.addEventListener('change', (e) => {
    const planPrices = document.querySelectorAll('.plan-price .price')
    const isyearly = e.target.checked;

    planPrices.forEach((priceEl, index) => {
      const price = isyearly ? yearlyPrice[index] : monthlyPrice[index]
      priceEl.textContent = `₹${price.toLocaleString()}`
    })
  })
  
}



//sticky header 
window.addEventListener('scroll', ()=>{
  const header = document.querySelector('.header')
  if(window.scrollY > 50) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
  } else {
    header.style.boxShadow = 'none'
  }
})