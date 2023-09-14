// // navbar
// const navToggle = document.querySelector('#nav-toggle');
// const navMenu = document.querySelector('#nav-menu');

// navToggle.addEventListener('click', () => {
//   navMenu.classList.toggle('show-menu');
// });

// // close menu
// const navLink = document.querySelectorAll('.nav-link');

// navLink.forEach((link) => {
//   link.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu');
//   });
// });

// // scroll sections active link
// const sections = document.querySelectorAll('section[id]');



// // change background header
// function scrollHeader() {
//   const header = document.getElementById('header');
//   if (this.scrollY >= 50) {
//     header.classList.add('scroll-header');
//   } else {
//     header.classList.remove('scroll-header');
//   }
// }
// window.addEventListener('scroll', scrollHeader);




// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'bx-sun';

// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// if (selectedTheme) {
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
//   themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
// }


// // 모달 요소 가져오기
// //const modal = document.getElementById('project-modal');
// //const modalClose = document.querySelector('.modal-close');
// //const portfolioItems = document.querySelectorAll('.portfolio-item');

// // 각 포트폴리오 항목에 대해 클릭 이벤트 리스너 등록
// //portfolioItems.forEach((item) => {
//  // const viewProjectBtn = item.querySelector('.btn-filled');
// //  viewProjectBtn.addEventListener('click', () => {
// //    showModal();
// //    const projectTitle = item.querySelector('.portfolio-overlay-title').textContent;
// //    const projectDescription = item.querySelector('.portfolio-overlay-description').textContent;
//  //   const modalTitle = modal.querySelector('.modal-title');
// //    const modalDescription = modal.querySelector('.modal-description');
// //    modalTitle.textContent = projectTitle;
// //    modalDescription.textContent = projectDescription;
//  // });
// //});

// $(".btn-filled1").click(function(){
//   $(".modal").show();
// })
// $(".close-modal").click(function(){
//   $(".modal").hide();
// })





