---
title: A writer's guide to Git
description: Git was built for code, but it's quietly the best version-control tool ever made for prose.
date: 2026-10-05
read_time: 7 min read
category: Workflow
published: true
---

## Version control, but for sentences



Writers have been inventing version control forever. We name files
`draft-final.docx`, `draft-final-2.docx`, `draft-final-REALLY-final.docx`.
We email copies to ourselves. We keep a folder of "old versions" we
never open.

Git does all of this, properly, and then gets out of the way.

## Three commands that change your writing life

You don't need to become a developer to use Git. You need three things:

- **`git init`** in a folder of markdown files. Now every change is
  tracked.
- **`git commit`** when you finish a session. Now you have a time
  machine.
- **`git log`** when you want to see what you changed and when.

That's the whole game. No branches required, no pull requests, no merge
strategy. Just a clean, automatic history of your own words.

## Why it beats "save as"

"Save as" makes a new file and leaves the old one to rot. Git keeps one
file and remembers every state it's ever been in. You can see exactly
what you changed on Tuesday, restore a paragraph you deleted in March, or
diff two drafts to see how your argument evolved.

## A real example

Last week I cut two pages from an essay, hated the result, and wanted the
original back. With "save as" I'd have been hunting through file names.
With Git, it was `git diff HEAD~1` to see what I'd removed, and
`git checkout HEAD~1 -- essay.md` to bring it back. Two seconds.

## Start small

Make a folder. Run `git init`. Write. Commit when you're done for the
day. That's a habit that will outlast every writing app you'll ever use.