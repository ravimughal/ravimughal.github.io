---
title: How to Build a Jekyll Blog
excerpt: "Jekyll is a static site generator, typically used for GitHub Pages but not exclusively. Blog posts usually written in Markdown format (.md)."
---

## What is Jekyll ?

Jekyll is a static site generator, typically used for GitHub Pages but not exclusively.

Blog posts usually written in Markdown format (.md).

## Prerequisites

1. **Ruby Version 2.5 or higher**. Check your Ruby version using the command `ruby -v` on your terminal 
``` console
ruby -v
``` 
Don't have Ruby? [Click Here](https://rubyinstaller.org/downloads/)
2. **RubyGems**. Normally when you install Ruby on Windows or MacOS, RubyGems are install automatically. Check using ``gem -v`` on terminal
``` console
gem -v
```
Don't have? [Click Here](https://rubygems.org/pages/download)
3. **GCC**. Check if you have GCC ```gcc -v```.
```console
gcc -v
```
Don't have GCC ? [Click Here](https://gcc.gnu.org/install/)

## Instructions

1. **Install jekyll and bundler gems**. Into your terminal, type:
```console
gem install jekyll bundler
```
2. **Create a new jekyll site**
```console
jekyll new myblog
```
3. **Change into your new directory**
```console
cd myblog
```
4. **Open a local server**
```console
bundle exec jekyll serve
```
5. **In your Browser** type: ```http://localhost:4000```

## Post your Fist Blog Post

1. Open your project in your favorite IDE
2. into project search ``_posts`` and create a file with the following format ```YYYY-MM-DD-title.md```. ```YYYY``` represente year (4 digits), ```MM``` represent month (2 digits), ```DD``` represents day (2 digits). In example, let's create a file with this name ```2023-10-19-amazing-post.md```
3. In ```2023-10-19-amazing-post.md``` begin with a _front matter_ then start inserting content
{% highlight markdown %}
---
layout: post #this is wich format the your page be like
title: "Welcome To My Amazing Post"
---

# Welcome 

**Hello World**, my name is Ravi

This is my first Post
{% endhighlight %}