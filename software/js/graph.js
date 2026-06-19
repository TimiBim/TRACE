const channels = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8'];
const charts = {};

const colors = [
    '#ffd050', // ch1 - yellow
    '#50ffee', // ch2 - teal
    '#ff50a0', // ch3 - pink
    '#50d4ff', // ch4 - cyan
    '#ff9050', // ch5 - orange
    '#a050ff', // ch6 - purple
    '#50ffa0', // ch7 - green
    '#ff5050', // ch8 - red
];

const chartConfig = (label, color) => ({
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label,
            data: [],
            borderColor: color,
            borderWidth: 1.5,
            pointRadius: 0,
            tension: 0,
            stepped: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: {
                align: 'start',
                labels: {
                    color: '#e8ead0',
                    font: { family: 'JetBrains Mono', size: 11 },
                    boxWidth: 12,
                    padding: 8
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#50ffa050', font: { family: 'JetBrains Mono', size: 10 } },
                grid:  { color: 'rgba(80,255,160,0.05)' }
            },
            y: {
                min: 0,
                max: 1,
                ticks: {
                    stepSize: 1,
                    callback: val => val === 1 ? 'H' : 'L',
                    color: '#50ffa050',
                    font: { family: 'JetBrains Mono', size: 10 }
                },
                grid: { color: 'rgba(80,255,160,0.05)' }
            }
        }
    }
});

channels.forEach((id, i) => {
    const ctx = document.getElementById(id).getContext('2d');
    charts[id] = new Chart(ctx, chartConfig(id.toUpperCase(), colors[i]));
});

function pushChart3() {
    const chart = charts['ch3'];
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(1);
    chart.data.datasets[0].data.push(0);
    chart.update('none');
}

pushChart3();
pushChart3();
pushChart3();

function pushChart2() {
    const chart = charts['ch2'];
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(1);
    chart.data.datasets[0].data.push(0);
    chart.data.datasets[0].data.push(1);
    chart.data.datasets[0].data.push(0);
    chart.data.datasets[0].data.push(1);
    chart.data.datasets[0].data.push(0);
    chart.data.datasets[0].data.push(1);
    chart.update('none');
}

pushChart2();
pushChart2();
pushChart2();
pushChart2();
pushChart2();
pushChart2();
pushChart2();
pushChart2();
pushChart2();
pushChart2();