// function x(){
//     var a =0;
//     setInterval(()=>{
//         console.log(a);
//         a++
//     // },2000)
// }
// x();

// function x(){
//     for(let i =1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i * 1000)
//     }
// }
// x();

function x(){
    for(var i = 1;i<=5;i++){
        function close(i){
            setTimeout(()=>{
                console.log(i)
            },i * 2000)
            
        }
        close(i)
    }
}
x();