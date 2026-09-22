# Diagram generation record

Created September 20, 2026 with the built-in ImageGen tool using the imagegen skill. Five generated explanatory diagrams, refined once for a flat Excalidraw-like style. These are schematic illustrations, not execution evidence. Black canvas, white handwritten labels, restrained amber on the defect.

## overview

Final asset: `public/diagrams/overview.png`

Initial generation prompt:

Use case: infographic-diagram. Create one finished landscape presentation diagram, approximately 2048 by 1024 pixels, aspect ratio 2:1. Match a sparse developer talk with a completely flat pure black (#000000) background, slightly irregular white hand-drawn lines and open arrowheads, Excalidraw-like neat handwritten labels. Large highly legible text, generous negative space, modestly rough rounded rectangles. White and light gray only, except a restrained amber accent where explicitly requested. No gradients, no paper texture, no shadows, no glow, no decorative objects, no people, no icons unless specified. This is an explanatory schematic, not a screenshot. Do not add a title, footer, watermark, or extra labels. Keep diagram safely inside a 6% outer margin; use the full inner canvas. Render all specified text exactly, clearly, and only once unless explicitly repeated. Composition: a two-row relationship map. Top row left to right: a box labeled "Your request", an arrow pointing right to a larger box labeled on two lines "Lead agent" and "poteto-mode", an arrow pointing right labeled "chooses" to a box "Playbook". Below Playbook, a downward arrow labeled "uses" points to "Skills". Below Lead agent, a box "Subagents" is connected to Lead agent by TWO clearly separate vertical arrows: lead-to-subagents labeled "assign", subagents-to-lead labeled "report". Near the bottom, a long understated handwritten white bracket spans the whole workflow with the large label "Principles guide every step". Important: principles are cross-cutting guidance, not a final process step. Layout everything with ample breathing room and no crossed connectors. Labels must remain large enough for a conference audience.

Refinement prompt (edit target: the initial generated image):

Redraw this diagram in a flat Excalidraw dark theme. Preserve every word, box, arrow direction and relationship exactly. Change only the rendering: solid opaque pure black background and box interiors; thin slightly wobbly single white pen strokes; plain white handwritten lettering. Remove ALL gradients, shadows, glow, gray fills, text outlines, distressed texture and speckles. No 3D bevel. Only the Flame remains box may use flat amber. Keep the original wide aspect ratio and spacious layout. This must look like a simple clean digital whiteboard drawing.

## delegation

Final asset: `public/diagrams/delegation.png`

Initial generation prompt:

Use case: infographic-diagram. Create one finished landscape presentation diagram, approximately 2048 by 1024 pixels, aspect ratio 2:1. Match a sparse developer talk with a completely flat pure black (#000000) background, slightly irregular white hand-drawn lines and open arrowheads, Excalidraw-like neat handwritten labels. Large highly legible text, generous negative space, modestly rough rounded rectangles. White and light gray only, except a restrained amber accent where explicitly requested. No gradients, no paper texture, no shadows, no glow, no decorative objects, no people, no icons unless specified. This is an explanatory schematic, not a screenshot. Do not add a title, footer, watermark, or extra labels. Keep diagram safely inside a 6% outer margin; use the full inner canvas. Render all specified text exactly, clearly, and only once unless explicitly repeated. Composition: three large boxes in a horizontal row: "Lead agent", "implement_flame", "Lead review". A rightward arrow from Lead agent to implement_flame is labeled "scope + criteria"; a rightward arrow from implement_flame to Lead review is labeled "code + results". Below Lead review is a box "Browser verification" with a downward arrow from Lead review. A clearly routed long return arrow from Lead review BELOW the horizontal row back into implement_flame is labeled "corrections". Keep this return arrow separate from the downward verification arrow so there is no crossing. There is only one implementation worker. Lead review is the same lead returning to inspect the work, not an extra independent agent. Convey an assignment, returned work, review, and a correction loop. Do not add the word 'parallel'.

Refinement prompt (edit target: the initial generated image):

Redraw this diagram in a flat Excalidraw dark theme. Preserve every word, box, arrow direction and relationship exactly. Change only the rendering: solid opaque pure black background and box interiors; thin slightly wobbly single white pen strokes; plain white handwritten lettering. Remove ALL gradients, shadows, glow, gray fills, text outlines, distressed texture and speckles. No 3D bevel. Only the Flame remains box may use flat amber. Keep the original wide aspect ratio and spacious layout. This must look like a simple clean digital whiteboard drawing.

## repair-loop

Final asset: `public/diagrams/repair-loop.png`

Initial generation prompt:

Use case: infographic-diagram. Create one finished landscape presentation diagram, approximately 2048 by 1024 pixels, aspect ratio 2:1. Match a sparse developer talk with a completely flat pure black (#000000) background, slightly irregular white hand-drawn lines and open arrowheads, Excalidraw-like neat handwritten labels. Large highly legible text, generous negative space, modestly rough rounded rectangles. White and light gray only, except a restrained amber accent where explicitly requested. No gradients, no paper texture, no shadows, no glow, no decorative objects, no people, no icons unless specified. This is an explanatory schematic, not a screenshot. Do not add a title, footer, watermark, or extra labels. Keep diagram safely inside a 6% outer margin; use the full inner canvas. Render all specified text exactly, clearly, and only once unless explicitly repeated. Composition: a simple five-step path with a return-and-check rhythm. Top row has three boxes, left to right: "Pause game", "Sell tower", "Flame remains", connected by arrows pointing right. Give only the words "Flame remains" and its box a restrained warm amber (#eab66e) accent, everything else white. From "Flame remains" a downward arrow leads to a lower-right box "Fix + regression test". From that box a leftward arrow goes to a lower-left box "Repeat browser check". Arrange all five boxes clearly and evenly, with very large text; the fix label may use two lines. The path should read naturally across the top then back across the bottom. This is a conceptual description of a real bug and its verification, NOT a fake game screenshot. Do not draw a fake tower or flame.

Refinement prompt (edit target: the initial generated image):

Redraw this diagram in a flat Excalidraw dark theme. Preserve every word, box, arrow direction and relationship exactly. Change only the rendering: solid opaque pure black background and box interiors; thin slightly wobbly single white pen strokes; plain white handwritten lettering. Remove ALL gradients, shadows, glow, gray fills, text outlines, distressed texture and speckles. No 3D bevel. Only the Flame remains box may use flat amber. Keep the original wide aspect ratio and spacious layout. This must look like a simple clean digital whiteboard drawing.

## design-comparison

Final asset: `public/diagrams/design-comparison.png`

Initial generation prompt:

Use case: infographic-diagram. Create one finished landscape presentation diagram, approximately 2048 by 1024 pixels, aspect ratio 2:1. Match a sparse developer talk with a completely flat pure black (#000000) background, slightly irregular white hand-drawn lines and open arrowheads, Excalidraw-like neat handwritten labels. Large highly legible text, generous negative space, modestly rough rounded rectangles. White and light gray only, except a restrained amber accent where explicitly requested. No gradients, no paper texture, no shadows, no glow, no decorative objects, no people, no icons unless specified. This is an explanatory schematic, not a screenshot. Do not add a title, footer, watermark, or extra labels. Keep diagram safely inside a 6% outer margin; use the full inner canvas. Render all specified text exactly, clearly, and only once unless explicitly repeated. Composition: two equally weighted white hand-drawn boxes across the top, side by side. Left box has two lines: "Design A" and "Derive from seed + wave". Right box has two lines: "Design B" and "Store in match snapshot". Each has a simple downward diagonal arrow into a single box centered beneath them labeled "Compare designs". From that box, a downward arrow leads to a wide final box near the bottom with two lines: "Choose A" and "Keep B's boundary tests". Generous clear space between levels, no crossing lines. Make the two alternatives' difference very readable, and make clear that useful details from B survive in the final choice. This is the actual Starfall design decision, not a race between code implementations. No winners' medals or character art.

Refinement prompt (edit target: the initial generated image):

Redraw this diagram in a flat Excalidraw dark theme. Preserve every word, box, arrow direction and relationship exactly. Change only the rendering: solid opaque pure black background and box interiors; thin slightly wobbly single white pen strokes; plain white handwritten lettering. Remove ALL gradients, shadows, glow, gray fills, text outlines, distressed texture and speckles. No 3D bevel. Only the Flame remains box may use flat amber. Keep the original wide aspect ratio and spacious layout. This must look like a simple clean digital whiteboard drawing.

## shared-plan

Final asset: `public/diagrams/shared-plan.png`

Initial generation prompt:

Use case: infographic-diagram. Create one finished landscape presentation diagram, approximately 2048 by 1024 pixels, aspect ratio 2:1. Match a sparse developer talk with a completely flat pure black (#000000) background, slightly irregular white hand-drawn lines and open arrowheads, Excalidraw-like neat handwritten labels. Large highly legible text, generous negative space, modestly rough rounded rectangles. White and light gray only, except a restrained amber accent where explicitly requested. No gradients, no paper texture, no shadows, no glow, no decorative objects, no people, no icons unless specified. This is an explanatory schematic, not a screenshot. Do not add a title, footer, watermark, or extra labels. Keep diagram safely inside a 6% outer margin; use the full inner canvas. Render all specified text exactly, clearly, and only once unless explicitly repeated. Composition: one large box on the left labeled on two lines "wavePlan" and "(seed, wave)". From its right edge a single connector branches into two rightward arrows, one toward a box in the upper-right labeled "Actual spawning", and one toward a box in the lower-right labeled "Upcoming preview". Use right-angled hand-drawn branching connectors, not crossed curves. Center a short large unboxed annotation beneath the whole diagram: "One plan. Matching behavior." Keep the layout extremely simple and spacious. White hand-drawn lines and handwritten white labels on pure black. This diagram explains two consumers of the SAME shared calculation. Do not draw two separate wave-plan boxes.

Refinement prompt (edit target: the initial generated image):

Redraw this diagram in a flat Excalidraw dark theme. Preserve every word, box, arrow direction and relationship exactly. Change only the rendering: solid opaque pure black background and box interiors; thin slightly wobbly single white pen strokes; plain white handwritten lettering. Remove ALL gradients, shadows, glow, gray fills, text outlines, distressed texture and speckles. No 3D bevel. Only the Flame remains box may use flat amber. Keep the original wide aspect ratio and spacious layout. This must look like a simple clean digital whiteboard drawing.


