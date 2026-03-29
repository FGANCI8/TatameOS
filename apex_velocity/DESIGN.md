# Design System Document: High-Performance Athleticism

## 1. Overview & Creative North Star: "The Kinetic Monolith"
This design system is built to evoke the raw energy of a high-performance training facility and the precision of elite athletic telemetry. We move away from the "soft and friendly" web toward an aesthetic of **Kinetic Monolithism**: bold, unyielding structures that feel as though they are in mid-motion.

By utilizing absolute sharp edges (`0px` radius), aggressive contrast, and a "No-Line" architectural philosophy, we create a UI that feels like a premium piece of gym equipment—functional, durable, and intense. We break the "template" look through **intentional asymmetry** (e.g., massive display type offset against tight data points) and **tonal depth**, where the dark environment isn't just "black," but a layered series of graphite and charcoal surfaces.

## 2. Colors: High-Voltage Contrast
The palette is dominated by a deep, monochromatic foundation, punctuated by "Heat Map" reds and "Focus" blues.

### Surface Hierarchy & Nesting
Forget flat grids. We use a "stacked plate" approach.
*   **Base Layer:** `surface` (#131313) is the floor of the arena.
*   **Secondary Zones:** Use `surface_container_low` (#1C1B1B) for large content sections.
*   **Actionable Depth:** Nest a `surface_container_highest` (#353534) element inside a lower container to create a "lifted" effect without using a single shadow.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** To separate a workout module from a statistics panel, use a background shift from `surface_container` (#201F1F) to `surface_container_high` (#2A2A2A). The "line" should be created by the meeting of two different color masses, not a stroke.

### The "Glass & Gradient" Rule
To add "soul" to the athletic intensity:
*   **Signature CTAs:** Use a linear gradient for primary actions, transitioning from `primary_container` (#E70000) at the top-left to `inverse_primary` (#C00100) at the bottom-right.
*   **Overlays:** Use `surface_variant` (#353534) with an 80% opacity and a `20px` backdrop blur for floating navigation bars. This allows the high-energy content to "bleed" through the interface, maintaining a sense of movement.

## 3. Typography: The Editorial Impact
We utilize a dual-typeface system to balance "The Shout" (Display) and "The Data" (Utility).

*   **Lexend (Display & Headlines):** This is our "Impact" font. Use `display-lg` (3.5rem) for hero stats and motivational headings. It should feel massive, intentional, and slightly intimidating.
*   **Inter (Title, Body, Labels):** This is our "Telemetry" font. It provides the high legibility required for heart rates, split times, and technical instructions.

**Typography Strategy:** Use extreme scale shifts. Pair a `display-lg` metric (e.g., "185 BPM") directly next to a `label-sm` unit (e.g., "PEAK PERFORMANCE") to create an editorial, high-end fitness magazine feel.

## 4. Elevation & Depth: Tonal Layering
In a world of sharp edges, traditional shadows feel dated. We achieve depth through atmospheric density.

*   **The Layering Principle:** Stacking is king. A `surface_container_lowest` (#0E0E0E) card sitting on a `surface_bright` (#393939) background creates a "recessed" look, perfect for data entry fields.
*   **Ambient Shadows:** If an element must float (like a FAB), use a shadow tinted with `on_secondary_fixed_variant` (#343D96) at 6% opacity. This "Cool Glow" shadow feels more like a light refraction from a digital screen than a physical shadow.
*   **The "Ghost Border" Fallback:** If a boundary is strictly required for accessibility, use `outline_variant` at 15% opacity. This creates a "barely-there" guide that doesn't break the monolithic aesthetic.

## 5. Components: Precision Tools

### Buttons
*   **Primary:** Sharp `0px` corners. Background: `primary_container` (#E70000). Text: `on_primary_container` (#FFF8F6) in `title-sm` (bold). 
*   **Secondary:** Sharp `0px` corners. Ghost style. Use the "Ghost Border" (15% opacity `outline_variant`) with `on_surface` text.

### Inputs & Fields
*   **The "Recessed" Input:** Forgo the box. Use a `surface_container_lowest` background with a 2px bottom-bar of `secondary` (#BDC2FF) when focused. 
*   **Error State:** Use `error` (#FFB4AB) text with a subtle `error_container` (#93000A) background fill.

### Cards & Lists
*   **No Dividers:** Lists are separated by `0.5rem` (Spacing 2.5) of vertical "dead space" or a subtle toggle between `surface_container_low` and `surface_container_high`.
*   **The "Data Grid":** Use `tertiary_fixed_dim` (#C6C6C7) for secondary data points to keep the focus on the primary `on_surface` metrics.

### Featured Component: The "Performance Streak"
A specialized component for tracking progress. It uses a horizontal `surface_container_highest` bar where progress is filled with a gradient of `secondary` (#BDC2FF) to `on_secondary_container` (#A8AFFF), creating a "shimmer" effect that suggests speed.

## 6. Do's and Don'ts

### Do:
*   **Do** embrace extreme whitespace (Spacing 16 or 24) between major content blocks to allow the "monoliths" to breathe.
*   **Do** use `primary` (Intense Red) sparingly—only for the most critical "Power Actions" or "Danger Zones."
*   **Do** use uppercase for `label-sm` and `label-md` to increase the "technical telemetry" feel.

### Don't:
*   **Don't** use border-radius. Ever. This system is defined by its "Sharp Edge" DNA.
*   **Don't** use center-alignment for long-form content. Use aggressive left-alignment to maintain a fast, "scannable" reading rhythm.
*   **Don't** use standard grey shadows. Use the tonal shifts provided by the `surface-container` scale.