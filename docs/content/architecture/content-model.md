# Content Model

## Purpose

This file defines the museum's current content entities so future pages can be
planned without burying all meaning inside page markup.

## Core Entities

### Exhibit package

A complete exhibit package should contain:

- `title`
- `release_year`
- `room_section`
- `headline`
- `subheadline`
- `key_highlight`
- `showcase_description`
- `scarcity_line`
- `historical_context`
- `cultural_impact`

### Room package

A room package should contain:

- `room_id`
- `room_title`
- `thesis`
- `featured_exhibit`
- `supporting_exhibits` or `preview_links`
- `transition_note`

### Route step

The guided route model should contain:

- `step_index`
- `label`
- `target_section`
- `visitor_purpose`

## Current Implemented Entities

- one entrance-hall room package
- one chronology-hall route package
- one complete Game Boy artifact package
- one approved major-handheld chronology package

## Rule

If a new page cannot name its exhibit package and room package clearly, the
page is probably not ready for implementation.
