---
title: 'Optimize Visual Studio Code for C# .NET Core development'
author: Dominic Böttger
date: '2020-05-10'
excerpt: >-
  A brief introduction and some information on how VSCode can be optimized for a
  great C# .NET core developer experience
hero: >-
  images/2020-05-10-18_40_14-unittest1.cs-vscode-csharp-template-visual-studio-code.png
---
Visual Studio Code is my favorite Code Editor and I like that it's so lightweight and also wanted to use it for C# development instead of the full-blown  Visual Studio experience.

Some time ago I tried to use Visual Studio Code instead but I was missing some things to improve the development workflow. I wanted to have features like live unit testing and better guidance while coding C#.  I tested some plugins and some configurations and now I think I found a solution to fulfill my needs.

Some of the extensions I use:
1. [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) - This is THE C# extension for Visual Studio Code powered by OmniSharp.
2. [.NET Core Test Explorer](https://marketplace.visualstudio.com/items?itemName=formulahendry.dotnet-test-explorer) - An important extension to have live testing while coding in VScode.
4. [Auto-using](https://marketplace.visualstudio.com/items?itemName=Fudge.auto-using) - Automatically adds the dependencies with using in the head of the current file.
5. [C# FixFormat](https://marketplace.visualstudio.com/items?itemName=Leopotam.csharpfixformat) - It helps to automatically format the code. With the right settings, the code is also formatted when saving the file.
6. [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters) - Show the code coverage visualized with color in the editor.
7.  [.NET Core Extension Pack](https://marketplace.visualstudio.com/items?itemName=doggy8088.netcore-extension-pack) - Bundle of helpful extensions.
8.  [.NET Core Snippet Pack](https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.asp-net-core-snippet-pack) - A pack of around 120 snippets for .NET Core.
9.  [Fakesharper](https://marketplace.visualstudio.com/items?itemName=fakesharper.fakesharper) - Integrates Resharper into VSCode
10. [EditorConfig](https://marketplace.visualstudio.com/items?itemName=Editorconfig.editorconfig) - Overwrites the VScode settings with the settings provided in the .editorconfig file.

The extensions were one part of the solution.

The other part was the settings. I provide the settings for VSCode with every project to install the recommended modules, activate the Roslyn Analyzer feedback ( which provides the StyleCop information,... ), activate the TestExplorer to use the Live Testing feature and activate the automatic format of the code.

The important settings in my .vscode/settings.json in the project are typically the following:

```JSON 
  "dotnet-test-explorer.testProjectPath": "**/*Test.csproj",
  "dotnet-test-explorer.autoWatch": true,
  "dotnet-test-explorer.testArguments": "/p:CollectCoverage=true /p:CoverletOutputFormat=lcov /p:CoverletOutput=./lcov.info",
  "cSpell.words": [
      "Xunit"
  ],
  "omnisharp.enableRoslynAnalyzers": true,
  "csharpfixformat.sort.usings.enabled": true,
  "csharpfixformat.sort.usings.systemFirst": false,
  "csharpfixformat.style.braces.onSameLine": false,
  "csharpfixformat.style.spaces.beforeParenthesis": false,
  "csharpfixformat.style.spaces.afterParenthesis": false,
  "editor.formatOnSave": true,
  "[csharp]": {
      "editor.defaultFormatter": "Leopotam.csharpfixformat"
  }
```

If you add StyleCop.Analyzers via NuGet to your projects the "omnisharp.enableRoslynAnalyzers": true - setting will provide this information in the editor.

To adjust the StyleCop ruleset and use the Ruleset in the root folder append the path to the ruleset in the csproj of all projects.

```xml
<PropertyGroup>
  <CodeAnalysisRuleSet>..\StyleCop.ruleset</CodeAnalysisRuleSet>
</PropertyGroup>
```

To get the coverage statistics working it's also needed to add the coverlet.msbuild package to the Test project.

A complete example template is available under [github.com/dominicboettger](https://github.com/DominicBoettger/vscode-csharp-template)