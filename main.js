// Load the Google Charts library and register callbacks
google.charts.load('current', {packages: ['sankey']});

document.addEventListener('DOMContentLoaded', () => {
  google.charts.setOnLoadCallback(init);
});

function init() {
  document.getElementById('draw').addEventListener('click', drawChart);
  document.getElementById('fileInput').addEventListener('change', handleFile);
}

function handleFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('inputData').value = e.target.result;
  };
  reader.readAsText(file);
}

function parseData(text) {
  const rows = [['From', 'To', 'Weight']];
  text.trim().split(/\r?\n/).forEach(line => {
    const [from, to, value] = line.split(',').map(s => s.trim());
    if (from && to && value) {
      rows.push([from, to, Number(value)]);
    }
  });
  return rows;
}

function drawChart() {
  const text = document.getElementById('inputData').value;
  const rows = parseData(text);
  const data = google.visualization.arrayToDataTable(rows);
  const options = {
    sankey: {
      link: { colorMode: 'source' }
    }
  };
  const chart = new google.visualization.Sankey(document.getElementById('chart_div'));
  chart.draw(data, options);
}
