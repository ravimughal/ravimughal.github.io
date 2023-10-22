---
title:  "How to Commit API Keys"
categories: "Python Git" 
excerpt: "The most people doesnt know why why is extremely important hide your API keys of a project. API Keys or another sensitive information needs to stay safe."
---

## System Variables

The most people doesnt know why is extremely important hide your API keys of a project. API Keys or another sensitive information needs to stay safe.

To make projects information private, you would need know how to acess **system variables**. And one of the mosts popular ways to create and use system variables is with .env files.

## Prerequisites 

- **Python** 
- **Pip**

## Step-by-Step

1. **Install python-doten**
    - In your terminal, type:
```console
pip install python-dotenv
```

2. **Create an .env file**
   - In your project directory, create a file with the name ``.env``.
 
        ![.env file](https://i.imgur.com/HTbWcvE.png)

3. **Copy and Paste**
   - In your project file, copy the variable API Key and paste in ``.env`` file

        ![API KEY](https://i.imgur.com/iSDyVii.png) 

4. **Import Libraries**
    - Import ``load_dotenv`` from dotenv and ``os``

        ![Import Libraries](https://i.imgur.com/Xr7na6D.png)

5. **Call ``load_dotenv()``**
    - Will loads environment variables from dotenv

        ![load_dotenv()](https://i.imgur.com/EmWSp9V.png) 

6. **Get the value of variable**
    - Use ``os.getenv('name_of_variable')`` to acess the value

        ![os.getenv('name_of_variable')](https://i.imgur.com/rNAlfvt.png)

7. **Gitigore**
   - If Doesnt exist a file with the name ``.gitignore``, you need to create.
    
        ![gitignore](https://i.imgur.com/JQ3Pqey.png)

8. **.ENV**
    - Inside of ``.gitignore`` add ``.env``

        ![.env](https://i.imgur.com/HiBwsJh.png)

9. **Commit**
    - You already to commit safely.
 
### Observation

If you had commited ***without hide your API keys***, you will need follow this steps:

1. Go to your project in Git CMD
2. Type:

    ``` git
    git rm --cached .env
    ```
    ``` git
    git add .
    ```
    ```git
    git commit -m ".update .gitignore and remove .env"
    ```