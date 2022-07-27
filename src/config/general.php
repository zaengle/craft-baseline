<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 *
 * **NOTE**
 *
 * In general it's often better to set values that will vary
 * between environments via via an environment variable
 * override, rather than adding explicit config here.
 *
 * That will also permit changing settings in development
 * without having to change a checked in file
 *
 * .env.example sets these by default:
 *
 * - CRAFT_ALLOW_ADMIN_CHANGES
 * - CRAFT_ALLOW_UPDATES
 * - CRAFT_DEV_MODE
 * - CRAFT_BACKUP_ON_UPDATE
 * - CRAFT_CACHE_DURATION
 */

use craft\helpers\App;

$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';
$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';

return [

    // Whether generated URLs should omit "index.php"
    'omitScriptNameInUrls' => true,

    // Whether crawlers should be allowed to index pages and following links
    'disallowRobots' => !$isProd,



    'errorTemplatePrefix' => '_errors/',

    /**
     * Assets
     */
    'brokenImagePath' => '@webroot/static/404.svg',
    'convertFilenamesToAscii' => true,
    'revAssetUrls' => true,

    /**
     * Caching
     */
    'enableTemplateCaching' => App::parseBooleanEnv('CRAFT_ENABLE_TEMPLATE_CACHING') ?? true,

    /**
     * Dates / times
     */
    // Default Week Start Day (0 = Sunday, 1 = Monday...)
    'defaultWeekStartDay' => 0,
    'timezone' => 'America/New_York',

    /**
     * Environment
     */
    'aliases' => [
        '@web' => App::env('DEFAULT_SITE_URL'),
        '@webroot' => dirname(__DIR__) . '/web',
    ],

    /**
     * Search
     */
    // Enable fuzzy search by default
    'defaultSearchTermOptions' => [
        'subLeft' => true,
        'subRight' => true,
    ],

    /**
     * Security
     */
    'cpTrigger' => 'manage',
    'enableGql' => false,
    'preventUserEnumeration' => true,
    'sendPoweredByHeader' => false,

    /**
     * Users
     */
    'autoLoginAfterAccountActivation' => true,
    'useEmailAsUsername' => true,
];
