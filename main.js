
let se = document.querySelector( '#se' );
let ma = document.querySelector( '#ma' );
let ho = document.querySelector( '#ho' );
let e=document.querySelector('#e')
let m=document.querySelector('#m')
let d=document.querySelector('#d')
setInterval( () =>
{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    let ee = day.getFullYear();
    let rr = day.getMonth()+1;
    let dd = day.getDate();
    ho.style.transform = `rotateZ(${ ( hh ) + ( mm / 12 ) }deg)`;
    ma.style.transform = `rotateZ(${ mm }deg)`;
    se.style.transform = `rotateZ(${ ss }deg)`;
    e.innerHTML=`${ee}/`
    m.innerHTML=`${rr}/`
    d.innerHTML=`${dd}`
}, 1000 );