---
title: "Git Cheat Sheet"
date: "2021-05-21"
excerpt: "Essential Git commands"
---

~~git init~~

- Initializes the current folder as a Git repository.

~~git clone <url>~~

- Clone an existing Git repository.

~~git remote add origin <url>~~

- Push the local repository to GitHub.

~~git status~~

- Current status of the folder.

~~git add .~~

Add all the files in the current folder to the staging area.

~~git commit -m COMMIT_MESSAGE~~

Commit the changes to the Git repository.

~~git push -u origin master~~

Push the contents of the local repository to the origin to the master branch.

~~git log --oneline~~

See the commit history in a Git repository in a single line.

~~git restore FILE_NAME~~

You added some code in the file but you want to revert back to the state of the file before you added the code. (_You have not staged the file yet._)

~~git restore --staged FILE_NAME~~

Unstage a staged file.

### Git Branches

~~git checkout -b BRANCH_NAME~~

Create a branch.

~~git branch -a~~

To view both remote tracking branches and local branches.

~~git checkout BRANCH_NAME~~

To checkout an existing branch.

Generally, Git won’t let you checkout another branch unless your working directory is clean, because you would lose any working directory changes that are not committed.

~~git branch m OLD_BRANCH_NAME NEW_BRANCH_NAME~~

Rename a branch.

~~git branch -d BRANCH_TO_DELETE~~

Delete a branch.

Git won’t let you delete a branch that you are currently on. You first need to checkout a different branch and then run the command.

~~git branch -D BRANCH_TO_DELETE~~

Git will throw an error if the changes in the branch you are trying to delete are not fully merged into the current branch. You can override this and force Git to delete the branch with the ~~-D~~ option (‘D’ is in capital).

~~git push -u origin BRANCH_NAME~~

Push your branch to the remote repository.

~~git push origin --delete BRANCH_TO_DELETE~~

Delete a branch remotely.

~~git checkout master~~

Checkout to master branch.

~~git merge BRANCH_NAME~~

Merges the specified branch into the currently active branch.
