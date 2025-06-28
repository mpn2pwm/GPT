#!/usr/bin/env python3
"""Example Sankey chart with custom layout to avoid overlapping flows."""

import plotly.graph_objects as go


def main():
    # Define labels for nodes
    labels = ["Start", "Process A", "Process B", "End"]

    # Define connections between nodes
    sources = [0, 0, 1]
    targets = [1, 2, 3]
    values = [2, 1, 3]

    # Specify custom node positions to keep links from overlapping
    node_x = [0.0, 0.5, 0.5, 1.0]
    node_y = [0.3, 0.0, 0.6, 0.3]

    # Build Sankey figure with fixed arrangement using the positions above
    fig = go.Figure(
        data=[
            go.Sankey(
                arrangement="fixed",
                node=dict(
                    pad=20,
                    thickness=20,
                    line=dict(width=0.5, color="black"),
                    label=labels,
                    x=node_x,
                    y=node_y,
                ),
                link=dict(source=sources, target=targets, value=values),
            )
        ]
    )

    fig.update_layout(title_text="Sample Sankey Chart", font_size=12)
    fig.write_html("sankey_output.html")
    print("Sankey chart written to sankey_output.html")


if __name__ == "__main__":
    main()
