##  PREVIC: Parent Report of Expressive Vocabulary in Children

Bohn, M., Prein, J.C., Engicht, J., Haun, D.B.M., Gagarina, N. & Koch, T. (in preparation). PREVIC: An adaptive parent report measure of expressive vocabulary in children between 3 and 8 years of age.

### Usage
Link to task (in German): [PREVIC](https://ccp-odc.eva.mpg.de/previc-demo/)

![PREVIC](./public/images/setup.png)

### Structure

```
.
├── adaptivetesting             <-- scripts for maximum likelihood estimations
├── public                      
    ├── data                    <-- scripts for uploading data to server
    ├── images                  <-- logos etc. 
    ├── all html pages          <-- index, instructions, questionnaire and goodbye page
├── src                         <-- folder containing all CSS and JavaScript for functionality
└── ...some more config files                      

```


### Development

Development requires [Node.js](https://nodejs.org/en/)

#### Local Development

1. `git clone git@github.com:ccp-eva/orev-demo.git`
1. `npm install`
1. `npm start`

#### Deploy Application To A Server

1. `git clone git@github.com:ccp-eva/orev-demo.git`
1. `npm install`
1. `npm run build`
1. Upload the contents within the `dist` folder to your web hoster.
