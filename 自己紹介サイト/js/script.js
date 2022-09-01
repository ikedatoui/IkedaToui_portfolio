const profile = document.querySelector('.firstCont');
const frontSkill = document.querySelector('.frontSkill');
const frontSkillLi = Array.from(document.querySelectorAll('.frontSkillLi'));
const frontSkillNum =  Array.from(document.querySelectorAll('.frontSkillNum'));
const backSkill = document.querySelector('.backSkill');
const backSkillLi = Array.from(document.querySelectorAll('.backSkillLi'));
const backSkillNum =  Array.from(document.querySelectorAll('.backSkillNum'));
const pageTop = document.querySelector('.pageTop');

window.addEventListener('scroll', function () {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight; 
    const profileY = profile.getBoundingClientRect().top + scroll;
    const frontSkillY = frontSkill.getBoundingClientRect().top + scroll;
    const backSkillY = backSkill.getBoundingClientRect().top + scroll;

    if (scroll > profileY - (windowHeight/2)) {
        document.querySelector('.name').classList.add('nameAct');
        setTimeout(()=>{
            document.querySelector('.text').classList.add('textAct');
        },500)
    }
    if(scroll > frontSkillY - (windowHeight/2)){
        frontSkillLi.map((num,index)=>{
            skillNum = Number(frontSkillNum[index].textContent);
            num.style.width = `${skillNum}%`;
        })
    }
    if(scroll > backSkillY - (windowHeight/2)){
        backSkillLi.map((num,index)=>{
            skillNum = Number(backSkillNum[index].textContent);
            num.style.width = `${skillNum}%`;
        })
    }
    
});

ScrollReveal().reveal('.policyChil', {
    delay: 300, 
    duration: 1200, 
    origin: 'bottom',
    distance: '160px',
    reset: false 
});

pageTop.addEventListener('click',()=>{
    window.scrollTo(0,0)
})