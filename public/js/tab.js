a = $("ul.nav li a")
a[0].click();

var ctx = $(".firstChart");

function section1(){
    var scatterChart = new Chart(ctx, {
        type: 'line',
        xAxisID: 'Letters of the Alphabet',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
            datasets: [{
                label: "Before Optimization",
                backgroundColor: 'rgba(255, 99, 132,0.3)',
                borderColor: 'rgb(255, 99, 132)',
                data: [74, 76, 73, 74, 76, 76, 76, 74, 72, 73, 72, 72, 75, 72, 75, 73, 76, 73, 74, 74, 74, 75, 71, 73, 71, 73],
            },{
               label: "After Optimization",
                backgroundColor: 'rgba(0, 99, 132,0.3)',
                borderColor: 'rgb(0, 99, 132)',
                data: [91, 93, 90, 91, 90, 94, 93, 89, 89, 90, 95, 92, 93, 95, 91, 91, 95, 93, 89, 89, 91, 94, 92, 95, 91, 94], 
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                        }
                    }]
            }
        }
    });

}


var ctx2 = $(".secondChart");

function section2(){
    var myDoughnutChart = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [65,35],
                    backgroundColor:[ // yellow -> blue
                        'rgba(255, 109, 109,0.2)', // blue - > red
                        'rgba(173, 204, 255,0.2)',
                        ],
                    borderColor:[
                        'rgba(255, 109, 109,1)', // blue - > red
                        'rgba(173, 204, 255,1)',
                        ]
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Before Optimization',
                    'After Optimization'
                ]
            }
        });
}

var ctx3 = $(".thirdChart");

function section3(){
    var scatterChart = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: [0, 10, 100, 1000, 10000],
            datasets: [{
                label: "Before Optimization",
                backgroundColor: 'rgba(255, 99, 132,0.3)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0,0.2,0.5,2, 5]
            },{
               label: "After Optimization",
                backgroundColor: 'rgba(0, 99, 132,0.3)',
                borderColor: 'rgb(0, 99, 132)',
                data: [0,0.07,0.3,0.8,2] 
            }]
        }
        // options: {
        //     scales: {
        //         xAxes: [{
        //             type: 'logarithmic',
        //             ticks: {
        //                 min: 1,
        //                 max: 10000
        //                 }
        //             }]
        //     }
        // }
    });
    console.log("did it")
}
section1();section2();section3();

var first = $(".firstChart")
var second = $(".secondChart")
var third = $(".thirdChart")

first[0].addEventListener("mouseover",section1)
second[0].addEventListener("mouseover",section2)
third[0].addEventListener("mouseover",section3)

var buts = $("a.btun")
buts[1].addEventListener("onclick",section1)
buts[2].addEventListener("onclick",section2)
buts[3].addEventListener("onclick",section3)

// sleep time expects milliseconds
// function sleep (time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

// // Usage!
// sleep(500).then(() => {
//     // Do something after the sleep!
// });