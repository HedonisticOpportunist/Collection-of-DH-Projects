# Voyant Tools 

## Introduction 

The following segment explores [Voyant Tools](https://voyant.lincsproject.ca), a tool for analysing texts.  For this task, I analysed Japanese Fairy Tales by Yei Theodora Ozaki (1908). 

## Observations 

I had to upload the HTML version of the text because the TXT file wouldn’t load properly in Voyant. It also took me a while to realise that Voyant requires you to copy and paste the corpus URL into the input box rather than uploading the link directly.

Loading the corpus also took a considerable amount of time. Voyant Tools had difficulty fetching the corpus directly from Project Gutenberg because of a JSON parsing error, which suggests the remote text loader cannot reliably process certain external URLs.

## Tool Limitations

Voyant Tools attempted to fetch the Project Gutenberg HTML page as a remote corpus, but the server returned incomplete or invalid data. Voyant expects a JSON‑formatted response when loading external URLs, and when it can't parse the response, the fetcher crashes. This results in the error shown in the browser console (“Unexpected end of JSON input”) and prevents the corpus from loading. Because of this limitation, uploading a local HTML file works reliably, while pasting certain external URLs does not.

[Voyant JSON Error (Screenshot](https://github.com/HedonisticOpportunist/Collection-of-DH-Projects/blob/main/digital_history/resources/voyant_issue.png)

### References 

[1] https://dh.sites.gettysburg.edu/toolkit/tools/voyant-tools/ 

[2] https://www.gutenberg.org/cache/epub/4018/pg4018-images.html
