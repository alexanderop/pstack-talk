# Wizard Hamcrab animation sprites

Generated with built-in `image_gen` on 2026-09-22.
Reference: `public/illustrations/hamcrab-wizard.png`.
Output: `public/sprites/hamcrab-wizard-cameo.png`.

The 4 by 4 sheet supplies 16 poses. `HamcrabCameo.vue` plays the greeting, repeats the talking poses, flourishes the wand, then plays the farewell over the existing 8.5-second visit. Reduced-motion mode holds the first pose.

## Prompt

Use case: illustration-story
Asset type: production animation sprite sheet, exactly 4 columns by 4 rows, 16 equal square cells, transparent alpha background, square image.
Input: reference for the exact wizard Hamcrab character design.
Draw 16 full-body animation frames of this same cream-and-tan hamster in red lobster costume with antennae, purple gold-star wizard hat, purple cape, gold star clasp and wooden star wand. Match the reference's polished cartoon outlines and colors. Every cell contains ONE complete character at IDENTICAL scale and baseline, torso center aligned, same camera, facing slightly left. Keep each full silhouette inside its cell with 8% padding. No cell borders, no grid lines, no numbers, no text, no backgrounds, no shadows outside character.
Read left to right, top to bottom:
Row 1 frames 1-4: greeting wave cycle; paw starts low, raises halfway, raised wave left, raised wave right. Small lively body bounce, hat and cape follow.
Row 2 frames 5-8: conversational talking cycle; mouth open small, open wide, closed smiling, open small with blink; free paw gesturing toward audience. Wand held at side.
Row 3 frames 9-12: emphatic magical flourish; lift wand, point wand diagonally upper left, tiny gold sparkles at wand tip with proud smile, settle wand with cheeky wink.
Row 4 frames 13-16: farewell; grin and raised paw, wave goodbye, turn slightly right and tuck wand, crouch slightly ready to scoot off right. Keep entire face and full body visible.
All 16 poses distinct but coherent animation, keep hat, costume, limb counts and character proportions consistent. True transparency throughout empty space.
