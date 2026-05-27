
# Submit Pinned Posts
postman request POST 'http://localhost:3000/api/submit-pinned-posts' \
  --header 'Authorization: Bearer token1' \
  --header 'Content-Type: application/json' \
  --body '{
    "postId":1,
    "title": "test"
}'

# Submit Post
postman request POST 'http://localhost:3000/api/submit-post' \
  --header 'Authorization: Bearer token1' \
  --header 'Content-Type: application/json' \
  --body '{
    "id": 2,
    "title": "My new post3",
    "content": " This is a post sample",
    "snippet": "This is a post snippet 3",
    "link": null,
    "tags": ""
}'


# sample post
{
  "id": 2,
  "title": "Wave Function Collapse: Procedural Generation Through Constraints",
  "content": "# Wave Function Collapse: Procedural Generation Through Constraints\n\nWave Function Collapse (WFC) is a procedural generation algorithm used to create maps, textures, dungeons, and environments that feel handcrafted while still being generated automatically.\n\nOriginally popularized by Maxim Gumin in 2016, the algorithm works by observing patterns from a small sample input and generating new outputs that obey the same local rules.\n\n## The Core Idea\n\nEvery tile in a grid starts with multiple possible states.\n\nFor example, a tile might become:\n\n- Grass\n- Water\n- Sand\n- Mountain\n\nAt the beginning, every cell is undecided.\n\nThe algorithm repeatedly:\n\n1. Finds the cell with the lowest entropy\n2. Chooses one valid tile\n3. Propagates constraints to neighboring cells\n4. Repeats until the map is complete\n\nThis process is called a collapse.\n\n## Entropy\n\nEntropy represents uncertainty.\n\n- A tile with many valid options has high entropy\n- A tile with few valid options has low entropy\n\nWFC usually selects the cell with the lowest entropy first because it reduces contradictions early.\n\n## Example Rules\n\n| Tile | Allowed Neighbors |\n|---|---|\n| Water | Water, Sand |\n| Sand | Water, Grass |\n| Grass | Grass, Sand |\n\nIf a tile collapses into Water, nearby cells can no longer become Grass.\n\n## Basic Algorithm Flow\n\n```text\nInitialize grid with all possibilities\n\nWhile unresolved cells exist:\n    Pick cell with lowest entropy\n    Collapse to one valid state\n    Propagate constraints to neighbors\n```\n\n## Tile-Based vs Overlapping Models\n\n### Tile-Based WFC\n\nUses handcrafted tiles and explicit neighbor rules.\n\nExamples:\n\n- Roads connect to roads\n- Walls connect to walls\n- Water cannot touch lava\n\n### Overlapping WFC\n\nInstead of predefined tiles, the algorithm extracts patterns from an input image and recombines them statistically.\n\nThis allows generation of:\n\n- Organic textures\n- Terrain\n- Pixel art\n- Decorative patterns\n\n## Common Uses in Games\n\nWFC is commonly used for:\n\n- Dungeon generation\n- Terrain synthesis\n- City layouts\n- Texture generation\n- Modular building placement\n\nIt is especially popular in procedural games because it creates outputs that feel coherent without requiring fully handcrafted levels.\n\n## Advantages\n\n- Produces believable procedural content\n- Requires small input samples\n- Generates non-repeating layouts\n- Works in both 2D and 3D\n\n## Downsides\n\n- Contradictions can occur\n- Large rule sets become difficult to manage\n- Backtracking may be required\n\n## Example Pseudocode\n\n```python\nwhile not solved:\n    cell = find_lowest_entropy_cell()\n\n    chosen_tile = random_valid_tile(cell)\n\n    collapse(cell, chosen_tile)\n\n    propagate_constraints(cell)\n```\n\n## Conclusion\n\nWave Function Collapse combines procedural generation with constraint solving to create believable worlds from simple local rules.\n\nIts flexibility and relatively simple design have made it one of the most influential procedural generation algorithms in modern game development.",
  "snippet": "Wave Function Collapse is a procedural generation algorithm that creates believable maps and environments using constraint propagation and entropy-based tile selection.",
  "link": null,
  "tags": "procedural-generation,gamedev,algorithms,wfc"
}