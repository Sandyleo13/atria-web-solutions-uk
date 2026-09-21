from pathlib import Path
import json
import sys

from PIL import Image
import numpy as np
from scipy.ndimage import gaussian_filter, maximum_filter


INPUT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(
    "public/images/hero-network.png"
)
OUTPUT = Path(sys.argv[2]) if len(sys.argv) > 2 else Path(
    "public/images/particle-map.json"
)

image = np.asarray(Image.open(INPUT).convert("RGB")).astype(np.float32)
height, width = image.shape[:2]

red = image[:, :, 0]
green = image[:, :, 1]
blue = image[:, :, 2]
brightness = 0.15 * red + 0.30 * green + 0.55 * blue
blue_weight = np.clip((blue - red) / 70 + 0.45, 0, 1)
score = gaussian_filter(brightness * blue_weight, sigma=0.9)
local_max = maximum_filter(score, size=5)
mask = (score == local_max) & (score > 55)

particles = []
ys, xs = np.where(mask)

for y, x in zip(ys, xs):
    value = float(score[y, x])
    particles.append(
        {
            "x": round(x / width, 6),
            "y": round(y / height, 6),
            "r": round(max(0.35, min(2.4, value / 105)), 3),
            "a": round(max(0.15, min(0.95, value / 170)), 3),
        }
    )

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
OUTPUT.write_text(
    json.dumps(
        {"width": width, "height": height, "particles": particles},
        separators=(",", ":"),
    ),
    encoding="utf-8",
)

print(f"Image size: {width}x{height}")
print(f"Particles extracted: {len(particles)}")
print(f"Saved: {OUTPUT}")