---
layout: base.html
title: Smog City Inventory
---

{% set items = sheets._vending_machine_items | itemsAtThisMachine(sheets._items) %}

{{ items | stringify | safe  }}

TEST TEST