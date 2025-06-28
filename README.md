# GPT Sankey Example

This repository contains a simple Python script that generates a Sankey chart using Plotly. The example positions nodes explicitly so that flows do not overlap.

## Requirements

* Python 3
* [Plotly](https://plotly.com/python/)

Install Plotly with pip:

```bash
pip install plotly
```

## Usage

Run the script to create a chart:

```bash
python sankey_example.py
```

The script writes `sankey_output.html`. Open that file in a web browser to view the diagram.

### Customizing the Chart

* **Preventing overlap** – Node positions are defined with `node.x` and `node.y`. Adjust these lists to control the vertical placement of nodes. Flows will shift up or down based on these positions, helping avoid overlaps.
* **Adding data** – Modify the `labels`, `sources`, `targets`, and `values` lists in `sankey_example.py` to represent your own process flows.
* **Layout** – With `arrangement='fixed'`, the coordinates you provide will be used without automatic adjustments, giving you full control over the flow layout.

Feel free to extend the example or integrate it into your own project.
