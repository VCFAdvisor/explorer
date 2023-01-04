## Login to firebase
go to https://console.firebase.google.com/ 
If you were logged then click to `add project` button.
![img](./images/create-projectt.png)

Input your project name and continues
![img](./images/input-project.png)

Wait for all done then you can see your project

### Install firebase on your device
In `haqq` node VPS run command 
```
npm install -g firebase-tools
```

Then firebase-tools was installed. Run command
```
firebase login --no-localhost
```
Open link on CLI and get your code.<br/>
![img](./images/auth.png)

After input code to CLI to auth<br/>
![img](./images/auth-2.png)

Finally go to `/explore` folder and init config with command
```
firebase init hosting
```
Then you can see dashboard console Then Follow steps:
- Choose ->  Use an existing project
- Select project you created.<br/>
![img](./images/select-project.png)

- Choose options:<br/>
![img](./images/select-options.png)

### Deploy
On `/explore` folder
```
yarn build
```

After building is successfully. Run command deploy
```
firebase deploy --only hosting
```

When you see that. Your deploy complete.<br/>
![img](./images/deployed.png)