const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less')

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: 'tsconfig.paths.json',
                debug: false 			
			},
		},
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { '@primary-color': '#19ce60' },
            			javascriptEnabled: true,
					}
				}
			}
		}
	],
};

