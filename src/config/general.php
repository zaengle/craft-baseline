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
 * In general, it's often better to set values that will vary
 * between environments via an environment variable
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

use craft\config\GeneralConfig;
use craft\helpers\App;

$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';

return GeneralConfig::create()
    ->disallowRobots(!$isProd)
    ->errorTemplatePrefix('_errors/')
    ->brokenImagePath('@webroot/static/404.svg')
    ->enableTemplateCaching(App::parseBooleanEnv('CRAFT_ENABLE_TEMPLATE_CACHING') ?? true)
    ->defaultWeekStartDay(0)
    ->timezone('America/New_York')
    ->aliases([
        '@web' => App::env('PRIMARY_SITE_URL'),
        '@webroot' => dirname(__DIR__) . '/web',
    ])
    ->defaultSearchTermOptions([
        'subLeft' => true,
        'subRight' => true,
    ])
    ->cpTrigger('manage')
    ->enableGql(false)
    ->sendPoweredByHeader(false);
