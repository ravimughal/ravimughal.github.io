---
title: NWS letter
excerpt: "The Python Automated Email Newsletter Sending Script offers an effective and automated way to send newsletters to a list of subscribers."
---

<img src="https://raw.githubusercontent.com/ravimughal/newsletter/main/img/nws.png" width='150px' style='display: flex' />

# NWS letter

## Project Description
<p>The Python Automated Email Newsletter Sending Script offers an effective and automated way to send newsletters to a list of subscribers.</p>

<div style="display: flex; align-items: center;">
  <img src='https://simpleicons.org/icons/python.svg' width='50px' style='display: flex; margin-right: 15px'>
  <h1 style='margin-right:15px'>.</h1>
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=py&message=3.9.13&color=7159c1&style=flat-square" style='margin-left:10px'>
</div>

<br>

Table of Contents
=================
<!--ts-->


- [NWS letter](#nws-letter)
  - [Project Description](#project-description)
- [Table of Contents](#table-of-contents)
- [About](#about)
- [Installation](#installation)
- [How to Use](#how-to-use)
  - [Prerequisites](#prerequisites)
- [Technologies](#technologies)
<!--te-->

<br>

<a id='about'></a>

# About

The Python script automates the sending of newsletters via email to a list of subscribers. It uses the Gmail API to create and send customized emails from a defined sender to recipients in a CSV file. With a graphical interface, users enter the subject and content, which are sent to all subscribers. The script handles errors and simplifies communication with subscribers, making information sharing efficient and personalized.


# Installation

1. Install <a href='https://www.python.org/downloads'>Python</a> on your computer.

2. Verify the installation in the **Command Prompt** by typing:

    ```shell
    python3
    ```

3. Clone the repository using the following command:

    ```console
    # Clone the repo
    $ git clone https://github.com/ravimughal/newsletter.git
    ```

4. Access the Google Developer Console: Go to https://console.developers.google.com/ and log in to your Google account.

5. Create a New Project: In the Developer Console, click the "Select a project" button in the top left corner, then click "New Project." Give the project a name and select the appropriate options. Click "Create."

6. Activate the Gmail API: In the project dashboard, click "Enable APIs and Services." Search for "Gmail" and click "Gmail API." Then, click the "Enable" button.

7. Create Credentials: In the left-hand menu, click "Credentials." Next, click "Create credentials" and choose "OAuth Client ID." Select "Desktop App" as the application type.

8. Configure the Credentials: Fill in the application details such as the name and icon. You can add "http://localhost" to the authorized redirect URLs for testing purposes. Click "Create" to create the credentials.

9. Download the Credentials: In the list of credentials, you'll see the new credential you created. Click the download icon next to it to download the JSON file containing authentication information.

10. Use the Credentials: In your code, use the JSON credentials file to authenticate your application and access the Gmail API. Place the 'path_to_credentials.json' file in the NEWSLETTER folder.

11. In your code, replace 'testedasilvafilho@gmail.com' with your email address in the 'main.py' file:

    ```python
    sender_email = 'testedasilvafilho@gmail.com'
    ```

    Also, replace 'testedasilvafilho@gmail.com' with your email in the 'email_utils.py' file:

    ```python
    if sender == 'testedasilvafilho@gmail.com':
    ```

# How to Use

1. Navigate to the 'newsletter' directory in your Command Prompt and run 'main.py' using the following command:

    ```shell
    cd newsletter
    python main.py
    ```

2. Enter the email subject and message content that will be sent to the emails listed in 'lista_assinantes.csv.'

    <img src='https://raw.githubusercontent.com/ravimughal/newsletter/main/img/envio%20do%20email.png'/>

3. Access the email account you registered during the installation.

## Prerequisites

1. A [Gmail](https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=AXo7B7VvjglutmmcYtQBTfc763EW8kgXTO2PBr_P3i5KaouLpyK_mngVXMjjPkB6hlSDJWb8eXUnaA&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1962252387%3A1693370731362858) account.

2. Python installed on your machine. You can download it [here](https://www.python.org/downloads).

# Technologies

<div style='display: flex;'>
    <img src='https://simpleicons.org/icons/gmail.svg' width='100px'/>
    <img src='https://simpleicons.org/icons/python.svg' width='100px' style='margin-left: 15px'/>
</div>

<br>
<br>

<h4 align='center'> UNDER DEVELOPMENT 🚧 </h
