module.exports = {
    entry: './08_webpack_a.js',
    output: {
        filename: 'all.js',
        path: __dirname + '/output'
    },
    module: {
        rules: [{
            test:/\.css$/,
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader',
                options:{
                    modules:true
                }
            }]
        }]
    }
};
