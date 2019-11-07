module.export = {  //we can't use the new ESX import and export in the package config file beacuse the package conflict file never gets compiled by babel and i can't use any E-6 in here.
    entry: './index.js', // this is ap's main file. The bundle will start this file and then it will traverse all imports to work out which files need to be included in the bundle.
    output: { // this is object is the output object defined where your find all bundled javascript file so the result of building the app as it were will be saved too.
        path: __dirname, // and it's just bundle in this directoory at the moment.
        filename:  'bundle.js'
    },
    devtool: 'eval-source-map', // just allow for easier debugging. mean, when we have an error in our website we can see the actual code in the browser's debugger
    module: { //this is specify plugins which will transform the bundled code
        loaders: [
            {
                test: /.js?$/,
                loader: 'bable-loader', // we have a  load of cable. it runs on all of our JS files and it doesn't run on anything in node modules because we don't want to compile any third 
                exclude: /node_modules/, // party modules just the code we write and then we pass in table all the presed and plugins we requires  
                query: {
                    presents: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
}