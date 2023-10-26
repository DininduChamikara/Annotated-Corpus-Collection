## Contributing Guidelines

Welcome to the Annotated Corpus Collection repository! We are excited to have you contribute to our project. Let's make your contribution to open source.

If you are new to contributing to open source, please read the following resources:

* [How to Contribute to Open Source](https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/)
* [GitHub Guides](https://github.com/git-guides)

## About this Repository

The purpose of this repository is to create an Annotated News Article Corpus in different languages. Currently, this repository is only limited to English and Sinhala Languages. This repo can be used by anyone who works with NLP or NER-related tasks. Currently, this annotated corpus collection is used for the ongoing research that **'Sinhala Document Clustering using Name Entity Recognition'** 

## How to contribute to this repo

1. Star the repository.
2. Fork the repository.
3. Make your changes.
4. Submit a pull request.

## 1. Star the repository

Click on the **Star** button in the top right corner. Make sure that the repository is **starred**.

## 2. Forking the repository

To fork the repository, click on the Fork button on the repository's GitHub page. This will create a copy of the repository in your own GitHub account.

- **Clone** your fork down to your local machine

```markdown
git clone https://github.com/DininduChamikara/Annotated-Corpus-Collection-Hacktoberfest.git
```

- Create a branch

```markdown
git checkout -b branch-name
```

## 3. Making your changes

Once you have forked the repository, make your changes to the code. Be sure to follow the coding style guidelines for the programming language that you are contributing to.

Here is an example of how to make changes.

-----------------

* First of all visit to link below.

https://dininduchamikara.github.io/Pre-Annotation-Objects-Generator-NER/

* Then Select the language you are familiar with and click on the **Generate New** button. (Note: If you are familiar with the Sinhala Language please be kind enough to give the first priority to Sinhala Annotations)

-------------------

### Instruction for English Annotators

If you selected the language as English, the Generated code (JSON) can be like below.

```markdown
    [
        "While #Scrabble is relatively popular as a leisure activity, it is not yet widely acknowledged as a competitive sport in Sri Lanka. However, with local players winning big at international tournaments, this is slowly beginning to change. Meet Sri Lanka’s Scrabble champions!",
        {
          "entities": [
            ["While", 0, 5, ""],
            ["#Scrabble", 6, 15, ""],
            ["is", 16, 18, ""],
            ["relatively", 19, 29, ""],
            ["popular", 30, 37, ""],
            ["as", 38, 40, ""],
            ["a", 41, 42, ""],
            ["leisure", 43, 50, ""],
            ["activity,", 51, 60, ""],
            ["it", 61, 63, ""],
            ["is", 64, 66, ""],
            ["not", 67, 70, ""],
            ["yet", 71, 74, ""],
            ["widely", 75, 81, ""],
            ["acknowledged", 82, 94, ""],
            ["as", 95, 97, ""],
            ["a", 98, 99, ""],
            ["competitive", 100, 111, ""],
            ["sport", 112, 117, ""],
            ["in", 118, 120, ""],
            ["Sri", 121, 124, ""],
            ["Lanka.", 125, 131, ""],
            ["However,", 132, 140, ""],
            ["with", 141, 145, ""],
            ["local", 146, 151, ""],
            ["players", 152, 159, ""],
            ["winning", 160, 167, ""],
            ["big", 168, 171, ""],
            ["at", 172, 174, ""],
            ["international", 175, 188, ""],
            ["tournaments,", 189, 201, ""],
            ["this", 202, 206, ""],
            ["is", 207, 209, ""],
            ["slowly", 210, 216, ""],
            ["beginning", 217, 226, ""],
            ["to", 227, 229, ""],
            ["change.", 230, 237, ""],
            ["Meet", 238, 242, ""],
            ["Sri", 243, 246, ""],
            ["Lanka’s", 247, 254, ""],
            ["Scrabble", 255, 263, ""],
            ["champions!", 264, 274, ""]
          ]
        }
      ]
```
Your task is to identify the named entities on each word. The applicable named entities are only ["LOCATION", "PERSON", "ORGANIZATION", "DATE", "TIME"]. If any word is not related to any of these Named Entities just simply remove it. (Note: View the [english_annotation.json](english_annotation.json) file )

Each entity array includes the [word, starting index, ending index, Named Entity].

After identifying the named entity Just add the named entity class as the final string of the array and simply remove the word string from the array. 

The final output is as below.

```markdown
    [
      "While #Scrabble is relatively popular as a leisure activity, it is not yet widely acknowledged as a competitive sport in Sri Lanka. However, with local players winning big at international tournaments, this is slowly beginning to change. Meet Sri Lanka’s Scrabble champions!",
        {
          "entities": [
            [121, 124, "LOCATION"],
            [125, 131, "LOCATION"],
            [152, 159, "PERSON"],
            [243, 246, "LOCATION"],
            [247, 254, "LOCATION"]
          ]
        }
    ],
```
For one pull request, it is enough to add one object to the corpus.

Make sure to refer to previous examples and correctly identify the named entities. 

-----------------------

### Instruction for Sinhala Annotators

If you selected the language as Sinhala, the Generated code (JSON) can be like below.

```markdown
    [
      "පරිසර හිතකාමී ප්‍රවාහන මාධ්‍ය සඳහා නෙදර්ලන්තය විශාල ප්‍රසිද්ධියක් උසුලනවා. “Bakfiets” පා පැදි යනු ඉන් එකක් පමණ යි.",
      {
        "entities": [
          ["පරිසර", 0, 5, ""],
          ["හිතකාමී", 6, 13, ""],
          ["ප්‍රවාහන", 14, 22, ""],
          ["මාධ්‍ය", 23, 29, ""],
          ["සඳහා", 30, 34, ""],
          ["නෙදර්ලන්තය", 35, 45, ""],
          ["විශාල", 46, 51, ""],
          ["ප්‍රසිද්ධියක්", 52, 65, ""],
          ["උසුලනවා.", 66, 74, ""],
          ["“Bakfiets”", 75, 85, ""],
          ["පා", 86, 88, ""],
          ["පැදි", 89, 93, ""],
          ["යනු", 94, 97, ""],
          ["ඉන්", 98, 101, ""],
          ["එකක්", 102, 106, ""],
          ["පමණ", 107, 110, ""],
          ["යි.", 111, 114, ""]
        ]
      }
    ],
```
Your task is to identify the named entities on each word. The applicable named entities are only ["LOCATION", "PERSON", "ORGANIZATION", "DATE", "TIME"]. If any word is not related to any of these Named Entities just simply remove it. (Note: View the [sinhala_annotation.json](sinhala_annotation.json) file )

Each entity array includes the [word, starting index, ending index, Named Entity].

After identifying the named entity Just add the named entity class as the final string of the array and simply remove the word string from the array. 

The final output is as below.

```markdown
    [
    "පරිසර හිතකාමී ප්‍රවාහන මාධ්‍ය සඳහා නෙදර්ලන්තය විශාල ප්‍රසිද්ධියක් උසුලනවා. “Bakfiets” පා පැදි යනු ඉන් එකක් පමණ යි.",
        {
            "entities": [
                ["නෙදර්ලන්තය", 35, 45, "LOCATION"],
            ]
        }
    ],
```
For one pull request, it is enough to add one object to the corpus.

Make sure to refer to previous examples and correctly identify the named entities. 

-----------------------

After that just Commit and push your changes using the below commands.

```markdown
git add .
git commit -m 'Commit message'
git push origin branch-name
```

## 4. Submitting a pull request

Once you have made your changes, submit a pull request to the original repository. Be sure to include a clear and concise description of your changes in the pull request.

- Create a new pull request from your forked repository (Click the `New Pull Request` button located at the top of your repo)
- Wait for your PR review and merge approval!
- [Follow me](https://github.com/DininduChamikara) for getting fast PR approvels. 

## Additional guidelines

* Please re-check your changes thoroughly before submitting a pull request.
* Be respectful of other contributors and the project maintainers.

## Thank you for your contributions!

We appreciate your help in making this repository a valuable resource for the programming community and the Sinhala NLP developing community.

## Code of Conduct

This repository follows the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct. Please be respectful of other contributors and follow the code of conduct at all times.
