---
title: "Notes on Consensus, Part 1"
date: 2026-08-15
category: Distributed Systems
tags: ["raft", "consensus", "distributed"]
description: "What Raft taught me about failure, patience, and why simple is harder than it looks."
readingTime: 6
---

Consensus is the art of getting a group of machines to agree on something, even when some of them are lying, dead, or slow.

## Why it's hard

Because failure isn't the exception — it's the baseline.

## What Raft taught me

- Simplicity is not the same as easy
- A leader is a temporary assumption, not a fact
- Timeouts are a language

> Simple is harder than it looks.

More to come in part two.