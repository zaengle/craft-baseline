<?php

use craft\helpers\App;

$assetUrl = parse_url(App::env('PRIMARY_SITE_URL'));
$assetBaseUrl = $assetUrl['scheme'] . '://' . $assetUrl['host'] . ':' . App::env('BROWSERSYNC_PORT');

return [
    // Global settings
    '*' => [
        // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
        'useDevServer' => false,
        // Enforce Absolute URLs on includes
        'useAbsoluteUrl' => true,
        // The JavaScript entry from the manifest.json to inject on Twig error pages
        // This can be a string or an array of strings
        'errorEntry' => '',
        // String to be appended to the cache key
        'cacheKeySuffix' => '',
       // Manifest file names
        'manifest' => [
            'legacy' => 'mix-manifest.json',
        ],
        // Public server config
        'server' => [
            'manifestPath' => '@webroot/',
            'publicPath' => '/',
        ],
        // webpack-dev-server config
        'devServer' => [
            'manifestPath' => App::env('PRIMARY_SITE_URL'),
            'publicPath' => $assetBaseUrl,
        ],
        // Bundle to use with the webpack-dev-server (modern|legacy|combined)
        'devServerBuildType' => 'legacy',
        // Local files config
        'localFiles' => [
            'basePath' => '@webroot/',
            'criticalPrefix' => 'dist/criticalcss/',
            'criticalSuffix' => '_critical.min.css',
        ],
    ],
    // Development environment
    'dev' => [
        // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
        'useDevServer' => true,
    ],
];
