/* -- === typing animation === -- */
var typed = new Typed(".typing", {
    strings:["","сайт","Youtube","Видео"],
    tyreSpeed: 150,
    BackSpeed: 80,
    loop: true
})
/* -- === MS4 === -- */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {   
            for(let j=0; j<totalNavList; j++)
            {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
        })
    }
    const navToggleBtn = document.querySelector(".nav-toggler"),
        MS4 = document.querySelector(".MS4");
        navToggleBtn.addEventListener("click", () => 
        {
            MS4SectionToggleBtn();
        })
        function MS4SectionToggleBtn()
        {
            MS4.classList.toggle("open");
            navToggleBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }