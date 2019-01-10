



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-7a356da712cd13c4e4cfbdc04cf886bb391f84a7e92f9f7b3abf2b1034fea6e9.css" integrity="sha256-ejVtpxLNE8Tkz73ATPiGuzkfhKfpL597Or8rEDT+puk=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-85c605289f6f5d0832a168f8ad71a38dff98eed69103be797a45c54c0cca6cac.css" integrity="sha256-hcYFKJ9vXQgyoWj4rXGjjf+Y7taRA755ekXFTAzKbKw=" media="all" rel="stylesheet" />
    
    
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-06c3644e239a6238d15cf634a5bf8d53a168f395a32a27e603c467a23d146fe9.css" integrity="sha256-BsNkTiOaYjjRXPY0pb+NU6Fo85WjKifmA8Rnoj0Ub+k=" media="all" rel="stylesheet" />
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>bower-angular-sanitize/angular-sanitize.js at master · angular/bower-angular-sanitize · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/139426?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="angular/bower-angular-sanitize" name="twitter:title" /><meta content="bower-angular-sanitize - angular-sanitize bower repo" name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/139426?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="angular/bower-angular-sanitize" property="og:title" /><meta content="https://github.com/angular/bower-angular-sanitize" property="og:url" /><meta content="bower-angular-sanitize - angular-sanitize bower repo" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    
    <meta name="request-id" content="AC585591:2378C:468D608:5816E9F0" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="AC585591:2378C:468D608:5816E9F0" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="N2U4ZmUyOTc1YWI0YjYwODBiOGU4ZjZjMTY0NjlhNzQxYzZkZjcyOGE2NDYyMjA5OGU1ZGZmZDllNjU2OGVhZXx7InJlbW90ZV9hZGRyZXNzIjoiMTcyLjg4Ljg1LjE0NSIsInJlcXVlc3RfaWQiOiJBQzU4NTU5MToyMzc4Qzo0NjhENjA4OjU4MTZFOUYwIiwidGltZXN0YW1wIjoxNDc3ODk2Njk0LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="fbf34ad3720453994b2177c7d77fd3a2af79e0f4">
    <meta content="ec55e2ecf144c32a0a2fe7699479499b011c01e3" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="4b864a2aef9c041070b982344e9bcc84">
    

      
  <meta name="description" content="bower-angular-sanitize - angular-sanitize bower repo">
  <meta name="go-import" content="github.com/angular/bower-angular-sanitize git https://github.com/angular/bower-angular-sanitize.git">

  <meta content="139426" name="octolytics-dimension-user_id" /><meta content="angular" name="octolytics-dimension-user_login" /><meta content="7805529" name="octolytics-dimension-repository_id" /><meta content="angular/bower-angular-sanitize" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7805529" name="octolytics-dimension-repository_network_root_id" /><meta content="angular/bower-angular-sanitize" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/angular/bower-angular-sanitize/commits/master.atom" rel="alternate" title="Recent Commits to bower-angular-sanitize:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/angular/bower-angular-sanitize/blob/master/angular-sanitize.js" data-pjax-transient>
  </head>


  <body class="logged-out  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



          <header class="site-header js-details-container" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav site-header-nav-main">
        <a href="/personal" class="js-selected-navigation-item nav-item nav-item-personal" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item nav-item-opensource" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item nav-item-business" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item nav-item-explore" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /explore">
          Explore
</a>      </nav>

      <div class="site-header-actions">
            <a class="btn btn-primary site-header-actions-btn" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
          <a class="btn site-header-actions-btn mr-2" href="/login?return_to=%2Fangular%2Fbower-angular-sanitize%2Fblob%2Fmaster%2Fangular-sanitize.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
      </div>

        <nav class="site-header-nav site-header-nav-secondary">
          <a class="nav-item" href="/pricing">Pricing</a>
          <a class="nav-item" href="/blog">Blog</a>
          <a class="nav-item" href="https://help.github.com">Support</a>
          <a class="nav-item header-search-link" href="https://github.com/search">Search GitHub</a>
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/angular/bower-angular-sanitize/search" class="js-site-search-form" data-scoped-search-url="/angular/bower-angular-sanitize/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>

        </nav>
    </div>
  </div>
</header>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-sanitize"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
    Watch
  </a>
  <a class="social-count" href="/angular/bower-angular-sanitize/watchers"
     aria-label="22 users are watching this repository">
    22
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-sanitize"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/angular/bower-angular-sanitize/stargazers"
      aria-label="83 users starred this repository">
      83
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-sanitize"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        Fork
      </a>

    <a href="/angular/bower-angular-sanitize/network" class="social-count"
       aria-label="189 users are forked this repository">
      189
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/angular" class="url fn" rel="author">angular</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/angular/bower-angular-sanitize" data-pjax="#js-repo-pjax-container">bower-angular-sanitize</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/angular/bower-angular-sanitize" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /angular/bower-angular-sanitize" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/angular/bower-angular-sanitize/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /angular/bower-angular-sanitize/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/angular/bower-angular-sanitize/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /angular/bower-angular-sanitize/projects">
    <svg class="octicon" aria-hidden="true" version="1.1" width="15" height="16" viewBox="0 0 15 16">
      <path d="M1 15h13V1H1v14zM15 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1zm-4.41 11h1.82c.59 0 .59-.41.59-1V3c0-.59 0-1-.59-1h-1.82C10 2 10 2.41 10 3v8c0 .59 0 1 .59 1zm-4-2h1.82C9 10 9 9.59 9 9V3c0-.59 0-1-.59-1H6.59C6 2 6 2.41 6 3v6c0 .59 0 1 .59 1zM2 13V3c0-.59 0-1 .59-1h1.82C5 2 5 2.41 5 3v10c0 .59 0 1-.59 1H2.59C2 14 2 13.59 2 13z"></path>
    </svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/angular/bower-angular-sanitize/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /angular/bower-angular-sanitize/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/angular/bower-angular-sanitize/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /angular/bower-angular-sanitize/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/angular/bower-angular-sanitize/blob/fec3f114166847d79fea92f6812c7d4d20ee31d8/angular-sanitize.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d1c8c46a5b05f9f1f2c44e984380dee0 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/angular/bower-angular-sanitize/blob/master/angular-sanitize.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/angular/bower-angular-sanitize/blob/unstable/angular-sanitize.js"
               data-name="unstable"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                unstable
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.6.0-rc.0/angular-sanitize.js"
              data-name="v1.6.0-rc.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.0-rc.0">
                v1.6.0-rc.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5092+sha.872bdbd/angular-sanitize.js"
              data-name="v1.5.9-build.5092+sha.872bdbd"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5092+sha.872bdbd">
                v1.5.9-build.5092+sha.872bdbd
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5091+sha.f1e6778/angular-sanitize.js"
              data-name="v1.5.9-build.5091+sha.f1e6778"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5091+sha.f1e6778">
                v1.5.9-build.5091+sha.f1e6778
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5090+sha.7ed0340/angular-sanitize.js"
              data-name="v1.5.9-build.5090+sha.7ed0340"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5090+sha.7ed0340">
                v1.5.9-build.5090+sha.7ed0340
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5089+sha.5cce6e2/angular-sanitize.js"
              data-name="v1.5.9-build.5089+sha.5cce6e2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5089+sha.5cce6e2">
                v1.5.9-build.5089+sha.5cce6e2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5088+sha.5cce6e2/angular-sanitize.js"
              data-name="v1.5.9-build.5088+sha.5cce6e2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5088+sha.5cce6e2">
                v1.5.9-build.5088+sha.5cce6e2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5087+sha.47ba51e/angular-sanitize.js"
              data-name="v1.5.9-build.5087+sha.47ba51e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5087+sha.47ba51e">
                v1.5.9-build.5087+sha.47ba51e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5086+sha.1cf01d6/angular-sanitize.js"
              data-name="v1.5.9-build.5086+sha.1cf01d6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5086+sha.1cf01d6">
                v1.5.9-build.5086+sha.1cf01d6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5085+sha.74c19f0/angular-sanitize.js"
              data-name="v1.5.9-build.5085+sha.74c19f0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5085+sha.74c19f0">
                v1.5.9-build.5085+sha.74c19f0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5084+sha.9e4d42c/angular-sanitize.js"
              data-name="v1.5.9-build.5084+sha.9e4d42c"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5084+sha.9e4d42c">
                v1.5.9-build.5084+sha.9e4d42c
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5083+sha.ad3a1f9/angular-sanitize.js"
              data-name="v1.5.9-build.5083+sha.ad3a1f9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5083+sha.ad3a1f9">
                v1.5.9-build.5083+sha.ad3a1f9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5082+sha.3c88c62/angular-sanitize.js"
              data-name="v1.5.9-build.5082+sha.3c88c62"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5082+sha.3c88c62">
                v1.5.9-build.5082+sha.3c88c62
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5081+sha.6a33749/angular-sanitize.js"
              data-name="v1.5.9-build.5081+sha.6a33749"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5081+sha.6a33749">
                v1.5.9-build.5081+sha.6a33749
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5080+sha.21ac2c4/angular-sanitize.js"
              data-name="v1.5.9-build.5080+sha.21ac2c4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5080+sha.21ac2c4">
                v1.5.9-build.5080+sha.21ac2c4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5079+sha.eeb9ef0/angular-sanitize.js"
              data-name="v1.5.9-build.5079+sha.eeb9ef0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5079+sha.eeb9ef0">
                v1.5.9-build.5079+sha.eeb9ef0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5078+sha.a6118df/angular-sanitize.js"
              data-name="v1.5.9-build.5078+sha.a6118df"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5078+sha.a6118df">
                v1.5.9-build.5078+sha.a6118df
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5077+sha.586e2ac/angular-sanitize.js"
              data-name="v1.5.9-build.5077+sha.586e2ac"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5077+sha.586e2ac">
                v1.5.9-build.5077+sha.586e2ac
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5076+sha.41034bb/angular-sanitize.js"
              data-name="v1.5.9-build.5076+sha.41034bb"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5076+sha.41034bb">
                v1.5.9-build.5076+sha.41034bb
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5075+sha.828f8a6/angular-sanitize.js"
              data-name="v1.5.9-build.5075+sha.828f8a6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5075+sha.828f8a6">
                v1.5.9-build.5075+sha.828f8a6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5074+sha.f5f802c/angular-sanitize.js"
              data-name="v1.5.9-build.5074+sha.f5f802c"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5074+sha.f5f802c">
                v1.5.9-build.5074+sha.f5f802c
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5073+sha.35482ba/angular-sanitize.js"
              data-name="v1.5.9-build.5073+sha.35482ba"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5073+sha.35482ba">
                v1.5.9-build.5073+sha.35482ba
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5072+sha.7dacbcc/angular-sanitize.js"
              data-name="v1.5.9-build.5072+sha.7dacbcc"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5072+sha.7dacbcc">
                v1.5.9-build.5072+sha.7dacbcc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5071+sha.081d06f/angular-sanitize.js"
              data-name="v1.5.9-build.5071+sha.081d06f"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5071+sha.081d06f">
                v1.5.9-build.5071+sha.081d06f
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5070+sha.00b60f2/angular-sanitize.js"
              data-name="v1.5.9-build.5070+sha.00b60f2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5070+sha.00b60f2">
                v1.5.9-build.5070+sha.00b60f2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5069+sha.daa47e3/angular-sanitize.js"
              data-name="v1.5.9-build.5069+sha.daa47e3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5069+sha.daa47e3">
                v1.5.9-build.5069+sha.daa47e3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5068+sha.1997360/angular-sanitize.js"
              data-name="v1.5.9-build.5068+sha.1997360"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5068+sha.1997360">
                v1.5.9-build.5068+sha.1997360
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5067+sha.705afcd/angular-sanitize.js"
              data-name="v1.5.9-build.5067+sha.705afcd"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5067+sha.705afcd">
                v1.5.9-build.5067+sha.705afcd
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5066+sha.aa6a806/angular-sanitize.js"
              data-name="v1.5.9-build.5066+sha.aa6a806"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5066+sha.aa6a806">
                v1.5.9-build.5066+sha.aa6a806
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5065+sha.b8c8262/angular-sanitize.js"
              data-name="v1.5.9-build.5065+sha.b8c8262"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5065+sha.b8c8262">
                v1.5.9-build.5065+sha.b8c8262
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5064+sha.406c1b0/angular-sanitize.js"
              data-name="v1.5.9-build.5064+sha.406c1b0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5064+sha.406c1b0">
                v1.5.9-build.5064+sha.406c1b0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5063+sha.406c1b0/angular-sanitize.js"
              data-name="v1.5.9-build.5063+sha.406c1b0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5063+sha.406c1b0">
                v1.5.9-build.5063+sha.406c1b0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5062+sha.c22615c/angular-sanitize.js"
              data-name="v1.5.9-build.5062+sha.c22615c"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5062+sha.c22615c">
                v1.5.9-build.5062+sha.c22615c
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5061+sha.fc0c11d/angular-sanitize.js"
              data-name="v1.5.9-build.5061+sha.fc0c11d"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5061+sha.fc0c11d">
                v1.5.9-build.5061+sha.fc0c11d
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5060+sha.beab3ba/angular-sanitize.js"
              data-name="v1.5.9-build.5060+sha.beab3ba"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5060+sha.beab3ba">
                v1.5.9-build.5060+sha.beab3ba
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5059+sha.4f44e01/angular-sanitize.js"
              data-name="v1.5.9-build.5059+sha.4f44e01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5059+sha.4f44e01">
                v1.5.9-build.5059+sha.4f44e01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5058+sha.606ea5d/angular-sanitize.js"
              data-name="v1.5.9-build.5058+sha.606ea5d"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5058+sha.606ea5d">
                v1.5.9-build.5058+sha.606ea5d
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5057+sha.8d394de/angular-sanitize.js"
              data-name="v1.5.9-build.5057+sha.8d394de"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5057+sha.8d394de">
                v1.5.9-build.5057+sha.8d394de
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5056+sha.298f8c4/angular-sanitize.js"
              data-name="v1.5.9-build.5056+sha.298f8c4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5056+sha.298f8c4">
                v1.5.9-build.5056+sha.298f8c4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5055+sha.138fbf0/angular-sanitize.js"
              data-name="v1.5.9-build.5055+sha.138fbf0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5055+sha.138fbf0">
                v1.5.9-build.5055+sha.138fbf0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5054+sha.a02c886/angular-sanitize.js"
              data-name="v1.5.9-build.5054+sha.a02c886"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5054+sha.a02c886">
                v1.5.9-build.5054+sha.a02c886
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5053+sha.faf0c3e/angular-sanitize.js"
              data-name="v1.5.9-build.5053+sha.faf0c3e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5053+sha.faf0c3e">
                v1.5.9-build.5053+sha.faf0c3e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5052+sha.39a3b58/angular-sanitize.js"
              data-name="v1.5.9-build.5052+sha.39a3b58"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5052+sha.39a3b58">
                v1.5.9-build.5052+sha.39a3b58
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5051+sha.f41bd76/angular-sanitize.js"
              data-name="v1.5.9-build.5051+sha.f41bd76"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5051+sha.f41bd76">
                v1.5.9-build.5051+sha.f41bd76
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5050+sha.b3a3ed3/angular-sanitize.js"
              data-name="v1.5.9-build.5050+sha.b3a3ed3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5050+sha.b3a3ed3">
                v1.5.9-build.5050+sha.b3a3ed3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5049+sha.34434cf/angular-sanitize.js"
              data-name="v1.5.9-build.5049+sha.34434cf"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5049+sha.34434cf">
                v1.5.9-build.5049+sha.34434cf
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5048+sha.cdf3d5e/angular-sanitize.js"
              data-name="v1.5.9-build.5048+sha.cdf3d5e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5048+sha.cdf3d5e">
                v1.5.9-build.5048+sha.cdf3d5e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5047+sha.4e6c14d/angular-sanitize.js"
              data-name="v1.5.9-build.5047+sha.4e6c14d"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5047+sha.4e6c14d">
                v1.5.9-build.5047+sha.4e6c14d
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5046+sha.823295f/angular-sanitize.js"
              data-name="v1.5.9-build.5046+sha.823295f"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5046+sha.823295f">
                v1.5.9-build.5046+sha.823295f
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5045+sha.9062bae/angular-sanitize.js"
              data-name="v1.5.9-build.5045+sha.9062bae"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5045+sha.9062bae">
                v1.5.9-build.5045+sha.9062bae
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5044+sha.3253b55/angular-sanitize.js"
              data-name="v1.5.9-build.5044+sha.3253b55"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5044+sha.3253b55">
                v1.5.9-build.5044+sha.3253b55
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5043+sha.2be5ac6/angular-sanitize.js"
              data-name="v1.5.9-build.5043+sha.2be5ac6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5043+sha.2be5ac6">
                v1.5.9-build.5043+sha.2be5ac6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5042+sha.26a6a9b/angular-sanitize.js"
              data-name="v1.5.9-build.5042+sha.26a6a9b"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5042+sha.26a6a9b">
                v1.5.9-build.5042+sha.26a6a9b
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5041+sha.ddb4ef1/angular-sanitize.js"
              data-name="v1.5.9-build.5041+sha.ddb4ef1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5041+sha.ddb4ef1">
                v1.5.9-build.5041+sha.ddb4ef1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5040+sha.723d64d/angular-sanitize.js"
              data-name="v1.5.9-build.5040+sha.723d64d"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5040+sha.723d64d">
                v1.5.9-build.5040+sha.723d64d
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5038+sha.3fe3da8/angular-sanitize.js"
              data-name="v1.5.9-build.5038+sha.3fe3da8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5038+sha.3fe3da8">
                v1.5.9-build.5038+sha.3fe3da8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5037+sha.f604470/angular-sanitize.js"
              data-name="v1.5.9-build.5037+sha.f604470"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5037+sha.f604470">
                v1.5.9-build.5037+sha.f604470
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5036+sha.90f947b/angular-sanitize.js"
              data-name="v1.5.9-build.5036+sha.90f947b"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5036+sha.90f947b">
                v1.5.9-build.5036+sha.90f947b
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5035+sha.cf241c4/angular-sanitize.js"
              data-name="v1.5.9-build.5035+sha.cf241c4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5035+sha.cf241c4">
                v1.5.9-build.5035+sha.cf241c4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5034+sha.8d4d3d5/angular-sanitize.js"
              data-name="v1.5.9-build.5034+sha.8d4d3d5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5034+sha.8d4d3d5">
                v1.5.9-build.5034+sha.8d4d3d5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5033+sha.b59bc0b/angular-sanitize.js"
              data-name="v1.5.9-build.5033+sha.b59bc0b"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5033+sha.b59bc0b">
                v1.5.9-build.5033+sha.b59bc0b
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5032+sha.f1cc58c/angular-sanitize.js"
              data-name="v1.5.9-build.5032+sha.f1cc58c"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5032+sha.f1cc58c">
                v1.5.9-build.5032+sha.f1cc58c
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5031+sha.e1e2fe1/angular-sanitize.js"
              data-name="v1.5.9-build.5031+sha.e1e2fe1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5031+sha.e1e2fe1">
                v1.5.9-build.5031+sha.e1e2fe1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5030+sha.bb8e955/angular-sanitize.js"
              data-name="v1.5.9-build.5030+sha.bb8e955"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5030+sha.bb8e955">
                v1.5.9-build.5030+sha.bb8e955
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5029+sha.16dccea/angular-sanitize.js"
              data-name="v1.5.9-build.5029+sha.16dccea"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5029+sha.16dccea">
                v1.5.9-build.5029+sha.16dccea
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5028+sha.a1bdffa/angular-sanitize.js"
              data-name="v1.5.9-build.5028+sha.a1bdffa"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5028+sha.a1bdffa">
                v1.5.9-build.5028+sha.a1bdffa
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5027+sha.32aa7e7/angular-sanitize.js"
              data-name="v1.5.9-build.5027+sha.32aa7e7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5027+sha.32aa7e7">
                v1.5.9-build.5027+sha.32aa7e7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5026+sha.32aa7e7/angular-sanitize.js"
              data-name="v1.5.9-build.5026+sha.32aa7e7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5026+sha.32aa7e7">
                v1.5.9-build.5026+sha.32aa7e7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5025+sha.1547c75/angular-sanitize.js"
              data-name="v1.5.9-build.5025+sha.1547c75"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5025+sha.1547c75">
                v1.5.9-build.5025+sha.1547c75
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5024+sha.76d3daf/angular-sanitize.js"
              data-name="v1.5.9-build.5024+sha.76d3daf"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5024+sha.76d3daf">
                v1.5.9-build.5024+sha.76d3daf
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5023+sha.9e24e77/angular-sanitize.js"
              data-name="v1.5.9-build.5023+sha.9e24e77"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5023+sha.9e24e77">
                v1.5.9-build.5023+sha.9e24e77
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5022+sha.21e4db9/angular-sanitize.js"
              data-name="v1.5.9-build.5022+sha.21e4db9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5022+sha.21e4db9">
                v1.5.9-build.5022+sha.21e4db9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5021+sha.21e4db9/angular-sanitize.js"
              data-name="v1.5.9-build.5021+sha.21e4db9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5021+sha.21e4db9">
                v1.5.9-build.5021+sha.21e4db9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5020+sha.0784977/angular-sanitize.js"
              data-name="v1.5.9-build.5020+sha.0784977"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5020+sha.0784977">
                v1.5.9-build.5020+sha.0784977
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5019+sha.912d5b9/angular-sanitize.js"
              data-name="v1.5.9-build.5019+sha.912d5b9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5019+sha.912d5b9">
                v1.5.9-build.5019+sha.912d5b9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5018+sha.d14c7f3/angular-sanitize.js"
              data-name="v1.5.9-build.5018+sha.d14c7f3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5018+sha.d14c7f3">
                v1.5.9-build.5018+sha.d14c7f3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5017+sha.78e6a58/angular-sanitize.js"
              data-name="v1.5.9-build.5017+sha.78e6a58"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5017+sha.78e6a58">
                v1.5.9-build.5017+sha.78e6a58
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5016+sha.51c516e/angular-sanitize.js"
              data-name="v1.5.9-build.5016+sha.51c516e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5016+sha.51c516e">
                v1.5.9-build.5016+sha.51c516e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5015+sha.51a2eb7/angular-sanitize.js"
              data-name="v1.5.9-build.5015+sha.51a2eb7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5015+sha.51a2eb7">
                v1.5.9-build.5015+sha.51a2eb7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5014+sha.3f759b1/angular-sanitize.js"
              data-name="v1.5.9-build.5014+sha.3f759b1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5014+sha.3f759b1">
                v1.5.9-build.5014+sha.3f759b1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5013+sha.a83a209/angular-sanitize.js"
              data-name="v1.5.9-build.5013+sha.a83a209"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5013+sha.a83a209">
                v1.5.9-build.5013+sha.a83a209
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5012+sha.cc8ea72/angular-sanitize.js"
              data-name="v1.5.9-build.5012+sha.cc8ea72"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5012+sha.cc8ea72">
                v1.5.9-build.5012+sha.cc8ea72
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5011+sha.4941e04/angular-sanitize.js"
              data-name="v1.5.9-build.5011+sha.4941e04"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5011+sha.4941e04">
                v1.5.9-build.5011+sha.4941e04
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5010+sha.c729554/angular-sanitize.js"
              data-name="v1.5.9-build.5010+sha.c729554"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5010+sha.c729554">
                v1.5.9-build.5010+sha.c729554
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5009+sha.d882fde/angular-sanitize.js"
              data-name="v1.5.9-build.5009+sha.d882fde"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5009+sha.d882fde">
                v1.5.9-build.5009+sha.d882fde
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5008+sha.d882fde/angular-sanitize.js"
              data-name="v1.5.9-build.5008+sha.d882fde"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5008+sha.d882fde">
                v1.5.9-build.5008+sha.d882fde
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5007+sha.704123a/angular-sanitize.js"
              data-name="v1.5.9-build.5007+sha.704123a"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5007+sha.704123a">
                v1.5.9-build.5007+sha.704123a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5006+sha.e3a378e/angular-sanitize.js"
              data-name="v1.5.9-build.5006+sha.e3a378e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5006+sha.e3a378e">
                v1.5.9-build.5006+sha.e3a378e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5005+sha.e3a378e/angular-sanitize.js"
              data-name="v1.5.9-build.5005+sha.e3a378e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5005+sha.e3a378e">
                v1.5.9-build.5005+sha.e3a378e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5004+sha.c75698d/angular-sanitize.js"
              data-name="v1.5.9-build.5004+sha.c75698d"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5004+sha.c75698d">
                v1.5.9-build.5004+sha.c75698d
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5003+sha.ad9a99d/angular-sanitize.js"
              data-name="v1.5.9-build.5003+sha.ad9a99d"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5003+sha.ad9a99d">
                v1.5.9-build.5003+sha.ad9a99d
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5002+sha.4853201/angular-sanitize.js"
              data-name="v1.5.9-build.5002+sha.4853201"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5002+sha.4853201">
                v1.5.9-build.5002+sha.4853201
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5001+sha.13c2522/angular-sanitize.js"
              data-name="v1.5.9-build.5001+sha.13c2522"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5001+sha.13c2522">
                v1.5.9-build.5001+sha.13c2522
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.5000+sha.cb31067/angular-sanitize.js"
              data-name="v1.5.9-build.5000+sha.cb31067"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.5000+sha.cb31067">
                v1.5.9-build.5000+sha.cb31067
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.4999+sha.3d686a9/angular-sanitize.js"
              data-name="v1.5.9-build.4999+sha.3d686a9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.4999+sha.3d686a9">
                v1.5.9-build.4999+sha.3d686a9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.4998+sha.3d686a9/angular-sanitize.js"
              data-name="v1.5.9-build.4998+sha.3d686a9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.4998+sha.3d686a9">
                v1.5.9-build.4998+sha.3d686a9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.4997+sha.8df4367/angular-sanitize.js"
              data-name="v1.5.9-build.4997+sha.8df4367"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.4997+sha.8df4367">
                v1.5.9-build.4997+sha.8df4367
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.4996+sha.e50e91c/angular-sanitize.js"
              data-name="v1.5.9-build.4996+sha.e50e91c"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.4996+sha.e50e91c">
                v1.5.9-build.4996+sha.e50e91c
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.4995+sha.c54f7a9/angular-sanitize.js"
              data-name="v1.5.9-build.4995+sha.c54f7a9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.4995+sha.c54f7a9">
                v1.5.9-build.4995+sha.c54f7a9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.4994+sha.e1da4be/angular-sanitize.js"
              data-name="v1.5.9-build.4994+sha.e1da4be"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.4994+sha.e1da4be">
                v1.5.9-build.4994+sha.e1da4be
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-sanitize/tree/v1.5.9-build.4993+sha.88f3517/angular-sanitize.js"
              data-name="v1.5.9-build.4993+sha.88f3517"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9-build.4993+sha.88f3517">
                v1.5.9-build.4993+sha.88f3517
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/angular/bower-angular-sanitize/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/angular/bower-angular-sanitize"><span>bower-angular-sanitize</span></a></span></span><span class="separator">/</span><strong class="final-path">angular-sanitize.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/angular/bower-angular-sanitize/commit/fec3f114166847d79fea92f6812c7d4d20ee31d8" data-pjax>
          fec3f11
        </a>
        <relative-time datetime="2016-10-30T20:10:22Z">Oct 31, 2016</relative-time>
      </span>
      <div>
        <img alt="@NgDashboard" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/6013193?v=3&amp;s=40" width="20" />
        <a href="/NgDashboard" class="user-mention" rel="contributor">NgDashboard</a>
          <a href="/angular/bower-angular-sanitize/commit/fec3f114166847d79fea92f6812c7d4d20ee31d8" class="message" data-pjax="true" title="v1.5.9-build.5092+sha.872bdbd">v1.5.9-build.5092+sha.872bdbd</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>5</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="NgDashboard" href="/angular/bower-angular-sanitize/commits/master/angular-sanitize.js?author=NgDashboard"><img alt="@NgDashboard" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/6013193?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="btford" href="/angular/bower-angular-sanitize/commits/master/angular-sanitize.js?author=btford"><img alt="@btford" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/474988?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jeffbcross" href="/angular/bower-angular-sanitize/commits/master/angular-sanitize.js?author=jeffbcross"><img alt="@jeffbcross" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/463703?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tbosch" href="/angular/bower-angular-sanitize/commits/master/angular-sanitize.js?author=tbosch"><img alt="@tbosch" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/690815?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vojtajina" href="/angular/bower-angular-sanitize/commits/master/angular-sanitize.js?author=vojtajina"><img alt="@vojtajina" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/46647?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@NgDashboard" height="24" src="https://avatars0.githubusercontent.com/u/6013193?v=3&amp;s=48" width="24" />
            <a href="/NgDashboard">NgDashboard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@btford" height="24" src="https://avatars3.githubusercontent.com/u/474988?v=3&amp;s=48" width="24" />
            <a href="/btford">btford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jeffbcross" height="24" src="https://avatars1.githubusercontent.com/u/463703?v=3&amp;s=48" width="24" />
            <a href="/jeffbcross">jeffbcross</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tbosch" height="24" src="https://avatars2.githubusercontent.com/u/690815?v=3&amp;s=48" width="24" />
            <a href="/tbosch">tbosch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vojtajina" height="24" src="https://avatars1.githubusercontent.com/u/46647?v=3&amp;s=48" width="24" />
            <a href="/vojtajina">vojtajina</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/angular/bower-angular-sanitize/raw/master/angular-sanitize.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/angular/bower-angular-sanitize/blame/master/angular-sanitize.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/angular/bower-angular-sanitize/commits/master/angular-sanitize.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
        </button>
  </div>

  <div class="file-info">
      740 lines (675 sloc)
      <span class="file-info-divider"></span>
    26.4 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@license</span> AngularJS v1.5.9-build.5092+sha.872bdbd</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * (c) 2010-2016 Google, Inc. http://angularjs.org</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * License: MIT</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-c1">window</span>, <span class="pl-smi">angular</span>) {<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     Any commits to this file should be reviewed with security in mind.  *</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   Changes to this file can potentially create security vulnerabilities. *</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *          An approval from 2 Core members with history of modifying      *</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                         this file is required.                          *</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                                                                         *</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Does the change somehow allow for arbitrary javascript to be executed? *</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    Or allows for someone to change the prototype of built-in objects?   *</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     Or gives undesired access to variables likes document or window?    *</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $sanitizeMinErr <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">$$minErr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$sanitize<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> bind;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> extend;</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> forEach;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isDefined;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> lowercase;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> noop;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> htmlParser;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> htmlSanitizeWriter;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc module</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> ngSanitize</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * # ngSanitize</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The `ngSanitize` module provides functionality to sanitize HTML.</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * &lt;div doc-module-components=&quot;ngSanitize&quot;&gt;&lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * See <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngSanitize.$sanitize</span> `$sanitize`}</span> for usage.</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc service</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> $sanitize</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@kind</span> function</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   Sanitizes an html string by stripping all potentially dangerous tokens.</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   then serialized back to properly escaped html string. This means that no unsafe input can make</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   it into the returned string.</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   The whitelist for URL sanitization of attribute values is configured using the functions</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   `aHrefSanitizationWhitelist` and `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   `$compileProvider`}.</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   The input may also contain SVG markup if this is enabled via <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">$sanitizeProvider</span>}</span>.</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">html</span> HTML input.</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@returns</span> <span class="pl-en">{string}</span> Sanitized HTML.</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@example</span></span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   &lt;example module=&quot;sanitizeExample&quot; deps=&quot;angular-sanitize.js&quot; name=&quot;sanitize-service&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   &lt;file name=&quot;index.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;script&gt;</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         angular.module(&#39;sanitizeExample&#39;, [&#39;ngSanitize&#39;])</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           .controller(&#39;ExampleController&#39;, [&#39;$scope&#39;, &#39;$sce&#39;, function($scope, $sce) {</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             $scope.snippet =</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-c">               &#39;&lt;p style=&quot;color:blue&quot;&gt;an html\n&#39; +</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-c">               &#39;&lt;em onmouseover=&quot;this.textContent=\&#39;PWN3D!\&#39;&quot;&gt;click here&lt;/em&gt;\n&#39; +</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-c">               &#39;snippet&lt;/p&gt;&#39;;</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             $scope.deliberatelyTrustDangerousSnippet = function() {</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-c">               return $sce.trustAsHtml($scope.snippet);</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             };</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           }]);</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;/script&gt;</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;div ng-controller=&quot;ExampleController&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        Snippet: &lt;textarea ng-model=&quot;snippet&quot; cols=&quot;60&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;table&gt;</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;Directive&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;How&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;Source&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;Rendered&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;/tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;tr id=&quot;bind-html-with-sanitize&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;ng-bind-html&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;Automatically uses $sanitize&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;&lt;pre&gt;&amp;lt;div ng-bind-html=&quot;snippet&quot;&amp;gt;&lt;br/&gt;&amp;lt;/div&amp;gt;&lt;/pre&gt;&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;&lt;div ng-bind-html=&quot;snippet&quot;&gt;&lt;/div&gt;&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;/tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;tr id=&quot;bind-html-with-trust&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;ng-bind-html&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;Bypass $sanitize by explicitly trusting the dangerous value&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;pre&gt;&amp;lt;div ng-bind-html=&quot;deliberatelyTrustDangerousSnippet()&quot;&amp;gt;</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-c">&amp;lt;/div&amp;gt;&lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;&lt;div ng-bind-html=&quot;deliberatelyTrustDangerousSnippet()&quot;&gt;&lt;/div&gt;&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;/tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;tr id=&quot;bind-default&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;ng-bind&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;Automatically escapes&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;&lt;pre&gt;&amp;lt;div ng-bind=&quot;snippet&quot;&amp;gt;&lt;br/&gt;&amp;lt;/div&amp;gt;&lt;/pre&gt;&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;&lt;div ng-bind=&quot;snippet&quot;&gt;&lt;/div&gt;&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;/tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;/table&gt;</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   &lt;file name=&quot;protractor.js&quot; type=&quot;protractor&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     it(&#39;should sanitize the html snippet by default&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       expect(element(by.css(&#39;#bind-html-with-sanitize div&#39;)).getAttribute(&#39;innerHTML&#39;)).</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         toBe(&#39;&lt;p&gt;an html\n&lt;em&gt;click here&lt;/em&gt;\nsnippet&lt;/p&gt;&#39;);</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     });</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     it(&#39;should inline raw snippet if bound to a trusted value&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       expect(element(by.css(&#39;#bind-html-with-trust div&#39;)).getAttribute(&#39;innerHTML&#39;)).</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         toBe(&quot;&lt;p style=\&quot;color:blue\&quot;&gt;an html\n&quot; +</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              &quot;&lt;em onmouseover=\&quot;this.textContent=&#39;PWN3D!&#39;\&quot;&gt;click here&lt;/em&gt;\n&quot; +</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              &quot;snippet&lt;/p&gt;&quot;);</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     });</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     it(&#39;should escape snippet without any filter&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       expect(element(by.css(&#39;#bind-default div&#39;)).getAttribute(&#39;innerHTML&#39;)).</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         toBe(&quot;&amp;lt;p style=\&quot;color:blue\&quot;&amp;gt;an html\n&quot; +</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              &quot;&amp;lt;em onmouseover=\&quot;this.textContent=&#39;PWN3D!&#39;\&quot;&amp;gt;click here&amp;lt;/em&amp;gt;\n&quot; +</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              &quot;snippet&amp;lt;/p&amp;gt;&quot;);</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     });</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     it(&#39;should update&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       element(by.model(&#39;snippet&#39;)).clear();</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       element(by.model(&#39;snippet&#39;)).sendKeys(&#39;new &lt;b onclick=&quot;alert(1)&quot;&gt;text&lt;/b&gt;&#39;);</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       expect(element(by.css(&#39;#bind-html-with-sanitize div&#39;)).getAttribute(&#39;innerHTML&#39;)).</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         toBe(&#39;new &lt;b&gt;text&lt;/b&gt;&#39;);</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       expect(element(by.css(&#39;#bind-html-with-trust div&#39;)).getAttribute(&#39;innerHTML&#39;)).toBe(</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &#39;new &lt;b onclick=&quot;alert(1)&quot;&gt;text&lt;/b&gt;&#39;);</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       expect(element(by.css(&#39;#bind-default div&#39;)).getAttribute(&#39;innerHTML&#39;)).toBe(</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &quot;new &amp;lt;b onclick=\&quot;alert(1)\&quot;&amp;gt;text&amp;lt;/b&amp;gt;&quot;);</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     });</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   &lt;/example&gt;</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc provider</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> $sanitizeProvider</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@this</span></span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Creates and configures <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">$sanitize</span>}</span> instance.</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">$SanitizeProvider</span>() {</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> svgEnabled <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">$get</span> <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>$$sanitizeUri<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$$sanitizeUri</span>) {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (svgEnabled) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">extend</span>(validElements, svgElements);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">html</span>) {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> buf <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">htmlParser</span>(html, <span class="pl-en">htmlSanitizeWriter</span>(buf, <span class="pl-k">function</span>(<span class="pl-smi">uri</span>, <span class="pl-smi">isImage</span>) {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>unsafe:<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-en">$$sanitizeUri</span>(uri, isImage));</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">      }));</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">buf</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">  }];</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * @ngdoc method</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@name</span> $sanitizeProvider#enableSvg</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@kind</span> function</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Enables a subset of svg to be supported by the sanitizer.</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * &lt;div class=&quot;alert alert-warning&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   &lt;p&gt;By enabling this setting without taking other precautions, you might expose your</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   outside of the containing element and be rendered over other elements on the page (e.g. a login</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   link). Such behavior can then result in phishing incidents.&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   &lt;p&gt;To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   tags within the sanitized content:&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   &lt;br&gt;</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   &lt;pre&gt;&lt;code&gt;</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   .rootOfTheIncludedContent svg {</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     overflow: hidden !important;</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   }</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *   &lt;/code&gt;&lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{boolean=}</span> <span class="pl-smi">flag</span> Enable or disable SVG support in the sanitizer.</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@returns</span> <span class="pl-en">{boolean|ng.$sanitizeProvider}</span> Returns the currently configured value if called</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    without an argument or self for chaining otherwise.</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-en">enableSvg</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">enableSvg</span>) {</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">isDefined</span>(enableSvg)) {</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">      svgEnabled <span class="pl-k">=</span> enableSvg;</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> svgEnabled;</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">//////////////////////////////////////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Private stuff</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">//////////////////////////////////////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">  bind <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">bind</span>;</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">  extend <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">extend</span>;</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">  forEach <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">forEach</span>;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">  isDefined <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">isDefined</span>;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">  lowercase <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">lowercase</span>;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">  noop <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">  htmlParser <span class="pl-k">=</span> htmlParserImpl;</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">  htmlSanitizeWriter <span class="pl-k">=</span> htmlSanitizeWriterImpl;</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Regular Expressions for parsing tags and attributes</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">SURROGATE_PAIR_REGEXP</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>D80<span class="pl-c1">0-<span class="pl-cce">\u</span></span>DBFF][<span class="pl-cce">\u</span>DC0<span class="pl-c1">0-<span class="pl-cce">\u</span></span>DFFF]</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// Match everything outside of normal chars and &quot; (quote character)</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">NON_ALPHANUMERIC_REGEXP</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">#-~</span> |!]</span>)<span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Good source of info about elements and attributes</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// http://dev.w3.org/html5/spec/Overview.html#semantics</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// http://simon.html5.org/html-elements</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Safe Void Elements - HTML5</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// http://dev.w3.org/html5/spec/Overview.html#void-elements</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> voidElements <span class="pl-k">=</span> <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>area,br,col,hr,img,wbr<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Elements that you can, intentionally, leave open (and which close themselves)</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// http://dev.w3.org/html5/spec/Overview.html#optional-tags</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> optionalEndTagBlockElements <span class="pl-k">=</span> <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">      optionalEndTagInlineElements <span class="pl-k">=</span> <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rp,rt<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">      optionalEndTagElements <span class="pl-k">=</span> <span class="pl-en">extend</span>({},</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">                                              optionalEndTagInlineElements,</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">                                              optionalEndTagBlockElements);</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Safe Block Elements - HTML5</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> blockElements <span class="pl-k">=</span> <span class="pl-en">extend</span>({}, optionalEndTagBlockElements, <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>address,article,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Inline Elements - HTML5</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> inlineElements <span class="pl-k">=</span> <span class="pl-en">extend</span>({}, optionalEndTagInlineElements, <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a,abbr,acronym,b,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>samp,small,span,strike,strong,sub,sup,time,tt,u,var<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// SVG Elements</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// They can potentially allow for arbitrary javascript to be executed. See #11290</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> svgElements <span class="pl-k">=</span> <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>radialGradient,rect,stop,svg,switch,text,title,tspan<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Blocked Elements (will be stripped)</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> blockedElements <span class="pl-k">=</span> <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>script,style<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> validElements <span class="pl-k">=</span> <span class="pl-en">extend</span>({},</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">                                     voidElements,</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">                                     blockElements,</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">                                     inlineElements,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">                                     optionalEndTagElements);</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">//Attributes that have href and hence need to be sanitized</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> uriAttrs <span class="pl-k">=</span> <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>background,cite,href,longdesc,src,xlink:href<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> htmlAttrs <span class="pl-k">=</span> <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>valign,value,vspace,width<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// SVG attributes (without &quot;id&quot; and &quot;name&quot; attributes)</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> svgAttrs <span class="pl-k">=</span> <span class="pl-en">toMap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>accent-height,accumulate,additive,alphabetic,arabic-form,ascent,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> validAttrs <span class="pl-k">=</span> <span class="pl-en">extend</span>({},</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">                                  uriAttrs,</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">                                  svgAttrs,</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">                                  htmlAttrs);</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">toMap</span>(<span class="pl-smi">str</span>, <span class="pl-smi">lowercaseKeys</span>) {</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> obj <span class="pl-k">=</span> {}, items <span class="pl-k">=</span> <span class="pl-smi">str</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>), i;</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">items</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">      obj[lowercaseKeys <span class="pl-k">?</span> <span class="pl-en">lowercase</span>(items[i]) <span class="pl-k">:</span> items[i]] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> inertBodyElement;</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">  (<span class="pl-k">function</span>(<span class="pl-c1">window</span>) {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> doc;</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">document</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">window</span>.<span class="pl-smi">document</span>.<span class="pl-c1">implementation</span>) {</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">      doc <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">document</span>.<span class="pl-c1">implementation</span>.<span class="pl-c1">createHTMLDocument</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>inert<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-en">$sanitizeMinErr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>noinert<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Can<span class="pl-cce">\&#39;</span>t create an inert html document<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> docElement <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">documentElement</span> <span class="pl-k">||</span> <span class="pl-smi">doc</span>.<span class="pl-en">getDocumentElement</span>();</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bodyElements <span class="pl-k">=</span> <span class="pl-smi">docElement</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// usually there should be only one body element in the document, but IE doesn&#39;t have any, so we need to create one</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">bodyElements</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">      inertBodyElement <span class="pl-k">=</span> bodyElements[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> html <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>html<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">      inertBodyElement <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">html</span>.<span class="pl-c1">appendChild</span>(inertBodyElement);</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">doc</span>.<span class="pl-c1">appendChild</span>(html);</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">  })(<span class="pl-c1">window</span>);</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@example</span></span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * htmlParser(htmlString, {</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     start: function(tag, attrs) {},</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     end: function(tag) {},</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     chars: function(text) {},</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     comment: function(text) {}</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * });</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">html</span> string</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{object}</span> <span class="pl-smi">handler</span></span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">htmlParserImpl</span>(<span class="pl-smi">html</span>, <span class="pl-smi">handler</span>) {</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (html <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> html <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">      html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> html <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">      html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> html;</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">inertBodyElement</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> html;</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">//mXSS protection</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> mXSSAttempts <span class="pl-k">=</span> <span class="pl-c1">5</span>;</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (mXSSAttempts <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">throw</span> <span class="pl-en">$sanitizeMinErr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>uinput<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Failed to sanitize html because the input is unstable<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">      mXSSAttempts<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// strip custom-namespaced attributes on IE&lt;=11</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">document</span>.<span class="pl-smi">documentMode</span>) {</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">stripCustomNsAttrs</span>(inertBodyElement);</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">      html <span class="pl-k">=</span> <span class="pl-smi">inertBodyElement</span>.<span class="pl-smi">innerHTML</span>; <span class="pl-c">//trigger mXSS</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">inertBodyElement</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> html;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">while</span> (html <span class="pl-k">!==</span> <span class="pl-smi">inertBodyElement</span>.<span class="pl-smi">innerHTML</span>);</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> node <span class="pl-k">=</span> <span class="pl-smi">inertBodyElement</span>.<span class="pl-c1">firstChild</span>;</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (node) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">switch</span> (<span class="pl-smi">node</span>.<span class="pl-c1">nodeType</span>) {</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-c1">1</span>: <span class="pl-c">// ELEMENT_NODE</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">handler</span>.<span class="pl-c1">start</span>(<span class="pl-smi">node</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toLowerCase</span>(), <span class="pl-en">attrToMap</span>(<span class="pl-smi">node</span>.<span class="pl-c1">attributes</span>));</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-c1">3</span>: <span class="pl-c">// TEXT NODE</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">handler</span>.<span class="pl-en">chars</span>(<span class="pl-smi">node</span>.<span class="pl-smi">textContent</span>);</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> nextNode;</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>(nextNode <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">firstChild</span>)) {</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">node</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">handler</span>.<span class="pl-en">end</span>(<span class="pl-smi">node</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toLowerCase</span>());</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">        nextNode <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">nextSibling</span>;</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>nextNode) {</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">while</span> (nextNode <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">            node <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">parentNode</span>;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (node <span class="pl-k">===</span> inertBodyElement) <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">            nextNode <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">nextSibling</span>;</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">node</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">handler</span>.<span class="pl-en">end</span>(<span class="pl-smi">node</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toLowerCase</span>());</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">      node <span class="pl-k">=</span> nextNode;</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> ((node <span class="pl-k">=</span> <span class="pl-smi">inertBodyElement</span>.<span class="pl-c1">firstChild</span>)) {</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">inertBodyElement</span>.<span class="pl-c1">removeChild</span>(node);</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">attrToMap</span>(<span class="pl-smi">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> map <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, ii <span class="pl-k">=</span> <span class="pl-smi">attrs</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> ii; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> attr <span class="pl-k">=</span> attrs[i];</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">      map[<span class="pl-smi">attr</span>.<span class="pl-c1">name</span>] <span class="pl-k">=</span> <span class="pl-smi">attr</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> map;</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Escapes all potentially dangerous characters, so that the</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * resulting string can be safely inserted into attribute or</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * element text.</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> value</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@returns</span> <span class="pl-en">{string}</span> escaped text</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">encodeEntities</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> value.</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&amp;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;amp;<span class="pl-pds">&#39;</span></span>).</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">replace</span>(<span class="pl-c1">SURROGATE_PAIR_REGEXP</span>, <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> hi <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> low <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;#<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (((hi <span class="pl-k">-</span> <span class="pl-c1">0xD800</span>) <span class="pl-k">*</span> <span class="pl-c1">0x400</span>) <span class="pl-k">+</span> (low <span class="pl-k">-</span> <span class="pl-c1">0xDC00</span>) <span class="pl-k">+</span> <span class="pl-c1">0x10000</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">      }).</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">replace</span>(<span class="pl-c1">NON_ALPHANUMERIC_REGEXP</span>, <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;#<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">value</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">      }).</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;lt;<span class="pl-pds">&#39;</span></span>).</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&gt;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * create an HTML/XML writer which writes to buffer</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Array}</span> <span class="pl-smi">buf</span> use buf.join(&#39;&#39;) to get out sanitized html string</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@returns</span> <span class="pl-en">{object}</span> in the form of {</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     start: function(tag, attrs) {},</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     end: function(tag) {},</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     chars: function(text) {},</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     comment: function(text) {}</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * }</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">htmlSanitizeWriterImpl</span>(<span class="pl-smi">buf</span>, <span class="pl-smi">uriValidator</span>) {</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> ignoreCurrentElement <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> out <span class="pl-k">=</span> <span class="pl-en">bind</span>(buf, <span class="pl-smi">buf</span>.<span class="pl-smi">push</span>);</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">start</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">tag</span>, <span class="pl-smi">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">        tag <span class="pl-k">=</span> <span class="pl-en">lowercase</span>(tag);</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>ignoreCurrentElement <span class="pl-k">&amp;&amp;</span> blockedElements[tag]) {</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">          ignoreCurrentElement <span class="pl-k">=</span> tag;</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>ignoreCurrentElement <span class="pl-k">&amp;&amp;</span> validElements[tag] <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">out</span>(tag);</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">forEach</span>(attrs, <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> lkey <span class="pl-k">=</span> <span class="pl-en">lowercase</span>(key);</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> isImage <span class="pl-k">=</span> (tag <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> lkey <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> (lkey <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>background<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (validAttrs[lkey] <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">              (uriAttrs[lkey] <span class="pl-k">!==</span> <span class="pl-c1">true</span> <span class="pl-k">||</span> <span class="pl-en">uriValidator</span>(value, isImage))) {</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">out</span>(key);</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>=&quot;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">out</span>(<span class="pl-en">encodeEntities</span>(value));</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">end</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">tag</span>) {</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">        tag <span class="pl-k">=</span> <span class="pl-en">lowercase</span>(tag);</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>ignoreCurrentElement <span class="pl-k">&amp;&amp;</span> validElements[tag] <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">&amp;&amp;</span> voidElements[tag] <span class="pl-k">!==</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">out</span>(tag);</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// eslint-disable-next-line eqeqeq</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (tag <span class="pl-k">==</span> ignoreCurrentElement) {</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">          ignoreCurrentElement <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">chars</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">chars</span>) {</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>ignoreCurrentElement) {</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">out</span>(<span class="pl-en">encodeEntities</span>(chars));</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * When IE9-11 comes across an unknown namespaced attribute e.g. &#39;xlink:foo&#39; it adds &#39;xmlns:ns1&#39; attribute to declare</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * ns1 namespace and prefixes the attribute with &#39;ns1&#39; (e.g. &#39;ns1:xlink:foo&#39;). This is undesirable since we don&#39;t want</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * to allow any of these custom attributes. This method strips them all.</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> node Root element to process</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">stripCustomNsAttrs</span>(<span class="pl-smi">node</span>) {</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (node) {</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">node</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">window</span>.<span class="pl-smi">Node</span>.<span class="pl-c1">ELEMENT_NODE</span>) {</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> attrs <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">attributes</span>;</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, l <span class="pl-k">=</span> <span class="pl-smi">attrs</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> l; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> attrNode <span class="pl-k">=</span> attrs[i];</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> attrName <span class="pl-k">=</span> <span class="pl-smi">attrNode</span>.<span class="pl-c1">name</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (attrName <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>xmlns:ns1<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">attrName</span>.<span class="pl-c1">lastIndexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ns1:<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">0</span>) <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">node</span>.<span class="pl-c1">removeAttributeNode</span>(attrNode);</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">            i<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">            l<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> nextNode <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">firstChild</span>;</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (nextNode) {</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">stripCustomNsAttrs</span>(nextNode);</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">      node <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">nextSibling</span>;</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">sanitizeText</span>(<span class="pl-smi">chars</span>) {</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> buf <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> writer <span class="pl-k">=</span> <span class="pl-en">htmlSanitizeWriter</span>(buf, noop);</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">writer</span>.<span class="pl-en">chars</span>(chars);</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-smi">buf</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// define ngSanitize module and register $sanitize service</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ngSanitize<span class="pl-pds">&#39;</span></span>, []).<span class="pl-en">provider</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$sanitize<span class="pl-pds">&#39;</span></span>, $SanitizeProvider);</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc filter</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> linky</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@kind</span> function</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Finds links in text input and turns them into html links. Supports `http/https/ftp/mailto` and</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * plain email address links.</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Requires the <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngSanitize</span> `ngSanitize`}</span> module to be installed.</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">text</span> Input text.</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">target</span> Window (`_blank|_self|_parent|_top`) or named frame to open links in.</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {object|function(url)} [attributes] Add custom attributes to the link element.</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    Can be one of:</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    - `object`: A map of attributes</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    - `function`: Takes the url as a parameter and returns a map of attributes</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    If the map of attributes contains a value for `target`, it overrides the value of</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    the target parameter.</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@returns</span> <span class="pl-en">{string}</span> Html-linkified and {@link $sanitize sanitized} text.</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @usage</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   &lt;span ng-bind-html=&quot;linky_expression | linky&quot;&gt;&lt;/span&gt;</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@example</span></span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   &lt;example module=&quot;linkyExample&quot; deps=&quot;angular-sanitize.js&quot; name=&quot;linky-filter&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;file name=&quot;index.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;div ng-controller=&quot;ExampleController&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       Snippet: &lt;textarea ng-model=&quot;snippet&quot; cols=&quot;60&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;table&gt;</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;th&gt;Filter&lt;/th&gt;</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;th&gt;Source&lt;/th&gt;</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;th&gt;Rendered&lt;/th&gt;</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;/tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;tr id=&quot;linky-filter&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;linky filter&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             &lt;pre&gt;&amp;lt;div ng-bind-html=&quot;snippet | linky&quot;&amp;gt;&lt;br&gt;&amp;lt;/div&amp;gt;&lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             &lt;div ng-bind-html=&quot;snippet | linky&quot;&gt;&lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;/tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;tr id=&quot;linky-target&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;td&gt;linky target&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;td&gt;</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            &lt;pre&gt;&amp;lt;div ng-bind-html=&quot;snippetWithSingleURL | linky:&#39;_blank&#39;&quot;&amp;gt;&lt;br&gt;&amp;lt;/div&amp;gt;&lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;td&gt;</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            &lt;div ng-bind-html=&quot;snippetWithSingleURL | linky:&#39;_blank&#39;&quot;&gt;&lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;/tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;tr id=&quot;linky-custom-attributes&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;td&gt;linky custom attributes&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;td&gt;</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            &lt;pre&gt;&amp;lt;div ng-bind-html=&quot;snippetWithSingleURL | linky:&#39;_self&#39;:{rel: &#39;nofollow&#39;}&quot;&amp;gt;&lt;br&gt;&amp;lt;/div&amp;gt;&lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;td&gt;</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            &lt;div ng-bind-html=&quot;snippetWithSingleURL | linky:&#39;_self&#39;:{rel: &#39;nofollow&#39;}&quot;&gt;&lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          &lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;/tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;tr id=&quot;escaped-html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;no filter&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;&lt;pre&gt;&amp;lt;div ng-bind=&quot;snippet&quot;&amp;gt;&lt;br&gt;&amp;lt;/div&amp;gt;&lt;/pre&gt;&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           &lt;td&gt;&lt;div ng-bind=&quot;snippet&quot;&gt;&lt;/div&gt;&lt;/td&gt;</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         &lt;/tr&gt;</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       &lt;/table&gt;</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;file name=&quot;script.js&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       angular.module(&#39;linkyExample&#39;, [&#39;ngSanitize&#39;])</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         .controller(&#39;ExampleController&#39;, [&#39;$scope&#39;, function($scope) {</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           $scope.snippet =</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             &#39;Pretty text with some links:\n&#39; +</span></td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             &#39;http://angularjs.org/,\n&#39; +</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             &#39;mailto:us@somewhere.org,\n&#39; +</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             &#39;another@somewhere.org,\n&#39; +</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             &#39;and one more: ftp://127.0.0.1/.&#39;;</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           $scope.snippetWithSingleURL = &#39;http://angularjs.org/&#39;;</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         }]);</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;file name=&quot;protractor.js&quot; type=&quot;protractor&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       it(&#39;should linkify the snippet with urls&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         expect(element(by.id(&#39;linky-filter&#39;)).element(by.binding(&#39;snippet | linky&#39;)).getText()).</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             toBe(&#39;Pretty text with some links: http://angularjs.org/, us@somewhere.org, &#39; +</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                  &#39;another@somewhere.org, and one more: ftp://127.0.0.1/.&#39;);</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         expect(element.all(by.css(&#39;#linky-filter a&#39;)).count()).toEqual(4);</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       });</span></td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       it(&#39;should not linkify snippet without the linky filter&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         expect(element(by.id(&#39;escaped-html&#39;)).element(by.binding(&#39;snippet&#39;)).getText()).</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             toBe(&#39;Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, &#39; +</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                  &#39;another@somewhere.org, and one more: ftp://127.0.0.1/.&#39;);</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         expect(element.all(by.css(&#39;#escaped-html a&#39;)).count()).toEqual(0);</span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       });</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       it(&#39;should update&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         element(by.model(&#39;snippet&#39;)).clear();</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         element(by.model(&#39;snippet&#39;)).sendKeys(&#39;new http://link.&#39;);</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         expect(element(by.id(&#39;linky-filter&#39;)).element(by.binding(&#39;snippet | linky&#39;)).getText()).</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             toBe(&#39;new http://link.&#39;);</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         expect(element.all(by.css(&#39;#linky-filter a&#39;)).count()).toEqual(1);</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         expect(element(by.id(&#39;escaped-html&#39;)).element(by.binding(&#39;snippet&#39;)).getText())</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             .toBe(&#39;new http://link.&#39;);</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       });</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       it(&#39;should work with the target property&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        expect(element(by.id(&#39;linky-target&#39;)).</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            element(by.binding(&quot;snippetWithSingleURL | linky:&#39;_blank&#39;&quot;)).getText()).</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            toBe(&#39;http://angularjs.org/&#39;);</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        expect(element(by.css(&#39;#linky-target a&#39;)).getAttribute(&#39;target&#39;)).toEqual(&#39;_blank&#39;);</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       });</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       it(&#39;should optionally add custom attributes&#39;, function() {</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        expect(element(by.id(&#39;linky-custom-attributes&#39;)).</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            element(by.binding(&quot;snippetWithSingleURL | linky:&#39;_self&#39;:{rel: &#39;nofollow&#39;}&quot;)).getText()).</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            toBe(&#39;http://angularjs.org/&#39;);</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        expect(element(by.css(&#39;#linky-custom-attributes a&#39;)).getAttribute(&#39;rel&#39;)).toEqual(&#39;nofollow&#39;);</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line"><span class="pl-c">       });</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   &lt;/example&gt;</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ngSanitize<span class="pl-pds">&#39;</span></span>).<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>linky<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>$sanitize<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$sanitize</span>) {</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">LINKY_URL_REGEXP</span> <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line"><span class="pl-sr">        <span class="pl-pds">/</span>((ftp<span class="pl-k">|</span>https<span class="pl-k">?</span>):<span class="pl-cce">\/\/</span><span class="pl-k">|</span>(www<span class="pl-cce">\.</span>)<span class="pl-k">|</span>(mailto:)<span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">A-Za-z0-9</span><span class="pl-c1">.</span>_%+-]</span><span class="pl-k">+</span>@)<span class="pl-c1">\S</span><span class="pl-k">*</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s.</span>;,(){}&lt;&gt;&quot;<span class="pl-cce">\u</span>201d<span class="pl-cce">\u</span>2019]</span><span class="pl-pds">/</span>i</span>,</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">MAILTO_REGEXP</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>mailto:<span class="pl-pds">/</span>i</span>;</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> linkyMinErr <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">$$minErr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>linky<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> isDefined <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">isDefined</span>;</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> isFunction <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">isFunction</span>;</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> isObject <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">isObject</span>;</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> isString <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">isString</span>;</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">text</span>, <span class="pl-smi">target</span>, <span class="pl-smi">attributes</span>) {</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (text <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> text <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> text;</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">isString</span>(text)) <span class="pl-k">throw</span> <span class="pl-en">linkyMinErr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>notstring<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Expected string but received: {0}<span class="pl-pds">&#39;</span></span>, text);</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> attributesFn <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">isFunction</span>(attributes) <span class="pl-k">?</span> attributes <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">isObject</span>(attributes) <span class="pl-k">?</span> <span class="pl-k">function</span> <span class="pl-en">getAttributesObject</span>() {<span class="pl-k">return</span> attributes;} <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">getEmptyAttributesObject</span>() {<span class="pl-k">return</span> {};};</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> match;</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> raw <span class="pl-k">=</span> text;</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> html <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> url;</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> i;</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> ((match <span class="pl-k">=</span> <span class="pl-smi">raw</span>.<span class="pl-c1">match</span>(<span class="pl-c1">LINKY_URL_REGEXP</span>))) {</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// We can not end in these as they are sometimes found at the end of the sentence</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">      url <span class="pl-k">=</span> match[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// if we did not match ftp/http/www/mailto then assume mailto</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>match[<span class="pl-c1">2</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>match[<span class="pl-c1">4</span>]) {</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">        url <span class="pl-k">=</span> (match[<span class="pl-c1">3</span>] <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>mailto:<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> url;</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">      i <span class="pl-k">=</span> <span class="pl-smi">match</span>.<span class="pl-c1">index</span>;</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">addText</span>(<span class="pl-smi">raw</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, i));</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">addLink</span>(url, match[<span class="pl-c1">0</span>].<span class="pl-c1">replace</span>(<span class="pl-c1">MAILTO_REGEXP</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">      raw <span class="pl-k">=</span> <span class="pl-smi">raw</span>.<span class="pl-c1">substring</span>(i <span class="pl-k">+</span> match[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">addText</span>(raw);</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">$sanitize</span>(<span class="pl-smi">html</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">addText</span>(<span class="pl-smi">text</span>) {</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>text) {</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-en">sanitizeText</span>(text));</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">addLink</span>(<span class="pl-smi">url</span>, <span class="pl-smi">text</span>) {</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> key, linkAttributes <span class="pl-k">=</span> <span class="pl-en">attributesFn</span>(url);</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (key <span class="pl-k">in</span> linkAttributes) {</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(key <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> linkAttributes[key] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">isDefined</span>(target) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>target<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> linkAttributes)) {</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>target=&quot;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">                  target,</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href=&quot;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">url</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&quot;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;quot;<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">addText</span>(text);</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">html</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">})(<span class="pl-c1">window</span>, <span class="pl-c1">window</span>.<span class="pl-smi">angular</span>);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.09622s from github-fe-83bc574.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-NbnFQdNBMJuTCxx5D6GyejDHxEzhDH+CQokOPYPIrb0=" src="https://assets-cdn.github.com/assets/frameworks-35b9c541d341309b930b1c790fa1b27a30c7c44ce10c7f8242890e3d83c8adbd.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-ee7ezL8InaTNQ+i1KZ5Kwz0PoDyqQuk2ZJwj4bIYOrg=" src="https://assets-cdn.github.com/assets/github-79eedeccbf089da4cd43e8b5299e4ac33d0fa03caa42e936649c23e1b2183ab8.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

