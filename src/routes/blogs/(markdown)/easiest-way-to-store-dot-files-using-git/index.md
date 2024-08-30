---
title: 'Easiest way to store dot files using git!'
pubDate: 2021-06-03
tags: ['git', 'dotfiles']
image: 'easiest-way-to-store-dot-files-using-git.avif'
---

I was looking for a long time for a solution that will help me to store my dot files on a git remote repository. I found sylink method but that was a very lengthy process. I had to manually create all sym-links. Which is not that intuative. Then one day i came accross a youtube video by DistroTube, where he explained how we can store our files using git bare repository. I'll try to explain here how to do it and if you wanna check his video I'll leave a link at the bootm.
Here's the process:

### Create a bare repository in the home folder :

```sh
$ mkdir dotfles
$ git init --bare $HOME/dotfiles
```

### Now run these commands :

```sh
$ alias dotfiles='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'
$ dotfiles config --local status.showUntrackedFiles no
```

Note:

1. The first command will add dotfiles alias to the .bashrc file. So, that we dont have to type the line all the time which is crucial for the process.
2. The second line will prevent any promt created because of untracked file.

**_Now you are good to go. You can add files just as you add using git command. Instead use the alias. Just do as shown below :_**

### First let's add the remote repository link (If it's the first push):

```sh
$ dotfiles remote add origin <repository_link>
```

### Let's add a file or folder ( first locate the file/folder ) :

```sh
$ dotfiles add <pathToTheFile/fileName>
$ dotfiles commit -m "Test Commit"
$ dotfiles push -u origin <branch_name>
```

Greate! You've seccessfully uploaded your dotfiles to git remote repository. Now when you change anything just add, commit and psuh just as shown.

[Link to DistroTube's Video](https://www.youtube.com/watch?v=tBoLDpTWVOM)
