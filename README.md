# Getting started

## Step 1

First install the react-leaflet packages. [see the Gatsby plugin description](https://www.gatsbyjs.org/packages/gatsby-plugin-react-leaflet/)
```
npm i --save gatsby-plugin-react-leaflet react-leaflet leaflet
```
## Step 2

Add the plugin to your Gatsby configuration.
gatsby-config.js
```
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
}
```
## Step 3
Place the map.js in the componeent folder

## Step 4 Exampel use of the component
Place the mapPage.js and the ws.json in the pages folder

